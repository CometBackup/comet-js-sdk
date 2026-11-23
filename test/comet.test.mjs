// Tests for the built SDK, using Node's built-in test runner. Run `npm run build` first.
//
// By default the requests go to a local stub server. Set COMET_URL (and COMET_USERNAME,
// COMET_PASSWORD) to also run against a real Comet Server.

import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { CometServer, CometError } from "../dist/mjs/index.mjs";

// startStub answers every request with the given status and body, and records each request's
// path and form fields.
async function startStub(status, body) {
    const requests = [];
    const server = createServer((req, res) => {
        let data = "";
        req.on("data", (chunk) => { data += chunk; });
        req.on("end", () => {
            requests.push({ path: req.url, form: Object.fromEntries(new URLSearchParams(data)) });
            res.writeHead(status, { "Content-Type": "application/json" });
            res.end(JSON.stringify(body));
        });
    });
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    return { url: `http://127.0.0.1:${server.address().port}/`, requests, close: () => server.close() };
}

test("sends the credentials and API parameters as a form post", async () => {
    const stub = await startStub(200, { Status: 200, Message: "OK" });
    try {
        const srv = new CometServer({ url: stub.url, username: "admin", password: "p&ss=word" });
        await srv.AdminDispatcherRefetchProfileP("device-1");

        assert.equal(stub.requests.length, 1);
        assert.equal(stub.requests[0].path, "/api/v1/admin/dispatcher/refetch-profile");
        assert.deepEqual(stub.requests[0].form, {
            AuthType: "Password",
            Username: "admin",
            Password: "p&ss=word",
            TargetID: "device-1",
        });
    } finally {
        stub.close();
    }
});

test("sends an API token with AuthType=Token", async () => {
    const stub = await startStub(200, { Status: 200, Message: "OK" });
    try {
        const token = "bkup_0123456789abcdef0123456789abcdef_" + "A".repeat(43);
        const srv = new CometServer({ url: stub.url, username: "admin", token });
        await srv.AdminDispatcherRefetchProfileP("device-1");

        assert.deepEqual(stub.requests[0].form, {
            AuthType: "Token",
            Username: "admin",
            Token: token,
            TargetID: "device-1",
        });
    } finally {
        stub.close();
    }
});

test("throws a CometError for an unsuccessful API status", async () => {
    const stub = await startStub(200, { Status: 403, Message: "Invalid authentication" });
    try {
        const srv = new CometServer({ url: stub.url, username: "admin", password: "wrong" });
        await assert.rejects(srv.AdminAccountPropertiesP(), (err) => {
            assert.ok(err instanceof CometError);
            assert.equal(err.status, 403);
            return true;
        });
    } finally {
        stub.close();
    }
});

test("connects to a real Comet Server", { skip: !process.env.COMET_URL && "COMET_URL is not set" }, async () => {
    const srv = new CometServer({
        url: process.env.COMET_URL,
        username: process.env.COMET_USERNAME || "admin",
        password: process.env.COMET_PASSWORD || "admin",
    });
    const res = await srv.AdminAccountPropertiesP();
    assert.ok(res.Permissions);
});

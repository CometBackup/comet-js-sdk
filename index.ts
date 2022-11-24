import CometServerAPIBase from "./lib/output";
import fetch from 'cross-fetch';

export type CometServerConfig = {
    url: string,
    username: string,
    password: string
}

export class CometError extends Error {
    public status: number;
    constructor(obj: {Status: number, Message: string}) {
        super(`[${obj.Status}] ` + obj.Message);
        this.status = obj.Status;
        this.name = "CometError";
    }
}

export class CometServer extends CometServerAPIBase {
    /**
     * Construct a new CometServerAPIBase instance.
     *
     */
     constructor(private config: CometServerConfig) {
        super(config.url);
     }

    /**
     * Perform a network request
     * 
     * @param {string} call The endpoint URI
     * @param {Object.<string,string>} params The POST data parameters
     * @return {Promise}
     */
    async _requestP(call: string, params: {[x: string]: string}): Promise<any> {

        const requestBody = new URLSearchParams();
        requestBody.append("AuthType", "Password");
        requestBody.append("Username", this.config.username);
        requestBody.append("Password", this.config.password)

        for (const paramsKey in params) {
            requestBody.append(paramsKey, params[paramsKey]);
        }

        const res = await fetch(this._server_url + call, {
            method: "POST",
            body: requestBody,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        if (res.status > 299 || res.status < 200) {
            let body = "Unknown response body";
            try {
                body = await res.text();
            } catch (e) {}
            throw new CometError({Status: res.status, Message: body});
        }
        const body = await res.json()
        if (body['Status'] && (body["Status"] > 299 || body["Status"] < 200)) {
            throw new CometError(body);
        }
        return body
    }
}

export * from "./lib/output";
export { default as CometServerAPIBase } from "./lib/output";
import {CometServer} from "./index";

const CONFIG = {
    url: process.env.COMET_URL || "http://localhost:8060/",
    username: process.env.COMET_USERNAME || "admin",
    password: process.env.COMET_PASSWORD || "admin"
}

test('should connect', async () => {
    const srv = new CometServer(CONFIG)
    const res = await srv.AdminAccountPropertiesP()
    expect(res).toBeTruthy()
    expect(res.Permissions).toBeTruthy()
})
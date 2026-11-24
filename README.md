# Comet JavaScript SDK 

[![@CometBackup on Twitter](http://img.shields.io/badge/twitter-%40CometBackup-blue.svg?style=flat)](https://twitter.com/CometBackup)
![MIT License](https://img.shields.io/github/license/CometBackup/comet-js-sdk)
[![npm](https://img.shields.io/npm/v/comet-js-sdk)](https://www.npmjs.com/package/comet-js-sdk)

This project is the SDK for Comet Servers using TypeScript and JavaScript.

## Features

- Full coverage of Comet Server API methods, data structures, and constant definitions
- Created to be cross-platform and work with Browsers or Node.js environments
- Available in minified, ESM, CommonJS versions for different use cases
- Custom HTTP request implementations may be built on `CometServerAPIBase` by providing your own http request implementation
- No dependencies

## Requirements

The SDK makes its requests with the standard `fetch()` API, which is built into every current browser and into Node.js 18 and later. It has no other dependencies.

On an older platform without `fetch()`, install a polyfill that defines a global `fetch` before using the SDK, or provide your own network implementation (see below).

## Getting Started

**Node.js**

1. `npm install -- comet-js-sdk`
2. Import the library:
	- `import CometServer from "comet.js";` (ESM)
	- `const { CometServer } = require('comet-js-sdk')` (CommonJS)
3. Liftoff!

**TypeScript**

```ts
import CometServer from "comet-js-sdk";
const srv = new CometServer({
    url: "https://your-server-name-here.offsitenetwork.net/",
    username: "admin",
    password: "admin"
})

const res = await srv.AdminAccountPropertiesP();
```

**Admin API tokens**

To authenticate with an admin API token instead of a password, pass `token` in place of `password`. Token requests aren't subject to 2FA. APIs that don't accept API token authentication refuse the request.

Admin API tokens require Comet Server 26.8.3 or later. Since Comet Server 26.11.3, you can also pass a token as the `password`.

```ts
const srv = new CometServer({
    url: "https://your-server-name-here.offsitenetwork.net/",
    username: "admin",
    token: "bkup_..."
})
```

**In the browser**

Note: Comet Server has [a CORS policy](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) that will block direct API calls - you will need to have a gateway or proxy service to allow this API call to work.

```html
<script src="https://unpkg.com/comet-js-sdk@^4/dist/comet.min.js" ></script>
<script>
    const config = {
        url: "http://localhost:8060/",
        username: 'admin',
        password: 'admin'
    }
    const cs = new comet.CometServer(config);

    cs.AdminMetaStatsP(true)
        .then(success => {
            console.log(success)
        }, error => {
            console.error(error)
        })
</script>
```

## Advanced: Using a custom network library

`CometServer` sends each API call through its `_requestP(call, params)` method. To use a different network library, extend `CometServerAPIBase` and implement `_requestP` yourself: POST `params`, plus your authentication fields, as `application/x-www-form-urlencoded` to the server URL followed by `call`, and resolve with the parsed JSON response.

## Development environment

- Requires Node.js 18 or later

```shell
npm install
npm run test
```

The tests use a local stub server. Set `COMET_URL`, `COMET_USERNAME` and `COMET_PASSWORD` to also run them against a real Comet Server.

**NextJS**

The Comet Server API works great with [Next.js](https://nextjs.org/). There is an example repository you can use at https://github.com/CometBackup/example-nextjs-app

## Releasing

The package is published to npm by the [Publish to npm](.github/workflows/publish.yml) workflow, using [npm trusted publishing](https://docs.npmjs.com/trusted-publishers), so no npm token is needed.

- Update the changelog
- Bump the version in package.json, and commit
- Tag the commit with the same version (e.g. `v4.0.0`) and push the tag to https://github.com/CometBackup/comet-js-sdk

Pushing the tag runs the workflow, which checks that the tag matches package.json, runs the tests, and publishes.

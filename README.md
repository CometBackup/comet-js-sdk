# Comet Javascript SDK 

[![@CometBackup on Twitter](http://img.shields.io/badge/twitter-%40CometBackup-blue.svg?style=flat)](https://twitter.com/CometBackup)
![MIT License](https://img.shields.io/github/license/CometBackup/comet-js-sdk)
[![npm](https://img.shields.io/npm/v/comet-js-sdk)](https://www.npmjs.com/package/comet-js-sdk)

This project is the SDK for Comet Servers using typescript and javascript.

## Features

- Full coverage of Comet Server API methods, data structures, and constant definitions
- Created to be cross-platform and work with Browsers or Node.Js environments
- Available in minified, ESM, CommonJS versions for different use cases
- Custom HTTP request implementations may be built on `CometServerBase` by providing your own http request implementation

## Getting Started

**Node.Js**

1. `npm install -- comet-js-sdk`
2. Import the library:
	- `import CometServer from "comet.js";` (ESM)
	- `const { CometServer } = require('comet-js-sdk')` (CommonJS)
3. Liftoff!

**Typescript**

```ts
import CometServer from "comet-js-sdk";
const srv = new CometServer({
    url: "https://your-server-name-here.offsitenetwork.net/",
    username: "admin",
    password: "admin"
})

const res = await srv.AdminAccountPropertiesP();
```

**In the browser**

Note: Comet Server has [a CORS policy](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) that will block direct API calls - you will need to have a gateway or proxy service to allow this API call to work.

```html
<script src="https://unpkg.com/comet-js-sdk@^1/dist/comet.min.js" ></script>
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



## Development environment

- Requires Node LTS (17.x)

```shell
npm install 
npm run test
```

**NextJS**

The Comet Server API works great with [Next.js](https://nextjs.org/). There is an example repository you can use at https://github.com/CometBackup/example-nextjs-app

## Releasing

- Bump version of library in package.json
- Update the changelog
- Run tests `npm run test`
- Login `npm login`
- Build the publish dist folder `npm run prepublish`
- Publish `npm run publish`

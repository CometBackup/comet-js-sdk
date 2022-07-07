# EXPERIMENTAL: Comet.js 

This project is the SDK for comet servers using typescript and javascript

Created to be cross platform and work with Browsers or NodeJS environments.

Custom implementations may be built on CometServerBase by providing your own http request implementation.

```ts
import CometServer from "comet.js";
const srv = new CometServer({
    url: "https://your-server-name-here.offsitenetwork.net/",
    username: "admin",
    password: "admin"
})
const res = await srv.AdminAccountPropertiesP();
```

## Getting Started

**Browser**

_TODO_: You can use a CDN or pull this in via npm package.


**NodeJS**

1. `npm install comet.js`
2. Import the library `import CometServer from "comet.js";`
3. Liftoff!

## Development environment

- Requires Node LTS (17.x)


```shell
npm install 
npm run test
```

## Releasing

- Update the changelog
- Run tests `npm run test`
- Publish `npm run publish`

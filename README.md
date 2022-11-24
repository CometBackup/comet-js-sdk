# Comet Javascript SDK 

This project is the SDK for comet servers using typescript and javascript

Created to be cross-platform and work with Browsers or NodeJS environments.

Custom implementations may be built on CometServerBase by providing your own http request implementation.

```ts
// NOTE: for nodejs usage use const { CometServer } = require('comet-js-sdk)
// typescript example
import CometServer from "comet-js-sdk";
const srv = new CometServer({
    url: "https://your-server-name-here.offsitenetwork.net/",
    username: "admin",
    password: "admin"
})
const res = await srv.AdminAccountPropertiesP();
```

## Getting Started

**Browser**

Note: Comet Server has a CORS policy that will block  API calls, you will need to have a gateway or proxy service to allow this API call to work

**Include comet js sdk in the browser from UNPKG CDN**

```html
<script src="https://unpkg.com/comet-js-sdk@1.0.2/dist/comet.min.js" ></script>
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

**NextJS**

The Comet Server API works great with next.js. There is an example repository you can use at https://github.com/CometBackup/example-nextjs-app

## Releasing

- Bump version of library in package.json
- Update the changelog
- Run tests `npm run test`
- Login `npm login`
- Build the publish dist folder `npm run prepublish`
- Publish `npm run publish`

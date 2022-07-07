const {CometServer} = require("../../dist/index")



async function main () {
    if (process.argv.length !== 5) {
        throw new Error("Not enough arguments, provide url, username and password")
    }

    const [_1, _2, url, username, password] = process.argv

    const cs = new CometServer({ url, username, password })

    const names = await cs.AdminListUsersP()
    console.log('got all usernames:')
    for (const name of names) {
        console.log(name)
    }
}




main().then()
const createToken = require("@lot-api-server/create-token");

async function run() {
    const { data } = await createToken()
    console.log(data)
}

run()
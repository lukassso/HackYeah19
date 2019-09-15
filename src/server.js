const getAirports = require("@lot-api-server/get-airports");

async function run() {
    const { data } = await getAirports()
    console.log(data)
}

run()
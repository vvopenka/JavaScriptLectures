const Datastore = require("nedb-promise");

async function main() {
    let db = new Datastore("items.db");
    await db.loadDatabase();
    let data = [];
    for (let i = 1; i < 100; i++) {
        data.push({
            name: "Item " + i,
            _id: "" + i,
            description: `Item ${i} Description`
        });
    }
    await db.insert(data);
}

main();

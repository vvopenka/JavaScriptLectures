# Nodejs

## Promise fs

https://nodejs.org/api/fs.html#fs_fs_promises_api

```javascript
const fsp = require("fs").promises;

async function main() {
    let content = await fsp.readFile("test.js", {encoding: "utf8"});
    console.log(content);
}

main();
```

https://nodejs.org/api/http.html#http_class_http_incomingmessage

# Express.js

https://expressjs.com/

## Application Generator

```bash
npm install express-generator -g
```

https://expressjs.com/en/starter/generator.html

```bash
express --view=pug myapp
cd myapp
npm install
```

## Routing

https://expressjs.com/en/guide/routing.html

```javascript
router.get("/test/:p1/:p2", function (req, res, next) {
  res.json({
    p1: req.params.p1,
    p2: req.params.p2
  });
});
```

## Templates

https://pugjs.org/api/getting-started.html

## Session

https://expressjs.com/en/resources/middleware/session.html

# NeDB

https://github.com/louischatriot/nedb/

```bash
npm install nedb nedb-promise --save
```

```javascript
const Datastore = require('nedb-promise');
let db = new Datastore("db.json");
db.insert([
  {name: "User 1", _id: '1'},
  {name: "User 2", _id: '2'}
]);

router.get("/find/:id", async function(req, res, next) {
  let result = await db.find({_id: req.params.id});
  res.json(result);
});
```

```javascript
let db = new Datastore("user.db");
db.loadDatabase().then(() => {
  db.insert([
    {name: "User 1", _id: '1'},
    {name: "User 2", _id: '2'}
  ]);
});
```

# Exercise

[Exercise](./EXERCISE.md)
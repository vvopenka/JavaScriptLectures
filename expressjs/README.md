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

## Templates

https://pugjs.org/api/getting-started.html
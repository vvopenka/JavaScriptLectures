# Modern JS

## Async Await

Old way:
```javascript
function getData() {
    return jQuery.ajax({...}).
        then(function (data) {
            return preProcessData(data);
        }).catch(function (error) {
            //Handle error
        });
}
```

New way:
```javascript
async function getData() {
    try {
        let data = await jQuery.ajax({...});
        return preProcessData(data);
    } catch (ex) {
        //Handle error
    }
}
```

[Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Fetch API

[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Generators

```javascript
function* foo(index) {
  while (index < 10) {
    yield index++;
  }
}

let generator = foo(1);

console.log(generator.next().value); //1
```

```javascript
function* onlyEven(arr) {
    for (let element of arr) {
        if (element % 2 === 0) {
            yield element;
        }
    }
}

let arr = [1, 2, 3];

for (let evenEl of onlyEven(arr)) {
    console.log(evenEl);
}

onlyEvent(arr).next().done;
```

```javascript
async function* downloadFiles(files) {
    for (let fileUrl of files) {
        let result = await fetch(fileUrl);
        yield await result.text();
    }
}

for await (let fileContent of downloadFiles([...])) {
    processFileContent(fileContent);
}
```

## Class

```javascript
class MyClass extends ParentClass {
    constructor(par1, par2) {
        super(par1);
        this.par2 = par2;
    }

    action() {
        //Do the action
    }

    get par2() {
        return this.par2;
    }
}
```

## Modules

[Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

# Exercise

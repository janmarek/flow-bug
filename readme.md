Before npm install:

```
$ flow

/Users/janmarek/www/flow/src/file.js:6:1,25: call of method testMethod
Error:
/Users/janmarek/www/flow/src/file.js:6:17,24: string
This type is incompatible with
/Users/janmarek/www/flow/lib/test.js:3:36,41: number

/Users/janmarek/www/flow/src/file.js:8:17,36: call of method createClass
Error:
/Users/janmarek/www/flow/src/file.js:8:35,35: number
This type is incompatible with
/Users/janmarek/www/flow/lib/react.js:2:40,45: object type

Found 2 errors
```

Which seems good to me.

After npm install (and flow stop, flow start):

```
$ flow

/Users/janmarek/www/flow/src/file.js:
Failure("internal error: package /Users/janmarek/www/flow/node_modules/react/package.json not found")

Found 1 error
```

According to .flowconfig node_modules should be ignored. Unfortunately when the
module is present, it's declaration stops working.

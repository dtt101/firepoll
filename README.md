# FarmChat

A simple straw poll application using Firebase as a backend.

Firebase URL is https://strawpoll.firebaseio.com/

Also uses http://mapit.mysociety.org/ postcode api for constituency lookup

### Development

Setup from project root (note bower and grunt are installed globally, remove '-g' to prevent this):

1. `npm install -g bower`
1. `npm install -g grunt-cli`
1. `npm install && bower install`

To concat and minify:
```
grunt
```

To watch for file changes and concat and minify automatically:
```
grunt watch
```

Run local server
```
node node_modules/http-server/bin/http-server
```

Go to URL
```
http://0.0.0.0:8080
```

Setup Firebase

Use Forge.
A single record called 'constituencies' must be created at the root with a value of 0.

### Test

Run local server
```
node node_modules/http-server/bin/http-server
```

Got to QUnit test URL
```
http://0.0.0.0:8080/tests/index.html
```

### Production

The app is not currently in production.

Any static file server could hot this application

Potentially the open source Harp server platform: http://www.harp.io


### TODO

1. Calculate total votes on client side
1. Handle postcode not found with user facing error
1. Move postcode search into own view, out of app.js
1. Separate the mapit postcode lookup into a separate javascript class
1. Refactor to use Backbone.Router so we can use URLS like /vote, /results, /search
1. Specify the result model
1. Remove debug
1. Tests



# FarmChat

A simple straw poll application using Firebase as a backend.

TODO: Firebase URL is https://farmchat.firebaseio.com/

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

The Harp server platform could be used to host this application: http://www.harp.io


### TODO

1. Create Firebase app
1. See what happens when data is set to an existing location - can we create and update votes per constituency
1. If that works then we are go - if not look at django app
1. Set up postcode lookup with mysociety api using jquery ajax and simple UI
1. When constituency info found hide postcode search and show questions
1. Answer to votes is saved by constituency id and name in firebase
1. Then show results
1. Results page uses BackFire collection to show all constituency data
1. Totals can be saved separately or calculated client side?


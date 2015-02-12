# Atlastory: Editor.js

[![Join the chat at https://gitter.im/atlastory/Editor.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/atlastory/Editor.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/atlastory/Editor.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A front-end javascript library for connecting with the [Atlastory API](https://github.com/atlastory/api) and editing maps. [Atlastory](https://github.com/atlastory/ideology) is an interactive map that chronicles the history of life on earth.

The idea of Editor.js is to keep separate the map editing/API functions from an actual user interface. The library will allow a web-based UI to:

* Connect to the Atlastory API
* Display a map with vectorized map objects
* Enable the drawing and editing of map objects (at any zoom level)
* Manage local edit history
* Manage and submit changesets/directives
* Allow more advanced editing functions (spatial tools)

A GUI can be built on top of Editor.js to turn it into a fully function web-based map maker. Check out the [Atlastory Roadmap](https://github.com/atlastory/ideology/blob/master/Roadmap.md) for more on how Editor.js fits into the Atlastory infrastructure.

![](https://github.com/atlastory/ideology/blob/master/_img/Atlastory-Stack-Editor.png?raw=true)

### Build

Editor.js uses [Gulp](http://gulpjs.com/) as a task runner and [Browserify](http://browserify.org/) to load modules. It is built to be completely modular, and `index.js` can be edited to include

```sh
npm install -g gulp
git clone https://github.com/atlastory/Editor.js.git
cd Editor.js
npm install
gulp build
```

**Dependencies:**

* Lodash
* d3 v3
* Leaflet

### Development

See [CONTRIBUTING](CONTRIBUTING.md) for more information. For coding or development discussion, chat using the [Gitter atlastory/Editor.js](https://gitter.im/atlastory/Editor.js) room. For general questions and community discussion, head to the [Atlastory Google Group](http://forum.atlastory.com/).

### License

Editor.js is released under the [MIT License](http://opensource.org/licenses/MIT).

## Documentation

@TODO <<more stuff here later>>

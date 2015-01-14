# grunt-mean-compass
>Compile mean.io less files.

**compassGrunt** will locate all the `.less` files inside the packages and will compile them.

####For example:
```
packages/custom/pages/assets/less/page.less
```
will compile into:
```
packages/custom/pages/assets/css/page.scss
```

## Getting Started
This plugin requires Grunt `~0.4.5`, Grant-contrib-less `~1.0.1`, and using [Mean.io](http://www.mean.io)

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mean-compass --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mean-less');
```

## The "meanLess" task

### Overview
In your project's Gruntfile, add a section named `meanLess` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  meanCompass: {
    options: {
      // Task-specific compass options go here. 
    },
    src: [] //glob files
  },
});
```

### Options

See options as described in [Grunt Compass](https://github.com/gruntjs/grunt-contrib-compass#options)

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  mean_less: {
    options: {},
    files: ['!bower_components/**', '!packages/contrib/**', 'packages/**/public/**/*.less'],
  },
});
```

#### Custom Options
In this example, custom options are used to add the `grunt-compass` option of `sourcemap`.

```js
grunt.initConfig({
  mean_less: {
    options: {
      sourcemap: true
    },
    files: ['!bower_components/**', '!packages/contrib/**', 'packages/**/public/**/*.less'],
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(0.1.2) bug fixes_
_(0.1.0) initial release_

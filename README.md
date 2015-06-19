# grunt-gemnasium

[![Dependency Status](https://gemnasium.com/thedumbterminal/grunt-gemnasium.svg)](https://gemnasium.com/thedumbterminal/grunt-gemnasium)

> Grunt task for gemnasium

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-gemnasium --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gemnasium');
```

## The "gemnasium" task

### Overview
In your project's Gruntfile, add a section named `gemnasium` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  gemnasium: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.max
Type: `Integer`
Default value: ``

An integer value, representing the maximum amount of alerts permitted on the project.

#### options.age
Type: `Integer`
Default value: ``

An integer value, stating the maximum permitted age of alerts.

### Usage Examples

#### Default Options
In this example, the default options are used. The task will fail the process if any alerts are found.`

```js
grunt.initConfig({
  gemnasium: {
    options: {},
  }
});
```

#### Custom Options
In this example, custom options are used to allow a maximum of 2 alerts which can not be more than 10 days old.

```js
grunt.initConfig({
  gemnasium: {
    options: {
      max: 2,
      age: 10
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `npm test`.

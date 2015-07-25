/*
 * grunt-gemnasium
 * https://github.com/thedumbterminal/grunt-gemnasium
 *
 * Copyright (c) 2015 thedumbterminal
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    gemnasium: {
      options: {
        max: 2,
        age: 8,
        unwanted: [
          'test'
        ]
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint and run all tests.
  grunt.registerTask('default', [
    'jshint',
    'gemnasium'
  ]);

};

/*
 * grunt-gemnasium
 * https://github.com/thedumbterminal/grunt-gemnasium
 *
 * Copyright (c) 2015 thedumbterminal
 * Licensed under the MIT license.
 */

'use strict';

var GemnasiumClient = require('gemnasium-client');
var moment = require('moment');

module.exports = function(grunt) {

  grunt.registerTask('gemnasium', 'Grunt task for gemnasium', function() {
    var done = this.async();
    var instance = this;

    var client = new GemnasiumClient();
    client.alerts(function(err, result){
      var options = instance.options();

      if(err){
        grunt.fail.fatal(err);
      }

      //fail if any alerts found and no max given
      if(!options.max && result.length){
        grunt.fail.fatal(result.length + " alerts");
      }

      //fail if more than the specified amount of alerts found
      if(options.max && result.length >= options.max){
        grunt.fail.fatal("More than " + options.max + " alerts");
      }

      if(options.age){
        var now = moment();
        result.map(function(item){
          var daysDiff = now.diff(item.open_at, 'days');
          grunt.log.debug(item.advisory.title + ' = ' + daysDiff + ' days old');
          if(daysDiff > options.age){
            grunt.fail.fatal('Alert is too old "' + item.advisory.title + '" (' + daysDiff + ' days)');
          }
        });
      }

      done();
    });

  });

};

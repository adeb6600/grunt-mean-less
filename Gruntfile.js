/*
 * grunt-mean-compass
 * https://github.com/AlmogBaku/grunt-mean-compass
 *
 * Copyright (c) 2014 AlmogBaku
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
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    meanLess: {
      default_options: {
        options: {
        },
        src: ['!bower_components/**', '!packages/contrib/**', 'packages/**/public/**/*.less']
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'mean_less']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

'use strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerMultiTask('meanLess', 'Compile mean less files.', function() {
    var options = this.options;

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var filesMap = {};

      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else if(path.basename(filepath)[0] === '_') { //do not include no-compile;
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var cssDir = path.dirname(path.dirname(filepath))+'/css/';
        if(filesMap[cssDir] === undefined) {
          filesMap[cssDir] = [];
        }
        filesMap[cssDir].push(filepath);

        return filepath;
      });

      var lessGrunt = {};
      var i = 0;
      for(var cssDir in filesMap) {
        var sassDir = path.dirname(filesMap[cssDir][0]);
        var imagesDir = path.dirname(cssDir)+'/img/';
        var fontsDir = path.dirname(cssDir)+'/fonts/';
        var dirOptions = options({
          sassDir: sassDir,
          specify: filesMap[cssDir],
          imagesDir: imagesDir,
          fontsDir: fontsDir,
          relativeAssets: true,
          cssDir: cssDir
        });
        lessGrunt['meanLess_'+i] = {
          options: dirOptions
        };
        i+=1;
      }
      grunt.log.ok('Originated less tasks.');
      grunt.log.subhead('Start less mean tasks tasks..');

      grunt.config('less', lessGrunt);
      grunt.task.run('less');
    });
  });

};

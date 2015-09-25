module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['js/*.js', 'test/*.js'],
             options: {
                jshintrc: '.jshintrc'
              }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                runnerPort: 9998
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint','karma']);
};

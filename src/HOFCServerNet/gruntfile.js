/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({
        uglify: {
            prod: {
                files: { 'wwwroot/app.js': ['Scripts/app.js', 'Scripts/**/*.js'] }
            }
        },

        concat: {
            dev: {
                src: ['Scripts/app.js', 'Scripts/**/*.js'],
                dest: 'wwwroot/app.js'
            }
        },

        copy: {
            bowerlibs: {
                expand: true,
                src: ['bower_components/angular/angular.js', 
                      'bower_components/angular-animate/angular-animate.js', 
                      'bower_components/angular-aria/angular-aria.js',
                      'bower_components/angular-messages/angular-messages.js',
                      'bower_components/angular-resource/angular-resource.js',
                      'bower_components/angular-route/angular-route.js',
                      'bower_components/angular-sanitize/angular-sanitize.js',
                      'bower_components/angular-material/angular-material.js',
                      'bower_components/angular-material-data-table/dist/md-data-table.js',
                      'bower_components/angular-material-data-table/dist/md-data-table.css',
                      'bower_components/angular-message/angular-messages.js',
                      'bower_components/angular-i18n/angular-locale_fr-fr.js'],
                dest: 'wwwroot'
            },
        },

        sass: {
            bowerlibs: {
                src: ['bower_components/angular-material/angular-material.scss'],
                dest: 'wwwroot/bower_components/angular-material/angular-material.css'
            }
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify']
            }
        },
    });
    // define tasks
    grunt.registerTask('default', ['uglify', 'watch']);
};
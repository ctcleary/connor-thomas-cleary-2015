module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },
    watch: {
      all: {
        files: '**/*.*',
        tasks: [],
        options: {
          livereload: true
        }
      },
      sass: {
        files: 'style/scss/*.scss',
        tasks: ['buildcss']
      }
    },

    sass: {
      dev: {
        files: {
          'style/styles.css': 'style/scss/master.scss'
        }
      }
    },
    autoprefixer: {
      dev: {
        options: {
          browsers: ['last 4 versions']
        },
        files: {
          'style/styles.css': 'style/styles.css'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', [
    'buildcss',
    'connect',
    'watch'
  ]);

  grunt.registerTask('buildcss', [
    'sass',
    'autoprefixer'
  ]);

};

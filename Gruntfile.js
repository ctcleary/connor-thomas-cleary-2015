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
      gruntfile: {
        files: ['Gruntfile.js'],
        options: {
          livereload: true
        },
      },
      all: {
        files: [
          '/*.html',
          '**/*.*',
          '**/*.css',
          '**/*.js',
          '**/*.html',
          '**/*.jpg',
          '**/*.png',
          '**/*.svg'
        ],
        options: {
          livereload: true
        },
      },
      sass: {
        files: 'style/**/*.scss',
        tasks: ['buildcss']
      }
    },

    sass: {
      1: {
        files: {
          'style/index/styles.css': 'style/index/scss/master.scss'
        }
      },
    },
    autoprefixer: {
      dev: {
        options: {
          browsers: ['last 4 versions']
        },
        files: {
          'style/index/styles.css': 'style/index/styles.css',
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

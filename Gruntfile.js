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
    riot: {
      components: {
        options: {
          concat: true
        },
        src: 'src/components/*.tag',
        dest: 'dist/ctc-tags.js'
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
          // '**/*.*',
          'style/**/*.css',
          'src/**/*.tag',
          'src/**/*.js',
          'src-config/*.js',
          '**/*.html',
          'local-design/**/*.jpg',
          'img/**/*.jpg',
          'local-design/**/*.png',
          'img/**/*.png',
          'src/**/*.svg',
          'img/**/*.svg'
        ],
        options: {
          livereload: true
        },
      },
      riot: {
        files: 'src/components/*.tag',
        tasks: ['riot']
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
  grunt.loadNpmTasks('grunt-riot');

  // Default task(s).
  grunt.registerTask('default', [
    'riot',
    'buildcss',
    'connect',
    'watch'
  ]);

  grunt.registerTask('buildcss', [
    'sass',
    'autoprefixer'
  ]);

};

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
        files: 'css/**/*.scss',
        tasks: ['buildcss']
      }
    },

    sass: {
      1: {
        files: {
          'css/styles.css': 'css/scss/master.scss'
        }
      },
    },
    autoprefixer: {
      dev: {
        options: {
          browsers: ['last 4 versions']
        },
        files: {
          'css/styles.css': 'css/styles.css',
        }
      }
    },

    copy: {
      sitegen: {
        files: [
          {expand: true, src: ['js/**/*.js'], dest: 'static-build/js/'},
          {expand: true, src: ['css/index/styles.css*'], dest: 'static-build/css/'},
          {expand: true, src: ['src/vendor/*'], dest: 'static-build/css/'},
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-riot');

  // Default task(s).
  grunt.registerTask('build', [
    'riot',
    'buildcss'
  ]);

  grunt.registerTask('buildcss', [
    'sass',
    'autoprefixer'
  ]);
  
  grunt.registerTask('default', [
    'riot',
    'buildcss',
    'connect',
    'watch'
  ]);


  grunt.registerTask('sitegen', [
    'build',
    'copy'
  ]);
};

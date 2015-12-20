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
          'css/**/*.css',

          'config/*.js',

          'src/**/*.tag',
          'src/**/*.js',
          'js/*.js',
          '**/*.html',

          'local-design/**/*.jpg',
          'local-design/**/*.png',
          'img/**/*.jpg',
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

    clean: {
      'static-build': ['static-build'],
    },
    copy: {
      'static-build': {
        files: [
          {expand: true, src: ['js/**/*.js'], dest: 'static-build/'},
          {expand: true, src: ['css/**/*.css*'], dest: 'static-build/'},
          {expand: true, src: ['config/**/*.js'], dest: 'static-build/'},
          {expand: true, src: ['dist/**/*.js'], dest: 'static-build/'},
          {expand: true, src: ['index.html'], dest: 'static-build/'},
        ]
      }
    },
    preprocess : {
      'static-build': {
        src : 'static-build/index.html',
        dest: 'static-build/index.html'
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-preprocess');
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

  grunt.registerTask('static-build', [
    'build',
    'clean:static-build',
    'copy:static-build',
    'preprocess:static-build',
  ]);
};

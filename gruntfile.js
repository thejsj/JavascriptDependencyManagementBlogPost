module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'dist/main.js': ['app/*.js'],
        },
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['browserify']
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerInstall: {
      target: {
        src: [
          // 'app/**.html',
          // 'app/**.jade'
          './app/index.html'
        ],
        dependencies: true,
        devDependencies: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-install');

  grunt.registerTask('default',['bowerInstall']);
};
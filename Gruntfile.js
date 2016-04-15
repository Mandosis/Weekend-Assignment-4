module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       watch: {
         scripts: {
           files: ['client/*.js'],
           tasks: ['uglify'],
           options: {
             spawn: false,
           },
         },
       },
       uglify: {
          //  options: {
          //      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          //  },
           build: {
               src: 'client/client.js',
               dest: 'server/public/assets/js/client.min.js'
           }
       },
       copy: {
           main: {
               expand: true,
               cwd: "node_modules/",
               src: [
                   "angular/angular.min.js",
                   "angular/angular.min.js.map",
                   "angular/angular-csp.css",
                  //  "jquery/dist/jquery.min.js",
                  //  "jquery/dist/jquery.min.map",
                   "bootstrap/dist/js/bootstrap.min.js",
                   "bootstrap/dist/css/bootstrap.min.css",
                   "bootstrap/dist/css/bootstrap.min.css.map",
                   "bootstrap/dist/css/bootstrap-theme.min.css",
                   "bootstrap/dist/css/bootstrap-theme.min.map"
               ],
               "dest": "server/public/vendor/"
           }
       }
   });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-uglify');

   // Default task(s).
   grunt.registerTask('default', ['copy', 'uglify']);

};

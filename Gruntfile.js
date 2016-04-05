module.exports = function (grunt) {
  grunt.initConfig({
  //获取 package.json 的信息
    pkg: grunt.file.readJSON('package.json'), // ,!!!!!!!!
      //获取uglify插件的配置信息
    uglify: {
      options:{
        banner:'/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'dest/<%= pkg.file %>.min.js'
      }
    },

    // js查错
    jshint: {
      build: ['Gruntfile.js','js/*.js'],
      options: {
        jshintrc: '.jshintrc.json'
      }     
    },

    // watch插件自动化检测
    watch: {
      build: {
        files: ['js/*.js','css/*.css'],
        tasks: ['jshint','uglify'],
        options: {spawn: false}
      }
    }
  });

  // 告诉grunt将要使用的的插件
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //在终端输入grunt后要做的事情 (注意先后顺序)
  grunt.registerTask('default', ['jshint','uglify','watch']);
};
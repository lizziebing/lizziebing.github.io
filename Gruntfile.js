module.exports = function (grunt) {
  // 项目配置
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    concat: {
	      options: {
	        separator: ';'
	      },
	      dist: {
	        src: ['js/res.js', 'src/rili.js'],
	        dest: 'js/libs.js'
	      }
	    },
	    uglify: {
	      build: {
	        src: 'js/libs.js',
	        dest: 'js/libs.min.js'
	      }
	    }
	  });
	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.loadNpmTasks('grunt-contrib-concat');
	  // 默认任务
	  grunt.registerTask('default', ['concat', 'uglify']);
}
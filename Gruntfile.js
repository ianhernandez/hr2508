module.exports = function(grunt){

	

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				files: {
					'build/css/screen.css' : 'sass/screen.scss'
				}
			}

		},


    concat: {
      options: {
        stripBanners: false
      },
      bootstrap: {
        src: [
          'js/util.js',
          'js/alert.js',
          'js/button.js',
          'js/carousel.js',
          'js/collapse.js',
          'js/dropdown.js',
          'js/modal.js',
          'js/scrollspy.js',
          'js/tab.js',
          'js/tooltip.js',
          'js/popover.js'
        ],
        dest: 'build/js/bootstrap.js'
      }
    },


	  cssmin: {
	  	my_target:{
	  		files: [{
	  			expand: true,
	  			cwd: 'stylesheets',
	  			src: ['*.css', '!*.min.css'],
	  			dest: 'stylesheets/',
	  			ext: '.min.css'

	  		}]
	  	}
	  },

		watch: {
			
			sass: {
				files: ['sass/*.scss'],
				tasks: ['sass', 'cssmin'],
				options: {
		      livereload: true,
		    },
			},
		  scripts: {
		    files: ['**/*.js'],
		    tasks: ['jshint'],
		    options: {
		      spawn: false,
		    }
		  }
		},

		wiredep: {
      target: {
        src: 'index.html' // point to your HTML file.
      }
    }



	});

	grunt.loadNpmTasks('grunt-wiredep');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['sass']);

};
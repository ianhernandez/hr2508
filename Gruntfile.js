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
          'build/js/util.js',
          'build/js/alert.js',
          'build/js/button.js',
          'build/js/carousel.js',
          'build/js/collapse.js',
          'build/js/dropdown.js',
          'build/js/modal.js',
          'build/js/scrollspy.js',
          'build/js/tab.js',
          'build/js/tooltip.js',
          'build/js/popover.js'
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
    },

		browserSync: {
		    bsFiles: {
		        src : 'build/css/*.css'
		    },
		    options: {
		        server: {
		            baseDir: "./"
		        }
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

	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['watch']);

};
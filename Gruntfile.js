module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: [
					'js/vendor/jquery/jquery.js',
					'js/vendor/underscore/underscore.js',
                    'js/vendor/backbone/backbone.js',
                    'js/vendor/backfire/backbone-firebase.js',
                    'js/models/message.js',
                    'js/models/localuser.js',
                    'js/models/onlineuser.js',
                    'js/collections/room.js',
                    'js/views/message.js',
                    'js/views/room.js',
                    'js/views/onlineuser.js',
                    'js/views/users.js',
                    'js/app.js'
				],
				dest: 'js/live.concat.js'
			}
		},
		uglify: {
			options: {
				banner: '/* FarmChat by David Thompson for Farm Digital */\n'
			},
			build: {
				src: 'js/live.concat.js',
				dest: 'js/live.min.js'
			}
		},
		watch: {
			files: ['js/!(live.min|live.concat).js', 'js/vendor/*', 'js/views/*', 'js/models/*', 'js/collections/*',],
			tasks: ['default']
		}
	});

	// Load tasks that we'll be using
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify']);
};

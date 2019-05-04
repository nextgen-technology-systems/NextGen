module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-war');
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		war: {
			target: {
				options: {
					war_dist_folder: 'D:/', /* Folder where to generate the WAR. */
					war_name: 'angular6-myaccount-app' /* The name of the WAR file (.war will be the extension) */
				},
				
				files: [
					{ expand: true,	cwd: 'dist/angular6-myaccount-app', src: ['**'], dest: ''}
				]
			}
		},copy: {
            main: {
              expand: true,
              
              src: 'weblogic.xml',
              dest: 'dist/WEB-INF/',
            },
          },
	});
	
	grunt.registerTask('default', ['copy','war']);
}; 
 
 
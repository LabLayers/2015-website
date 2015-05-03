module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    'scripts/lib/*.js', // All JS in the libs folder
                    'scripts/site.js'  // This specific file
                ],
                dest: 'scripts/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'scripts/build/production.js',
                dest: 'scripts/build/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/'
                }]
            }
        },

        less: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'design/build/production.css': 'design/site.less',
                    'design/build/holiday.css': 'design/holiday.less'
                }
            } 
        },

        autoprefixer: {
            single_file: {
                options: {
                    // Target-specific options go here.
                },
                src: 'design/build/production.css',
                dest: 'design/build/production.css'
            },
            single_file: {
                options: {
                    // Target-specific options go here.
                },
                src: 'design/build/holiday.css',
                dest: 'design/build/holiday.css'
            }
        },

        express: {
            server: {
                options: {
                    bases: ['.'],
                    port: 1984,
                    hostname: "0.0.0.0"
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['index.html', 'design/*', 'scripts/*'],
                tasks: ['concat', 'less', 'autoprefixer'],
                options: {
                    spawn: false,
                },
            } 
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');       
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'less', 'autoprefixer']);
    grunt.registerTask('server', ['express', 'watch']);

};

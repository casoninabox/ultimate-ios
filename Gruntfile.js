module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-coffeelint');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-exec');

    var userConfig = require('./grunt/build.config.js');
    var serverPort = 3000;

    var taskConfig = {
        pkg: grunt.file.readJSON("package.json"),
        nodemon: {
            dev: {
                script: 'server/server.js'
            }
        },
        exec: {
            buildIOS: './grunt/iosbuild.sh',
        },
        // Run's a little webserver
        connect: {
            server: {
                options: {
                    port: serverPort,
                    hostname: '*',
                    base: 'build'
                }
            }
        },

        jade: {
            build: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    "<%= build_dir %>/index.html": ["<%= build_dir %>/index.jade"]
                }
            },
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    "<%= compile_dir %>/index.html": ["<%= compile_dir %>/index.jade"]
                }
            }
        },

        // Open in Chrome
        open: {
            dev: {
                path: 'http://localhost:' + serverPort + '/',
            }
        },

        // Delete old files on build...
        clean: {
            all: ['<%= build_dir %>', '<%= compile_dir %>'],
            jade: ["<%= build_dir %>/index.jade", "<%= compile_dir %>/index.jade"]
        },

        // Copy
        copy: {
            build_app_assets: {
                files: [{
                    src: ['**'],
                    dest: '<%= build_dir %>/assets/',
                    cwd: 'src/assets',
                    expand: true
                }]
            },
            build_vendor_assets: {
                files: [{
                    src: ['<%= vendor_files.assets %>'],
                    dest: '<%= build_dir %>/assets/',
                    cwd: '.',
                    expand: true,
                    flatten: true
                }]
            },
            build_appjs: {
                files: [{
                    src: ['<%= app_files.js %>', '!src/app/app.prod.config.js'],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }]
            },
            build_vendorjs: {
                files: [{
                    src: ['<%= vendor_files.js %>'],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }]
            },
            build_vendorcss: {
                files: [{
                    src: ['<%= vendor_files.css %>'],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }]
            },
            build_fonts: {
                files: [{
                    src: ['vendor/ionic/fonts/*'],
                    // src: ['vendor/semantic-ui/dist/themes/default/assets/fonts/*'],
                    dest: '<%= build_dir %>/fonts',
                    cwd: '.',
                    flatten: true,
                    expand: true
                }]
            },
            build_fontawesome: {
                files: [{
                    src: ['vendor/font-awesome/fonts/*'],
                    dest: '<%= build_dir %>/fonts',
                    cwd: '.',
                    flatten: true,
                    expand: true
                }]
            },
        },

        // Puts all the templates into angular's template cache
        html2js: {
            app: {
                options: {
                    base: 'src/app'
                },
                src: ['<%= app_files.atpl %>'],
                dest: '<%= build_dir %>/templates-app.js'
            },

            common: {
                options: {
                    base: 'src/common'
                },
                src: ['<%= app_files.ctpl %>'],
                dest: '<%= build_dir %>/templates-common.js'
            }
        },

        // `grunt concat` concatenates multiple source files into a single file.
        concat: {
            build_css: {
                src: [
                    '<%= vendor_files.css %>',
                    '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
                ],
                dest: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
            },
        },

        // Avoid needing the array syntax
        ngAnnotate: {
            compile: {
                files: [{
                    src: ['<%= app_files.js %>'],
                    cwd: '<%= build_dir %>',
                    dest: '<%= build_dir %>',
                    expand: true
                }]
            }
        },

        less: {
            dev: {
                files: {
                    "<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css": "<%= app_files.less %>"
                }
            }
        },


        jshint: {
            src: [
                '<%= app_files.js %>'
            ],
            test: [
                '<%= app_files.jsunit %>'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: false,
                immed: true,
                newcap: true,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true
            },
            globals: {}
        },

        // Compile index file
        index: {
            build: {
                dir: '<%= build_dir %>',
                src: [
                    '<%= vendor_files.js %>',
                    '<%= build_dir %>/src/**/*.js',
                    '<%= html2js.common.dest %>',
                    '<%= html2js.app.dest %>',
                    //'<%= vendor_files.css %>',
                    '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
                ]
            }
        },

        delta: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile'],
                options: {
                    livereload: false
                }
            },
            jssrc: {
                files: [
                    '<%= app_files.js %>'
                ],
                tasks: ['jshint:src', 'copy:build_appjs']
            },
            coffeesrc: {
                files: [
                    '<%= app_files.coffee %>'
                ],
                tasks: ['coffeelint:src', 'coffee:source', 'copy:build_appjs']
            },
            // TODO: Get the fonts too...
            assets: {
                files: [
                    'src/assets/**/*'
                ],
                tasks: ['copy:build_assets']
            },
            html: {
                files: ['<%= app_files.html %>'],
                tasks: ['index:build']
            },
            tpls: {
                files: [
                    '<%= app_files.atpl %>',
                    '<%= app_files.ctpl %>'
                ],
                tasks: ['html2js']
            },
            less: {
                files: ['src/**/*.less'],
                tasks: ['less:dev', 'concat:build_css']
            }
        }
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));
    grunt.renameTask('watch', 'delta');
    grunt.registerTask('watch', ['build', 'connect:server', 'open:dev', 'delta']);
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('commonbuild', [
        'html2js', 'jshint', 'less:dev', 'concat:build_css',
        'copy:build_app_assets', 'copy:build_vendor_assets',
        'copy:build_appjs', 'copy:build_vendorjs'
    ]);

    grunt.registerTask('build', [
        'clean:all',
        'commonbuild',
        'index:build',
        'copy:build_fonts',
        'copy:build_fontawesome',
        'jade:build',
        'clean:jade'
    ]);
    
    grunt.registerTask('build-ios', [
        'build',
        'exec:buildIOS'
    ]);
    // A utility function to get all app JavaScript sources.
    function filterForJS(files) {
        return files.filter(function(file) {
            return file.match(/\.js$/);
        });
    }

    // A utility function to get all app CSS sources.
    function filterForCSS(files) {
        return files.filter(function(file) {
            return file.match(/\.css$/);
        });
    }

    /** 
     * The index.html template includes the stylesheet and javascript sources
     * based on dynamic names calculated in this Gruntfile. This task assembles
     * the list into variables for the template to use and then runs the
     * compilation.
     */
    grunt.registerMultiTask('index', 'Process index.html template', function() {
        var dirRE = new RegExp('^(' + grunt.config('build_dir') + '|' + grunt.config('compile_dir') + ')\/', 'g');
        var jsFiles = filterForJS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });
        var cssFiles = filterForCSS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });
        grunt.file.copy('src/index.jade', this.data.dir + '/index.jade', {
            process: function(contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles,
                        version: grunt.config('pkg.version'),
                    }
                });
            }
        });
    });
};
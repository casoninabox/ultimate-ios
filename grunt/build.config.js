// Build Config
module.exports = {

  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],
    
    coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [ 'src/app/**/*.tpl.html', 'src/app/**/*.jade' ],
    ctpl: [ 'src/common/**/*.tpl.html', 'src/common/**/*.jade'],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  vendor_files: {
    js: [
      //'vendor/angular/angular.min.js',
      'vendor/ionic/js/ionic.bundle.js',
      //'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/ui-utils.min.js',
      'vendor/lodash/dist/lodash.min.js',
      'vendor/jquery/dist/jquery.js',
      
    ],
    css: [
     'vendor/font-awesome/css/font-awesome.css',
     'vendor/ionic/css/ionic.css',
    ],
    assets: [
    ]
  },
};

/**
 * Created by zed on 15/12/26.
 */
'use strict';

/**
 * Config constant
 */
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Javascript Plugins
        'modernizr': ['vendor/modernizr/modernizr.js'],
        'moment': ['vendor/moment/moment.min.js'],
        'spin': 'vendor/ladda/spin.min.js',

        //*** jQuery Plugins
        'perfect-scrollbar-plugin': ['vendor/perfect-scrollbar/perfect-scrollbar.min.js', 'vendor/perfect-scrollbar/perfect-scrollbar.min.css'],
        'chartjs': 'vendor/chartjs/Chart.min.js',
        'ckeditor-plugin': 'vendor/ckeditor/ckeditor.js',

        //*** Controllers
        'Ctrl1': 'scripts/controller1.js',
        'Ctrl2': 'scripts/controller2.js',
        'Ctrl3': 'scripts/controller3.js',

        //*** Filters
        'htmlToPlaintext': 'assets/js/filters/htmlToPlaintext.js'
    },
    //*** angularJS Modules
    modules: [
       {
        name: 'module1',
        files: ['components/module1/module1.js']
    }, {
        name: 'module2',
        files: ['components/module2/module2.js']
    },  {
        name: 'module3',
        files: ['components/module3/module3-1.js','components/module3/module3-2.js']
    }]
});

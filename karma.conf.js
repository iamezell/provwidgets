module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '',

        frameworks: ['browserify','mocha', 'chai', 'sinon'],

        files: [
            {pattern: './test/**/*.js', included: true},
            {pattern: './src/js/*.js', included: true}
        ],

        reporters: ['progress', 'coverage'],
        preprocessors: {
            'src/js/*.js': [ 'coverage','browserify' ],
            'test/**/*.js': [ 'browserify','coverage' ]
        },
        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        browserify: {
            debug: true,
            transform: ['browserify-istanbul']
        },
        coverageReporter: {
            reporters: [
                // reporters not supporting the `file` property
                {type: 'html', subdir: 'html'},
                {type: 'lcov', subdir: '.'},
                {type: 'text', subdir: '.', file: 'text.txt'},
                {type: 'text-summary', subdir: '.', file: 'text-summary.txt'}
            ]
        },

        browsers: ['PhantomJS']

    });
};
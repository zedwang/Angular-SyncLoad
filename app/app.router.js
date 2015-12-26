/**
 * Created by zed on 15/12/26.
 */
app.config(['$stateProvider', '$urlRouterProvider', '$provide','$ocLazyLoadProvider', 'JS_REQUIRES',
    function ($stateProvider, $urlRouterProvider, $provide ,$ocLazyLoadProvider, jsRequires) {

        app.constant = $provide.constant;

        // LAZY MODULES

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: jsRequires.modules
        });

        $urlRouterProvider.otherwise("app/view1");

        $stateProvider.state('app', {
            url: "/app",
            template: "<div ui-view></div>",
            abstract: true,

        }).state('app.view1', {
            url: "/view1",
            templateUrl: "views/view1.html",
            resolve: loadSequence('module1','Ctrl1'),
            title:'登录'
        }).state('app.view2', {
            url: "/view2",
            templateUrl: "views/view2.html",
            resolve: loadSequence('module2','Ctrl2'),
            title: '控制面板'
        }).state('app.view3', {
            url: '/view3',
            templateUrl: 'views/view3.html',
            title: 'UI元素',
            resolve: loadSequence('module3','Ctrl3'),
        });

        // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
        function loadSequence() {
            var _args = arguments;
            return {
                deps: ['$ocLazyLoad', '$q',
                    function ($ocLL, $q) {
                        var promise = $q.when(1);
                        for (var i = 0, len = _args.length; i < len; i++) {
                            promise = promiseThen(_args[i]);
                        }
                        return promise;

                        function promiseThen(_arg) {
                            if (typeof _arg == 'function')
                                return promise.then(_arg);
                            else
                                return promise.then(function () {
                                    var nowLoad = requiredData(_arg);
                                    if (!nowLoad)
                                        return console.error('Route resolve: Bad resource name [' + _arg + ']');
                                    return $ocLL.load(nowLoad);
                                });
                        }

                        function requiredData(name) {
                            if (jsRequires.modules)
                                for (var m in jsRequires.modules)
                                    if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
                                        return jsRequires.modules[m];
                            return jsRequires.scripts && jsRequires.scripts[name];
                        }
                    }]
            };
        }
    }]);
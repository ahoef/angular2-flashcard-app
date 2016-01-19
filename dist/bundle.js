(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * @module
 * @description
 * Starting point to import all public core APIs.
 */
__export(require('./src/core/metadata'));
__export(require('./src/core/util'));
__export(require('./src/core/prod_mode'));
__export(require('./src/core/di'));
__export(require('./src/facade/facade'));
var lang_1 = require('angular2/src/facade/lang');
exports.enableProdMode = lang_1.enableProdMode;
var application_ref_1 = require('./src/core/application_ref');
exports.platform = application_ref_1.platform;
exports.createNgZone = application_ref_1.createNgZone;
exports.PlatformRef = application_ref_1.PlatformRef;
exports.ApplicationRef = application_ref_1.ApplicationRef;
var application_tokens_1 = require('./src/core/application_tokens');
exports.APP_ID = application_tokens_1.APP_ID;
exports.APP_COMPONENT = application_tokens_1.APP_COMPONENT;
exports.APP_INITIALIZER = application_tokens_1.APP_INITIALIZER;
exports.PACKAGE_ROOT_URL = application_tokens_1.PACKAGE_ROOT_URL;
exports.PLATFORM_INITIALIZER = application_tokens_1.PLATFORM_INITIALIZER;
__export(require('./src/core/zone'));
__export(require('./src/core/render'));
__export(require('./src/core/linker'));
var debug_element_1 = require('./src/core/debug/debug_element');
exports.DebugElement = debug_element_1.DebugElement;
exports.Scope = debug_element_1.Scope;
exports.inspectElement = debug_element_1.inspectElement;
exports.asNativeElements = debug_element_1.asNativeElements;
__export(require('./src/core/testability/testability'));
__export(require('./src/core/change_detection'));
__export(require('./src/core/platform_directives_and_pipes'));
__export(require('./src/core/platform_common_providers'));
__export(require('./src/core/application_common_providers'));
__export(require('./src/core/reflection/reflection'));
},{"./src/core/application_common_providers":2,"./src/core/application_ref":3,"./src/core/application_tokens":4,"./src/core/change_detection":5,"./src/core/debug/debug_element":37,"./src/core/di":38,"./src/core/linker":48,"./src/core/metadata":71,"./src/core/platform_common_providers":77,"./src/core/platform_directives_and_pipes":78,"./src/core/prod_mode":79,"./src/core/reflection/reflection":82,"./src/core/render":85,"./src/core/testability/testability":88,"./src/core/util":89,"./src/core/zone":91,"./src/facade/facade":97,"angular2/src/facade/lang":98}],2:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var application_tokens_1 = require('./application_tokens');
var change_detection_1 = require('./change_detection/change_detection');
var view_pool_1 = require('./linker/view_pool');
var view_manager_1 = require('./linker/view_manager');
var view_manager_2 = require("./linker/view_manager");
var view_manager_utils_1 = require('./linker/view_manager_utils');
var view_resolver_1 = require('./linker/view_resolver');
var view_listener_1 = require('./linker/view_listener');
var proto_view_factory_1 = require('./linker/proto_view_factory');
var directive_resolver_1 = require('./linker/directive_resolver');
var pipe_resolver_1 = require('./linker/pipe_resolver');
var compiler_1 = require('./linker/compiler');
var compiler_2 = require("./linker/compiler");
var dynamic_component_loader_1 = require('./linker/dynamic_component_loader');
var dynamic_component_loader_2 = require("./linker/dynamic_component_loader");
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
exports.APPLICATION_COMMON_PROVIDERS = lang_1.CONST_EXPR([
    new di_1.Provider(compiler_1.Compiler, { useClass: compiler_2.Compiler_ }),
    application_tokens_1.APP_ID_RANDOM_PROVIDER,
    view_pool_1.AppViewPool,
    new di_1.Provider(view_pool_1.APP_VIEW_POOL_CAPACITY, { useValue: 10000 }),
    new di_1.Provider(view_manager_1.AppViewManager, { useClass: view_manager_2.AppViewManager_ }),
    view_manager_utils_1.AppViewManagerUtils,
    view_listener_1.AppViewListener,
    proto_view_factory_1.ProtoViewFactory,
    view_resolver_1.ViewResolver,
    new di_1.Provider(change_detection_1.IterableDiffers, { useValue: change_detection_1.defaultIterableDiffers }),
    new di_1.Provider(change_detection_1.KeyValueDiffers, { useValue: change_detection_1.defaultKeyValueDiffers }),
    directive_resolver_1.DirectiveResolver,
    pipe_resolver_1.PipeResolver,
    new di_1.Provider(dynamic_component_loader_1.DynamicComponentLoader, { useClass: dynamic_component_loader_2.DynamicComponentLoader_ })
]);
},{"./application_tokens":4,"./change_detection/change_detection":8,"./linker/compiler":49,"./linker/directive_resolver":51,"./linker/dynamic_component_loader":52,"./linker/pipe_resolver":58,"./linker/proto_view_factory":59,"./linker/view_listener":65,"./linker/view_manager":66,"./linker/view_manager_utils":67,"./linker/view_pool":68,"./linker/view_resolver":70,"angular2/src/core/di":38,"angular2/src/facade/lang":98}],3:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng_zone_1 = require('angular2/src/core/zone/ng_zone');
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var application_tokens_1 = require('./application_tokens');
var async_1 = require('angular2/src/facade/async');
var collection_1 = require('angular2/src/facade/collection');
var testability_1 = require('angular2/src/core/testability/testability');
var dynamic_component_loader_1 = require('angular2/src/core/linker/dynamic_component_loader');
var exceptions_1 = require('angular2/src/facade/exceptions');
var view_ref_1 = require('angular2/src/core/linker/view_ref');
var console_1 = require('angular2/src/core/console');
var profile_1 = require('./profile/profile');
var lang_2 = require('angular2/src/facade/lang');
/**
 * Construct providers specific to an individual root component.
 */
function _componentProviders(appComponentType) {
    return [
        di_1.provide(application_tokens_1.APP_COMPONENT, { useValue: appComponentType }),
        di_1.provide(application_tokens_1.APP_COMPONENT_REF_PROMISE, {
            useFactory: function (dynamicComponentLoader, appRef, injector) {
                // Save the ComponentRef for disposal later.
                var ref;
                // TODO(rado): investigate whether to support providers on root component.
                return dynamicComponentLoader.loadAsRoot(appComponentType, null, injector, function () { appRef._unloadComponent(ref); })
                    .then(function (componentRef) {
                    ref = componentRef;
                    if (lang_1.isPresent(componentRef.location.nativeElement)) {
                        injector.get(testability_1.TestabilityRegistry)
                            .registerApplication(componentRef.location.nativeElement, injector.get(testability_1.Testability));
                    }
                    return componentRef;
                });
            },
            deps: [dynamic_component_loader_1.DynamicComponentLoader, ApplicationRef, di_1.Injector]
        }),
        di_1.provide(appComponentType, {
            useFactory: function (p) { return p.then(function (ref) { return ref.instance; }); },
            deps: [application_tokens_1.APP_COMPONENT_REF_PROMISE]
        }),
    ];
}
/**
 * Create an Angular zone.
 */
function createNgZone() {
    return new ng_zone_1.NgZone({ enableLongStackTrace: lang_1.assertionsEnabled() });
}
exports.createNgZone = createNgZone;
var _platform;
var _platformProviders;
/**
 * Initialize the Angular 'platform' on the page.
 *
 * See {@link PlatformRef} for details on the Angular platform.
 *
 * It is also possible to specify providers to be made in the new platform. These providers
 * will be shared between all applications on the page. For example, an abstraction for
 * the browser cookie jar should be bound at the platform level, because there is only one
 * cookie jar regardless of how many applications on the page will be accessing it.
 *
 * The platform function can be called multiple times as long as the same list of providers
 * is passed into each call. If the platform function is called with a different set of
 * provides, Angular will throw an exception.
 */
function platform(providers) {
    lang_2.lockMode();
    if (lang_1.isPresent(_platform)) {
        if (collection_1.ListWrapper.equals(_platformProviders, providers)) {
            return _platform;
        }
        else {
            throw new exceptions_1.BaseException("platform cannot be initialized with different sets of providers.");
        }
    }
    else {
        return _createPlatform(providers);
    }
}
exports.platform = platform;
/**
 * Dispose the existing platform.
 */
function disposePlatform() {
    if (lang_1.isPresent(_platform)) {
        _platform.dispose();
        _platform = null;
    }
}
exports.disposePlatform = disposePlatform;
function _createPlatform(providers) {
    _platformProviders = providers;
    var injector = di_1.Injector.resolveAndCreate(providers);
    _platform = new PlatformRef_(injector, function () {
        _platform = null;
        _platformProviders = null;
    });
    _runPlatformInitializers(injector);
    return _platform;
}
function _runPlatformInitializers(injector) {
    var inits = injector.getOptional(application_tokens_1.PLATFORM_INITIALIZER);
    if (lang_1.isPresent(inits))
        inits.forEach(function (init) { return init(); });
}
/**
 * The Angular platform is the entry point for Angular on a web page. Each page
 * has exactly one platform, and services (such as reflection) which are common
 * to every Angular application running on the page are bound in its scope.
 *
 * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
 * explicitly by calling {@link platform}().
 */
var PlatformRef = (function () {
    function PlatformRef() {
    }
    Object.defineProperty(PlatformRef.prototype, "injector", {
        /**
         * Retrieve the platform {@link Injector}, which is the parent injector for
         * every Angular application on the page and provides singleton providers.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return PlatformRef;
})();
exports.PlatformRef = PlatformRef;
var PlatformRef_ = (function (_super) {
    __extends(PlatformRef_, _super);
    function PlatformRef_(_injector, _dispose) {
        _super.call(this);
        this._injector = _injector;
        this._dispose = _dispose;
        /** @internal */
        this._applications = [];
        /** @internal */
        this._disposeListeners = [];
    }
    PlatformRef_.prototype.registerDisposeListener = function (dispose) { this._disposeListeners.push(dispose); };
    Object.defineProperty(PlatformRef_.prototype, "injector", {
        get: function () { return this._injector; },
        enumerable: true,
        configurable: true
    });
    PlatformRef_.prototype.application = function (providers) {
        var app = this._initApp(createNgZone(), providers);
        return app;
    };
    PlatformRef_.prototype.asyncApplication = function (bindingFn, additionalProviders) {
        var _this = this;
        var zone = createNgZone();
        var completer = async_1.PromiseWrapper.completer();
        zone.run(function () {
            async_1.PromiseWrapper.then(bindingFn(zone), function (providers) {
                if (lang_1.isPresent(additionalProviders)) {
                    providers = collection_1.ListWrapper.concat(providers, additionalProviders);
                }
                completer.resolve(_this._initApp(zone, providers));
            });
        });
        return completer.promise;
    };
    PlatformRef_.prototype._initApp = function (zone, providers) {
        var _this = this;
        var injector;
        var app;
        zone.run(function () {
            providers = collection_1.ListWrapper.concat(providers, [
                di_1.provide(ng_zone_1.NgZone, { useValue: zone }),
                di_1.provide(ApplicationRef, { useFactory: function () { return app; }, deps: [] })
            ]);
            var exceptionHandler;
            try {
                injector = _this.injector.resolveAndCreateChild(providers);
                exceptionHandler = injector.get(exceptions_1.ExceptionHandler);
                zone.overrideOnErrorHandler(function (e, s) { return exceptionHandler.call(e, s); });
            }
            catch (e) {
                if (lang_1.isPresent(exceptionHandler)) {
                    exceptionHandler.call(e, e.stack);
                }
                else {
                    lang_1.print(e.toString());
                }
            }
        });
        app = new ApplicationRef_(this, zone, injector);
        this._applications.push(app);
        _runAppInitializers(injector);
        return app;
    };
    PlatformRef_.prototype.dispose = function () {
        collection_1.ListWrapper.clone(this._applications).forEach(function (app) { return app.dispose(); });
        this._disposeListeners.forEach(function (dispose) { return dispose(); });
        this._dispose();
    };
    /** @internal */
    PlatformRef_.prototype._applicationDisposed = function (app) { collection_1.ListWrapper.remove(this._applications, app); };
    return PlatformRef_;
})(PlatformRef);
exports.PlatformRef_ = PlatformRef_;
function _runAppInitializers(injector) {
    var inits = injector.getOptional(application_tokens_1.APP_INITIALIZER);
    if (lang_1.isPresent(inits))
        inits.forEach(function (init) { return init(); });
}
/**
 * A reference to an Angular application running on a page.
 *
 * For more about Angular applications, see the documentation for {@link bootstrap}.
 */
var ApplicationRef = (function () {
    function ApplicationRef() {
    }
    Object.defineProperty(ApplicationRef.prototype, "injector", {
        /**
         * Retrieve the application {@link Injector}.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "zone", {
        /**
         * Retrieve the application {@link NgZone}.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
        /**
         * Get a list of component types registered to this application.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return ApplicationRef;
})();
exports.ApplicationRef = ApplicationRef;
var ApplicationRef_ = (function (_super) {
    __extends(ApplicationRef_, _super);
    function ApplicationRef_(_platform, _zone, _injector) {
        var _this = this;
        _super.call(this);
        this._platform = _platform;
        this._zone = _zone;
        this._injector = _injector;
        /** @internal */
        this._bootstrapListeners = [];
        /** @internal */
        this._disposeListeners = [];
        /** @internal */
        this._rootComponents = [];
        /** @internal */
        this._rootComponentTypes = [];
        /** @internal */
        this._changeDetectorRefs = [];
        /** @internal */
        this._runningTick = false;
        /** @internal */
        this._enforceNoNewChanges = false;
        if (lang_1.isPresent(this._zone)) {
            async_1.ObservableWrapper.subscribe(this._zone.onTurnDone, function (_) { _this._zone.run(function () { _this.tick(); }); });
        }
        this._enforceNoNewChanges = lang_1.assertionsEnabled();
    }
    ApplicationRef_.prototype.registerBootstrapListener = function (listener) {
        this._bootstrapListeners.push(listener);
    };
    ApplicationRef_.prototype.registerDisposeListener = function (dispose) { this._disposeListeners.push(dispose); };
    ApplicationRef_.prototype.registerChangeDetector = function (changeDetector) {
        this._changeDetectorRefs.push(changeDetector);
    };
    ApplicationRef_.prototype.unregisterChangeDetector = function (changeDetector) {
        collection_1.ListWrapper.remove(this._changeDetectorRefs, changeDetector);
    };
    ApplicationRef_.prototype.bootstrap = function (componentType, providers) {
        var _this = this;
        var completer = async_1.PromiseWrapper.completer();
        this._zone.run(function () {
            var componentProviders = _componentProviders(componentType);
            if (lang_1.isPresent(providers)) {
                componentProviders.push(providers);
            }
            var exceptionHandler = _this._injector.get(exceptions_1.ExceptionHandler);
            _this._rootComponentTypes.push(componentType);
            try {
                var injector = _this._injector.resolveAndCreateChild(componentProviders);
                var compRefToken = injector.get(application_tokens_1.APP_COMPONENT_REF_PROMISE);
                var tick = function (componentRef) {
                    _this._loadComponent(componentRef);
                    completer.resolve(componentRef);
                };
                var tickResult = async_1.PromiseWrapper.then(compRefToken, tick);
                // THIS MUST ONLY RUN IN DART.
                // This is required to report an error when no components with a matching selector found.
                // Otherwise the promise will never be completed.
                // Doing this in JS causes an extra error message to appear.
                if (lang_1.IS_DART) {
                    async_1.PromiseWrapper.then(tickResult, function (_) { });
                }
                async_1.PromiseWrapper.then(tickResult, null, function (err, stackTrace) { return completer.reject(err, stackTrace); });
            }
            catch (e) {
                exceptionHandler.call(e, e.stack);
                completer.reject(e, e.stack);
            }
        });
        return completer.promise.then(function (_) {
            var c = _this._injector.get(console_1.Console);
            var modeDescription = lang_1.assertionsEnabled() ?
                "in the development mode. Call enableProdMode() to enable the production mode." :
                "in the production mode. Call enableDevMode() to enable the development mode.";
            c.log("Angular 2 is running " + modeDescription);
            return _;
        });
    };
    /** @internal */
    ApplicationRef_.prototype._loadComponent = function (ref) {
        var appChangeDetector = view_ref_1.internalView(ref.hostView).changeDetector;
        this._changeDetectorRefs.push(appChangeDetector.ref);
        this.tick();
        this._rootComponents.push(ref);
        this._bootstrapListeners.forEach(function (listener) { return listener(ref); });
    };
    /** @internal */
    ApplicationRef_.prototype._unloadComponent = function (ref) {
        if (!collection_1.ListWrapper.contains(this._rootComponents, ref)) {
            return;
        }
        this.unregisterChangeDetector(view_ref_1.internalView(ref.hostView).changeDetector.ref);
        collection_1.ListWrapper.remove(this._rootComponents, ref);
    };
    Object.defineProperty(ApplicationRef_.prototype, "injector", {
        get: function () { return this._injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "zone", {
        get: function () { return this._zone; },
        enumerable: true,
        configurable: true
    });
    ApplicationRef_.prototype.tick = function () {
        if (this._runningTick) {
            throw new exceptions_1.BaseException("ApplicationRef.tick is called recursively");
        }
        var s = ApplicationRef_._tickScope();
        try {
            this._runningTick = true;
            this._changeDetectorRefs.forEach(function (detector) { return detector.detectChanges(); });
            if (this._enforceNoNewChanges) {
                this._changeDetectorRefs.forEach(function (detector) { return detector.checkNoChanges(); });
            }
        }
        finally {
            this._runningTick = false;
            profile_1.wtfLeave(s);
        }
    };
    ApplicationRef_.prototype.dispose = function () {
        // TODO(alxhub): Dispose of the NgZone.
        collection_1.ListWrapper.clone(this._rootComponents).forEach(function (ref) { return ref.dispose(); });
        this._disposeListeners.forEach(function (dispose) { return dispose(); });
        this._platform._applicationDisposed(this);
    };
    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
        get: function () { return this._rootComponentTypes; },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    ApplicationRef_._tickScope = profile_1.wtfCreateScope('ApplicationRef#tick()');
    return ApplicationRef_;
})(ApplicationRef);
exports.ApplicationRef_ = ApplicationRef_;
},{"./application_tokens":4,"./profile/profile":80,"angular2/src/core/console":36,"angular2/src/core/di":38,"angular2/src/core/linker/dynamic_component_loader":52,"angular2/src/core/linker/view_ref":69,"angular2/src/core/testability/testability":88,"angular2/src/core/zone/ng_zone":92,"angular2/src/facade/async":93,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],4:[function(require,module,exports){
'use strict';var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
/**
 *  @internal
 */
exports.APP_COMPONENT_REF_PROMISE = lang_1.CONST_EXPR(new di_1.OpaqueToken('Promise<ComponentRef>'));
/**
 * An {@link angular2/di/OpaqueToken} representing the application root type in the {@link
 * Injector}.
 *
 * ```
 * @Component(...)
 * class MyApp {
 *   ...
 * }
 *
 * bootstrap(MyApp).then((appRef:ApplicationRef) {
 *   expect(appRef.injector.get(appComponentTypeToken)).toEqual(MyApp);
 * });
 *
 * ```
 */
exports.APP_COMPONENT = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppComponent'));
/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
 * using this token.
 */
exports.APP_ID = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppId'));
function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 */
exports.APP_ID_RANDOM_PROVIDER = lang_1.CONST_EXPR(new di_1.Provider(exports.APP_ID, { useFactory: _appIdRandomProviderFactory, deps: [] }));
function _randomChar() {
    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 */
exports.PLATFORM_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Initializer"));
/**
 * A function that will be executed when an application is initialized.
 */
exports.APP_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Initializer"));
/**
 * A token which indicates the root directory of the application
 */
exports.PACKAGE_ROOT_URL = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Packages Root URL"));
},{"angular2/src/core/di":38,"angular2/src/facade/lang":98}],5:[function(require,module,exports){
'use strict';/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */
var change_detection_1 = require('./change_detection/change_detection');
exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
exports.ExpressionChangedAfterItHasBeenCheckedException = change_detection_1.ExpressionChangedAfterItHasBeenCheckedException;
exports.ChangeDetectionError = change_detection_1.ChangeDetectionError;
exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
exports.WrappedValue = change_detection_1.WrappedValue;
exports.SimpleChange = change_detection_1.SimpleChange;
exports.IterableDiffers = change_detection_1.IterableDiffers;
exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
},{"./change_detection/change_detection":8}],6:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var collection_1 = require('angular2/src/facade/collection');
var change_detection_util_1 = require('./change_detection_util');
var change_detector_ref_1 = require('./change_detector_ref');
var exceptions_1 = require('./exceptions');
var constants_1 = require('./constants');
var profile_1 = require('../profile/profile');
var observable_facade_1 = require('./observable_facade');
var _scope_check = profile_1.wtfCreateScope("ChangeDetector#check(ascii id, bool throwOnChange)");
var _Context = (function () {
    function _Context(element, componentElement, context, locals, injector, expression) {
        this.element = element;
        this.componentElement = componentElement;
        this.context = context;
        this.locals = locals;
        this.injector = injector;
        this.expression = expression;
    }
    return _Context;
})();
var AbstractChangeDetector = (function () {
    function AbstractChangeDetector(id, dispatcher, numberOfPropertyProtoRecords, bindingTargets, directiveIndices, strategy) {
        this.id = id;
        this.dispatcher = dispatcher;
        this.numberOfPropertyProtoRecords = numberOfPropertyProtoRecords;
        this.bindingTargets = bindingTargets;
        this.directiveIndices = directiveIndices;
        this.strategy = strategy;
        this.contentChildren = [];
        this.viewChildren = [];
        // The names of the below fields must be kept in sync with codegen_name_util.ts or
        // change detection will fail.
        this.state = constants_1.ChangeDetectorState.NeverChecked;
        this.locals = null;
        this.mode = null;
        this.pipes = null;
        this.ref = new change_detector_ref_1.ChangeDetectorRef_(this);
    }
    AbstractChangeDetector.prototype.addContentChild = function (cd) {
        this.contentChildren.push(cd);
        cd.parent = this;
    };
    AbstractChangeDetector.prototype.removeContentChild = function (cd) { collection_1.ListWrapper.remove(this.contentChildren, cd); };
    AbstractChangeDetector.prototype.addViewChild = function (cd) {
        this.viewChildren.push(cd);
        cd.parent = this;
    };
    AbstractChangeDetector.prototype.removeViewChild = function (cd) { collection_1.ListWrapper.remove(this.viewChildren, cd); };
    AbstractChangeDetector.prototype.remove = function () { this.parent.removeContentChild(this); };
    AbstractChangeDetector.prototype.handleEvent = function (eventName, elIndex, locals) {
        var res = this.handleEventInternal(eventName, elIndex, locals);
        this.markPathToRootAsCheckOnce();
        return res;
    };
    AbstractChangeDetector.prototype.handleEventInternal = function (eventName, elIndex, locals) { return false; };
    AbstractChangeDetector.prototype.detectChanges = function () { this.runDetectChanges(false); };
    AbstractChangeDetector.prototype.checkNoChanges = function () {
        if (lang_1.assertionsEnabled()) {
            this.runDetectChanges(true);
        }
    };
    AbstractChangeDetector.prototype.runDetectChanges = function (throwOnChange) {
        if (this.mode === constants_1.ChangeDetectionStrategy.Detached ||
            this.mode === constants_1.ChangeDetectionStrategy.Checked || this.state === constants_1.ChangeDetectorState.Errored)
            return;
        var s = _scope_check(this.id, throwOnChange);
        this.detectChangesInRecords(throwOnChange);
        this._detectChangesContentChildren(throwOnChange);
        if (!throwOnChange)
            this.afterContentLifecycleCallbacks();
        this._detectChangesInViewChildren(throwOnChange);
        if (!throwOnChange)
            this.afterViewLifecycleCallbacks();
        if (this.mode === constants_1.ChangeDetectionStrategy.CheckOnce)
            this.mode = constants_1.ChangeDetectionStrategy.Checked;
        this.state = constants_1.ChangeDetectorState.CheckedBefore;
        profile_1.wtfLeave(s);
    };
    // This method is not intended to be overridden. Subclasses should instead provide an
    // implementation of `detectChangesInRecordsInternal` which does the work of detecting changes
    // and which this method will call.
    // This method expects that `detectChangesInRecordsInternal` will set the property
    // `this.propertyBindingIndex` to the propertyBindingIndex of the first proto record. This is to
    // facilitate error reporting.
    AbstractChangeDetector.prototype.detectChangesInRecords = function (throwOnChange) {
        if (!this.hydrated()) {
            this.throwDehydratedError();
        }
        try {
            this.detectChangesInRecordsInternal(throwOnChange);
        }
        catch (e) {
            // throwOnChange errors aren't counted as fatal errors.
            if (!(e instanceof exceptions_1.ExpressionChangedAfterItHasBeenCheckedException)) {
                this.state = constants_1.ChangeDetectorState.Errored;
            }
            this._throwError(e, e.stack);
        }
    };
    // Subclasses should override this method to perform any work necessary to detect and report
    // changes. For example, changes should be reported via `ChangeDetectionUtil.addChange`, lifecycle
    // methods should be called, etc.
    // This implementation should also set `this.propertyBindingIndex` to the propertyBindingIndex of
    // the
    // first proto record to facilitate error reporting. See {@link #detectChangesInRecords}.
    AbstractChangeDetector.prototype.detectChangesInRecordsInternal = function (throwOnChange) { };
    // This method is not intended to be overridden. Subclasses should instead provide an
    // implementation of `hydrateDirectives`.
    AbstractChangeDetector.prototype.hydrate = function (context, locals, directives, pipes) {
        this.mode = change_detection_util_1.ChangeDetectionUtil.changeDetectionMode(this.strategy);
        this.context = context;
        if (this.strategy === constants_1.ChangeDetectionStrategy.OnPushObserve) {
            this.observeComponent(context);
        }
        this.locals = locals;
        this.pipes = pipes;
        this.hydrateDirectives(directives);
        this.state = constants_1.ChangeDetectorState.NeverChecked;
    };
    // Subclasses should override this method to hydrate any directives.
    AbstractChangeDetector.prototype.hydrateDirectives = function (directives) { };
    // This method is not intended to be overridden. Subclasses should instead provide an
    // implementation of `dehydrateDirectives`.
    AbstractChangeDetector.prototype.dehydrate = function () {
        this.dehydrateDirectives(true);
        // This is an experimental feature. Works only in Dart.
        if (this.strategy === constants_1.ChangeDetectionStrategy.OnPushObserve) {
            this._unsubsribeFromObservables();
        }
        this.context = null;
        this.locals = null;
        this.pipes = null;
    };
    // Subclasses should override this method to dehydrate any directives. This method should reverse
    // any work done in `hydrateDirectives`.
    AbstractChangeDetector.prototype.dehydrateDirectives = function (destroyPipes) { };
    AbstractChangeDetector.prototype.hydrated = function () { return lang_1.isPresent(this.context); };
    AbstractChangeDetector.prototype.afterContentLifecycleCallbacks = function () {
        this.dispatcher.notifyAfterContentChecked();
        this.afterContentLifecycleCallbacksInternal();
    };
    AbstractChangeDetector.prototype.afterContentLifecycleCallbacksInternal = function () { };
    AbstractChangeDetector.prototype.afterViewLifecycleCallbacks = function () {
        this.dispatcher.notifyAfterViewChecked();
        this.afterViewLifecycleCallbacksInternal();
    };
    AbstractChangeDetector.prototype.afterViewLifecycleCallbacksInternal = function () { };
    /** @internal */
    AbstractChangeDetector.prototype._detectChangesContentChildren = function (throwOnChange) {
        var c = this.contentChildren;
        for (var i = 0; i < c.length; ++i) {
            c[i].runDetectChanges(throwOnChange);
        }
    };
    /** @internal */
    AbstractChangeDetector.prototype._detectChangesInViewChildren = function (throwOnChange) {
        var c = this.viewChildren;
        for (var i = 0; i < c.length; ++i) {
            c[i].runDetectChanges(throwOnChange);
        }
    };
    AbstractChangeDetector.prototype.markAsCheckOnce = function () { this.mode = constants_1.ChangeDetectionStrategy.CheckOnce; };
    AbstractChangeDetector.prototype.markPathToRootAsCheckOnce = function () {
        var c = this;
        while (lang_1.isPresent(c) && c.mode !== constants_1.ChangeDetectionStrategy.Detached) {
            if (c.mode === constants_1.ChangeDetectionStrategy.Checked)
                c.mode = constants_1.ChangeDetectionStrategy.CheckOnce;
            c = c.parent;
        }
    };
    // This is an experimental feature. Works only in Dart.
    AbstractChangeDetector.prototype._unsubsribeFromObservables = function () {
        if (lang_1.isPresent(this.subscriptions)) {
            for (var i = 0; i < this.subscriptions.length; ++i) {
                var s = this.subscriptions[i];
                if (lang_1.isPresent(this.subscriptions[i])) {
                    s.cancel();
                    this.subscriptions[i] = null;
                }
            }
        }
    };
    // This is an experimental feature. Works only in Dart.
    AbstractChangeDetector.prototype.observeValue = function (value, index) {
        var _this = this;
        if (observable_facade_1.isObservable(value)) {
            this._createArrayToStoreObservables();
            if (lang_1.isBlank(this.subscriptions[index])) {
                this.streams[index] = value.changes;
                this.subscriptions[index] = value.changes.listen(function (_) { return _this.ref.markForCheck(); });
            }
            else if (this.streams[index] !== value.changes) {
                this.subscriptions[index].cancel();
                this.streams[index] = value.changes;
                this.subscriptions[index] = value.changes.listen(function (_) { return _this.ref.markForCheck(); });
            }
        }
        return value;
    };
    // This is an experimental feature. Works only in Dart.
    AbstractChangeDetector.prototype.observeDirective = function (value, index) {
        var _this = this;
        if (observable_facade_1.isObservable(value)) {
            this._createArrayToStoreObservables();
            var arrayIndex = this.numberOfPropertyProtoRecords + index + 2; // +1 is component
            this.streams[arrayIndex] = value.changes;
            this.subscriptions[arrayIndex] = value.changes.listen(function (_) { return _this.ref.markForCheck(); });
        }
        return value;
    };
    // This is an experimental feature. Works only in Dart.
    AbstractChangeDetector.prototype.observeComponent = function (value) {
        var _this = this;
        if (observable_facade_1.isObservable(value)) {
            this._createArrayToStoreObservables();
            var index = this.numberOfPropertyProtoRecords + 1;
            this.streams[index] = value.changes;
            this.subscriptions[index] = value.changes.listen(function (_) { return _this.ref.markForCheck(); });
        }
        return value;
    };
    AbstractChangeDetector.prototype._createArrayToStoreObservables = function () {
        if (lang_1.isBlank(this.subscriptions)) {
            this.subscriptions = collection_1.ListWrapper.createFixedSize(this.numberOfPropertyProtoRecords +
                this.directiveIndices.length + 2);
            this.streams = collection_1.ListWrapper.createFixedSize(this.numberOfPropertyProtoRecords +
                this.directiveIndices.length + 2);
        }
    };
    AbstractChangeDetector.prototype.getDirectiveFor = function (directives, index) {
        return directives.getDirectiveFor(this.directiveIndices[index]);
    };
    AbstractChangeDetector.prototype.getDetectorFor = function (directives, index) {
        return directives.getDetectorFor(this.directiveIndices[index]);
    };
    AbstractChangeDetector.prototype.notifyDispatcher = function (value) {
        this.dispatcher.notifyOnBinding(this._currentBinding(), value);
    };
    AbstractChangeDetector.prototype.logBindingUpdate = function (value) {
        this.dispatcher.logBindingUpdate(this._currentBinding(), value);
    };
    AbstractChangeDetector.prototype.addChange = function (changes, oldValue, newValue) {
        if (lang_1.isBlank(changes)) {
            changes = {};
        }
        changes[this._currentBinding().name] = change_detection_util_1.ChangeDetectionUtil.simpleChange(oldValue, newValue);
        return changes;
    };
    AbstractChangeDetector.prototype._throwError = function (exception, stack) {
        var error;
        try {
            var c = this.dispatcher.getDebugContext(this._currentBinding().elementIndex, null);
            var context = lang_1.isPresent(c) ? new _Context(c.element, c.componentElement, c.context, c.locals, c.injector, this._currentBinding().debug) :
                null;
            error = new exceptions_1.ChangeDetectionError(this._currentBinding().debug, exception, stack, context);
        }
        catch (e) {
            // if an error happens during getting the debug context, we throw a ChangeDetectionError
            // without the extra information.
            error = new exceptions_1.ChangeDetectionError(null, exception, stack, null);
        }
        throw error;
    };
    AbstractChangeDetector.prototype.throwOnChangeError = function (oldValue, newValue) {
        throw new exceptions_1.ExpressionChangedAfterItHasBeenCheckedException(this._currentBinding().debug, oldValue, newValue, null);
    };
    AbstractChangeDetector.prototype.throwDehydratedError = function () { throw new exceptions_1.DehydratedException(); };
    AbstractChangeDetector.prototype._currentBinding = function () {
        return this.bindingTargets[this.propertyBindingIndex];
    };
    return AbstractChangeDetector;
})();
exports.AbstractChangeDetector = AbstractChangeDetector;
},{"../profile/profile":80,"./change_detection_util":10,"./change_detector_ref":11,"./constants":16,"./exceptions":24,"./observable_facade":27,"angular2/src/facade/collection":94,"angular2/src/facade/lang":98}],7:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var DIRECTIVE_LIFECYCLE = "directiveLifecycle";
var BINDING = "native";
var DIRECTIVE = "directive";
var ELEMENT_PROPERTY = "elementProperty";
var ELEMENT_ATTRIBUTE = "elementAttribute";
var ELEMENT_CLASS = "elementClass";
var ELEMENT_STYLE = "elementStyle";
var TEXT_NODE = "textNode";
var EVENT = "event";
var HOST_EVENT = "hostEvent";
var BindingTarget = (function () {
    function BindingTarget(mode, elementIndex, name, unit, debug) {
        this.mode = mode;
        this.elementIndex = elementIndex;
        this.name = name;
        this.unit = unit;
        this.debug = debug;
    }
    BindingTarget.prototype.isDirective = function () { return this.mode === DIRECTIVE; };
    BindingTarget.prototype.isElementProperty = function () { return this.mode === ELEMENT_PROPERTY; };
    BindingTarget.prototype.isElementAttribute = function () { return this.mode === ELEMENT_ATTRIBUTE; };
    BindingTarget.prototype.isElementClass = function () { return this.mode === ELEMENT_CLASS; };
    BindingTarget.prototype.isElementStyle = function () { return this.mode === ELEMENT_STYLE; };
    BindingTarget.prototype.isTextNode = function () { return this.mode === TEXT_NODE; };
    return BindingTarget;
})();
exports.BindingTarget = BindingTarget;
var BindingRecord = (function () {
    function BindingRecord(mode, target, implicitReceiver, ast, setter, lifecycleEvent, directiveRecord) {
        this.mode = mode;
        this.target = target;
        this.implicitReceiver = implicitReceiver;
        this.ast = ast;
        this.setter = setter;
        this.lifecycleEvent = lifecycleEvent;
        this.directiveRecord = directiveRecord;
    }
    BindingRecord.prototype.isDirectiveLifecycle = function () { return this.mode === DIRECTIVE_LIFECYCLE; };
    BindingRecord.prototype.callOnChanges = function () {
        return lang_1.isPresent(this.directiveRecord) && this.directiveRecord.callOnChanges;
    };
    BindingRecord.prototype.isDefaultChangeDetection = function () {
        return lang_1.isBlank(this.directiveRecord) || this.directiveRecord.isDefaultChangeDetection();
    };
    BindingRecord.createDirectiveDoCheck = function (directiveRecord) {
        return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "DoCheck", directiveRecord);
    };
    BindingRecord.createDirectiveOnInit = function (directiveRecord) {
        return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "OnInit", directiveRecord);
    };
    BindingRecord.createDirectiveOnChanges = function (directiveRecord) {
        return new BindingRecord(DIRECTIVE_LIFECYCLE, null, 0, null, null, "OnChanges", directiveRecord);
    };
    BindingRecord.createForDirective = function (ast, propertyName, setter, directiveRecord) {
        var elementIndex = directiveRecord.directiveIndex.elementIndex;
        var t = new BindingTarget(DIRECTIVE, elementIndex, propertyName, null, ast.toString());
        return new BindingRecord(DIRECTIVE, t, 0, ast, setter, null, directiveRecord);
    };
    BindingRecord.createForElementProperty = function (ast, elementIndex, propertyName) {
        var t = new BindingTarget(ELEMENT_PROPERTY, elementIndex, propertyName, null, ast.toString());
        return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementAttribute = function (ast, elementIndex, attributeName) {
        var t = new BindingTarget(ELEMENT_ATTRIBUTE, elementIndex, attributeName, null, ast.toString());
        return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementClass = function (ast, elementIndex, className) {
        var t = new BindingTarget(ELEMENT_CLASS, elementIndex, className, null, ast.toString());
        return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForElementStyle = function (ast, elementIndex, styleName, unit) {
        var t = new BindingTarget(ELEMENT_STYLE, elementIndex, styleName, unit, ast.toString());
        return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForHostProperty = function (directiveIndex, ast, propertyName) {
        var t = new BindingTarget(ELEMENT_PROPERTY, directiveIndex.elementIndex, propertyName, null, ast.toString());
        return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostAttribute = function (directiveIndex, ast, attributeName) {
        var t = new BindingTarget(ELEMENT_ATTRIBUTE, directiveIndex.elementIndex, attributeName, null, ast.toString());
        return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostClass = function (directiveIndex, ast, className) {
        var t = new BindingTarget(ELEMENT_CLASS, directiveIndex.elementIndex, className, null, ast.toString());
        return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForHostStyle = function (directiveIndex, ast, styleName, unit) {
        var t = new BindingTarget(ELEMENT_STYLE, directiveIndex.elementIndex, styleName, unit, ast.toString());
        return new BindingRecord(BINDING, t, directiveIndex, ast, null, null, null);
    };
    BindingRecord.createForTextNode = function (ast, elementIndex) {
        var t = new BindingTarget(TEXT_NODE, elementIndex, null, null, ast.toString());
        return new BindingRecord(BINDING, t, 0, ast, null, null, null);
    };
    BindingRecord.createForEvent = function (ast, eventName, elementIndex) {
        var t = new BindingTarget(EVENT, elementIndex, eventName, null, ast.toString());
        return new BindingRecord(EVENT, t, 0, ast, null, null, null);
    };
    BindingRecord.createForHostEvent = function (ast, eventName, directiveRecord) {
        var directiveIndex = directiveRecord.directiveIndex;
        var t = new BindingTarget(HOST_EVENT, directiveIndex.elementIndex, eventName, null, ast.toString());
        return new BindingRecord(HOST_EVENT, t, directiveIndex, ast, null, null, directiveRecord);
    };
    return BindingRecord;
})();
exports.BindingRecord = BindingRecord;
},{"angular2/src/facade/lang":98}],8:[function(require,module,exports){
'use strict';var iterable_differs_1 = require('./differs/iterable_differs');
var default_iterable_differ_1 = require('./differs/default_iterable_differ');
var keyvalue_differs_1 = require('./differs/keyvalue_differs');
var default_keyvalue_differ_1 = require('./differs/default_keyvalue_differ');
var lang_1 = require('angular2/src/facade/lang');
var ast_1 = require('./parser/ast');
exports.ASTWithSource = ast_1.ASTWithSource;
exports.AST = ast_1.AST;
exports.AstTransformer = ast_1.AstTransformer;
exports.PropertyRead = ast_1.PropertyRead;
exports.LiteralArray = ast_1.LiteralArray;
exports.ImplicitReceiver = ast_1.ImplicitReceiver;
var lexer_1 = require('./parser/lexer');
exports.Lexer = lexer_1.Lexer;
var parser_1 = require('./parser/parser');
exports.Parser = parser_1.Parser;
var locals_1 = require('./parser/locals');
exports.Locals = locals_1.Locals;
var exceptions_1 = require('./exceptions');
exports.DehydratedException = exceptions_1.DehydratedException;
exports.ExpressionChangedAfterItHasBeenCheckedException = exceptions_1.ExpressionChangedAfterItHasBeenCheckedException;
exports.ChangeDetectionError = exceptions_1.ChangeDetectionError;
var interfaces_1 = require('./interfaces');
exports.ChangeDetectorDefinition = interfaces_1.ChangeDetectorDefinition;
exports.DebugContext = interfaces_1.DebugContext;
exports.ChangeDetectorGenConfig = interfaces_1.ChangeDetectorGenConfig;
var constants_1 = require('./constants');
exports.ChangeDetectionStrategy = constants_1.ChangeDetectionStrategy;
exports.CHANGE_DETECTION_STRATEGY_VALUES = constants_1.CHANGE_DETECTION_STRATEGY_VALUES;
var proto_change_detector_1 = require('./proto_change_detector');
exports.DynamicProtoChangeDetector = proto_change_detector_1.DynamicProtoChangeDetector;
var jit_proto_change_detector_1 = require('./jit_proto_change_detector');
exports.JitProtoChangeDetector = jit_proto_change_detector_1.JitProtoChangeDetector;
var binding_record_1 = require('./binding_record');
exports.BindingRecord = binding_record_1.BindingRecord;
exports.BindingTarget = binding_record_1.BindingTarget;
var directive_record_1 = require('./directive_record');
exports.DirectiveIndex = directive_record_1.DirectiveIndex;
exports.DirectiveRecord = directive_record_1.DirectiveRecord;
var dynamic_change_detector_1 = require('./dynamic_change_detector');
exports.DynamicChangeDetector = dynamic_change_detector_1.DynamicChangeDetector;
var change_detector_ref_1 = require('./change_detector_ref');
exports.ChangeDetectorRef = change_detector_ref_1.ChangeDetectorRef;
var iterable_differs_2 = require('./differs/iterable_differs');
exports.IterableDiffers = iterable_differs_2.IterableDiffers;
var keyvalue_differs_2 = require('./differs/keyvalue_differs');
exports.KeyValueDiffers = keyvalue_differs_2.KeyValueDiffers;
var change_detection_util_1 = require('./change_detection_util');
exports.WrappedValue = change_detection_util_1.WrappedValue;
exports.SimpleChange = change_detection_util_1.SimpleChange;
/**
 * Structural diffing for `Object`s and `Map`s.
 */
exports.keyValDiff = lang_1.CONST_EXPR([lang_1.CONST_EXPR(new default_keyvalue_differ_1.DefaultKeyValueDifferFactory())]);
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 */
exports.iterableDiff = lang_1.CONST_EXPR([lang_1.CONST_EXPR(new default_iterable_differ_1.DefaultIterableDifferFactory())]);
exports.defaultIterableDiffers = lang_1.CONST_EXPR(new iterable_differs_1.IterableDiffers(exports.iterableDiff));
exports.defaultKeyValueDiffers = lang_1.CONST_EXPR(new keyvalue_differs_1.KeyValueDiffers(exports.keyValDiff));
},{"./binding_record":7,"./change_detection_util":10,"./change_detector_ref":11,"./constants":16,"./differs/default_iterable_differ":17,"./differs/default_keyvalue_differ":18,"./differs/iterable_differs":19,"./differs/keyvalue_differs":20,"./directive_record":21,"./dynamic_change_detector":22,"./exceptions":24,"./interfaces":25,"./jit_proto_change_detector":26,"./parser/ast":28,"./parser/lexer":29,"./parser/locals":30,"./parser/parser":31,"./proto_change_detector":34,"angular2/src/facade/lang":98}],9:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var abstract_change_detector_1 = require('./abstract_change_detector');
var change_detection_util_1 = require('./change_detection_util');
var proto_record_1 = require('./proto_record');
var codegen_name_util_1 = require('./codegen_name_util');
var codegen_logic_util_1 = require('./codegen_logic_util');
var codegen_facade_1 = require('./codegen_facade');
var constants_1 = require('./constants');
var proto_change_detector_1 = require('./proto_change_detector');
/**
 * The code generator takes a list of proto records and creates a function/class
 * that "emulates" what the developer would write by hand to implement the same
 * kind of behaviour.
 *
 * This code should be kept in sync with the Dart transformer's
 * `angular2.transform.template_compiler.change_detector_codegen` library. If you make updates
 * here, please make equivalent changes there.
*/
var IS_CHANGED_LOCAL = "isChanged";
var CHANGES_LOCAL = "changes";
var ChangeDetectorJITGenerator = (function () {
    function ChangeDetectorJITGenerator(definition, changeDetectionUtilVarName, abstractChangeDetectorVarName, changeDetectorStateVarName) {
        this.changeDetectionUtilVarName = changeDetectionUtilVarName;
        this.abstractChangeDetectorVarName = abstractChangeDetectorVarName;
        this.changeDetectorStateVarName = changeDetectorStateVarName;
        var propertyBindingRecords = proto_change_detector_1.createPropertyRecords(definition);
        var eventBindingRecords = proto_change_detector_1.createEventRecords(definition);
        var propertyBindingTargets = definition.bindingRecords.map(function (b) { return b.target; });
        this.id = definition.id;
        this.changeDetectionStrategy = definition.strategy;
        this.genConfig = definition.genConfig;
        this.records = propertyBindingRecords;
        this.propertyBindingTargets = propertyBindingTargets;
        this.eventBindings = eventBindingRecords;
        this.directiveRecords = definition.directiveRecords;
        this._names = new codegen_name_util_1.CodegenNameUtil(this.records, this.eventBindings, this.directiveRecords, this.changeDetectionUtilVarName);
        this._logic =
            new codegen_logic_util_1.CodegenLogicUtil(this._names, this.changeDetectionUtilVarName, this.changeDetectorStateVarName, this.changeDetectionStrategy);
        this.typeName = codegen_name_util_1.sanitizeName("ChangeDetector_" + this.id);
    }
    ChangeDetectorJITGenerator.prototype.generate = function () {
        var factorySource = "\n      " + this.generateSource() + "\n      return function(dispatcher) {\n        return new " + this.typeName + "(dispatcher);\n      }\n    ";
        return new Function(this.abstractChangeDetectorVarName, this.changeDetectionUtilVarName, this.changeDetectorStateVarName, factorySource)(abstract_change_detector_1.AbstractChangeDetector, change_detection_util_1.ChangeDetectionUtil, constants_1.ChangeDetectorState);
    };
    ChangeDetectorJITGenerator.prototype.generateSource = function () {
        return "\n      var " + this.typeName + " = function " + this.typeName + "(dispatcher) {\n        " + this.abstractChangeDetectorVarName + ".call(\n            this, " + JSON.stringify(this.id) + ", dispatcher, " + this.records.length + ",\n            " + this.typeName + ".gen_propertyBindingTargets, " + this.typeName + ".gen_directiveIndices,\n            " + codegen_facade_1.codify(this.changeDetectionStrategy) + ");\n        this.dehydrateDirectives(false);\n      }\n\n      " + this.typeName + ".prototype = Object.create(" + this.abstractChangeDetectorVarName + ".prototype);\n\n      " + this.typeName + ".prototype.detectChangesInRecordsInternal = function(throwOnChange) {\n        " + this._names.genInitLocals() + "\n        var " + IS_CHANGED_LOCAL + " = false;\n        var " + CHANGES_LOCAL + " = null;\n\n        " + this._genAllRecords(this.records) + "\n      }\n\n      " + this._maybeGenHandleEventInternal() + "\n\n      " + this._maybeGenAfterContentLifecycleCallbacks() + "\n\n      " + this._maybeGenAfterViewLifecycleCallbacks() + "\n\n      " + this._maybeGenHydrateDirectives() + "\n\n      " + this._maybeGenDehydrateDirectives() + "\n\n      " + this._genPropertyBindingTargets() + "\n\n      " + this._genDirectiveIndices() + "\n    ";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genPropertyBindingTargets = function () {
        var targets = this._logic.genPropertyBindingTargets(this.propertyBindingTargets, this.genConfig.genDebugInfo);
        return this.typeName + ".gen_propertyBindingTargets = " + targets + ";";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genDirectiveIndices = function () {
        var indices = this._logic.genDirectiveIndices(this.directiveRecords);
        return this.typeName + ".gen_directiveIndices = " + indices + ";";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._maybeGenHandleEventInternal = function () {
        var _this = this;
        if (this.eventBindings.length > 0) {
            var handlers = this.eventBindings.map(function (eb) { return _this._genEventBinding(eb); }).join("\n");
            return "\n        " + this.typeName + ".prototype.handleEventInternal = function(eventName, elIndex, locals) {\n          var " + this._names.getPreventDefaultAccesor() + " = false;\n          " + this._names.genInitEventLocals() + "\n          " + handlers + "\n          return " + this._names.getPreventDefaultAccesor() + ";\n        }\n      ";
        }
        else {
            return '';
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genEventBinding = function (eb) {
        var _this = this;
        var codes = [];
        this._endOfBlockIdxs = [];
        collection_1.ListWrapper.forEachWithIndex(eb.records, function (r, i) {
            var code;
            if (r.isConditionalSkipRecord()) {
                code = _this._genConditionalSkip(r, _this._names.getEventLocalName(eb, i));
            }
            else if (r.isUnconditionalSkipRecord()) {
                code = _this._genUnconditionalSkip(r);
            }
            else {
                code = _this._genEventBindingEval(eb, r);
            }
            code += _this._genEndOfSkipBlock(i);
            codes.push(code);
        });
        return "\n    if (eventName === \"" + eb.eventName + "\" && elIndex === " + eb.elIndex + ") {\n      " + codes.join("\n") + "\n    }";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genEventBindingEval = function (eb, r) {
        if (r.lastInBinding) {
            var evalRecord = this._logic.genEventBindingEvalValue(eb, r);
            var markPath = this._genMarkPathToRootAsCheckOnce(r);
            var prevDefault = this._genUpdatePreventDefault(eb, r);
            return evalRecord + "\n" + markPath + "\n" + prevDefault;
        }
        else {
            return this._logic.genEventBindingEvalValue(eb, r);
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genMarkPathToRootAsCheckOnce = function (r) {
        var br = r.bindingRecord;
        if (br.isDefaultChangeDetection()) {
            return "";
        }
        else {
            return this._names.getDetectorName(br.directiveRecord.directiveIndex) + ".markPathToRootAsCheckOnce();";
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genUpdatePreventDefault = function (eb, r) {
        var local = this._names.getEventLocalName(eb, r.selfIndex);
        return "if (" + local + " === false) { " + this._names.getPreventDefaultAccesor() + " = true};";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._maybeGenDehydrateDirectives = function () {
        var destroyPipesCode = this._names.genPipeOnDestroy();
        if (destroyPipesCode) {
            destroyPipesCode = "if (destroyPipes) { " + destroyPipesCode + " }";
        }
        var dehydrateFieldsCode = this._names.genDehydrateFields();
        if (!destroyPipesCode && !dehydrateFieldsCode)
            return '';
        return this.typeName + ".prototype.dehydrateDirectives = function(destroyPipes) {\n        " + destroyPipesCode + "\n        " + dehydrateFieldsCode + "\n    }";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._maybeGenHydrateDirectives = function () {
        var hydrateDirectivesCode = this._logic.genHydrateDirectives(this.directiveRecords);
        var hydrateDetectorsCode = this._logic.genHydrateDetectors(this.directiveRecords);
        if (!hydrateDirectivesCode && !hydrateDetectorsCode)
            return '';
        return this.typeName + ".prototype.hydrateDirectives = function(directives) {\n      " + hydrateDirectivesCode + "\n      " + hydrateDetectorsCode + "\n    }";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._maybeGenAfterContentLifecycleCallbacks = function () {
        var notifications = this._logic.genContentLifecycleCallbacks(this.directiveRecords);
        if (notifications.length > 0) {
            var directiveNotifications = notifications.join("\n");
            return "\n        " + this.typeName + ".prototype.afterContentLifecycleCallbacksInternal = function() {\n          " + directiveNotifications + "\n        }\n      ";
        }
        else {
            return '';
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._maybeGenAfterViewLifecycleCallbacks = function () {
        var notifications = this._logic.genViewLifecycleCallbacks(this.directiveRecords);
        if (notifications.length > 0) {
            var directiveNotifications = notifications.join("\n");
            return "\n        " + this.typeName + ".prototype.afterViewLifecycleCallbacksInternal = function() {\n          " + directiveNotifications + "\n        }\n      ";
        }
        else {
            return '';
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genAllRecords = function (rs) {
        var codes = [];
        this._endOfBlockIdxs = [];
        for (var i = 0; i < rs.length; i++) {
            var code = void 0;
            var r = rs[i];
            if (r.isLifeCycleRecord()) {
                code = this._genDirectiveLifecycle(r);
            }
            else if (r.isPipeRecord()) {
                code = this._genPipeCheck(r);
            }
            else if (r.isConditionalSkipRecord()) {
                code = this._genConditionalSkip(r, this._names.getLocalName(r.contextIndex));
            }
            else if (r.isUnconditionalSkipRecord()) {
                code = this._genUnconditionalSkip(r);
            }
            else {
                code = this._genReferenceCheck(r);
            }
            code = "\n        " + this._maybeFirstInBinding(r) + "\n        " + code + "\n        " + this._maybeGenLastInDirective(r) + "\n        " + this._genEndOfSkipBlock(i) + "\n      ";
            codes.push(code);
        }
        return codes.join("\n");
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genConditionalSkip = function (r, condition) {
        var maybeNegate = r.mode === proto_record_1.RecordType.SkipRecordsIf ? '!' : '';
        this._endOfBlockIdxs.push(r.fixedArgs[0] - 1);
        return "if (" + maybeNegate + condition + ") {";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genUnconditionalSkip = function (r) {
        this._endOfBlockIdxs.pop();
        this._endOfBlockIdxs.push(r.fixedArgs[0] - 1);
        return "} else {";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genEndOfSkipBlock = function (protoIndex) {
        if (!collection_1.ListWrapper.isEmpty(this._endOfBlockIdxs)) {
            var endOfBlock = collection_1.ListWrapper.last(this._endOfBlockIdxs);
            if (protoIndex === endOfBlock) {
                this._endOfBlockIdxs.pop();
                return '}';
            }
        }
        return '';
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genDirectiveLifecycle = function (r) {
        if (r.name === "DoCheck") {
            return this._genOnCheck(r);
        }
        else if (r.name === "OnInit") {
            return this._genOnInit(r);
        }
        else if (r.name === "OnChanges") {
            return this._genOnChange(r);
        }
        else {
            throw new exceptions_1.BaseException("Unknown lifecycle event '" + r.name + "'");
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genPipeCheck = function (r) {
        var _this = this;
        var context = this._names.getLocalName(r.contextIndex);
        var argString = r.args.map(function (arg) { return _this._names.getLocalName(arg); }).join(", ");
        var oldValue = this._names.getFieldName(r.selfIndex);
        var newValue = this._names.getLocalName(r.selfIndex);
        var pipe = this._names.getPipeName(r.selfIndex);
        var pipeName = r.name;
        var init = "\n      if (" + pipe + " === " + this.changeDetectionUtilVarName + ".uninitialized) {\n        " + pipe + " = " + this._names.getPipesAccessorName() + ".get('" + pipeName + "');\n      }\n    ";
        var read = newValue + " = " + pipe + ".pipe.transform(" + context + ", [" + argString + "]);";
        var contexOrArgCheck = r.args.map(function (a) { return _this._names.getChangeName(a); });
        contexOrArgCheck.push(this._names.getChangeName(r.contextIndex));
        var condition = "!" + pipe + ".pure || (" + contexOrArgCheck.join(" || ") + ")";
        var check = "\n      if (" + this.changeDetectionUtilVarName + ".looseNotIdentical(" + oldValue + ", " + newValue + ")) {\n        " + newValue + " = " + this.changeDetectionUtilVarName + ".unwrapValue(" + newValue + ")\n        " + this._genChangeMarker(r) + "\n        " + this._genUpdateDirectiveOrElement(r) + "\n        " + this._genAddToChanges(r) + "\n        " + oldValue + " = " + newValue + ";\n      }\n    ";
        var genCode = r.shouldBeChecked() ? "" + read + check : read;
        if (r.isUsedByOtherRecord()) {
            return init + " if (" + condition + ") { " + genCode + " } else { " + newValue + " = " + oldValue + "; }";
        }
        else {
            return init + " if (" + condition + ") { " + genCode + " }";
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genReferenceCheck = function (r) {
        var _this = this;
        var oldValue = this._names.getFieldName(r.selfIndex);
        var newValue = this._names.getLocalName(r.selfIndex);
        var read = "\n      " + this._logic.genPropertyBindingEvalValue(r) + "\n    ";
        var check = "\n      if (" + this.changeDetectionUtilVarName + ".looseNotIdentical(" + oldValue + ", " + newValue + ")) {\n        " + this._genChangeMarker(r) + "\n        " + this._genUpdateDirectiveOrElement(r) + "\n        " + this._genAddToChanges(r) + "\n        " + oldValue + " = " + newValue + ";\n      }\n    ";
        var genCode = r.shouldBeChecked() ? "" + read + check : read;
        if (r.isPureFunction()) {
            var condition = r.args.map(function (a) { return _this._names.getChangeName(a); }).join(" || ");
            if (r.isUsedByOtherRecord()) {
                return "if (" + condition + ") { " + genCode + " } else { " + newValue + " = " + oldValue + "; }";
            }
            else {
                return "if (" + condition + ") { " + genCode + " }";
            }
        }
        else {
            return genCode;
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genChangeMarker = function (r) {
        return r.argumentToPureFunction ? this._names.getChangeName(r.selfIndex) + " = true" : "";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genUpdateDirectiveOrElement = function (r) {
        if (!r.lastInBinding)
            return "";
        var newValue = this._names.getLocalName(r.selfIndex);
        var oldValue = this._names.getFieldName(r.selfIndex);
        var notifyDebug = this.genConfig.logBindingUpdate ? "this.logBindingUpdate(" + newValue + ");" : "";
        var br = r.bindingRecord;
        if (br.target.isDirective()) {
            var directiveProperty = this._names.getDirectiveName(br.directiveRecord.directiveIndex) + "." + br.target.name;
            return "\n        " + this._genThrowOnChangeCheck(oldValue, newValue) + "\n        " + directiveProperty + " = " + newValue + ";\n        " + notifyDebug + "\n        " + IS_CHANGED_LOCAL + " = true;\n      ";
        }
        else {
            return "\n        " + this._genThrowOnChangeCheck(oldValue, newValue) + "\n        this.notifyDispatcher(" + newValue + ");\n        " + notifyDebug + "\n      ";
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genThrowOnChangeCheck = function (oldValue, newValue) {
        if (lang_1.assertionsEnabled()) {
            return "\n        if(throwOnChange) {\n          this.throwOnChangeError(" + oldValue + ", " + newValue + ");\n        }\n        ";
        }
        else {
            return '';
        }
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genAddToChanges = function (r) {
        var newValue = this._names.getLocalName(r.selfIndex);
        var oldValue = this._names.getFieldName(r.selfIndex);
        if (!r.bindingRecord.callOnChanges())
            return "";
        return CHANGES_LOCAL + " = this.addChange(" + CHANGES_LOCAL + ", " + oldValue + ", " + newValue + ");";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._maybeFirstInBinding = function (r) {
        var prev = change_detection_util_1.ChangeDetectionUtil.protoByIndex(this.records, r.selfIndex - 1);
        var firstInBinding = lang_1.isBlank(prev) || prev.bindingRecord !== r.bindingRecord;
        return firstInBinding && !r.bindingRecord.isDirectiveLifecycle() ?
            this._names.getPropertyBindingIndex() + " = " + r.propertyBindingIndex + ";" :
            '';
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._maybeGenLastInDirective = function (r) {
        if (!r.lastInDirective)
            return "";
        return "\n      " + CHANGES_LOCAL + " = null;\n      " + this._genNotifyOnPushDetectors(r) + "\n      " + IS_CHANGED_LOCAL + " = false;\n    ";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genOnCheck = function (r) {
        var br = r.bindingRecord;
        return "if (!throwOnChange) " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngDoCheck();";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genOnInit = function (r) {
        var br = r.bindingRecord;
        return "if (!throwOnChange && " + this._names.getStateName() + " === " + this.changeDetectorStateVarName + ".NeverChecked) " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngOnInit();";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genOnChange = function (r) {
        var br = r.bindingRecord;
        return "if (!throwOnChange && " + CHANGES_LOCAL + ") " + this._names.getDirectiveName(br.directiveRecord.directiveIndex) + ".ngOnChanges(" + CHANGES_LOCAL + ");";
    };
    /** @internal */
    ChangeDetectorJITGenerator.prototype._genNotifyOnPushDetectors = function (r) {
        var br = r.bindingRecord;
        if (!r.lastInDirective || br.isDefaultChangeDetection())
            return "";
        var retVal = "\n      if(" + IS_CHANGED_LOCAL + ") {\n        " + this._names.getDetectorName(br.directiveRecord.directiveIndex) + ".markAsCheckOnce();\n      }\n    ";
        return retVal;
    };
    return ChangeDetectorJITGenerator;
})();
exports.ChangeDetectorJITGenerator = ChangeDetectorJITGenerator;
},{"./abstract_change_detector":6,"./change_detection_util":10,"./codegen_facade":13,"./codegen_logic_util":14,"./codegen_name_util":15,"./constants":16,"./proto_change_detector":34,"./proto_record":35,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],10:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var constants_1 = require('./constants');
var pipe_lifecycle_reflector_1 = require('./pipe_lifecycle_reflector');
var binding_record_1 = require('./binding_record');
var directive_record_1 = require('./directive_record');
/**
 * Indicates that the result of a {@link PipeMetadata} transformation has changed even though the
 * reference
 * has not changed.
 *
 * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
 *
 * Example:
 *
 * ```
 * if (this._latestValue === this._latestReturnedValue) {
 *    return this._latestReturnedValue;
 *  } else {
 *    this._latestReturnedValue = this._latestValue;
 *    return WrappedValue.wrap(this._latestValue); // this will force update
 *  }
 * ```
 */
var WrappedValue = (function () {
    function WrappedValue(wrapped) {
        this.wrapped = wrapped;
    }
    WrappedValue.wrap = function (value) {
        var w = _wrappedValues[_wrappedIndex++ % 5];
        w.wrapped = value;
        return w;
    };
    return WrappedValue;
})();
exports.WrappedValue = WrappedValue;
var _wrappedValues = [
    new WrappedValue(null),
    new WrappedValue(null),
    new WrappedValue(null),
    new WrappedValue(null),
    new WrappedValue(null)
];
var _wrappedIndex = 0;
/**
 * Represents a basic change from a previous to a new value.
 */
var SimpleChange = (function () {
    function SimpleChange(previousValue, currentValue) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
    }
    /**
     * Check whether the new value is the first value assigned.
     */
    SimpleChange.prototype.isFirstChange = function () { return this.previousValue === ChangeDetectionUtil.uninitialized; };
    return SimpleChange;
})();
exports.SimpleChange = SimpleChange;
var _simpleChangesIndex = 0;
var _simpleChanges = [
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null),
    new SimpleChange(null, null)
];
function _simpleChange(previousValue, currentValue) {
    var index = _simpleChangesIndex++ % 20;
    var s = _simpleChanges[index];
    s.previousValue = previousValue;
    s.currentValue = currentValue;
    return s;
}
/* tslint:disable:requireParameterType */
var ChangeDetectionUtil = (function () {
    function ChangeDetectionUtil() {
    }
    ChangeDetectionUtil.arrayFn0 = function () { return []; };
    ChangeDetectionUtil.arrayFn1 = function (a1) { return [a1]; };
    ChangeDetectionUtil.arrayFn2 = function (a1, a2) { return [a1, a2]; };
    ChangeDetectionUtil.arrayFn3 = function (a1, a2, a3) { return [a1, a2, a3]; };
    ChangeDetectionUtil.arrayFn4 = function (a1, a2, a3, a4) { return [a1, a2, a3, a4]; };
    ChangeDetectionUtil.arrayFn5 = function (a1, a2, a3, a4, a5) { return [a1, a2, a3, a4, a5]; };
    ChangeDetectionUtil.arrayFn6 = function (a1, a2, a3, a4, a5, a6) { return [a1, a2, a3, a4, a5, a6]; };
    ChangeDetectionUtil.arrayFn7 = function (a1, a2, a3, a4, a5, a6, a7) { return [a1, a2, a3, a4, a5, a6, a7]; };
    ChangeDetectionUtil.arrayFn8 = function (a1, a2, a3, a4, a5, a6, a7, a8) {
        return [a1, a2, a3, a4, a5, a6, a7, a8];
    };
    ChangeDetectionUtil.arrayFn9 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return [a1, a2, a3, a4, a5, a6, a7, a8, a9];
    };
    ChangeDetectionUtil.operation_negate = function (value) { return !value; };
    ChangeDetectionUtil.operation_add = function (left, right) { return left + right; };
    ChangeDetectionUtil.operation_subtract = function (left, right) { return left - right; };
    ChangeDetectionUtil.operation_multiply = function (left, right) { return left * right; };
    ChangeDetectionUtil.operation_divide = function (left, right) { return left / right; };
    ChangeDetectionUtil.operation_remainder = function (left, right) { return left % right; };
    ChangeDetectionUtil.operation_equals = function (left, right) { return left == right; };
    ChangeDetectionUtil.operation_not_equals = function (left, right) { return left != right; };
    ChangeDetectionUtil.operation_identical = function (left, right) { return left === right; };
    ChangeDetectionUtil.operation_not_identical = function (left, right) { return left !== right; };
    ChangeDetectionUtil.operation_less_then = function (left, right) { return left < right; };
    ChangeDetectionUtil.operation_greater_then = function (left, right) { return left > right; };
    ChangeDetectionUtil.operation_less_or_equals_then = function (left, right) { return left <= right; };
    ChangeDetectionUtil.operation_greater_or_equals_then = function (left, right) { return left >= right; };
    ChangeDetectionUtil.cond = function (cond, trueVal, falseVal) { return cond ? trueVal : falseVal; };
    ChangeDetectionUtil.mapFn = function (keys) {
        function buildMap(values) {
            var res = collection_1.StringMapWrapper.create();
            for (var i = 0; i < keys.length; ++i) {
                collection_1.StringMapWrapper.set(res, keys[i], values[i]);
            }
            return res;
        }
        switch (keys.length) {
            case 0:
                return function () { return []; };
            case 1:
                return function (a1) { return buildMap([a1]); };
            case 2:
                return function (a1, a2) { return buildMap([a1, a2]); };
            case 3:
                return function (a1, a2, a3) { return buildMap([a1, a2, a3]); };
            case 4:
                return function (a1, a2, a3, a4) { return buildMap([a1, a2, a3, a4]); };
            case 5:
                return function (a1, a2, a3, a4, a5) { return buildMap([a1, a2, a3, a4, a5]); };
            case 6:
                return function (a1, a2, a3, a4, a5, a6) { return buildMap([a1, a2, a3, a4, a5, a6]); };
            case 7:
                return function (a1, a2, a3, a4, a5, a6, a7) { return buildMap([a1, a2, a3, a4, a5, a6, a7]); };
            case 8:
                return function (a1, a2, a3, a4, a5, a6, a7, a8) { return buildMap([a1, a2, a3, a4, a5, a6, a7, a8]); };
            case 9:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                    return buildMap([a1, a2, a3, a4, a5, a6, a7, a8, a9]);
                };
            default:
                throw new exceptions_1.BaseException("Does not support literal maps with more than 9 elements");
        }
    };
    ChangeDetectionUtil.keyedAccess = function (obj, args) { return obj[args[0]]; };
    ChangeDetectionUtil.unwrapValue = function (value) {
        if (value instanceof WrappedValue) {
            return value.wrapped;
        }
        else {
            return value;
        }
    };
    ChangeDetectionUtil.changeDetectionMode = function (strategy) {
        return constants_1.isDefaultChangeDetectionStrategy(strategy) ? constants_1.ChangeDetectionStrategy.CheckAlways :
            constants_1.ChangeDetectionStrategy.CheckOnce;
    };
    ChangeDetectionUtil.simpleChange = function (previousValue, currentValue) {
        return _simpleChange(previousValue, currentValue);
    };
    ChangeDetectionUtil.isValueBlank = function (value) { return lang_1.isBlank(value); };
    ChangeDetectionUtil.s = function (value) { return lang_1.isPresent(value) ? "" + value : ''; };
    ChangeDetectionUtil.protoByIndex = function (protos, selfIndex) {
        return selfIndex < 1 ?
            null :
            protos[selfIndex - 1]; // self index is shifted by one because of context
    };
    ChangeDetectionUtil.callPipeOnDestroy = function (selectedPipe) {
        if (pipe_lifecycle_reflector_1.implementsOnDestroy(selectedPipe.pipe)) {
            selectedPipe.pipe.ngOnDestroy();
        }
    };
    ChangeDetectionUtil.bindingTarget = function (mode, elementIndex, name, unit, debug) {
        return new binding_record_1.BindingTarget(mode, elementIndex, name, unit, debug);
    };
    ChangeDetectionUtil.directiveIndex = function (elementIndex, directiveIndex) {
        return new directive_record_1.DirectiveIndex(elementIndex, directiveIndex);
    };
    ChangeDetectionUtil.looseNotIdentical = function (a, b) { return !lang_1.looseIdentical(a, b); };
    ChangeDetectionUtil.uninitialized = lang_1.CONST_EXPR(new Object());
    return ChangeDetectionUtil;
})();
exports.ChangeDetectionUtil = ChangeDetectionUtil;
},{"./binding_record":7,"./constants":16,"./directive_record":21,"./pipe_lifecycle_reflector":32,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],11:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var constants_1 = require('./constants');
var ChangeDetectorRef = (function () {
    function ChangeDetectorRef() {
    }
    return ChangeDetectorRef;
})();
exports.ChangeDetectorRef = ChangeDetectorRef;
var ChangeDetectorRef_ = (function (_super) {
    __extends(ChangeDetectorRef_, _super);
    function ChangeDetectorRef_(_cd) {
        _super.call(this);
        this._cd = _cd;
    }
    ChangeDetectorRef_.prototype.markForCheck = function () { this._cd.markPathToRootAsCheckOnce(); };
    ChangeDetectorRef_.prototype.detach = function () { this._cd.mode = constants_1.ChangeDetectionStrategy.Detached; };
    ChangeDetectorRef_.prototype.detectChanges = function () { this._cd.detectChanges(); };
    ChangeDetectorRef_.prototype.checkNoChanges = function () { this._cd.checkNoChanges(); };
    ChangeDetectorRef_.prototype.reattach = function () {
        this._cd.mode = constants_1.ChangeDetectionStrategy.CheckAlways;
        this.markForCheck();
    };
    return ChangeDetectorRef_;
})(ChangeDetectorRef);
exports.ChangeDetectorRef_ = ChangeDetectorRef_;
},{"./constants":16}],12:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var collection_1 = require('angular2/src/facade/collection');
var proto_record_1 = require('./proto_record');
/**
 * Removes "duplicate" records. It assumes that record evaluation does not have side-effects.
 *
 * Records that are not last in bindings are removed and all the indices of the records that depend
 * on them are updated.
 *
 * Records that are last in bindings CANNOT be removed, and instead are replaced with very cheap
 * SELF records.
 *
 * @internal
 */
function coalesce(srcRecords) {
    var dstRecords = [];
    var excludedIdxs = [];
    var indexMap = new collection_1.Map();
    var skipDepth = 0;
    var skipSources = collection_1.ListWrapper.createFixedSize(srcRecords.length);
    for (var protoIndex = 0; protoIndex < srcRecords.length; protoIndex++) {
        var skipRecord = skipSources[protoIndex];
        if (lang_1.isPresent(skipRecord)) {
            skipDepth--;
            skipRecord.fixedArgs[0] = dstRecords.length;
        }
        var src = srcRecords[protoIndex];
        var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
        if (dst.isSkipRecord()) {
            dstRecords.push(dst);
            skipDepth++;
            skipSources[dst.fixedArgs[0]] = dst;
        }
        else {
            var record = _mayBeAddRecord(dst, dstRecords, excludedIdxs, skipDepth > 0);
            indexMap.set(src.selfIndex, record.selfIndex);
        }
    }
    return _optimizeSkips(dstRecords);
}
exports.coalesce = coalesce;
/**
 * - Conditional skip of 1 record followed by an unconditional skip of N are replaced by  a
 *   conditional skip of N with the negated condition,
 * - Skips of 0 records are removed
 */
function _optimizeSkips(srcRecords) {
    var dstRecords = [];
    var skipSources = collection_1.ListWrapper.createFixedSize(srcRecords.length);
    var indexMap = new collection_1.Map();
    for (var protoIndex = 0; protoIndex < srcRecords.length; protoIndex++) {
        var skipRecord = skipSources[protoIndex];
        if (lang_1.isPresent(skipRecord)) {
            skipRecord.fixedArgs[0] = dstRecords.length;
        }
        var src = srcRecords[protoIndex];
        if (src.isSkipRecord()) {
            if (src.isConditionalSkipRecord() && src.fixedArgs[0] === protoIndex + 2 &&
                protoIndex < srcRecords.length - 1 &&
                srcRecords[protoIndex + 1].mode === proto_record_1.RecordType.SkipRecords) {
                src.mode = src.mode === proto_record_1.RecordType.SkipRecordsIf ? proto_record_1.RecordType.SkipRecordsIfNot :
                    proto_record_1.RecordType.SkipRecordsIf;
                src.fixedArgs[0] = srcRecords[protoIndex + 1].fixedArgs[0];
                protoIndex++;
            }
            if (src.fixedArgs[0] > protoIndex + 1) {
                var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
                dstRecords.push(dst);
                skipSources[dst.fixedArgs[0]] = dst;
            }
        }
        else {
            var dst = _cloneAndUpdateIndexes(src, dstRecords, indexMap);
            dstRecords.push(dst);
            indexMap.set(src.selfIndex, dst.selfIndex);
        }
    }
    return dstRecords;
}
/**
 * Add a new record or re-use one of the existing records.
 */
function _mayBeAddRecord(record, dstRecords, excludedIdxs, excluded) {
    var match = _findFirstMatch(record, dstRecords, excludedIdxs);
    if (lang_1.isPresent(match)) {
        if (record.lastInBinding) {
            dstRecords.push(_createSelfRecord(record, match.selfIndex, dstRecords.length + 1));
            match.referencedBySelf = true;
        }
        else {
            if (record.argumentToPureFunction) {
                match.argumentToPureFunction = true;
            }
        }
        return match;
    }
    if (excluded) {
        excludedIdxs.push(record.selfIndex);
    }
    dstRecords.push(record);
    return record;
}
/**
 * Returns the first `ProtoRecord` that matches the record.
 */
function _findFirstMatch(record, dstRecords, excludedIdxs) {
    return dstRecords.find(
    // TODO(vicb): optimize excludedIdxs.indexOf (sorted array)
    function (rr) { return excludedIdxs.indexOf(rr.selfIndex) == -1 && rr.mode !== proto_record_1.RecordType.DirectiveLifecycle &&
        _haveSameDirIndex(rr, record) && rr.mode === record.mode &&
        lang_1.looseIdentical(rr.funcOrValue, record.funcOrValue) &&
        rr.contextIndex === record.contextIndex && lang_1.looseIdentical(rr.name, record.name) &&
        collection_1.ListWrapper.equals(rr.args, record.args); });
}
/**
 * Clone the `ProtoRecord` and changes the indexes for the ones in the destination array for:
 * - the arguments,
 * - the context,
 * - self
 */
function _cloneAndUpdateIndexes(record, dstRecords, indexMap) {
    var args = record.args.map(function (src) { return _srcToDstSelfIndex(indexMap, src); });
    var contextIndex = _srcToDstSelfIndex(indexMap, record.contextIndex);
    var selfIndex = dstRecords.length + 1;
    return new proto_record_1.ProtoRecord(record.mode, record.name, record.funcOrValue, args, record.fixedArgs, contextIndex, record.directiveIndex, selfIndex, record.bindingRecord, record.lastInBinding, record.lastInDirective, record.argumentToPureFunction, record.referencedBySelf, record.propertyBindingIndex);
}
/**
 * Returns the index in the destination array corresponding to the index in the src array.
 * When the element is not present in the destination array, return the source index.
 */
function _srcToDstSelfIndex(indexMap, srcIdx) {
    var dstIdx = indexMap.get(srcIdx);
    return lang_1.isPresent(dstIdx) ? dstIdx : srcIdx;
}
function _createSelfRecord(r, contextIndex, selfIndex) {
    return new proto_record_1.ProtoRecord(proto_record_1.RecordType.Self, "self", null, [], r.fixedArgs, contextIndex, r.directiveIndex, selfIndex, r.bindingRecord, r.lastInBinding, r.lastInDirective, false, false, r.propertyBindingIndex);
}
function _haveSameDirIndex(a, b) {
    var di1 = lang_1.isBlank(a.directiveIndex) ? null : a.directiveIndex.directiveIndex;
    var ei1 = lang_1.isBlank(a.directiveIndex) ? null : a.directiveIndex.elementIndex;
    var di2 = lang_1.isBlank(b.directiveIndex) ? null : b.directiveIndex.directiveIndex;
    var ei2 = lang_1.isBlank(b.directiveIndex) ? null : b.directiveIndex.elementIndex;
    return di1 === di2 && ei1 === ei2;
}
},{"./proto_record":35,"angular2/src/facade/collection":94,"angular2/src/facade/lang":98}],13:[function(require,module,exports){
'use strict';/**
 * Converts `funcOrValue` to a string which can be used in generated code.
 */
function codify(obj) {
    return JSON.stringify(obj);
}
exports.codify = codify;
function rawString(str) {
    return "'" + str + "'";
}
exports.rawString = rawString;
/**
 * Combine the strings of generated code into a single interpolated string.
 * Each element of `vals` is expected to be a string literal or a codegen'd
 * call to a method returning a string.
 */
function combineGeneratedStrings(vals) {
    return vals.join(' + ');
}
exports.combineGeneratedStrings = combineGeneratedStrings;
},{}],14:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var codegen_facade_1 = require('./codegen_facade');
var proto_record_1 = require('./proto_record');
var constants_1 = require('./constants');
var exceptions_1 = require('angular2/src/facade/exceptions');
/**
 * Class responsible for providing change detection logic for change detector classes.
 */
var CodegenLogicUtil = (function () {
    function CodegenLogicUtil(_names, _utilName, _changeDetectorStateName, _changeDetection) {
        this._names = _names;
        this._utilName = _utilName;
        this._changeDetectorStateName = _changeDetectorStateName;
        this._changeDetection = _changeDetection;
    }
    /**
     * Generates a statement which updates the local variable representing `protoRec` with the current
     * value of the record. Used by property bindings.
     */
    CodegenLogicUtil.prototype.genPropertyBindingEvalValue = function (protoRec) {
        var _this = this;
        return this._genEvalValue(protoRec, function (idx) { return _this._names.getLocalName(idx); }, this._names.getLocalsAccessorName());
    };
    /**
     * Generates a statement which updates the local variable representing `protoRec` with the current
     * value of the record. Used by event bindings.
     */
    CodegenLogicUtil.prototype.genEventBindingEvalValue = function (eventRecord, protoRec) {
        var _this = this;
        return this._genEvalValue(protoRec, function (idx) { return _this._names.getEventLocalName(eventRecord, idx); }, "locals");
    };
    CodegenLogicUtil.prototype._genEvalValue = function (protoRec, getLocalName, localsAccessor) {
        var context = (protoRec.contextIndex == -1) ?
            this._names.getDirectiveName(protoRec.directiveIndex) :
            getLocalName(protoRec.contextIndex);
        var argString = protoRec.args.map(function (arg) { return getLocalName(arg); }).join(", ");
        var rhs;
        switch (protoRec.mode) {
            case proto_record_1.RecordType.Self:
                rhs = context;
                break;
            case proto_record_1.RecordType.Const:
                rhs = codegen_facade_1.codify(protoRec.funcOrValue);
                break;
            case proto_record_1.RecordType.PropertyRead:
                rhs = this._observe(context + "." + protoRec.name, protoRec);
                break;
            case proto_record_1.RecordType.SafeProperty:
                var read = this._observe(context + "." + protoRec.name, protoRec);
                rhs =
                    this._utilName + ".isValueBlank(" + context + ") ? null : " + this._observe(read, protoRec);
                break;
            case proto_record_1.RecordType.PropertyWrite:
                rhs = context + "." + protoRec.name + " = " + getLocalName(protoRec.args[0]);
                break;
            case proto_record_1.RecordType.Local:
                rhs = this._observe(localsAccessor + ".get(" + codegen_facade_1.rawString(protoRec.name) + ")", protoRec);
                break;
            case proto_record_1.RecordType.InvokeMethod:
                rhs = this._observe(context + "." + protoRec.name + "(" + argString + ")", protoRec);
                break;
            case proto_record_1.RecordType.SafeMethodInvoke:
                var invoke = context + "." + protoRec.name + "(" + argString + ")";
                rhs =
                    this._utilName + ".isValueBlank(" + context + ") ? null : " + this._observe(invoke, protoRec);
                break;
            case proto_record_1.RecordType.InvokeClosure:
                rhs = context + "(" + argString + ")";
                break;
            case proto_record_1.RecordType.PrimitiveOp:
                rhs = this._utilName + "." + protoRec.name + "(" + argString + ")";
                break;
            case proto_record_1.RecordType.CollectionLiteral:
                rhs = this._utilName + "." + protoRec.name + "(" + argString + ")";
                break;
            case proto_record_1.RecordType.Interpolate:
                rhs = this._genInterpolation(protoRec);
                break;
            case proto_record_1.RecordType.KeyedRead:
                rhs = this._observe(context + "[" + getLocalName(protoRec.args[0]) + "]", protoRec);
                break;
            case proto_record_1.RecordType.KeyedWrite:
                rhs = context + "[" + getLocalName(protoRec.args[0]) + "] = " + getLocalName(protoRec.args[1]);
                break;
            case proto_record_1.RecordType.Chain:
                rhs = 'null';
                break;
            default:
                throw new exceptions_1.BaseException("Unknown operation " + protoRec.mode);
        }
        return getLocalName(protoRec.selfIndex) + " = " + rhs + ";";
    };
    /** @internal */
    CodegenLogicUtil.prototype._observe = function (exp, rec) {
        // This is an experimental feature. Works only in Dart.
        if (this._changeDetection === constants_1.ChangeDetectionStrategy.OnPushObserve) {
            return "this.observeValue(" + exp + ", " + rec.selfIndex + ")";
        }
        else {
            return exp;
        }
    };
    CodegenLogicUtil.prototype.genPropertyBindingTargets = function (propertyBindingTargets, genDebugInfo) {
        var _this = this;
        var bs = propertyBindingTargets.map(function (b) {
            if (lang_1.isBlank(b))
                return "null";
            var debug = genDebugInfo ? codegen_facade_1.codify(b.debug) : "null";
            return _this._utilName + ".bindingTarget(" + codegen_facade_1.codify(b.mode) + ", " + b.elementIndex + ", " + codegen_facade_1.codify(b.name) + ", " + codegen_facade_1.codify(b.unit) + ", " + debug + ")";
        });
        return "[" + bs.join(", ") + "]";
    };
    CodegenLogicUtil.prototype.genDirectiveIndices = function (directiveRecords) {
        var _this = this;
        var bs = directiveRecords.map(function (b) {
            return (_this._utilName + ".directiveIndex(" + b.directiveIndex.elementIndex + ", " + b.directiveIndex.directiveIndex + ")");
        });
        return "[" + bs.join(", ") + "]";
    };
    /** @internal */
    CodegenLogicUtil.prototype._genInterpolation = function (protoRec) {
        var iVals = [];
        for (var i = 0; i < protoRec.args.length; ++i) {
            iVals.push(codegen_facade_1.codify(protoRec.fixedArgs[i]));
            iVals.push(this._utilName + ".s(" + this._names.getLocalName(protoRec.args[i]) + ")");
        }
        iVals.push(codegen_facade_1.codify(protoRec.fixedArgs[protoRec.args.length]));
        return codegen_facade_1.combineGeneratedStrings(iVals);
    };
    CodegenLogicUtil.prototype.genHydrateDirectives = function (directiveRecords) {
        var res = [];
        for (var i = 0; i < directiveRecords.length; ++i) {
            var r = directiveRecords[i];
            res.push(this._names.getDirectiveName(r.directiveIndex) + " = " + this._genReadDirective(i) + ";");
        }
        return res.join("\n");
    };
    CodegenLogicUtil.prototype._genReadDirective = function (index) {
        // This is an experimental feature. Works only in Dart.
        if (this._changeDetection === constants_1.ChangeDetectionStrategy.OnPushObserve) {
            return "this.observeDirective(this.getDirectiveFor(directives, " + index + "), " + index + ")";
        }
        else {
            return "this.getDirectiveFor(directives, " + index + ")";
        }
    };
    CodegenLogicUtil.prototype.genHydrateDetectors = function (directiveRecords) {
        var res = [];
        for (var i = 0; i < directiveRecords.length; ++i) {
            var r = directiveRecords[i];
            if (!r.isDefaultChangeDetection()) {
                res.push(this._names.getDetectorName(r.directiveIndex) + " = this.getDetectorFor(directives, " + i + ");");
            }
        }
        return res.join("\n");
    };
    CodegenLogicUtil.prototype.genContentLifecycleCallbacks = function (directiveRecords) {
        var res = [];
        var eq = lang_1.IS_DART ? '==' : '===';
        // NOTE(kegluneq): Order is important!
        for (var i = directiveRecords.length - 1; i >= 0; --i) {
            var dir = directiveRecords[i];
            if (dir.callAfterContentInit) {
                res.push("if(" + this._names.getStateName() + " " + eq + " " + this._changeDetectorStateName + ".NeverChecked) " + this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterContentInit();");
            }
            if (dir.callAfterContentChecked) {
                res.push(this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterContentChecked();");
            }
        }
        return res;
    };
    CodegenLogicUtil.prototype.genViewLifecycleCallbacks = function (directiveRecords) {
        var res = [];
        var eq = lang_1.IS_DART ? '==' : '===';
        // NOTE(kegluneq): Order is important!
        for (var i = directiveRecords.length - 1; i >= 0; --i) {
            var dir = directiveRecords[i];
            if (dir.callAfterViewInit) {
                res.push("if(" + this._names.getStateName() + " " + eq + " " + this._changeDetectorStateName + ".NeverChecked) " + this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterViewInit();");
            }
            if (dir.callAfterViewChecked) {
                res.push(this._names.getDirectiveName(dir.directiveIndex) + ".ngAfterViewChecked();");
            }
        }
        return res;
    };
    return CodegenLogicUtil;
})();
exports.CodegenLogicUtil = CodegenLogicUtil;
},{"./codegen_facade":13,"./constants":16,"./proto_record":35,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],15:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var collection_1 = require('angular2/src/facade/collection');
// The names of these fields must be kept in sync with abstract_change_detector.ts or change
// detection will fail.
var _STATE_ACCESSOR = "state";
var _CONTEXT_ACCESSOR = "context";
var _PROP_BINDING_INDEX = "propertyBindingIndex";
var _DIRECTIVES_ACCESSOR = "directiveIndices";
var _DISPATCHER_ACCESSOR = "dispatcher";
var _LOCALS_ACCESSOR = "locals";
var _MODE_ACCESSOR = "mode";
var _PIPES_ACCESSOR = "pipes";
var _PROTOS_ACCESSOR = "protos";
exports.CONTEXT_ACCESSOR = "context";
// `context` is always first.
exports.CONTEXT_INDEX = 0;
var _FIELD_PREFIX = 'this.';
var _whiteSpaceRegExp = /\W/g;
/**
 * Returns `s` with all non-identifier characters removed.
 */
function sanitizeName(s) {
    return lang_1.StringWrapper.replaceAll(s, _whiteSpaceRegExp, '');
}
exports.sanitizeName = sanitizeName;
/**
 * Class responsible for providing field and local variable names for change detector classes.
 * Also provides some convenience functions, for example, declaring variables, destroying pipes,
 * and dehydrating the detector.
 */
var CodegenNameUtil = (function () {
    function CodegenNameUtil(_records, _eventBindings, _directiveRecords, _utilName) {
        this._records = _records;
        this._eventBindings = _eventBindings;
        this._directiveRecords = _directiveRecords;
        this._utilName = _utilName;
        /** @internal */
        this._sanitizedEventNames = new collection_1.Map();
        this._sanitizedNames = collection_1.ListWrapper.createFixedSize(this._records.length + 1);
        this._sanitizedNames[exports.CONTEXT_INDEX] = exports.CONTEXT_ACCESSOR;
        for (var i = 0, iLen = this._records.length; i < iLen; ++i) {
            this._sanitizedNames[i + 1] = sanitizeName("" + this._records[i].name + i);
        }
        for (var ebIndex = 0; ebIndex < _eventBindings.length; ++ebIndex) {
            var eb = _eventBindings[ebIndex];
            var names = [exports.CONTEXT_ACCESSOR];
            for (var i = 0, iLen = eb.records.length; i < iLen; ++i) {
                names.push(sanitizeName("" + eb.records[i].name + i + "_" + ebIndex));
            }
            this._sanitizedEventNames.set(eb, names);
        }
    }
    /** @internal */
    CodegenNameUtil.prototype._addFieldPrefix = function (name) { return "" + _FIELD_PREFIX + name; };
    CodegenNameUtil.prototype.getDispatcherName = function () { return this._addFieldPrefix(_DISPATCHER_ACCESSOR); };
    CodegenNameUtil.prototype.getPipesAccessorName = function () { return this._addFieldPrefix(_PIPES_ACCESSOR); };
    CodegenNameUtil.prototype.getProtosName = function () { return this._addFieldPrefix(_PROTOS_ACCESSOR); };
    CodegenNameUtil.prototype.getDirectivesAccessorName = function () { return this._addFieldPrefix(_DIRECTIVES_ACCESSOR); };
    CodegenNameUtil.prototype.getLocalsAccessorName = function () { return this._addFieldPrefix(_LOCALS_ACCESSOR); };
    CodegenNameUtil.prototype.getStateName = function () { return this._addFieldPrefix(_STATE_ACCESSOR); };
    CodegenNameUtil.prototype.getModeName = function () { return this._addFieldPrefix(_MODE_ACCESSOR); };
    CodegenNameUtil.prototype.getPropertyBindingIndex = function () { return this._addFieldPrefix(_PROP_BINDING_INDEX); };
    CodegenNameUtil.prototype.getLocalName = function (idx) { return "l_" + this._sanitizedNames[idx]; };
    CodegenNameUtil.prototype.getEventLocalName = function (eb, idx) {
        return "l_" + this._sanitizedEventNames.get(eb)[idx];
    };
    CodegenNameUtil.prototype.getChangeName = function (idx) { return "c_" + this._sanitizedNames[idx]; };
    /**
     * Generate a statement initializing local variables used when detecting changes.
     */
    CodegenNameUtil.prototype.genInitLocals = function () {
        var declarations = [];
        var assignments = [];
        for (var i = 0, iLen = this.getFieldCount(); i < iLen; ++i) {
            if (i == exports.CONTEXT_INDEX) {
                declarations.push(this.getLocalName(i) + " = " + this.getFieldName(i));
            }
            else {
                var rec = this._records[i - 1];
                if (rec.argumentToPureFunction) {
                    var changeName = this.getChangeName(i);
                    declarations.push(this.getLocalName(i) + "," + changeName);
                    assignments.push(changeName);
                }
                else {
                    declarations.push("" + this.getLocalName(i));
                }
            }
        }
        var assignmentsCode = collection_1.ListWrapper.isEmpty(assignments) ? '' : assignments.join('=') + " = false;";
        return "var " + declarations.join(',') + ";" + assignmentsCode;
    };
    /**
     * Generate a statement initializing local variables for event handlers.
     */
    CodegenNameUtil.prototype.genInitEventLocals = function () {
        var _this = this;
        var res = [(this.getLocalName(exports.CONTEXT_INDEX) + " = " + this.getFieldName(exports.CONTEXT_INDEX))];
        this._sanitizedEventNames.forEach(function (names, eb) {
            for (var i = 0; i < names.length; ++i) {
                if (i !== exports.CONTEXT_INDEX) {
                    res.push("" + _this.getEventLocalName(eb, i));
                }
            }
        });
        return res.length > 1 ? "var " + res.join(',') + ";" : '';
    };
    CodegenNameUtil.prototype.getPreventDefaultAccesor = function () { return "preventDefault"; };
    CodegenNameUtil.prototype.getFieldCount = function () { return this._sanitizedNames.length; };
    CodegenNameUtil.prototype.getFieldName = function (idx) { return this._addFieldPrefix(this._sanitizedNames[idx]); };
    CodegenNameUtil.prototype.getAllFieldNames = function () {
        var fieldList = [];
        for (var k = 0, kLen = this.getFieldCount(); k < kLen; ++k) {
            if (k === 0 || this._records[k - 1].shouldBeChecked()) {
                fieldList.push(this.getFieldName(k));
            }
        }
        for (var i = 0, iLen = this._records.length; i < iLen; ++i) {
            var rec = this._records[i];
            if (rec.isPipeRecord()) {
                fieldList.push(this.getPipeName(rec.selfIndex));
            }
        }
        for (var j = 0, jLen = this._directiveRecords.length; j < jLen; ++j) {
            var dRec = this._directiveRecords[j];
            fieldList.push(this.getDirectiveName(dRec.directiveIndex));
            if (!dRec.isDefaultChangeDetection()) {
                fieldList.push(this.getDetectorName(dRec.directiveIndex));
            }
        }
        return fieldList;
    };
    /**
     * Generates statements which clear all fields so that the change detector is dehydrated.
     */
    CodegenNameUtil.prototype.genDehydrateFields = function () {
        var fields = this.getAllFieldNames();
        collection_1.ListWrapper.removeAt(fields, exports.CONTEXT_INDEX);
        if (collection_1.ListWrapper.isEmpty(fields))
            return '';
        // At least one assignment.
        fields.push(this._utilName + ".uninitialized;");
        return fields.join(' = ');
    };
    /**
     * Generates statements destroying all pipe variables.
     */
    CodegenNameUtil.prototype.genPipeOnDestroy = function () {
        var _this = this;
        return this._records.filter(function (r) { return r.isPipeRecord(); })
            .map(function (r) { return (_this._utilName + ".callPipeOnDestroy(" + _this.getPipeName(r.selfIndex) + ");"); })
            .join('\n');
    };
    CodegenNameUtil.prototype.getPipeName = function (idx) {
        return this._addFieldPrefix(this._sanitizedNames[idx] + "_pipe");
    };
    CodegenNameUtil.prototype.getDirectiveName = function (d) {
        return this._addFieldPrefix("directive_" + d.name);
    };
    CodegenNameUtil.prototype.getDetectorName = function (d) { return this._addFieldPrefix("detector_" + d.name); };
    return CodegenNameUtil;
})();
exports.CodegenNameUtil = CodegenNameUtil;
},{"angular2/src/facade/collection":94,"angular2/src/facade/lang":98}],16:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
/**
 * Describes the current state of the change detector.
 */
(function (ChangeDetectorState) {
    /**
     * `NeverChecked` means that the change detector has not been checked yet, and
     * initialization methods should be called during detection.
     */
    ChangeDetectorState[ChangeDetectorState["NeverChecked"] = 0] = "NeverChecked";
    /**
     * `CheckedBefore` means that the change detector has successfully completed at least
     * one detection previously.
     */
    ChangeDetectorState[ChangeDetectorState["CheckedBefore"] = 1] = "CheckedBefore";
    /**
     * `Errored` means that the change detector encountered an error checking a binding
     * or calling a directive lifecycle method and is now in an inconsistent state. Change
     * detectors in this state will no longer detect changes.
     */
    ChangeDetectorState[ChangeDetectorState["Errored"] = 2] = "Errored";
})(exports.ChangeDetectorState || (exports.ChangeDetectorState = {}));
var ChangeDetectorState = exports.ChangeDetectorState;
/**
 * Describes within the change detector which strategy will be used the next time change
 * detection is triggered.
 */
(function (ChangeDetectionStrategy) {
    /**
     * `CheckedOnce` means that after calling detectChanges the mode of the change detector
     * will become `Checked`.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
    /**
     * `Checked` means that the change detector should be skipped until its mode changes to
     * `CheckOnce`.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
    /**
     * `CheckAlways` means that after calling detectChanges the mode of the change detector
     * will remain `CheckAlways`.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
    /**
     * `Detached` means that the change detector sub tree is not a part of the main tree and
     * should be skipped.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
    /**
     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
    /**
     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
    /**
     * This is an experimental feature. Works only in Dart.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPushObserve"] = 6] = "OnPushObserve";
})(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;
/**
 * List of possible {@link ChangeDetectionStrategy} values.
 */
exports.CHANGE_DETECTION_STRATEGY_VALUES = [
    ChangeDetectionStrategy.CheckOnce,
    ChangeDetectionStrategy.Checked,
    ChangeDetectionStrategy.CheckAlways,
    ChangeDetectionStrategy.Detached,
    ChangeDetectionStrategy.OnPush,
    ChangeDetectionStrategy.Default,
    ChangeDetectionStrategy.OnPushObserve
];
/**
 * List of possible {@link ChangeDetectorState} values.
 */
exports.CHANGE_DETECTOR_STATE_VALUES = [
    ChangeDetectorState.NeverChecked,
    ChangeDetectorState.CheckedBefore,
    ChangeDetectorState.Errored
];
function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
    return lang_1.isBlank(changeDetectionStrategy) ||
        changeDetectionStrategy === ChangeDetectionStrategy.Default;
}
exports.isDefaultChangeDetectionStrategy = isDefaultChangeDetectionStrategy;
},{"angular2/src/facade/lang":98}],17:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var lang_2 = require('angular2/src/facade/lang');
var DefaultIterableDifferFactory = (function () {
    function DefaultIterableDifferFactory() {
    }
    DefaultIterableDifferFactory.prototype.supports = function (obj) { return collection_1.isListLikeIterable(obj); };
    DefaultIterableDifferFactory.prototype.create = function (cdRef) { return new DefaultIterableDiffer(); };
    DefaultIterableDifferFactory = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], DefaultIterableDifferFactory);
    return DefaultIterableDifferFactory;
})();
exports.DefaultIterableDifferFactory = DefaultIterableDifferFactory;
var DefaultIterableDiffer = (function () {
    function DefaultIterableDiffer() {
        this._collection = null;
        this._length = null;
        // Keeps track of the used records at any point in time (during & across `_check()` calls)
        this._linkedRecords = null;
        // Keeps track of the removed records at any point in time during `_check()` calls.
        this._unlinkedRecords = null;
        this._previousItHead = null;
        this._itHead = null;
        this._itTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._movesHead = null;
        this._movesTail = null;
        this._removalsHead = null;
        this._removalsTail = null;
    }
    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
        get: function () { return this._collection; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
        get: function () { return this._length; },
        enumerable: true,
        configurable: true
    });
    DefaultIterableDiffer.prototype.forEachItem = function (fn) {
        var record;
        for (record = this._itHead; record !== null; record = record._next) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachPreviousItem = function (fn) {
        var record;
        for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachAddedItem = function (fn) {
        var record;
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachMovedItem = function (fn) {
        var record;
        for (record = this._movesHead; record !== null; record = record._nextMoved) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachRemovedItem = function (fn) {
        var record;
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.diff = function (collection) {
        if (lang_2.isBlank(collection))
            collection = [];
        if (!collection_1.isListLikeIterable(collection)) {
            throw new exceptions_1.BaseException("Error trying to diff '" + collection + "'");
        }
        if (this.check(collection)) {
            return this;
        }
        else {
            return null;
        }
    };
    DefaultIterableDiffer.prototype.onDestroy = function () { };
    // todo(vicb): optim for UnmodifiableListView (frozen arrays)
    DefaultIterableDiffer.prototype.check = function (collection) {
        var _this = this;
        this._reset();
        var record = this._itHead;
        var mayBeDirty = false;
        var index;
        var item;
        if (lang_2.isArray(collection)) {
            var list = collection;
            this._length = collection.length;
            for (index = 0; index < this._length; index++) {
                item = list[index];
                if (record === null || !lang_2.looseIdentical(record.item, item)) {
                    record = this._mismatch(record, item, index);
                    mayBeDirty = true;
                }
                else if (mayBeDirty) {
                    // TODO(misko): can we limit this to duplicates only?
                    record = this._verifyReinsertion(record, item, index);
                }
                record = record._next;
            }
        }
        else {
            index = 0;
            collection_1.iterateListLike(collection, function (item) {
                if (record === null || !lang_2.looseIdentical(record.item, item)) {
                    record = _this._mismatch(record, item, index);
                    mayBeDirty = true;
                }
                else if (mayBeDirty) {
                    // TODO(misko): can we limit this to duplicates only?
                    record = _this._verifyReinsertion(record, item, index);
                }
                record = record._next;
                index++;
            });
            this._length = index;
        }
        this._truncate(record);
        this._collection = collection;
        return this.isDirty;
    };
    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
        // CollectionChanges is considered dirty if it has any additions, moves or removals.
        get: function () {
            return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reset the state of the change objects to show no changes. This means set previousKey to
     * currentKey, and clear all of the queues (additions, moves, removals).
     * Set the previousIndexes of moved and added items to their currentIndexes
     * Reset the list of additions, moves and removals
     *
     * @internal
     */
    DefaultIterableDiffer.prototype._reset = function () {
        if (this.isDirty) {
            var record;
            var nextRecord;
            for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
                record._nextPrevious = record._next;
            }
            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
                record.previousIndex = record.currentIndex;
            }
            this._additionsHead = this._additionsTail = null;
            for (record = this._movesHead; record !== null; record = nextRecord) {
                record.previousIndex = record.currentIndex;
                nextRecord = record._nextMoved;
            }
            this._movesHead = this._movesTail = null;
            this._removalsHead = this._removalsTail = null;
        }
    };
    /**
     * This is the core function which handles differences between collections.
     *
     * - `record` is the record which we saw at this position last time. If null then it is a new
     *   item.
     * - `item` is the current item in the collection
     * - `index` is the position of the item in the collection
     *
     * @internal
     */
    DefaultIterableDiffer.prototype._mismatch = function (record, item, index) {
        // The previous record after which we will append the current one.
        var previousRecord;
        if (record === null) {
            previousRecord = this._itTail;
        }
        else {
            previousRecord = record._prev;
            // Remove the record from the collection since we know it does not match the item.
            this._remove(record);
        }
        // Attempt to see if we have seen the item before.
        record = this._linkedRecords === null ? null : this._linkedRecords.get(item, index);
        if (record !== null) {
            // We have seen this before, we need to move it forward in the collection.
            this._moveAfter(record, previousRecord, index);
        }
        else {
            // Never seen it, check evicted list.
            record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(item);
            if (record !== null) {
                // It is an item which we have evicted earlier: reinsert it back into the list.
                this._reinsertAfter(record, previousRecord, index);
            }
            else {
                // It is a new item: add it.
                record = this._addAfter(new CollectionChangeRecord(item), previousRecord, index);
            }
        }
        return record;
    };
    /**
     * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
     *
     * Use case: `[a, a]` => `[b, a, a]`
     *
     * If we did not have this check then the insertion of `b` would:
     *   1) evict first `a`
     *   2) insert `b` at `0` index.
     *   3) leave `a` at index `1` as is. <-- this is wrong!
     *   3) reinsert `a` at index 2. <-- this is wrong!
     *
     * The correct behavior is:
     *   1) evict first `a`
     *   2) insert `b` at `0` index.
     *   3) reinsert `a` at index 1.
     *   3) move `a` at from `1` to `2`.
     *
     *
     * Double check that we have not evicted a duplicate item. We need to check if the item type may
     * have already been removed:
     * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
     * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
     * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
     * at the end.
     *
     * @internal
     */
    DefaultIterableDiffer.prototype._verifyReinsertion = function (record, item, index) {
        var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(item);
        if (reinsertRecord !== null) {
            record = this._reinsertAfter(reinsertRecord, record._prev, index);
        }
        else if (record.currentIndex != index) {
            record.currentIndex = index;
            this._addToMoves(record, index);
        }
        return record;
    };
    /**
     * Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
     *
     * - `record` The first excess {@link CollectionChangeRecord}.
     *
     * @internal
     */
    DefaultIterableDiffer.prototype._truncate = function (record) {
        // Anything after that needs to be removed;
        while (record !== null) {
            var nextRecord = record._next;
            this._addToRemovals(this._unlink(record));
            record = nextRecord;
        }
        if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.clear();
        }
        if (this._additionsTail !== null) {
            this._additionsTail._nextAdded = null;
        }
        if (this._movesTail !== null) {
            this._movesTail._nextMoved = null;
        }
        if (this._itTail !== null) {
            this._itTail._next = null;
        }
        if (this._removalsTail !== null) {
            this._removalsTail._nextRemoved = null;
        }
    };
    /** @internal */
    DefaultIterableDiffer.prototype._reinsertAfter = function (record, prevRecord, index) {
        if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.remove(record);
        }
        var prev = record._prevRemoved;
        var next = record._nextRemoved;
        if (prev === null) {
            this._removalsHead = next;
        }
        else {
            prev._nextRemoved = next;
        }
        if (next === null) {
            this._removalsTail = prev;
        }
        else {
            next._prevRemoved = prev;
        }
        this._insertAfter(record, prevRecord, index);
        this._addToMoves(record, index);
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._moveAfter = function (record, prevRecord, index) {
        this._unlink(record);
        this._insertAfter(record, prevRecord, index);
        this._addToMoves(record, index);
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._addAfter = function (record, prevRecord, index) {
        this._insertAfter(record, prevRecord, index);
        if (this._additionsTail === null) {
            // todo(vicb)
            // assert(this._additionsHead === null);
            this._additionsTail = this._additionsHead = record;
        }
        else {
            // todo(vicb)
            // assert(_additionsTail._nextAdded === null);
            // assert(record._nextAdded === null);
            this._additionsTail = this._additionsTail._nextAdded = record;
        }
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._insertAfter = function (record, prevRecord, index) {
        // todo(vicb)
        // assert(record != prevRecord);
        // assert(record._next === null);
        // assert(record._prev === null);
        var next = prevRecord === null ? this._itHead : prevRecord._next;
        // todo(vicb)
        // assert(next != record);
        // assert(prevRecord != record);
        record._next = next;
        record._prev = prevRecord;
        if (next === null) {
            this._itTail = record;
        }
        else {
            next._prev = record;
        }
        if (prevRecord === null) {
            this._itHead = record;
        }
        else {
            prevRecord._next = record;
        }
        if (this._linkedRecords === null) {
            this._linkedRecords = new _DuplicateMap();
        }
        this._linkedRecords.put(record);
        record.currentIndex = index;
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._remove = function (record) {
        return this._addToRemovals(this._unlink(record));
    };
    /** @internal */
    DefaultIterableDiffer.prototype._unlink = function (record) {
        if (this._linkedRecords !== null) {
            this._linkedRecords.remove(record);
        }
        var prev = record._prev;
        var next = record._next;
        // todo(vicb)
        // assert((record._prev = null) === null);
        // assert((record._next = null) === null);
        if (prev === null) {
            this._itHead = next;
        }
        else {
            prev._next = next;
        }
        if (next === null) {
            this._itTail = prev;
        }
        else {
            next._prev = prev;
        }
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._addToMoves = function (record, toIndex) {
        // todo(vicb)
        // assert(record._nextMoved === null);
        if (record.previousIndex === toIndex) {
            return record;
        }
        if (this._movesTail === null) {
            // todo(vicb)
            // assert(_movesHead === null);
            this._movesTail = this._movesHead = record;
        }
        else {
            // todo(vicb)
            // assert(_movesTail._nextMoved === null);
            this._movesTail = this._movesTail._nextMoved = record;
        }
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._addToRemovals = function (record) {
        if (this._unlinkedRecords === null) {
            this._unlinkedRecords = new _DuplicateMap();
        }
        this._unlinkedRecords.put(record);
        record.currentIndex = null;
        record._nextRemoved = null;
        if (this._removalsTail === null) {
            // todo(vicb)
            // assert(_removalsHead === null);
            this._removalsTail = this._removalsHead = record;
            record._prevRemoved = null;
        }
        else {
            // todo(vicb)
            // assert(_removalsTail._nextRemoved === null);
            // assert(record._nextRemoved === null);
            record._prevRemoved = this._removalsTail;
            this._removalsTail = this._removalsTail._nextRemoved = record;
        }
        return record;
    };
    DefaultIterableDiffer.prototype.toString = function () {
        var record;
        var list = [];
        for (record = this._itHead; record !== null; record = record._next) {
            list.push(record);
        }
        var previous = [];
        for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
            previous.push(record);
        }
        var additions = [];
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            additions.push(record);
        }
        var moves = [];
        for (record = this._movesHead; record !== null; record = record._nextMoved) {
            moves.push(record);
        }
        var removals = [];
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            removals.push(record);
        }
        return "collection: " + list.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" +
            "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" +
            "removals: " + removals.join(', ') + "\n";
    };
    return DefaultIterableDiffer;
})();
exports.DefaultIterableDiffer = DefaultIterableDiffer;
var CollectionChangeRecord = (function () {
    function CollectionChangeRecord(item) {
        this.item = item;
        this.currentIndex = null;
        this.previousIndex = null;
        /** @internal */
        this._nextPrevious = null;
        /** @internal */
        this._prev = null;
        /** @internal */
        this._next = null;
        /** @internal */
        this._prevDup = null;
        /** @internal */
        this._nextDup = null;
        /** @internal */
        this._prevRemoved = null;
        /** @internal */
        this._nextRemoved = null;
        /** @internal */
        this._nextAdded = null;
        /** @internal */
        this._nextMoved = null;
    }
    CollectionChangeRecord.prototype.toString = function () {
        return this.previousIndex === this.currentIndex ?
            lang_2.stringify(this.item) :
            lang_2.stringify(this.item) + '[' + lang_2.stringify(this.previousIndex) + '->' +
                lang_2.stringify(this.currentIndex) + ']';
    };
    return CollectionChangeRecord;
})();
exports.CollectionChangeRecord = CollectionChangeRecord;
// A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
var _DuplicateItemRecordList = (function () {
    function _DuplicateItemRecordList() {
        /** @internal */
        this._head = null;
        /** @internal */
        this._tail = null;
    }
    /**
     * Append the record to the list of duplicates.
     *
     * Note: by design all records in the list of duplicates hold the same value in record.item.
     */
    _DuplicateItemRecordList.prototype.add = function (record) {
        if (this._head === null) {
            this._head = this._tail = record;
            record._nextDup = null;
            record._prevDup = null;
        }
        else {
            // todo(vicb)
            // assert(record.item ==  _head.item ||
            //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
            this._tail._nextDup = record;
            record._prevDup = this._tail;
            record._nextDup = null;
            this._tail = record;
        }
    };
    // Returns a CollectionChangeRecord having CollectionChangeRecord.item == item and
    // CollectionChangeRecord.currentIndex >= afterIndex
    _DuplicateItemRecordList.prototype.get = function (item, afterIndex) {
        var record;
        for (record = this._head; record !== null; record = record._nextDup) {
            if ((afterIndex === null || afterIndex < record.currentIndex) &&
                lang_2.looseIdentical(record.item, item)) {
                return record;
            }
        }
        return null;
    };
    /**
     * Remove one {@link CollectionChangeRecord} from the list of duplicates.
     *
     * Returns whether the list of duplicates is empty.
     */
    _DuplicateItemRecordList.prototype.remove = function (record) {
        // todo(vicb)
        // assert(() {
        //  // verify that the record being removed is in the list.
        //  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
        //    if (identical(cursor, record)) return true;
        //  }
        //  return false;
        //});
        var prev = record._prevDup;
        var next = record._nextDup;
        if (prev === null) {
            this._head = next;
        }
        else {
            prev._nextDup = next;
        }
        if (next === null) {
            this._tail = prev;
        }
        else {
            next._prevDup = prev;
        }
        return this._head === null;
    };
    return _DuplicateItemRecordList;
})();
var _DuplicateMap = (function () {
    function _DuplicateMap() {
        this.map = new Map();
    }
    _DuplicateMap.prototype.put = function (record) {
        // todo(vicb) handle corner cases
        var key = lang_2.getMapKey(record.item);
        var duplicates = this.map.get(key);
        if (!lang_2.isPresent(duplicates)) {
            duplicates = new _DuplicateItemRecordList();
            this.map.set(key, duplicates);
        }
        duplicates.add(record);
    };
    /**
     * Retrieve the `value` using key. Because the CollectionChangeRecord value maybe one which we
     * have already iterated over, we use the afterIndex to pretend it is not there.
     *
     * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
     * have any more `a`s needs to return the last `a` not the first or second.
     */
    _DuplicateMap.prototype.get = function (value, afterIndex) {
        if (afterIndex === void 0) { afterIndex = null; }
        var key = lang_2.getMapKey(value);
        var recordList = this.map.get(key);
        return lang_2.isBlank(recordList) ? null : recordList.get(value, afterIndex);
    };
    /**
     * Removes a {@link CollectionChangeRecord} from the list of duplicates.
     *
     * The list of duplicates also is removed from the map if it gets empty.
     */
    _DuplicateMap.prototype.remove = function (record) {
        var key = lang_2.getMapKey(record.item);
        // todo(vicb)
        // assert(this.map.containsKey(key));
        var recordList = this.map.get(key);
        // Remove the list of duplicates when it gets empty
        if (recordList.remove(record)) {
            this.map.delete(key);
        }
        return record;
    };
    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
        get: function () { return this.map.size === 0; },
        enumerable: true,
        configurable: true
    });
    _DuplicateMap.prototype.clear = function () { this.map.clear(); };
    _DuplicateMap.prototype.toString = function () { return '_DuplicateMap(' + lang_2.stringify(this.map) + ')'; };
    return _DuplicateMap;
})();
},{"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],18:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var DefaultKeyValueDifferFactory = (function () {
    function DefaultKeyValueDifferFactory() {
    }
    DefaultKeyValueDifferFactory.prototype.supports = function (obj) { return obj instanceof Map || lang_1.isJsObject(obj); };
    DefaultKeyValueDifferFactory.prototype.create = function (cdRef) { return new DefaultKeyValueDiffer(); };
    DefaultKeyValueDifferFactory = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], DefaultKeyValueDifferFactory);
    return DefaultKeyValueDifferFactory;
})();
exports.DefaultKeyValueDifferFactory = DefaultKeyValueDifferFactory;
var DefaultKeyValueDiffer = (function () {
    function DefaultKeyValueDiffer() {
        this._records = new Map();
        this._mapHead = null;
        this._previousMapHead = null;
        this._changesHead = null;
        this._changesTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._removalsHead = null;
        this._removalsTail = null;
    }
    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
        get: function () {
            return this._additionsHead !== null || this._changesHead !== null ||
                this._removalsHead !== null;
        },
        enumerable: true,
        configurable: true
    });
    DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
        var record;
        for (record = this._mapHead; record !== null; record = record._next) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
        var record;
        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
        var record;
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
        var record;
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
        var record;
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.diff = function (map) {
        if (lang_1.isBlank(map))
            map = collection_1.MapWrapper.createFromPairs([]);
        if (!(map instanceof Map || lang_1.isJsObject(map))) {
            throw new exceptions_1.BaseException("Error trying to diff '" + map + "'");
        }
        if (this.check(map)) {
            return this;
        }
        else {
            return null;
        }
    };
    DefaultKeyValueDiffer.prototype.onDestroy = function () { };
    DefaultKeyValueDiffer.prototype.check = function (map) {
        var _this = this;
        this._reset();
        var records = this._records;
        var oldSeqRecord = this._mapHead;
        var lastOldSeqRecord = null;
        var lastNewSeqRecord = null;
        var seqChanged = false;
        this._forEach(map, function (value, key) {
            var newSeqRecord;
            if (oldSeqRecord !== null && key === oldSeqRecord.key) {
                newSeqRecord = oldSeqRecord;
                if (!lang_1.looseIdentical(value, oldSeqRecord.currentValue)) {
                    oldSeqRecord.previousValue = oldSeqRecord.currentValue;
                    oldSeqRecord.currentValue = value;
                    _this._addToChanges(oldSeqRecord);
                }
            }
            else {
                seqChanged = true;
                if (oldSeqRecord !== null) {
                    oldSeqRecord._next = null;
                    _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
                    _this._addToRemovals(oldSeqRecord);
                }
                if (records.has(key)) {
                    newSeqRecord = records.get(key);
                }
                else {
                    newSeqRecord = new KVChangeRecord(key);
                    records.set(key, newSeqRecord);
                    newSeqRecord.currentValue = value;
                    _this._addToAdditions(newSeqRecord);
                }
            }
            if (seqChanged) {
                if (_this._isInRemovals(newSeqRecord)) {
                    _this._removeFromRemovals(newSeqRecord);
                }
                if (lastNewSeqRecord == null) {
                    _this._mapHead = newSeqRecord;
                }
                else {
                    lastNewSeqRecord._next = newSeqRecord;
                }
            }
            lastOldSeqRecord = oldSeqRecord;
            lastNewSeqRecord = newSeqRecord;
            oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
        });
        this._truncate(lastOldSeqRecord, oldSeqRecord);
        return this.isDirty;
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._reset = function () {
        if (this.isDirty) {
            var record;
            // Record the state of the mapping
            for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
                record._nextPrevious = record._next;
            }
            for (record = this._changesHead; record !== null; record = record._nextChanged) {
                record.previousValue = record.currentValue;
            }
            for (record = this._additionsHead; record != null; record = record._nextAdded) {
                record.previousValue = record.currentValue;
            }
            // todo(vicb) once assert is supported
            // assert(() {
            //  var r = _changesHead;
            //  while (r != null) {
            //    var nextRecord = r._nextChanged;
            //    r._nextChanged = null;
            //    r = nextRecord;
            //  }
            //
            //  r = _additionsHead;
            //  while (r != null) {
            //    var nextRecord = r._nextAdded;
            //    r._nextAdded = null;
            //    r = nextRecord;
            //  }
            //
            //  r = _removalsHead;
            //  while (r != null) {
            //    var nextRecord = r._nextRemoved;
            //    r._nextRemoved = null;
            //    r = nextRecord;
            //  }
            //
            //  return true;
            //});
            this._changesHead = this._changesTail = null;
            this._additionsHead = this._additionsTail = null;
            this._removalsHead = this._removalsTail = null;
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._truncate = function (lastRecord, record) {
        while (record !== null) {
            if (lastRecord === null) {
                this._mapHead = null;
            }
            else {
                lastRecord._next = null;
            }
            var nextRecord = record._next;
            // todo(vicb) assert
            // assert((() {
            //  record._next = null;
            //  return true;
            //}));
            this._addToRemovals(record);
            lastRecord = record;
            record = nextRecord;
        }
        for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
            rec.previousValue = rec.currentValue;
            rec.currentValue = null;
            this._records.delete(rec.key);
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._isInRemovals = function (record) {
        return record === this._removalsHead || record._nextRemoved !== null ||
            record._prevRemoved !== null;
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._addToRemovals = function (record) {
        // todo(vicb) assert
        // assert(record._next == null);
        // assert(record._nextAdded == null);
        // assert(record._nextChanged == null);
        // assert(record._nextRemoved == null);
        // assert(record._prevRemoved == null);
        if (this._removalsHead === null) {
            this._removalsHead = this._removalsTail = record;
        }
        else {
            this._removalsTail._nextRemoved = record;
            record._prevRemoved = this._removalsTail;
            this._removalsTail = record;
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._removeFromSeq = function (prev, record) {
        var next = record._next;
        if (prev === null) {
            this._mapHead = next;
        }
        else {
            prev._next = next;
        }
        // todo(vicb) assert
        // assert((() {
        //  record._next = null;
        //  return true;
        //})());
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._removeFromRemovals = function (record) {
        // todo(vicb) assert
        // assert(record._next == null);
        // assert(record._nextAdded == null);
        // assert(record._nextChanged == null);
        var prev = record._prevRemoved;
        var next = record._nextRemoved;
        if (prev === null) {
            this._removalsHead = next;
        }
        else {
            prev._nextRemoved = next;
        }
        if (next === null) {
            this._removalsTail = prev;
        }
        else {
            next._prevRemoved = prev;
        }
        record._prevRemoved = record._nextRemoved = null;
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
        // todo(vicb): assert
        // assert(record._next == null);
        // assert(record._nextAdded == null);
        // assert(record._nextChanged == null);
        // assert(record._nextRemoved == null);
        // assert(record._prevRemoved == null);
        if (this._additionsHead === null) {
            this._additionsHead = this._additionsTail = record;
        }
        else {
            this._additionsTail._nextAdded = record;
            this._additionsTail = record;
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
        // todo(vicb) assert
        // assert(record._nextAdded == null);
        // assert(record._nextChanged == null);
        // assert(record._nextRemoved == null);
        // assert(record._prevRemoved == null);
        if (this._changesHead === null) {
            this._changesHead = this._changesTail = record;
        }
        else {
            this._changesTail._nextChanged = record;
            this._changesTail = record;
        }
    };
    DefaultKeyValueDiffer.prototype.toString = function () {
        var items = [];
        var previous = [];
        var changes = [];
        var additions = [];
        var removals = [];
        var record;
        for (record = this._mapHead; record !== null; record = record._next) {
            items.push(lang_1.stringify(record));
        }
        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
            previous.push(lang_1.stringify(record));
        }
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
            changes.push(lang_1.stringify(record));
        }
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            additions.push(lang_1.stringify(record));
        }
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            removals.push(lang_1.stringify(record));
        }
        return "map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" +
            "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" +
            "removals: " + removals.join(', ') + "\n";
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
        if (obj instanceof Map) {
            obj.forEach(fn);
        }
        else {
            collection_1.StringMapWrapper.forEach(obj, fn);
        }
    };
    return DefaultKeyValueDiffer;
})();
exports.DefaultKeyValueDiffer = DefaultKeyValueDiffer;
var KVChangeRecord = (function () {
    function KVChangeRecord(key) {
        this.key = key;
        this.previousValue = null;
        this.currentValue = null;
        /** @internal */
        this._nextPrevious = null;
        /** @internal */
        this._next = null;
        /** @internal */
        this._nextAdded = null;
        /** @internal */
        this._nextRemoved = null;
        /** @internal */
        this._prevRemoved = null;
        /** @internal */
        this._nextChanged = null;
    }
    KVChangeRecord.prototype.toString = function () {
        return lang_1.looseIdentical(this.previousValue, this.currentValue) ?
            lang_1.stringify(this.key) :
            (lang_1.stringify(this.key) + '[' + lang_1.stringify(this.previousValue) + '->' +
                lang_1.stringify(this.currentValue) + ']');
    };
    return KVChangeRecord;
})();
exports.KVChangeRecord = KVChangeRecord;
},{"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],19:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var di_1 = require('angular2/src/core/di');
/**
 * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
 */
var IterableDiffers = (function () {
    function IterableDiffers(factories) {
        this.factories = factories;
    }
    IterableDiffers.create = function (factories, parent) {
        if (lang_1.isPresent(parent)) {
            var copied = collection_1.ListWrapper.clone(parent.factories);
            factories = factories.concat(copied);
            return new IterableDiffers(factories);
        }
        else {
            return new IterableDiffers(factories);
        }
    };
    /**
     * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
     * inherited {@link IterableDiffers} instance with the provided factories and return a new
     * {@link IterableDiffers} instance.
     *
     * The following example shows how to extend an existing list of factories,
           * which will only be applied to the injector for this component and its children.
           * This step is all that's required to make a new {@link IterableDiffer} available.
     *
     * ### Example
     *
     * ```
     * @Component({
     *   viewProviders: [
     *     IterableDiffers.extend([new ImmutableListDiffer()])
     *   ]
     * })
     * ```
     */
    IterableDiffers.extend = function (factories) {
        return new di_1.Provider(IterableDiffers, {
            useFactory: function (parent) {
                if (lang_1.isBlank(parent)) {
                    // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
                    // to
                    // bootstrap(), which would override default pipes instead of extending them.
                    throw new exceptions_1.BaseException('Cannot extend IterableDiffers without a parent injector');
                }
                return IterableDiffers.create(factories, parent);
            },
            // Dependency technically isn't optional, but we can provide a better error message this way.
            deps: [[IterableDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
        });
    };
    IterableDiffers.prototype.find = function (iterable) {
        var factory = this.factories.find(function (f) { return f.supports(iterable); });
        if (lang_1.isPresent(factory)) {
            return factory;
        }
        else {
            throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + iterable + "'");
        }
    };
    IterableDiffers = __decorate([
        di_1.Injectable(),
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Array])
    ], IterableDiffers);
    return IterableDiffers;
})();
exports.IterableDiffers = IterableDiffers;
},{"angular2/src/core/di":38,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],20:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var di_1 = require('angular2/src/core/di');
/**
 * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
 */
var KeyValueDiffers = (function () {
    function KeyValueDiffers(factories) {
        this.factories = factories;
    }
    KeyValueDiffers.create = function (factories, parent) {
        if (lang_1.isPresent(parent)) {
            var copied = collection_1.ListWrapper.clone(parent.factories);
            factories = factories.concat(copied);
            return new KeyValueDiffers(factories);
        }
        else {
            return new KeyValueDiffers(factories);
        }
    };
    /**
     * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
     * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
     * {@link KeyValueDiffers} instance.
     *
     * The following example shows how to extend an existing list of factories,
           * which will only be applied to the injector for this component and its children.
           * This step is all that's required to make a new {@link KeyValueDiffer} available.
     *
     * ### Example
     *
     * ```
     * @Component({
     *   viewProviders: [
     *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
     *   ]
     * })
     * ```
     */
    KeyValueDiffers.extend = function (factories) {
        return new di_1.Provider(KeyValueDiffers, {
            useFactory: function (parent) {
                if (lang_1.isBlank(parent)) {
                    // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
                    // to
                    // bootstrap(), which would override default pipes instead of extending them.
                    throw new exceptions_1.BaseException('Cannot extend KeyValueDiffers without a parent injector');
                }
                return KeyValueDiffers.create(factories, parent);
            },
            // Dependency technically isn't optional, but we can provide a better error message this way.
            deps: [[KeyValueDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
        });
    };
    KeyValueDiffers.prototype.find = function (kv) {
        var factory = this.factories.find(function (f) { return f.supports(kv); });
        if (lang_1.isPresent(factory)) {
            return factory;
        }
        else {
            throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + kv + "'");
        }
    };
    KeyValueDiffers = __decorate([
        di_1.Injectable(),
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Array])
    ], KeyValueDiffers);
    return KeyValueDiffers;
})();
exports.KeyValueDiffers = KeyValueDiffers;
},{"angular2/src/core/di":38,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],21:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var constants_1 = require('./constants');
var DirectiveIndex = (function () {
    function DirectiveIndex(elementIndex, directiveIndex) {
        this.elementIndex = elementIndex;
        this.directiveIndex = directiveIndex;
    }
    Object.defineProperty(DirectiveIndex.prototype, "name", {
        get: function () { return this.elementIndex + "_" + this.directiveIndex; },
        enumerable: true,
        configurable: true
    });
    return DirectiveIndex;
})();
exports.DirectiveIndex = DirectiveIndex;
var DirectiveRecord = (function () {
    function DirectiveRecord(_a) {
        var _b = _a === void 0 ? {} : _a, directiveIndex = _b.directiveIndex, callAfterContentInit = _b.callAfterContentInit, callAfterContentChecked = _b.callAfterContentChecked, callAfterViewInit = _b.callAfterViewInit, callAfterViewChecked = _b.callAfterViewChecked, callOnChanges = _b.callOnChanges, callDoCheck = _b.callDoCheck, callOnInit = _b.callOnInit, changeDetection = _b.changeDetection;
        this.directiveIndex = directiveIndex;
        this.callAfterContentInit = lang_1.normalizeBool(callAfterContentInit);
        this.callAfterContentChecked = lang_1.normalizeBool(callAfterContentChecked);
        this.callOnChanges = lang_1.normalizeBool(callOnChanges);
        this.callAfterViewInit = lang_1.normalizeBool(callAfterViewInit);
        this.callAfterViewChecked = lang_1.normalizeBool(callAfterViewChecked);
        this.callDoCheck = lang_1.normalizeBool(callDoCheck);
        this.callOnInit = lang_1.normalizeBool(callOnInit);
        this.changeDetection = changeDetection;
    }
    DirectiveRecord.prototype.isDefaultChangeDetection = function () {
        return constants_1.isDefaultChangeDetectionStrategy(this.changeDetection);
    };
    return DirectiveRecord;
})();
exports.DirectiveRecord = DirectiveRecord;
},{"./constants":16,"angular2/src/facade/lang":98}],22:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var abstract_change_detector_1 = require('./abstract_change_detector');
var change_detection_util_1 = require('./change_detection_util');
var constants_1 = require('./constants');
var proto_record_1 = require('./proto_record');
var DynamicChangeDetector = (function (_super) {
    __extends(DynamicChangeDetector, _super);
    function DynamicChangeDetector(id, dispatcher, numberOfPropertyProtoRecords, propertyBindingTargets, directiveIndices, strategy, _records, _eventBindings, _directiveRecords, _genConfig) {
        _super.call(this, id, dispatcher, numberOfPropertyProtoRecords, propertyBindingTargets, directiveIndices, strategy);
        this._records = _records;
        this._eventBindings = _eventBindings;
        this._directiveRecords = _directiveRecords;
        this._genConfig = _genConfig;
        this.directives = null;
        var len = _records.length + 1;
        this.values = collection_1.ListWrapper.createFixedSize(len);
        this.localPipes = collection_1.ListWrapper.createFixedSize(len);
        this.prevContexts = collection_1.ListWrapper.createFixedSize(len);
        this.changes = collection_1.ListWrapper.createFixedSize(len);
        this.dehydrateDirectives(false);
    }
    DynamicChangeDetector.prototype.handleEventInternal = function (eventName, elIndex, locals) {
        var _this = this;
        var preventDefault = false;
        this._matchingEventBindings(eventName, elIndex)
            .forEach(function (rec) {
            var res = _this._processEventBinding(rec, locals);
            if (res === false) {
                preventDefault = true;
            }
        });
        return preventDefault;
    };
    /** @internal */
    DynamicChangeDetector.prototype._processEventBinding = function (eb, locals) {
        var values = collection_1.ListWrapper.createFixedSize(eb.records.length);
        values[0] = this.values[0];
        for (var protoIdx = 0; protoIdx < eb.records.length; ++protoIdx) {
            var proto = eb.records[protoIdx];
            if (proto.isSkipRecord()) {
                protoIdx += this._computeSkipLength(protoIdx, proto, values);
            }
            else {
                var res = this._calculateCurrValue(proto, values, locals);
                if (proto.lastInBinding) {
                    this._markPathAsCheckOnce(proto);
                    return res;
                }
                else {
                    this._writeSelf(proto, res, values);
                }
            }
        }
        throw new exceptions_1.BaseException("Cannot be reached");
    };
    DynamicChangeDetector.prototype._computeSkipLength = function (protoIndex, proto, values) {
        if (proto.mode === proto_record_1.RecordType.SkipRecords) {
            return proto.fixedArgs[0] - protoIndex - 1;
        }
        if (proto.mode === proto_record_1.RecordType.SkipRecordsIf) {
            var condition = this._readContext(proto, values);
            return condition ? proto.fixedArgs[0] - protoIndex - 1 : 0;
        }
        if (proto.mode === proto_record_1.RecordType.SkipRecordsIfNot) {
            var condition = this._readContext(proto, values);
            return condition ? 0 : proto.fixedArgs[0] - protoIndex - 1;
        }
        throw new exceptions_1.BaseException("Cannot be reached");
    };
    /** @internal */
    DynamicChangeDetector.prototype._markPathAsCheckOnce = function (proto) {
        if (!proto.bindingRecord.isDefaultChangeDetection()) {
            var dir = proto.bindingRecord.directiveRecord;
            this._getDetectorFor(dir.directiveIndex).markPathToRootAsCheckOnce();
        }
    };
    /** @internal */
    DynamicChangeDetector.prototype._matchingEventBindings = function (eventName, elIndex) {
        return this._eventBindings.filter(function (eb) { return eb.eventName == eventName && eb.elIndex === elIndex; });
    };
    DynamicChangeDetector.prototype.hydrateDirectives = function (directives) {
        this.values[0] = this.context;
        this.directives = directives;
        if (this.strategy === constants_1.ChangeDetectionStrategy.OnPushObserve) {
            for (var i = 0; i < this.directiveIndices.length; ++i) {
                var index = this.directiveIndices[i];
                _super.prototype.observeDirective.call(this, directives.getDirectiveFor(index), i);
            }
        }
    };
    DynamicChangeDetector.prototype.dehydrateDirectives = function (destroyPipes) {
        if (destroyPipes) {
            this._destroyPipes();
        }
        this.values[0] = null;
        this.directives = null;
        collection_1.ListWrapper.fill(this.values, change_detection_util_1.ChangeDetectionUtil.uninitialized, 1);
        collection_1.ListWrapper.fill(this.changes, false);
        collection_1.ListWrapper.fill(this.localPipes, null);
        collection_1.ListWrapper.fill(this.prevContexts, change_detection_util_1.ChangeDetectionUtil.uninitialized);
    };
    /** @internal */
    DynamicChangeDetector.prototype._destroyPipes = function () {
        for (var i = 0; i < this.localPipes.length; ++i) {
            if (lang_1.isPresent(this.localPipes[i])) {
                change_detection_util_1.ChangeDetectionUtil.callPipeOnDestroy(this.localPipes[i]);
            }
        }
    };
    DynamicChangeDetector.prototype.checkNoChanges = function () { this.runDetectChanges(true); };
    DynamicChangeDetector.prototype.detectChangesInRecordsInternal = function (throwOnChange) {
        var protos = this._records;
        var changes = null;
        var isChanged = false;
        for (var protoIdx = 0; protoIdx < protos.length; ++protoIdx) {
            var proto = protos[protoIdx];
            var bindingRecord = proto.bindingRecord;
            var directiveRecord = bindingRecord.directiveRecord;
            if (this._firstInBinding(proto)) {
                this.propertyBindingIndex = proto.propertyBindingIndex;
            }
            if (proto.isLifeCycleRecord()) {
                if (proto.name === "DoCheck" && !throwOnChange) {
                    this._getDirectiveFor(directiveRecord.directiveIndex).ngDoCheck();
                }
                else if (proto.name === "OnInit" && !throwOnChange &&
                    this.state == constants_1.ChangeDetectorState.NeverChecked) {
                    this._getDirectiveFor(directiveRecord.directiveIndex).ngOnInit();
                }
                else if (proto.name === "OnChanges" && lang_1.isPresent(changes) && !throwOnChange) {
                    this._getDirectiveFor(directiveRecord.directiveIndex).ngOnChanges(changes);
                }
            }
            else if (proto.isSkipRecord()) {
                protoIdx += this._computeSkipLength(protoIdx, proto, this.values);
            }
            else {
                var change = this._check(proto, throwOnChange, this.values, this.locals);
                if (lang_1.isPresent(change)) {
                    this._updateDirectiveOrElement(change, bindingRecord);
                    isChanged = true;
                    changes = this._addChange(bindingRecord, change, changes);
                }
            }
            if (proto.lastInDirective) {
                changes = null;
                if (isChanged && !bindingRecord.isDefaultChangeDetection()) {
                    this._getDetectorFor(directiveRecord.directiveIndex).markAsCheckOnce();
                }
                isChanged = false;
            }
        }
    };
    /** @internal */
    DynamicChangeDetector.prototype._firstInBinding = function (r) {
        var prev = change_detection_util_1.ChangeDetectionUtil.protoByIndex(this._records, r.selfIndex - 1);
        return lang_1.isBlank(prev) || prev.bindingRecord !== r.bindingRecord;
    };
    DynamicChangeDetector.prototype.afterContentLifecycleCallbacksInternal = function () {
        var dirs = this._directiveRecords;
        for (var i = dirs.length - 1; i >= 0; --i) {
            var dir = dirs[i];
            if (dir.callAfterContentInit && this.state == constants_1.ChangeDetectorState.NeverChecked) {
                this._getDirectiveFor(dir.directiveIndex).ngAfterContentInit();
            }
            if (dir.callAfterContentChecked) {
                this._getDirectiveFor(dir.directiveIndex).ngAfterContentChecked();
            }
        }
    };
    DynamicChangeDetector.prototype.afterViewLifecycleCallbacksInternal = function () {
        var dirs = this._directiveRecords;
        for (var i = dirs.length - 1; i >= 0; --i) {
            var dir = dirs[i];
            if (dir.callAfterViewInit && this.state == constants_1.ChangeDetectorState.NeverChecked) {
                this._getDirectiveFor(dir.directiveIndex).ngAfterViewInit();
            }
            if (dir.callAfterViewChecked) {
                this._getDirectiveFor(dir.directiveIndex).ngAfterViewChecked();
            }
        }
    };
    /** @internal */
    DynamicChangeDetector.prototype._updateDirectiveOrElement = function (change, bindingRecord) {
        if (lang_1.isBlank(bindingRecord.directiveRecord)) {
            _super.prototype.notifyDispatcher.call(this, change.currentValue);
        }
        else {
            var directiveIndex = bindingRecord.directiveRecord.directiveIndex;
            bindingRecord.setter(this._getDirectiveFor(directiveIndex), change.currentValue);
        }
        if (this._genConfig.logBindingUpdate) {
            _super.prototype.logBindingUpdate.call(this, change.currentValue);
        }
    };
    /** @internal */
    DynamicChangeDetector.prototype._addChange = function (bindingRecord, change, changes) {
        if (bindingRecord.callOnChanges()) {
            return _super.prototype.addChange.call(this, changes, change.previousValue, change.currentValue);
        }
        else {
            return changes;
        }
    };
    /** @internal */
    DynamicChangeDetector.prototype._getDirectiveFor = function (directiveIndex) {
        return this.directives.getDirectiveFor(directiveIndex);
    };
    /** @internal */
    DynamicChangeDetector.prototype._getDetectorFor = function (directiveIndex) { return this.directives.getDetectorFor(directiveIndex); };
    /** @internal */
    DynamicChangeDetector.prototype._check = function (proto, throwOnChange, values, locals) {
        if (proto.isPipeRecord()) {
            return this._pipeCheck(proto, throwOnChange, values);
        }
        else {
            return this._referenceCheck(proto, throwOnChange, values, locals);
        }
    };
    /** @internal */
    DynamicChangeDetector.prototype._referenceCheck = function (proto, throwOnChange, values, locals) {
        if (this._pureFuncAndArgsDidNotChange(proto)) {
            this._setChanged(proto, false);
            return null;
        }
        var currValue = this._calculateCurrValue(proto, values, locals);
        if (this.strategy === constants_1.ChangeDetectionStrategy.OnPushObserve) {
            _super.prototype.observeValue.call(this, currValue, proto.selfIndex);
        }
        if (proto.shouldBeChecked()) {
            var prevValue = this._readSelf(proto, values);
            if (change_detection_util_1.ChangeDetectionUtil.looseNotIdentical(prevValue, currValue)) {
                if (proto.lastInBinding) {
                    var change = change_detection_util_1.ChangeDetectionUtil.simpleChange(prevValue, currValue);
                    if (throwOnChange)
                        this.throwOnChangeError(prevValue, currValue);
                    this._writeSelf(proto, currValue, values);
                    this._setChanged(proto, true);
                    return change;
                }
                else {
                    this._writeSelf(proto, currValue, values);
                    this._setChanged(proto, true);
                    return null;
                }
            }
            else {
                this._setChanged(proto, false);
                return null;
            }
        }
        else {
            this._writeSelf(proto, currValue, values);
            this._setChanged(proto, true);
            return null;
        }
    };
    DynamicChangeDetector.prototype._calculateCurrValue = function (proto, values, locals) {
        switch (proto.mode) {
            case proto_record_1.RecordType.Self:
                return this._readContext(proto, values);
            case proto_record_1.RecordType.Const:
                return proto.funcOrValue;
            case proto_record_1.RecordType.PropertyRead:
                var context = this._readContext(proto, values);
                return proto.funcOrValue(context);
            case proto_record_1.RecordType.SafeProperty:
                var context = this._readContext(proto, values);
                return lang_1.isBlank(context) ? null : proto.funcOrValue(context);
            case proto_record_1.RecordType.PropertyWrite:
                var context = this._readContext(proto, values);
                var value = this._readArgs(proto, values)[0];
                proto.funcOrValue(context, value);
                return value;
            case proto_record_1.RecordType.KeyedWrite:
                var context = this._readContext(proto, values);
                var key = this._readArgs(proto, values)[0];
                var value = this._readArgs(proto, values)[1];
                context[key] = value;
                return value;
            case proto_record_1.RecordType.Local:
                return locals.get(proto.name);
            case proto_record_1.RecordType.InvokeMethod:
                var context = this._readContext(proto, values);
                var args = this._readArgs(proto, values);
                return proto.funcOrValue(context, args);
            case proto_record_1.RecordType.SafeMethodInvoke:
                var context = this._readContext(proto, values);
                if (lang_1.isBlank(context)) {
                    return null;
                }
                var args = this._readArgs(proto, values);
                return proto.funcOrValue(context, args);
            case proto_record_1.RecordType.KeyedRead:
                var arg = this._readArgs(proto, values)[0];
                return this._readContext(proto, values)[arg];
            case proto_record_1.RecordType.Chain:
                var args = this._readArgs(proto, values);
                return args[args.length - 1];
            case proto_record_1.RecordType.InvokeClosure:
                return lang_1.FunctionWrapper.apply(this._readContext(proto, values), this._readArgs(proto, values));
            case proto_record_1.RecordType.Interpolate:
            case proto_record_1.RecordType.PrimitiveOp:
            case proto_record_1.RecordType.CollectionLiteral:
                return lang_1.FunctionWrapper.apply(proto.funcOrValue, this._readArgs(proto, values));
            default:
                throw new exceptions_1.BaseException("Unknown operation " + proto.mode);
        }
    };
    DynamicChangeDetector.prototype._pipeCheck = function (proto, throwOnChange, values) {
        var context = this._readContext(proto, values);
        var selectedPipe = this._pipeFor(proto, context);
        if (!selectedPipe.pure || this._argsOrContextChanged(proto)) {
            var args = this._readArgs(proto, values);
            var currValue = selectedPipe.pipe.transform(context, args);
            if (proto.shouldBeChecked()) {
                var prevValue = this._readSelf(proto, values);
                if (change_detection_util_1.ChangeDetectionUtil.looseNotIdentical(prevValue, currValue)) {
                    currValue = change_detection_util_1.ChangeDetectionUtil.unwrapValue(currValue);
                    if (proto.lastInBinding) {
                        var change = change_detection_util_1.ChangeDetectionUtil.simpleChange(prevValue, currValue);
                        if (throwOnChange)
                            this.throwOnChangeError(prevValue, currValue);
                        this._writeSelf(proto, currValue, values);
                        this._setChanged(proto, true);
                        return change;
                    }
                    else {
                        this._writeSelf(proto, currValue, values);
                        this._setChanged(proto, true);
                        return null;
                    }
                }
                else {
                    this._setChanged(proto, false);
                    return null;
                }
            }
            else {
                this._writeSelf(proto, currValue, values);
                this._setChanged(proto, true);
                return null;
            }
        }
    };
    DynamicChangeDetector.prototype._pipeFor = function (proto, context) {
        var storedPipe = this._readPipe(proto);
        if (lang_1.isPresent(storedPipe))
            return storedPipe;
        var pipe = this.pipes.get(proto.name);
        this._writePipe(proto, pipe);
        return pipe;
    };
    DynamicChangeDetector.prototype._readContext = function (proto, values) {
        if (proto.contextIndex == -1) {
            return this._getDirectiveFor(proto.directiveIndex);
        }
        return values[proto.contextIndex];
    };
    DynamicChangeDetector.prototype._readSelf = function (proto, values) { return values[proto.selfIndex]; };
    DynamicChangeDetector.prototype._writeSelf = function (proto, value, values) { values[proto.selfIndex] = value; };
    DynamicChangeDetector.prototype._readPipe = function (proto) { return this.localPipes[proto.selfIndex]; };
    DynamicChangeDetector.prototype._writePipe = function (proto, value) { this.localPipes[proto.selfIndex] = value; };
    DynamicChangeDetector.prototype._setChanged = function (proto, value) {
        if (proto.argumentToPureFunction)
            this.changes[proto.selfIndex] = value;
    };
    DynamicChangeDetector.prototype._pureFuncAndArgsDidNotChange = function (proto) {
        return proto.isPureFunction() && !this._argsChanged(proto);
    };
    DynamicChangeDetector.prototype._argsChanged = function (proto) {
        var args = proto.args;
        for (var i = 0; i < args.length; ++i) {
            if (this.changes[args[i]]) {
                return true;
            }
        }
        return false;
    };
    DynamicChangeDetector.prototype._argsOrContextChanged = function (proto) {
        return this._argsChanged(proto) || this.changes[proto.contextIndex];
    };
    DynamicChangeDetector.prototype._readArgs = function (proto, values) {
        var res = collection_1.ListWrapper.createFixedSize(proto.args.length);
        var args = proto.args;
        for (var i = 0; i < args.length; ++i) {
            res[i] = values[args[i]];
        }
        return res;
    };
    return DynamicChangeDetector;
})(abstract_change_detector_1.AbstractChangeDetector);
exports.DynamicChangeDetector = DynamicChangeDetector;
},{"./abstract_change_detector":6,"./change_detection_util":10,"./constants":16,"./proto_record":35,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],23:[function(require,module,exports){
'use strict';var EventBinding = (function () {
    function EventBinding(eventName, elIndex, dirIndex, records) {
        this.eventName = eventName;
        this.elIndex = elIndex;
        this.dirIndex = dirIndex;
        this.records = records;
    }
    return EventBinding;
})();
exports.EventBinding = EventBinding;
},{}],24:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exceptions_1 = require("angular2/src/facade/exceptions");
/**
 * An error thrown if application changes model breaking the top-down data flow.
 *
 * This exception is only thrown in dev mode.
 *
 * <!-- TODO: Add a link once the dev mode option is configurable -->
 *
 * ### Example
 *
 * ```typescript
 * @Component({
 *   selector: 'parent',
 *   template: `
 *     <child [prop]="parentProp"></child>
 *   `,
 *   directives: [forwardRef(() => Child)]
 * })
 * class Parent {
 *   parentProp = "init";
 * }
 *
 * @Directive({selector: 'child', inputs: ['prop']})
 * class Child {
 *   constructor(public parent: Parent) {}
 *
 *   set prop(v) {
 *     // this updates the parent property, which is disallowed during change detection
 *     // this will result in ExpressionChangedAfterItHasBeenCheckedException
 *     this.parent.parentProp = "updated";
 *   }
 * }
 * ```
 */
var ExpressionChangedAfterItHasBeenCheckedException = (function (_super) {
    __extends(ExpressionChangedAfterItHasBeenCheckedException, _super);
    function ExpressionChangedAfterItHasBeenCheckedException(exp, oldValue, currValue, context) {
        _super.call(this, ("Expression '" + exp + "' has changed after it was checked. ") +
            ("Previous value: '" + oldValue + "'. Current value: '" + currValue + "'"));
    }
    return ExpressionChangedAfterItHasBeenCheckedException;
})(exceptions_1.BaseException);
exports.ExpressionChangedAfterItHasBeenCheckedException = ExpressionChangedAfterItHasBeenCheckedException;
/**
 * Thrown when an expression evaluation raises an exception.
 *
 * This error wraps the original exception to attach additional contextual information that can
 * be useful for debugging.
 *
 * ### Example ([live demo](http://plnkr.co/edit/2Kywoz?p=preview))
 *
 * ```typescript
 * @Directive({selector: 'child', inputs: ['prop']})
 * class Child {
 *   prop;
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `
 *     <child [prop]="field.first"></child>
 *   `,
 *   directives: [Child]
 * })
 * class App {
 *   field = null;
 * }
 *
 * bootstrap(App);
 * ```
 *
 * You can access the original exception and stack through the `originalException` and
 * `originalStack` properties.
 */
var ChangeDetectionError = (function (_super) {
    __extends(ChangeDetectionError, _super);
    function ChangeDetectionError(exp, originalException, originalStack, context) {
        _super.call(this, originalException + " in [" + exp + "]", originalException, originalStack, context);
        this.location = exp;
    }
    return ChangeDetectionError;
})(exceptions_1.WrappedException);
exports.ChangeDetectionError = ChangeDetectionError;
/**
 * Thrown when change detector executes on dehydrated view.
 *
 * This error indicates a bug in the framework.
 *
 * This is an internal Angular error.
 */
var DehydratedException = (function (_super) {
    __extends(DehydratedException, _super);
    function DehydratedException() {
        _super.call(this, 'Attempt to detect changes on a dehydrated detector.');
    }
    return DehydratedException;
})(exceptions_1.BaseException);
exports.DehydratedException = DehydratedException;
},{"angular2/src/facade/exceptions":96}],25:[function(require,module,exports){
'use strict';var DebugContext = (function () {
    function DebugContext(element, componentElement, directive, context, locals, injector) {
        this.element = element;
        this.componentElement = componentElement;
        this.directive = directive;
        this.context = context;
        this.locals = locals;
        this.injector = injector;
    }
    return DebugContext;
})();
exports.DebugContext = DebugContext;
var ChangeDetectorGenConfig = (function () {
    function ChangeDetectorGenConfig(genDebugInfo, logBindingUpdate, useJit) {
        this.genDebugInfo = genDebugInfo;
        this.logBindingUpdate = logBindingUpdate;
        this.useJit = useJit;
    }
    return ChangeDetectorGenConfig;
})();
exports.ChangeDetectorGenConfig = ChangeDetectorGenConfig;
var ChangeDetectorDefinition = (function () {
    function ChangeDetectorDefinition(id, strategy, variableNames, bindingRecords, eventRecords, directiveRecords, genConfig) {
        this.id = id;
        this.strategy = strategy;
        this.variableNames = variableNames;
        this.bindingRecords = bindingRecords;
        this.eventRecords = eventRecords;
        this.directiveRecords = directiveRecords;
        this.genConfig = genConfig;
    }
    return ChangeDetectorDefinition;
})();
exports.ChangeDetectorDefinition = ChangeDetectorDefinition;
},{}],26:[function(require,module,exports){
'use strict';var change_detection_jit_generator_1 = require('./change_detection_jit_generator');
var JitProtoChangeDetector = (function () {
    function JitProtoChangeDetector(definition) {
        this.definition = definition;
        this._factory = this._createFactory(definition);
    }
    JitProtoChangeDetector.isSupported = function () { return true; };
    JitProtoChangeDetector.prototype.instantiate = function (dispatcher) { return this._factory(dispatcher); };
    /** @internal */
    JitProtoChangeDetector.prototype._createFactory = function (definition) {
        return new change_detection_jit_generator_1.ChangeDetectorJITGenerator(definition, 'util', 'AbstractChangeDetector', 'ChangeDetectorStatus')
            .generate();
    };
    return JitProtoChangeDetector;
})();
exports.JitProtoChangeDetector = JitProtoChangeDetector;
},{"./change_detection_jit_generator":9}],27:[function(require,module,exports){
'use strict';function isObservable(value) {
    return false;
}
exports.isObservable = isObservable;
},{}],28:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var collection_1 = require("angular2/src/facade/collection");
var AST = (function () {
    function AST() {
    }
    AST.prototype.visit = function (visitor) { return null; };
    AST.prototype.toString = function () { return "AST"; };
    return AST;
})();
exports.AST = AST;
/**
 * Represents a quoted expression of the form:
 *
 * quote = prefix `:` uninterpretedExpression
 * prefix = identifier
 * uninterpretedExpression = arbitrary string
 *
 * A quoted expression is meant to be pre-processed by an AST transformer that
 * converts it into another AST that no longer contains quoted expressions.
 * It is meant to allow third-party developers to extend Angular template
 * expression language. The `uninterpretedExpression` part of the quote is
 * therefore not interpreted by the Angular's own expression parser.
 */
var Quote = (function (_super) {
    __extends(Quote, _super);
    function Quote(prefix, uninterpretedExpression, location) {
        _super.call(this);
        this.prefix = prefix;
        this.uninterpretedExpression = uninterpretedExpression;
        this.location = location;
    }
    Quote.prototype.visit = function (visitor) { return visitor.visitQuote(this); };
    Quote.prototype.toString = function () { return "Quote"; };
    return Quote;
})(AST);
exports.Quote = Quote;
var EmptyExpr = (function (_super) {
    __extends(EmptyExpr, _super);
    function EmptyExpr() {
        _super.apply(this, arguments);
    }
    EmptyExpr.prototype.visit = function (visitor) {
        // do nothing
    };
    return EmptyExpr;
})(AST);
exports.EmptyExpr = EmptyExpr;
var ImplicitReceiver = (function (_super) {
    __extends(ImplicitReceiver, _super);
    function ImplicitReceiver() {
        _super.apply(this, arguments);
    }
    ImplicitReceiver.prototype.visit = function (visitor) { return visitor.visitImplicitReceiver(this); };
    return ImplicitReceiver;
})(AST);
exports.ImplicitReceiver = ImplicitReceiver;
/**
 * Multiple expressions separated by a semicolon.
 */
var Chain = (function (_super) {
    __extends(Chain, _super);
    function Chain(expressions) {
        _super.call(this);
        this.expressions = expressions;
    }
    Chain.prototype.visit = function (visitor) { return visitor.visitChain(this); };
    return Chain;
})(AST);
exports.Chain = Chain;
var Conditional = (function (_super) {
    __extends(Conditional, _super);
    function Conditional(condition, trueExp, falseExp) {
        _super.call(this);
        this.condition = condition;
        this.trueExp = trueExp;
        this.falseExp = falseExp;
    }
    Conditional.prototype.visit = function (visitor) { return visitor.visitConditional(this); };
    return Conditional;
})(AST);
exports.Conditional = Conditional;
var PropertyRead = (function (_super) {
    __extends(PropertyRead, _super);
    function PropertyRead(receiver, name, getter) {
        _super.call(this);
        this.receiver = receiver;
        this.name = name;
        this.getter = getter;
    }
    PropertyRead.prototype.visit = function (visitor) { return visitor.visitPropertyRead(this); };
    return PropertyRead;
})(AST);
exports.PropertyRead = PropertyRead;
var PropertyWrite = (function (_super) {
    __extends(PropertyWrite, _super);
    function PropertyWrite(receiver, name, setter, value) {
        _super.call(this);
        this.receiver = receiver;
        this.name = name;
        this.setter = setter;
        this.value = value;
    }
    PropertyWrite.prototype.visit = function (visitor) { return visitor.visitPropertyWrite(this); };
    return PropertyWrite;
})(AST);
exports.PropertyWrite = PropertyWrite;
var SafePropertyRead = (function (_super) {
    __extends(SafePropertyRead, _super);
    function SafePropertyRead(receiver, name, getter) {
        _super.call(this);
        this.receiver = receiver;
        this.name = name;
        this.getter = getter;
    }
    SafePropertyRead.prototype.visit = function (visitor) { return visitor.visitSafePropertyRead(this); };
    return SafePropertyRead;
})(AST);
exports.SafePropertyRead = SafePropertyRead;
var KeyedRead = (function (_super) {
    __extends(KeyedRead, _super);
    function KeyedRead(obj, key) {
        _super.call(this);
        this.obj = obj;
        this.key = key;
    }
    KeyedRead.prototype.visit = function (visitor) { return visitor.visitKeyedRead(this); };
    return KeyedRead;
})(AST);
exports.KeyedRead = KeyedRead;
var KeyedWrite = (function (_super) {
    __extends(KeyedWrite, _super);
    function KeyedWrite(obj, key, value) {
        _super.call(this);
        this.obj = obj;
        this.key = key;
        this.value = value;
    }
    KeyedWrite.prototype.visit = function (visitor) { return visitor.visitKeyedWrite(this); };
    return KeyedWrite;
})(AST);
exports.KeyedWrite = KeyedWrite;
var BindingPipe = (function (_super) {
    __extends(BindingPipe, _super);
    function BindingPipe(exp, name, args) {
        _super.call(this);
        this.exp = exp;
        this.name = name;
        this.args = args;
    }
    BindingPipe.prototype.visit = function (visitor) { return visitor.visitPipe(this); };
    return BindingPipe;
})(AST);
exports.BindingPipe = BindingPipe;
var LiteralPrimitive = (function (_super) {
    __extends(LiteralPrimitive, _super);
    function LiteralPrimitive(value) {
        _super.call(this);
        this.value = value;
    }
    LiteralPrimitive.prototype.visit = function (visitor) { return visitor.visitLiteralPrimitive(this); };
    return LiteralPrimitive;
})(AST);
exports.LiteralPrimitive = LiteralPrimitive;
var LiteralArray = (function (_super) {
    __extends(LiteralArray, _super);
    function LiteralArray(expressions) {
        _super.call(this);
        this.expressions = expressions;
    }
    LiteralArray.prototype.visit = function (visitor) { return visitor.visitLiteralArray(this); };
    return LiteralArray;
})(AST);
exports.LiteralArray = LiteralArray;
var LiteralMap = (function (_super) {
    __extends(LiteralMap, _super);
    function LiteralMap(keys, values) {
        _super.call(this);
        this.keys = keys;
        this.values = values;
    }
    LiteralMap.prototype.visit = function (visitor) { return visitor.visitLiteralMap(this); };
    return LiteralMap;
})(AST);
exports.LiteralMap = LiteralMap;
var Interpolation = (function (_super) {
    __extends(Interpolation, _super);
    function Interpolation(strings, expressions) {
        _super.call(this);
        this.strings = strings;
        this.expressions = expressions;
    }
    Interpolation.prototype.visit = function (visitor) { return visitor.visitInterpolation(this); };
    return Interpolation;
})(AST);
exports.Interpolation = Interpolation;
var Binary = (function (_super) {
    __extends(Binary, _super);
    function Binary(operation, left, right) {
        _super.call(this);
        this.operation = operation;
        this.left = left;
        this.right = right;
    }
    Binary.prototype.visit = function (visitor) { return visitor.visitBinary(this); };
    return Binary;
})(AST);
exports.Binary = Binary;
var PrefixNot = (function (_super) {
    __extends(PrefixNot, _super);
    function PrefixNot(expression) {
        _super.call(this);
        this.expression = expression;
    }
    PrefixNot.prototype.visit = function (visitor) { return visitor.visitPrefixNot(this); };
    return PrefixNot;
})(AST);
exports.PrefixNot = PrefixNot;
var MethodCall = (function (_super) {
    __extends(MethodCall, _super);
    function MethodCall(receiver, name, fn, args) {
        _super.call(this);
        this.receiver = receiver;
        this.name = name;
        this.fn = fn;
        this.args = args;
    }
    MethodCall.prototype.visit = function (visitor) { return visitor.visitMethodCall(this); };
    return MethodCall;
})(AST);
exports.MethodCall = MethodCall;
var SafeMethodCall = (function (_super) {
    __extends(SafeMethodCall, _super);
    function SafeMethodCall(receiver, name, fn, args) {
        _super.call(this);
        this.receiver = receiver;
        this.name = name;
        this.fn = fn;
        this.args = args;
    }
    SafeMethodCall.prototype.visit = function (visitor) { return visitor.visitSafeMethodCall(this); };
    return SafeMethodCall;
})(AST);
exports.SafeMethodCall = SafeMethodCall;
var FunctionCall = (function (_super) {
    __extends(FunctionCall, _super);
    function FunctionCall(target, args) {
        _super.call(this);
        this.target = target;
        this.args = args;
    }
    FunctionCall.prototype.visit = function (visitor) { return visitor.visitFunctionCall(this); };
    return FunctionCall;
})(AST);
exports.FunctionCall = FunctionCall;
var ASTWithSource = (function (_super) {
    __extends(ASTWithSource, _super);
    function ASTWithSource(ast, source, location) {
        _super.call(this);
        this.ast = ast;
        this.source = source;
        this.location = location;
    }
    ASTWithSource.prototype.visit = function (visitor) { return this.ast.visit(visitor); };
    ASTWithSource.prototype.toString = function () { return this.source + " in " + this.location; };
    return ASTWithSource;
})(AST);
exports.ASTWithSource = ASTWithSource;
var TemplateBinding = (function () {
    function TemplateBinding(key, keyIsVar, name, expression) {
        this.key = key;
        this.keyIsVar = keyIsVar;
        this.name = name;
        this.expression = expression;
    }
    return TemplateBinding;
})();
exports.TemplateBinding = TemplateBinding;
var RecursiveAstVisitor = (function () {
    function RecursiveAstVisitor() {
    }
    RecursiveAstVisitor.prototype.visitBinary = function (ast) {
        ast.left.visit(this);
        ast.right.visit(this);
        return null;
    };
    RecursiveAstVisitor.prototype.visitChain = function (ast) { return this.visitAll(ast.expressions); };
    RecursiveAstVisitor.prototype.visitConditional = function (ast) {
        ast.condition.visit(this);
        ast.trueExp.visit(this);
        ast.falseExp.visit(this);
        return null;
    };
    RecursiveAstVisitor.prototype.visitPipe = function (ast) {
        ast.exp.visit(this);
        this.visitAll(ast.args);
        return null;
    };
    RecursiveAstVisitor.prototype.visitFunctionCall = function (ast) {
        ast.target.visit(this);
        this.visitAll(ast.args);
        return null;
    };
    RecursiveAstVisitor.prototype.visitImplicitReceiver = function (ast) { return null; };
    RecursiveAstVisitor.prototype.visitInterpolation = function (ast) { return this.visitAll(ast.expressions); };
    RecursiveAstVisitor.prototype.visitKeyedRead = function (ast) {
        ast.obj.visit(this);
        ast.key.visit(this);
        return null;
    };
    RecursiveAstVisitor.prototype.visitKeyedWrite = function (ast) {
        ast.obj.visit(this);
        ast.key.visit(this);
        ast.value.visit(this);
        return null;
    };
    RecursiveAstVisitor.prototype.visitLiteralArray = function (ast) { return this.visitAll(ast.expressions); };
    RecursiveAstVisitor.prototype.visitLiteralMap = function (ast) { return this.visitAll(ast.values); };
    RecursiveAstVisitor.prototype.visitLiteralPrimitive = function (ast) { return null; };
    RecursiveAstVisitor.prototype.visitMethodCall = function (ast) {
        ast.receiver.visit(this);
        return this.visitAll(ast.args);
    };
    RecursiveAstVisitor.prototype.visitPrefixNot = function (ast) {
        ast.expression.visit(this);
        return null;
    };
    RecursiveAstVisitor.prototype.visitPropertyRead = function (ast) {
        ast.receiver.visit(this);
        return null;
    };
    RecursiveAstVisitor.prototype.visitPropertyWrite = function (ast) {
        ast.receiver.visit(this);
        ast.value.visit(this);
        return null;
    };
    RecursiveAstVisitor.prototype.visitSafePropertyRead = function (ast) {
        ast.receiver.visit(this);
        return null;
    };
    RecursiveAstVisitor.prototype.visitSafeMethodCall = function (ast) {
        ast.receiver.visit(this);
        return this.visitAll(ast.args);
    };
    RecursiveAstVisitor.prototype.visitAll = function (asts) {
        var _this = this;
        asts.forEach(function (ast) { return ast.visit(_this); });
        return null;
    };
    RecursiveAstVisitor.prototype.visitQuote = function (ast) { return null; };
    return RecursiveAstVisitor;
})();
exports.RecursiveAstVisitor = RecursiveAstVisitor;
var AstTransformer = (function () {
    function AstTransformer() {
    }
    AstTransformer.prototype.visitImplicitReceiver = function (ast) { return ast; };
    AstTransformer.prototype.visitInterpolation = function (ast) {
        return new Interpolation(ast.strings, this.visitAll(ast.expressions));
    };
    AstTransformer.prototype.visitLiteralPrimitive = function (ast) { return new LiteralPrimitive(ast.value); };
    AstTransformer.prototype.visitPropertyRead = function (ast) {
        return new PropertyRead(ast.receiver.visit(this), ast.name, ast.getter);
    };
    AstTransformer.prototype.visitPropertyWrite = function (ast) {
        return new PropertyWrite(ast.receiver.visit(this), ast.name, ast.setter, ast.value);
    };
    AstTransformer.prototype.visitSafePropertyRead = function (ast) {
        return new SafePropertyRead(ast.receiver.visit(this), ast.name, ast.getter);
    };
    AstTransformer.prototype.visitMethodCall = function (ast) {
        return new MethodCall(ast.receiver.visit(this), ast.name, ast.fn, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitSafeMethodCall = function (ast) {
        return new SafeMethodCall(ast.receiver.visit(this), ast.name, ast.fn, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitFunctionCall = function (ast) {
        return new FunctionCall(ast.target.visit(this), this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitLiteralArray = function (ast) {
        return new LiteralArray(this.visitAll(ast.expressions));
    };
    AstTransformer.prototype.visitLiteralMap = function (ast) {
        return new LiteralMap(ast.keys, this.visitAll(ast.values));
    };
    AstTransformer.prototype.visitBinary = function (ast) {
        return new Binary(ast.operation, ast.left.visit(this), ast.right.visit(this));
    };
    AstTransformer.prototype.visitPrefixNot = function (ast) { return new PrefixNot(ast.expression.visit(this)); };
    AstTransformer.prototype.visitConditional = function (ast) {
        return new Conditional(ast.condition.visit(this), ast.trueExp.visit(this), ast.falseExp.visit(this));
    };
    AstTransformer.prototype.visitPipe = function (ast) {
        return new BindingPipe(ast.exp.visit(this), ast.name, this.visitAll(ast.args));
    };
    AstTransformer.prototype.visitKeyedRead = function (ast) {
        return new KeyedRead(ast.obj.visit(this), ast.key.visit(this));
    };
    AstTransformer.prototype.visitKeyedWrite = function (ast) {
        return new KeyedWrite(ast.obj.visit(this), ast.key.visit(this), ast.value.visit(this));
    };
    AstTransformer.prototype.visitAll = function (asts) {
        var res = collection_1.ListWrapper.createFixedSize(asts.length);
        for (var i = 0; i < asts.length; ++i) {
            res[i] = asts[i].visit(this);
        }
        return res;
    };
    AstTransformer.prototype.visitChain = function (ast) { return new Chain(this.visitAll(ast.expressions)); };
    AstTransformer.prototype.visitQuote = function (ast) {
        return new Quote(ast.prefix, ast.uninterpretedExpression, ast.location);
    };
    return AstTransformer;
})();
exports.AstTransformer = AstTransformer;
},{"angular2/src/facade/collection":94}],29:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var decorators_1 = require('angular2/src/core/di/decorators');
var collection_1 = require("angular2/src/facade/collection");
var lang_1 = require("angular2/src/facade/lang");
var exceptions_1 = require('angular2/src/facade/exceptions');
(function (TokenType) {
    TokenType[TokenType["Character"] = 0] = "Character";
    TokenType[TokenType["Identifier"] = 1] = "Identifier";
    TokenType[TokenType["Keyword"] = 2] = "Keyword";
    TokenType[TokenType["String"] = 3] = "String";
    TokenType[TokenType["Operator"] = 4] = "Operator";
    TokenType[TokenType["Number"] = 5] = "Number";
})(exports.TokenType || (exports.TokenType = {}));
var TokenType = exports.TokenType;
var Lexer = (function () {
    function Lexer() {
    }
    Lexer.prototype.tokenize = function (text) {
        var scanner = new _Scanner(text);
        var tokens = [];
        var token = scanner.scanToken();
        while (token != null) {
            tokens.push(token);
            token = scanner.scanToken();
        }
        return tokens;
    };
    Lexer = __decorate([
        decorators_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Lexer);
    return Lexer;
})();
exports.Lexer = Lexer;
var Token = (function () {
    function Token(index, type, numValue, strValue) {
        this.index = index;
        this.type = type;
        this.numValue = numValue;
        this.strValue = strValue;
    }
    Token.prototype.isCharacter = function (code) {
        return (this.type == TokenType.Character && this.numValue == code);
    };
    Token.prototype.isNumber = function () { return (this.type == TokenType.Number); };
    Token.prototype.isString = function () { return (this.type == TokenType.String); };
    Token.prototype.isOperator = function (operater) {
        return (this.type == TokenType.Operator && this.strValue == operater);
    };
    Token.prototype.isIdentifier = function () { return (this.type == TokenType.Identifier); };
    Token.prototype.isKeyword = function () { return (this.type == TokenType.Keyword); };
    Token.prototype.isKeywordVar = function () { return (this.type == TokenType.Keyword && this.strValue == "var"); };
    Token.prototype.isKeywordNull = function () { return (this.type == TokenType.Keyword && this.strValue == "null"); };
    Token.prototype.isKeywordUndefined = function () {
        return (this.type == TokenType.Keyword && this.strValue == "undefined");
    };
    Token.prototype.isKeywordTrue = function () { return (this.type == TokenType.Keyword && this.strValue == "true"); };
    Token.prototype.isKeywordFalse = function () { return (this.type == TokenType.Keyword && this.strValue == "false"); };
    Token.prototype.toNumber = function () {
        // -1 instead of NULL ok?
        return (this.type == TokenType.Number) ? this.numValue : -1;
    };
    Token.prototype.toString = function () {
        switch (this.type) {
            case TokenType.Character:
            case TokenType.Identifier:
            case TokenType.Keyword:
            case TokenType.Operator:
            case TokenType.String:
                return this.strValue;
            case TokenType.Number:
                return this.numValue.toString();
            default:
                return null;
        }
    };
    return Token;
})();
exports.Token = Token;
function newCharacterToken(index, code) {
    return new Token(index, TokenType.Character, code, lang_1.StringWrapper.fromCharCode(code));
}
function newIdentifierToken(index, text) {
    return new Token(index, TokenType.Identifier, 0, text);
}
function newKeywordToken(index, text) {
    return new Token(index, TokenType.Keyword, 0, text);
}
function newOperatorToken(index, text) {
    return new Token(index, TokenType.Operator, 0, text);
}
function newStringToken(index, text) {
    return new Token(index, TokenType.String, 0, text);
}
function newNumberToken(index, n) {
    return new Token(index, TokenType.Number, n, "");
}
exports.EOF = new Token(-1, TokenType.Character, 0, "");
exports.$EOF = 0;
exports.$TAB = 9;
exports.$LF = 10;
exports.$VTAB = 11;
exports.$FF = 12;
exports.$CR = 13;
exports.$SPACE = 32;
exports.$BANG = 33;
exports.$DQ = 34;
exports.$HASH = 35;
exports.$$ = 36;
exports.$PERCENT = 37;
exports.$AMPERSAND = 38;
exports.$SQ = 39;
exports.$LPAREN = 40;
exports.$RPAREN = 41;
exports.$STAR = 42;
exports.$PLUS = 43;
exports.$COMMA = 44;
exports.$MINUS = 45;
exports.$PERIOD = 46;
exports.$SLASH = 47;
exports.$COLON = 58;
exports.$SEMICOLON = 59;
exports.$LT = 60;
exports.$EQ = 61;
exports.$GT = 62;
exports.$QUESTION = 63;
var $0 = 48;
var $9 = 57;
var $A = 65, $E = 69, $Z = 90;
exports.$LBRACKET = 91;
exports.$BACKSLASH = 92;
exports.$RBRACKET = 93;
var $CARET = 94;
var $_ = 95;
var $a = 97, $e = 101, $f = 102, $n = 110, $r = 114, $t = 116, $u = 117, $v = 118, $z = 122;
exports.$LBRACE = 123;
exports.$BAR = 124;
exports.$RBRACE = 125;
var $NBSP = 160;
var ScannerError = (function (_super) {
    __extends(ScannerError, _super);
    function ScannerError(message) {
        _super.call(this);
        this.message = message;
    }
    ScannerError.prototype.toString = function () { return this.message; };
    return ScannerError;
})(exceptions_1.BaseException);
exports.ScannerError = ScannerError;
var _Scanner = (function () {
    function _Scanner(input) {
        this.input = input;
        this.peek = 0;
        this.index = -1;
        this.length = input.length;
        this.advance();
    }
    _Scanner.prototype.advance = function () {
        this.peek =
            ++this.index >= this.length ? exports.$EOF : lang_1.StringWrapper.charCodeAt(this.input, this.index);
    };
    _Scanner.prototype.scanToken = function () {
        var input = this.input, length = this.length, peek = this.peek, index = this.index;
        // Skip whitespace.
        while (peek <= exports.$SPACE) {
            if (++index >= length) {
                peek = exports.$EOF;
                break;
            }
            else {
                peek = lang_1.StringWrapper.charCodeAt(input, index);
            }
        }
        this.peek = peek;
        this.index = index;
        if (index >= length) {
            return null;
        }
        // Handle identifiers and numbers.
        if (isIdentifierStart(peek))
            return this.scanIdentifier();
        if (isDigit(peek))
            return this.scanNumber(index);
        var start = index;
        switch (peek) {
            case exports.$PERIOD:
                this.advance();
                return isDigit(this.peek) ? this.scanNumber(start) : newCharacterToken(start, exports.$PERIOD);
            case exports.$LPAREN:
            case exports.$RPAREN:
            case exports.$LBRACE:
            case exports.$RBRACE:
            case exports.$LBRACKET:
            case exports.$RBRACKET:
            case exports.$COMMA:
            case exports.$COLON:
            case exports.$SEMICOLON:
                return this.scanCharacter(start, peek);
            case exports.$SQ:
            case exports.$DQ:
                return this.scanString();
            case exports.$HASH:
            case exports.$PLUS:
            case exports.$MINUS:
            case exports.$STAR:
            case exports.$SLASH:
            case exports.$PERCENT:
            case $CARET:
                return this.scanOperator(start, lang_1.StringWrapper.fromCharCode(peek));
            case exports.$QUESTION:
                return this.scanComplexOperator(start, '?', exports.$PERIOD, '.');
            case exports.$LT:
            case exports.$GT:
                return this.scanComplexOperator(start, lang_1.StringWrapper.fromCharCode(peek), exports.$EQ, '=');
            case exports.$BANG:
            case exports.$EQ:
                return this.scanComplexOperator(start, lang_1.StringWrapper.fromCharCode(peek), exports.$EQ, '=', exports.$EQ, '=');
            case exports.$AMPERSAND:
                return this.scanComplexOperator(start, '&', exports.$AMPERSAND, '&');
            case exports.$BAR:
                return this.scanComplexOperator(start, '|', exports.$BAR, '|');
            case $NBSP:
                while (isWhitespace(this.peek))
                    this.advance();
                return this.scanToken();
        }
        this.error("Unexpected character [" + lang_1.StringWrapper.fromCharCode(peek) + "]", 0);
        return null;
    };
    _Scanner.prototype.scanCharacter = function (start, code) {
        assert(this.peek == code);
        this.advance();
        return newCharacterToken(start, code);
    };
    _Scanner.prototype.scanOperator = function (start, str) {
        assert(this.peek == lang_1.StringWrapper.charCodeAt(str, 0));
        assert(collection_1.SetWrapper.has(OPERATORS, str));
        this.advance();
        return newOperatorToken(start, str);
    };
    /**
     * Tokenize a 2/3 char long operator
     *
     * @param start start index in the expression
     * @param one first symbol (always part of the operator)
     * @param twoCode code point for the second symbol
     * @param two second symbol (part of the operator when the second code point matches)
     * @param threeCode code point for the third symbol
     * @param three third symbol (part of the operator when provided and matches source expression)
     * @returns {Token}
     */
    _Scanner.prototype.scanComplexOperator = function (start, one, twoCode, two, threeCode, three) {
        assert(this.peek == lang_1.StringWrapper.charCodeAt(one, 0));
        this.advance();
        var str = one;
        if (this.peek == twoCode) {
            this.advance();
            str += two;
        }
        if (lang_1.isPresent(threeCode) && this.peek == threeCode) {
            this.advance();
            str += three;
        }
        assert(collection_1.SetWrapper.has(OPERATORS, str));
        return newOperatorToken(start, str);
    };
    _Scanner.prototype.scanIdentifier = function () {
        assert(isIdentifierStart(this.peek));
        var start = this.index;
        this.advance();
        while (isIdentifierPart(this.peek))
            this.advance();
        var str = this.input.substring(start, this.index);
        if (collection_1.SetWrapper.has(KEYWORDS, str)) {
            return newKeywordToken(start, str);
        }
        else {
            return newIdentifierToken(start, str);
        }
    };
    _Scanner.prototype.scanNumber = function (start) {
        assert(isDigit(this.peek));
        var simple = (this.index === start);
        this.advance(); // Skip initial digit.
        while (true) {
            if (isDigit(this.peek)) {
            }
            else if (this.peek == exports.$PERIOD) {
                simple = false;
            }
            else if (isExponentStart(this.peek)) {
                this.advance();
                if (isExponentSign(this.peek))
                    this.advance();
                if (!isDigit(this.peek))
                    this.error('Invalid exponent', -1);
                simple = false;
            }
            else {
                break;
            }
            this.advance();
        }
        var str = this.input.substring(start, this.index);
        // TODO
        var value = simple ? lang_1.NumberWrapper.parseIntAutoRadix(str) : lang_1.NumberWrapper.parseFloat(str);
        return newNumberToken(start, value);
    };
    _Scanner.prototype.scanString = function () {
        assert(this.peek == exports.$SQ || this.peek == exports.$DQ);
        var start = this.index;
        var quote = this.peek;
        this.advance(); // Skip initial quote.
        var buffer;
        var marker = this.index;
        var input = this.input;
        while (this.peek != quote) {
            if (this.peek == exports.$BACKSLASH) {
                if (buffer == null)
                    buffer = new lang_1.StringJoiner();
                buffer.add(input.substring(marker, this.index));
                this.advance();
                var unescapedCode;
                if (this.peek == $u) {
                    // 4 character hex code for unicode character.
                    var hex = input.substring(this.index + 1, this.index + 5);
                    try {
                        unescapedCode = lang_1.NumberWrapper.parseInt(hex, 16);
                    }
                    catch (e) {
                        this.error("Invalid unicode escape [\\u" + hex + "]", 0);
                    }
                    for (var i = 0; i < 5; i++) {
                        this.advance();
                    }
                }
                else {
                    unescapedCode = unescape(this.peek);
                    this.advance();
                }
                buffer.add(lang_1.StringWrapper.fromCharCode(unescapedCode));
                marker = this.index;
            }
            else if (this.peek == exports.$EOF) {
                this.error('Unterminated quote', 0);
            }
            else {
                this.advance();
            }
        }
        var last = input.substring(marker, this.index);
        this.advance(); // Skip terminating quote.
        // Compute the unescaped string value.
        var unescaped = last;
        if (buffer != null) {
            buffer.add(last);
            unescaped = buffer.toString();
        }
        return newStringToken(start, unescaped);
    };
    _Scanner.prototype.error = function (message, offset) {
        var position = this.index + offset;
        throw new ScannerError("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
    };
    return _Scanner;
})();
function isWhitespace(code) {
    return (code >= exports.$TAB && code <= exports.$SPACE) || (code == $NBSP);
}
function isIdentifierStart(code) {
    return ($a <= code && code <= $z) || ($A <= code && code <= $Z) || (code == $_) || (code == exports.$$);
}
function isIdentifier(input) {
    if (input.length == 0)
        return false;
    var scanner = new _Scanner(input);
    if (!isIdentifierStart(scanner.peek))
        return false;
    scanner.advance();
    while (scanner.peek !== exports.$EOF) {
        if (!isIdentifierPart(scanner.peek))
            return false;
        scanner.advance();
    }
    return true;
}
exports.isIdentifier = isIdentifier;
function isIdentifierPart(code) {
    return ($a <= code && code <= $z) || ($A <= code && code <= $Z) || ($0 <= code && code <= $9) ||
        (code == $_) || (code == exports.$$);
}
function isDigit(code) {
    return $0 <= code && code <= $9;
}
function isExponentStart(code) {
    return code == $e || code == $E;
}
function isExponentSign(code) {
    return code == exports.$MINUS || code == exports.$PLUS;
}
function unescape(code) {
    switch (code) {
        case $n:
            return exports.$LF;
        case $f:
            return exports.$FF;
        case $r:
            return exports.$CR;
        case $t:
            return exports.$TAB;
        case $v:
            return exports.$VTAB;
        default:
            return code;
    }
}
var OPERATORS = collection_1.SetWrapper.createFromList([
    '+',
    '-',
    '*',
    '/',
    '%',
    '^',
    '=',
    '==',
    '!=',
    '===',
    '!==',
    '<',
    '>',
    '<=',
    '>=',
    '&&',
    '||',
    '&',
    '|',
    '!',
    '?',
    '#',
    '?.'
]);
var KEYWORDS = collection_1.SetWrapper.createFromList(['var', 'null', 'undefined', 'true', 'false', 'if', 'else']);
},{"angular2/src/core/di/decorators":39,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],30:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var Locals = (function () {
    function Locals(parent, current) {
        this.parent = parent;
        this.current = current;
    }
    Locals.prototype.contains = function (name) {
        if (this.current.has(name)) {
            return true;
        }
        if (lang_1.isPresent(this.parent)) {
            return this.parent.contains(name);
        }
        return false;
    };
    Locals.prototype.get = function (name) {
        if (this.current.has(name)) {
            return this.current.get(name);
        }
        if (lang_1.isPresent(this.parent)) {
            return this.parent.get(name);
        }
        throw new exceptions_1.BaseException("Cannot find '" + name + "'");
    };
    Locals.prototype.set = function (name, value) {
        // TODO(rado): consider removing this check if we can guarantee this is not
        // exposed to the public API.
        // TODO: vsavkin maybe it should check only the local map
        if (this.current.has(name)) {
            this.current.set(name, value);
        }
        else {
            throw new exceptions_1.BaseException("Setting of new keys post-construction is not supported. Key: " + name + ".");
        }
    };
    Locals.prototype.clearValues = function () { collection_1.MapWrapper.clearValues(this.current); };
    return Locals;
})();
exports.Locals = Locals;
},{"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],31:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var decorators_1 = require('angular2/src/core/di/decorators');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var lexer_1 = require('./lexer');
var reflection_1 = require('angular2/src/core/reflection/reflection');
var ast_1 = require('./ast');
var _implicitReceiver = new ast_1.ImplicitReceiver();
// TODO(tbosch): Cannot make this const/final right now because of the transpiler...
var INTERPOLATION_REGEXP = /\{\{(.*?)\}\}/g;
var ParseException = (function (_super) {
    __extends(ParseException, _super);
    function ParseException(message, input, errLocation, ctxLocation) {
        _super.call(this, "Parser Error: " + message + " " + errLocation + " [" + input + "] in " + ctxLocation);
    }
    return ParseException;
})(exceptions_1.BaseException);
var Parser = (function () {
    function Parser(/** @internal */ _lexer, providedReflector) {
        if (providedReflector === void 0) { providedReflector = null; }
        this._lexer = _lexer;
        this._reflector = lang_1.isPresent(providedReflector) ? providedReflector : reflection_1.reflector;
    }
    Parser.prototype.parseAction = function (input, location) {
        this._checkNoInterpolation(input, location);
        var tokens = this._lexer.tokenize(input);
        var ast = new _ParseAST(input, location, tokens, this._reflector, true).parseChain();
        return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype.parseBinding = function (input, location) {
        var ast = this._parseBindingAst(input, location);
        return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype.parseSimpleBinding = function (input, location) {
        var ast = this._parseBindingAst(input, location);
        if (!SimpleExpressionChecker.check(ast)) {
            throw new ParseException('Host binding expression can only contain field access and constants', input, location);
        }
        return new ast_1.ASTWithSource(ast, input, location);
    };
    Parser.prototype._parseBindingAst = function (input, location) {
        // Quotes expressions use 3rd-party expression language. We don't want to use
        // our lexer or parser for that, so we check for that ahead of time.
        var quote = this._parseQuote(input, location);
        if (lang_1.isPresent(quote)) {
            return quote;
        }
        this._checkNoInterpolation(input, location);
        var tokens = this._lexer.tokenize(input);
        return new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
    };
    Parser.prototype._parseQuote = function (input, location) {
        if (lang_1.isBlank(input))
            return null;
        var prefixSeparatorIndex = input.indexOf(':');
        if (prefixSeparatorIndex == -1)
            return null;
        var prefix = input.substring(0, prefixSeparatorIndex).trim();
        if (!lexer_1.isIdentifier(prefix))
            return null;
        var uninterpretedExpression = input.substring(prefixSeparatorIndex + 1);
        return new ast_1.Quote(prefix, uninterpretedExpression, location);
    };
    Parser.prototype.parseTemplateBindings = function (input, location) {
        var tokens = this._lexer.tokenize(input);
        return new _ParseAST(input, location, tokens, this._reflector, false).parseTemplateBindings();
    };
    Parser.prototype.parseInterpolation = function (input, location) {
        var parts = lang_1.StringWrapper.split(input, INTERPOLATION_REGEXP);
        if (parts.length <= 1) {
            return null;
        }
        var strings = [];
        var expressions = [];
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (i % 2 === 0) {
                // fixed string
                strings.push(part);
            }
            else if (part.trim().length > 0) {
                var tokens = this._lexer.tokenize(part);
                var ast = new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
                expressions.push(ast);
            }
            else {
                throw new ParseException('Blank expressions are not allowed in interpolated strings', input, "at column " + this._findInterpolationErrorColumn(parts, i) + " in", location);
            }
        }
        return new ast_1.ASTWithSource(new ast_1.Interpolation(strings, expressions), input, location);
    };
    Parser.prototype.wrapLiteralPrimitive = function (input, location) {
        return new ast_1.ASTWithSource(new ast_1.LiteralPrimitive(input), input, location);
    };
    Parser.prototype._checkNoInterpolation = function (input, location) {
        var parts = lang_1.StringWrapper.split(input, INTERPOLATION_REGEXP);
        if (parts.length > 1) {
            throw new ParseException('Got interpolation ({{}}) where expression was expected', input, "at column " + this._findInterpolationErrorColumn(parts, 1) + " in", location);
        }
    };
    Parser.prototype._findInterpolationErrorColumn = function (parts, partInErrIdx) {
        var errLocation = '';
        for (var j = 0; j < partInErrIdx; j++) {
            errLocation += j % 2 === 0 ? parts[j] : "{{" + parts[j] + "}}";
        }
        return errLocation.length;
    };
    Parser = __decorate([
        decorators_1.Injectable(), 
        __metadata('design:paramtypes', [lexer_1.Lexer, reflection_1.Reflector])
    ], Parser);
    return Parser;
})();
exports.Parser = Parser;
var _ParseAST = (function () {
    function _ParseAST(input, location, tokens, reflector, parseAction) {
        this.input = input;
        this.location = location;
        this.tokens = tokens;
        this.reflector = reflector;
        this.parseAction = parseAction;
        this.index = 0;
    }
    _ParseAST.prototype.peek = function (offset) {
        var i = this.index + offset;
        return i < this.tokens.length ? this.tokens[i] : lexer_1.EOF;
    };
    Object.defineProperty(_ParseAST.prototype, "next", {
        get: function () { return this.peek(0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ParseAST.prototype, "inputIndex", {
        get: function () {
            return (this.index < this.tokens.length) ? this.next.index : this.input.length;
        },
        enumerable: true,
        configurable: true
    });
    _ParseAST.prototype.advance = function () { this.index++; };
    _ParseAST.prototype.optionalCharacter = function (code) {
        if (this.next.isCharacter(code)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    };
    _ParseAST.prototype.optionalKeywordVar = function () {
        if (this.peekKeywordVar()) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    };
    _ParseAST.prototype.peekKeywordVar = function () { return this.next.isKeywordVar() || this.next.isOperator('#'); };
    _ParseAST.prototype.expectCharacter = function (code) {
        if (this.optionalCharacter(code))
            return;
        this.error("Missing expected " + lang_1.StringWrapper.fromCharCode(code));
    };
    _ParseAST.prototype.optionalOperator = function (op) {
        if (this.next.isOperator(op)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    };
    _ParseAST.prototype.expectOperator = function (operator) {
        if (this.optionalOperator(operator))
            return;
        this.error("Missing expected operator " + operator);
    };
    _ParseAST.prototype.expectIdentifierOrKeyword = function () {
        var n = this.next;
        if (!n.isIdentifier() && !n.isKeyword()) {
            this.error("Unexpected token " + n + ", expected identifier or keyword");
        }
        this.advance();
        return n.toString();
    };
    _ParseAST.prototype.expectIdentifierOrKeywordOrString = function () {
        var n = this.next;
        if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
            this.error("Unexpected token " + n + ", expected identifier, keyword, or string");
        }
        this.advance();
        return n.toString();
    };
    _ParseAST.prototype.parseChain = function () {
        var exprs = [];
        while (this.index < this.tokens.length) {
            var expr = this.parsePipe();
            exprs.push(expr);
            if (this.optionalCharacter(lexer_1.$SEMICOLON)) {
                if (!this.parseAction) {
                    this.error("Binding expression cannot contain chained expression");
                }
                while (this.optionalCharacter(lexer_1.$SEMICOLON)) {
                } // read all semicolons
            }
            else if (this.index < this.tokens.length) {
                this.error("Unexpected token '" + this.next + "'");
            }
        }
        if (exprs.length == 0)
            return new ast_1.EmptyExpr();
        if (exprs.length == 1)
            return exprs[0];
        return new ast_1.Chain(exprs);
    };
    _ParseAST.prototype.parsePipe = function () {
        var result = this.parseExpression();
        if (this.optionalOperator("|")) {
            if (this.parseAction) {
                this.error("Cannot have a pipe in an action expression");
            }
            do {
                var name = this.expectIdentifierOrKeyword();
                var args = [];
                while (this.optionalCharacter(lexer_1.$COLON)) {
                    args.push(this.parseExpression());
                }
                result = new ast_1.BindingPipe(result, name, args);
            } while (this.optionalOperator("|"));
        }
        return result;
    };
    _ParseAST.prototype.parseExpression = function () { return this.parseConditional(); };
    _ParseAST.prototype.parseConditional = function () {
        var start = this.inputIndex;
        var result = this.parseLogicalOr();
        if (this.optionalOperator('?')) {
            var yes = this.parsePipe();
            if (!this.optionalCharacter(lexer_1.$COLON)) {
                var end = this.inputIndex;
                var expression = this.input.substring(start, end);
                this.error("Conditional expression " + expression + " requires all 3 expressions");
            }
            var no = this.parsePipe();
            return new ast_1.Conditional(result, yes, no);
        }
        else {
            return result;
        }
    };
    _ParseAST.prototype.parseLogicalOr = function () {
        // '||'
        var result = this.parseLogicalAnd();
        while (this.optionalOperator('||')) {
            result = new ast_1.Binary('||', result, this.parseLogicalAnd());
        }
        return result;
    };
    _ParseAST.prototype.parseLogicalAnd = function () {
        // '&&'
        var result = this.parseEquality();
        while (this.optionalOperator('&&')) {
            result = new ast_1.Binary('&&', result, this.parseEquality());
        }
        return result;
    };
    _ParseAST.prototype.parseEquality = function () {
        // '==','!=','===','!=='
        var result = this.parseRelational();
        while (true) {
            if (this.optionalOperator('==')) {
                result = new ast_1.Binary('==', result, this.parseRelational());
            }
            else if (this.optionalOperator('===')) {
                result = new ast_1.Binary('===', result, this.parseRelational());
            }
            else if (this.optionalOperator('!=')) {
                result = new ast_1.Binary('!=', result, this.parseRelational());
            }
            else if (this.optionalOperator('!==')) {
                result = new ast_1.Binary('!==', result, this.parseRelational());
            }
            else {
                return result;
            }
        }
    };
    _ParseAST.prototype.parseRelational = function () {
        // '<', '>', '<=', '>='
        var result = this.parseAdditive();
        while (true) {
            if (this.optionalOperator('<')) {
                result = new ast_1.Binary('<', result, this.parseAdditive());
            }
            else if (this.optionalOperator('>')) {
                result = new ast_1.Binary('>', result, this.parseAdditive());
            }
            else if (this.optionalOperator('<=')) {
                result = new ast_1.Binary('<=', result, this.parseAdditive());
            }
            else if (this.optionalOperator('>=')) {
                result = new ast_1.Binary('>=', result, this.parseAdditive());
            }
            else {
                return result;
            }
        }
    };
    _ParseAST.prototype.parseAdditive = function () {
        // '+', '-'
        var result = this.parseMultiplicative();
        while (true) {
            if (this.optionalOperator('+')) {
                result = new ast_1.Binary('+', result, this.parseMultiplicative());
            }
            else if (this.optionalOperator('-')) {
                result = new ast_1.Binary('-', result, this.parseMultiplicative());
            }
            else {
                return result;
            }
        }
    };
    _ParseAST.prototype.parseMultiplicative = function () {
        // '*', '%', '/'
        var result = this.parsePrefix();
        while (true) {
            if (this.optionalOperator('*')) {
                result = new ast_1.Binary('*', result, this.parsePrefix());
            }
            else if (this.optionalOperator('%')) {
                result = new ast_1.Binary('%', result, this.parsePrefix());
            }
            else if (this.optionalOperator('/')) {
                result = new ast_1.Binary('/', result, this.parsePrefix());
            }
            else {
                return result;
            }
        }
    };
    _ParseAST.prototype.parsePrefix = function () {
        if (this.optionalOperator('+')) {
            return this.parsePrefix();
        }
        else if (this.optionalOperator('-')) {
            return new ast_1.Binary('-', new ast_1.LiteralPrimitive(0), this.parsePrefix());
        }
        else if (this.optionalOperator('!')) {
            return new ast_1.PrefixNot(this.parsePrefix());
        }
        else {
            return this.parseCallChain();
        }
    };
    _ParseAST.prototype.parseCallChain = function () {
        var result = this.parsePrimary();
        while (true) {
            if (this.optionalCharacter(lexer_1.$PERIOD)) {
                result = this.parseAccessMemberOrMethodCall(result, false);
            }
            else if (this.optionalOperator('?.')) {
                result = this.parseAccessMemberOrMethodCall(result, true);
            }
            else if (this.optionalCharacter(lexer_1.$LBRACKET)) {
                var key = this.parsePipe();
                this.expectCharacter(lexer_1.$RBRACKET);
                if (this.optionalOperator("=")) {
                    var value = this.parseConditional();
                    result = new ast_1.KeyedWrite(result, key, value);
                }
                else {
                    result = new ast_1.KeyedRead(result, key);
                }
            }
            else if (this.optionalCharacter(lexer_1.$LPAREN)) {
                var args = this.parseCallArguments();
                this.expectCharacter(lexer_1.$RPAREN);
                result = new ast_1.FunctionCall(result, args);
            }
            else {
                return result;
            }
        }
    };
    _ParseAST.prototype.parsePrimary = function () {
        if (this.optionalCharacter(lexer_1.$LPAREN)) {
            var result = this.parsePipe();
            this.expectCharacter(lexer_1.$RPAREN);
            return result;
        }
        else if (this.next.isKeywordNull() || this.next.isKeywordUndefined()) {
            this.advance();
            return new ast_1.LiteralPrimitive(null);
        }
        else if (this.next.isKeywordTrue()) {
            this.advance();
            return new ast_1.LiteralPrimitive(true);
        }
        else if (this.next.isKeywordFalse()) {
            this.advance();
            return new ast_1.LiteralPrimitive(false);
        }
        else if (this.optionalCharacter(lexer_1.$LBRACKET)) {
            var elements = this.parseExpressionList(lexer_1.$RBRACKET);
            this.expectCharacter(lexer_1.$RBRACKET);
            return new ast_1.LiteralArray(elements);
        }
        else if (this.next.isCharacter(lexer_1.$LBRACE)) {
            return this.parseLiteralMap();
        }
        else if (this.next.isIdentifier()) {
            return this.parseAccessMemberOrMethodCall(_implicitReceiver, false);
        }
        else if (this.next.isNumber()) {
            var value = this.next.toNumber();
            this.advance();
            return new ast_1.LiteralPrimitive(value);
        }
        else if (this.next.isString()) {
            var literalValue = this.next.toString();
            this.advance();
            return new ast_1.LiteralPrimitive(literalValue);
        }
        else if (this.index >= this.tokens.length) {
            this.error("Unexpected end of expression: " + this.input);
        }
        else {
            this.error("Unexpected token " + this.next);
        }
        // error() throws, so we don't reach here.
        throw new exceptions_1.BaseException("Fell through all cases in parsePrimary");
    };
    _ParseAST.prototype.parseExpressionList = function (terminator) {
        var result = [];
        if (!this.next.isCharacter(terminator)) {
            do {
                result.push(this.parsePipe());
            } while (this.optionalCharacter(lexer_1.$COMMA));
        }
        return result;
    };
    _ParseAST.prototype.parseLiteralMap = function () {
        var keys = [];
        var values = [];
        this.expectCharacter(lexer_1.$LBRACE);
        if (!this.optionalCharacter(lexer_1.$RBRACE)) {
            do {
                var key = this.expectIdentifierOrKeywordOrString();
                keys.push(key);
                this.expectCharacter(lexer_1.$COLON);
                values.push(this.parsePipe());
            } while (this.optionalCharacter(lexer_1.$COMMA));
            this.expectCharacter(lexer_1.$RBRACE);
        }
        return new ast_1.LiteralMap(keys, values);
    };
    _ParseAST.prototype.parseAccessMemberOrMethodCall = function (receiver, isSafe) {
        if (isSafe === void 0) { isSafe = false; }
        var id = this.expectIdentifierOrKeyword();
        if (this.optionalCharacter(lexer_1.$LPAREN)) {
            var args = this.parseCallArguments();
            this.expectCharacter(lexer_1.$RPAREN);
            var fn = this.reflector.method(id);
            return isSafe ? new ast_1.SafeMethodCall(receiver, id, fn, args) :
                new ast_1.MethodCall(receiver, id, fn, args);
        }
        else {
            if (isSafe) {
                if (this.optionalOperator("=")) {
                    this.error("The '?.' operator cannot be used in the assignment");
                }
                else {
                    return new ast_1.SafePropertyRead(receiver, id, this.reflector.getter(id));
                }
            }
            else {
                if (this.optionalOperator("=")) {
                    if (!this.parseAction) {
                        this.error("Bindings cannot contain assignments");
                    }
                    var value = this.parseConditional();
                    return new ast_1.PropertyWrite(receiver, id, this.reflector.setter(id), value);
                }
                else {
                    return new ast_1.PropertyRead(receiver, id, this.reflector.getter(id));
                }
            }
        }
        return null;
    };
    _ParseAST.prototype.parseCallArguments = function () {
        if (this.next.isCharacter(lexer_1.$RPAREN))
            return [];
        var positionals = [];
        do {
            positionals.push(this.parsePipe());
        } while (this.optionalCharacter(lexer_1.$COMMA));
        return positionals;
    };
    _ParseAST.prototype.parseBlockContent = function () {
        if (!this.parseAction) {
            this.error("Binding expression cannot contain chained expression");
        }
        var exprs = [];
        while (this.index < this.tokens.length && !this.next.isCharacter(lexer_1.$RBRACE)) {
            var expr = this.parseExpression();
            exprs.push(expr);
            if (this.optionalCharacter(lexer_1.$SEMICOLON)) {
                while (this.optionalCharacter(lexer_1.$SEMICOLON)) {
                } // read all semicolons
            }
        }
        if (exprs.length == 0)
            return new ast_1.EmptyExpr();
        if (exprs.length == 1)
            return exprs[0];
        return new ast_1.Chain(exprs);
    };
    /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     */
    _ParseAST.prototype.expectTemplateBindingKey = function () {
        var result = '';
        var operatorFound = false;
        do {
            result += this.expectIdentifierOrKeywordOrString();
            operatorFound = this.optionalOperator('-');
            if (operatorFound) {
                result += '-';
            }
        } while (operatorFound);
        return result.toString();
    };
    _ParseAST.prototype.parseTemplateBindings = function () {
        var bindings = [];
        var prefix = null;
        while (this.index < this.tokens.length) {
            var keyIsVar = this.optionalKeywordVar();
            var key = this.expectTemplateBindingKey();
            if (!keyIsVar) {
                if (prefix == null) {
                    prefix = key;
                }
                else {
                    key = prefix + key[0].toUpperCase() + key.substring(1);
                }
            }
            this.optionalCharacter(lexer_1.$COLON);
            var name = null;
            var expression = null;
            if (keyIsVar) {
                if (this.optionalOperator("=")) {
                    name = this.expectTemplateBindingKey();
                }
                else {
                    name = '\$implicit';
                }
            }
            else if (this.next !== lexer_1.EOF && !this.peekKeywordVar()) {
                var start = this.inputIndex;
                var ast = this.parsePipe();
                var source = this.input.substring(start, this.inputIndex);
                expression = new ast_1.ASTWithSource(ast, source, this.location);
            }
            bindings.push(new ast_1.TemplateBinding(key, keyIsVar, name, expression));
            if (!this.optionalCharacter(lexer_1.$SEMICOLON)) {
                this.optionalCharacter(lexer_1.$COMMA);
            }
        }
        return bindings;
    };
    _ParseAST.prototype.error = function (message, index) {
        if (index === void 0) { index = null; }
        if (lang_1.isBlank(index))
            index = this.index;
        var location = (index < this.tokens.length) ? "at column " + (this.tokens[index].index + 1) + " in" :
            "at the end of the expression";
        throw new ParseException(message, this.input, location, this.location);
    };
    return _ParseAST;
})();
exports._ParseAST = _ParseAST;
var SimpleExpressionChecker = (function () {
    function SimpleExpressionChecker() {
        this.simple = true;
    }
    SimpleExpressionChecker.check = function (ast) {
        var s = new SimpleExpressionChecker();
        ast.visit(s);
        return s.simple;
    };
    SimpleExpressionChecker.prototype.visitImplicitReceiver = function (ast) { };
    SimpleExpressionChecker.prototype.visitInterpolation = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitLiteralPrimitive = function (ast) { };
    SimpleExpressionChecker.prototype.visitPropertyRead = function (ast) { };
    SimpleExpressionChecker.prototype.visitPropertyWrite = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitSafePropertyRead = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitMethodCall = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitSafeMethodCall = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitFunctionCall = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitLiteralArray = function (ast) { this.visitAll(ast.expressions); };
    SimpleExpressionChecker.prototype.visitLiteralMap = function (ast) { this.visitAll(ast.values); };
    SimpleExpressionChecker.prototype.visitBinary = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitPrefixNot = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitConditional = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitPipe = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitKeyedRead = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitKeyedWrite = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitAll = function (asts) {
        var res = collection_1.ListWrapper.createFixedSize(asts.length);
        for (var i = 0; i < asts.length; ++i) {
            res[i] = asts[i].visit(this);
        }
        return res;
    };
    SimpleExpressionChecker.prototype.visitChain = function (ast) { this.simple = false; };
    SimpleExpressionChecker.prototype.visitQuote = function (ast) { this.simple = false; };
    return SimpleExpressionChecker;
})();
},{"./ast":28,"./lexer":29,"angular2/src/core/di/decorators":39,"angular2/src/core/reflection/reflection":82,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],32:[function(require,module,exports){
'use strict';function implementsOnDestroy(pipe) {
    return pipe.constructor.prototype.ngOnDestroy;
}
exports.implementsOnDestroy = implementsOnDestroy;
},{}],33:[function(require,module,exports){
'use strict';var SelectedPipe = (function () {
    function SelectedPipe(pipe, pure) {
        this.pipe = pipe;
        this.pure = pure;
    }
    return SelectedPipe;
})();
exports.SelectedPipe = SelectedPipe;
},{}],34:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var ast_1 = require('./parser/ast');
var change_detection_util_1 = require('./change_detection_util');
var dynamic_change_detector_1 = require('./dynamic_change_detector');
var directive_record_1 = require('./directive_record');
var event_binding_1 = require('./event_binding');
var coalesce_1 = require('./coalesce');
var proto_record_1 = require('./proto_record');
var DynamicProtoChangeDetector = (function () {
    function DynamicProtoChangeDetector(_definition) {
        this._definition = _definition;
        this._propertyBindingRecords = createPropertyRecords(_definition);
        this._eventBindingRecords = createEventRecords(_definition);
        this._propertyBindingTargets = this._definition.bindingRecords.map(function (b) { return b.target; });
        this._directiveIndices = this._definition.directiveRecords.map(function (d) { return d.directiveIndex; });
    }
    DynamicProtoChangeDetector.prototype.instantiate = function (dispatcher) {
        return new dynamic_change_detector_1.DynamicChangeDetector(this._definition.id, dispatcher, this._propertyBindingRecords.length, this._propertyBindingTargets, this._directiveIndices, this._definition.strategy, this._propertyBindingRecords, this._eventBindingRecords, this._definition.directiveRecords, this._definition.genConfig);
    };
    return DynamicProtoChangeDetector;
})();
exports.DynamicProtoChangeDetector = DynamicProtoChangeDetector;
function createPropertyRecords(definition) {
    var recordBuilder = new ProtoRecordBuilder();
    collection_1.ListWrapper.forEachWithIndex(definition.bindingRecords, function (b, index) { return recordBuilder.add(b, definition.variableNames, index); });
    return coalesce_1.coalesce(recordBuilder.records);
}
exports.createPropertyRecords = createPropertyRecords;
function createEventRecords(definition) {
    // TODO: vsavkin: remove $event when the compiler handles render-side variables properly
    var varNames = collection_1.ListWrapper.concat(['$event'], definition.variableNames);
    return definition.eventRecords.map(function (er) {
        var records = _ConvertAstIntoProtoRecords.create(er, varNames);
        var dirIndex = er.implicitReceiver instanceof directive_record_1.DirectiveIndex ? er.implicitReceiver : null;
        return new event_binding_1.EventBinding(er.target.name, er.target.elementIndex, dirIndex, records);
    });
}
exports.createEventRecords = createEventRecords;
var ProtoRecordBuilder = (function () {
    function ProtoRecordBuilder() {
        this.records = [];
    }
    ProtoRecordBuilder.prototype.add = function (b, variableNames, bindingIndex) {
        var oldLast = collection_1.ListWrapper.last(this.records);
        if (lang_1.isPresent(oldLast) && oldLast.bindingRecord.directiveRecord == b.directiveRecord) {
            oldLast.lastInDirective = false;
        }
        var numberOfRecordsBefore = this.records.length;
        this._appendRecords(b, variableNames, bindingIndex);
        var newLast = collection_1.ListWrapper.last(this.records);
        if (lang_1.isPresent(newLast) && newLast !== oldLast) {
            newLast.lastInBinding = true;
            newLast.lastInDirective = true;
            this._setArgumentToPureFunction(numberOfRecordsBefore);
        }
    };
    /** @internal */
    ProtoRecordBuilder.prototype._setArgumentToPureFunction = function (startIndex) {
        var _this = this;
        for (var i = startIndex; i < this.records.length; ++i) {
            var rec = this.records[i];
            if (rec.isPureFunction()) {
                rec.args.forEach(function (recordIndex) { return _this.records[recordIndex - 1].argumentToPureFunction =
                    true; });
            }
            if (rec.mode === proto_record_1.RecordType.Pipe) {
                rec.args.forEach(function (recordIndex) { return _this.records[recordIndex - 1].argumentToPureFunction =
                    true; });
                this.records[rec.contextIndex - 1].argumentToPureFunction = true;
            }
        }
    };
    /** @internal */
    ProtoRecordBuilder.prototype._appendRecords = function (b, variableNames, bindingIndex) {
        if (b.isDirectiveLifecycle()) {
            this.records.push(new proto_record_1.ProtoRecord(proto_record_1.RecordType.DirectiveLifecycle, b.lifecycleEvent, null, [], [], -1, null, this.records.length + 1, b, false, false, false, false, null));
        }
        else {
            _ConvertAstIntoProtoRecords.append(this.records, b, variableNames, bindingIndex);
        }
    };
    return ProtoRecordBuilder;
})();
exports.ProtoRecordBuilder = ProtoRecordBuilder;
var _ConvertAstIntoProtoRecords = (function () {
    function _ConvertAstIntoProtoRecords(_records, _bindingRecord, _variableNames, _bindingIndex) {
        this._records = _records;
        this._bindingRecord = _bindingRecord;
        this._variableNames = _variableNames;
        this._bindingIndex = _bindingIndex;
    }
    _ConvertAstIntoProtoRecords.append = function (records, b, variableNames, bindingIndex) {
        var c = new _ConvertAstIntoProtoRecords(records, b, variableNames, bindingIndex);
        b.ast.visit(c);
    };
    _ConvertAstIntoProtoRecords.create = function (b, variableNames) {
        var rec = [];
        _ConvertAstIntoProtoRecords.append(rec, b, variableNames, null);
        rec[rec.length - 1].lastInBinding = true;
        return rec;
    };
    _ConvertAstIntoProtoRecords.prototype.visitImplicitReceiver = function (ast) { return this._bindingRecord.implicitReceiver; };
    _ConvertAstIntoProtoRecords.prototype.visitInterpolation = function (ast) {
        var args = this._visitAll(ast.expressions);
        return this._addRecord(proto_record_1.RecordType.Interpolate, "interpolate", _interpolationFn(ast.strings), args, ast.strings, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralPrimitive = function (ast) {
        return this._addRecord(proto_record_1.RecordType.Const, "literal", ast.value, [], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitPropertyRead = function (ast) {
        var receiver = ast.receiver.visit(this);
        if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name) &&
            ast.receiver instanceof ast_1.ImplicitReceiver) {
            return this._addRecord(proto_record_1.RecordType.Local, ast.name, ast.name, [], null, receiver);
        }
        else {
            return this._addRecord(proto_record_1.RecordType.PropertyRead, ast.name, ast.getter, [], null, receiver);
        }
    };
    _ConvertAstIntoProtoRecords.prototype.visitPropertyWrite = function (ast) {
        if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name) &&
            ast.receiver instanceof ast_1.ImplicitReceiver) {
            throw new exceptions_1.BaseException("Cannot reassign a variable binding " + ast.name);
        }
        else {
            var receiver = ast.receiver.visit(this);
            var value = ast.value.visit(this);
            return this._addRecord(proto_record_1.RecordType.PropertyWrite, ast.name, ast.setter, [value], null, receiver);
        }
    };
    _ConvertAstIntoProtoRecords.prototype.visitKeyedWrite = function (ast) {
        var obj = ast.obj.visit(this);
        var key = ast.key.visit(this);
        var value = ast.value.visit(this);
        return this._addRecord(proto_record_1.RecordType.KeyedWrite, null, null, [key, value], null, obj);
    };
    _ConvertAstIntoProtoRecords.prototype.visitSafePropertyRead = function (ast) {
        var receiver = ast.receiver.visit(this);
        return this._addRecord(proto_record_1.RecordType.SafeProperty, ast.name, ast.getter, [], null, receiver);
    };
    _ConvertAstIntoProtoRecords.prototype.visitMethodCall = function (ast) {
        var receiver = ast.receiver.visit(this);
        var args = this._visitAll(ast.args);
        if (lang_1.isPresent(this._variableNames) && collection_1.ListWrapper.contains(this._variableNames, ast.name)) {
            var target = this._addRecord(proto_record_1.RecordType.Local, ast.name, ast.name, [], null, receiver);
            return this._addRecord(proto_record_1.RecordType.InvokeClosure, "closure", null, args, null, target);
        }
        else {
            return this._addRecord(proto_record_1.RecordType.InvokeMethod, ast.name, ast.fn, args, null, receiver);
        }
    };
    _ConvertAstIntoProtoRecords.prototype.visitSafeMethodCall = function (ast) {
        var receiver = ast.receiver.visit(this);
        var args = this._visitAll(ast.args);
        return this._addRecord(proto_record_1.RecordType.SafeMethodInvoke, ast.name, ast.fn, args, null, receiver);
    };
    _ConvertAstIntoProtoRecords.prototype.visitFunctionCall = function (ast) {
        var target = ast.target.visit(this);
        var args = this._visitAll(ast.args);
        return this._addRecord(proto_record_1.RecordType.InvokeClosure, "closure", null, args, null, target);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralArray = function (ast) {
        var primitiveName = "arrayFn" + ast.expressions.length;
        return this._addRecord(proto_record_1.RecordType.CollectionLiteral, primitiveName, _arrayFn(ast.expressions.length), this._visitAll(ast.expressions), null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitLiteralMap = function (ast) {
        return this._addRecord(proto_record_1.RecordType.CollectionLiteral, _mapPrimitiveName(ast.keys), change_detection_util_1.ChangeDetectionUtil.mapFn(ast.keys), this._visitAll(ast.values), null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitBinary = function (ast) {
        var left = ast.left.visit(this);
        switch (ast.operation) {
            case '&&':
                var branchEnd = [null];
                this._addRecord(proto_record_1.RecordType.SkipRecordsIfNot, "SkipRecordsIfNot", null, [], branchEnd, left);
                var right = ast.right.visit(this);
                branchEnd[0] = right;
                return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [left, right, left], null, 0);
            case '||':
                var branchEnd = [null];
                this._addRecord(proto_record_1.RecordType.SkipRecordsIf, "SkipRecordsIf", null, [], branchEnd, left);
                var right = ast.right.visit(this);
                branchEnd[0] = right;
                return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [left, left, right], null, 0);
            default:
                var right = ast.right.visit(this);
                return this._addRecord(proto_record_1.RecordType.PrimitiveOp, _operationToPrimitiveName(ast.operation), _operationToFunction(ast.operation), [left, right], null, 0);
        }
    };
    _ConvertAstIntoProtoRecords.prototype.visitPrefixNot = function (ast) {
        var exp = ast.expression.visit(this);
        return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "operation_negate", change_detection_util_1.ChangeDetectionUtil.operation_negate, [exp], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitConditional = function (ast) {
        var condition = ast.condition.visit(this);
        var startOfFalseBranch = [null];
        var endOfFalseBranch = [null];
        this._addRecord(proto_record_1.RecordType.SkipRecordsIfNot, "SkipRecordsIfNot", null, [], startOfFalseBranch, condition);
        var whenTrue = ast.trueExp.visit(this);
        var skip = this._addRecord(proto_record_1.RecordType.SkipRecords, "SkipRecords", null, [], endOfFalseBranch, 0);
        var whenFalse = ast.falseExp.visit(this);
        startOfFalseBranch[0] = skip;
        endOfFalseBranch[0] = whenFalse;
        return this._addRecord(proto_record_1.RecordType.PrimitiveOp, "cond", change_detection_util_1.ChangeDetectionUtil.cond, [condition, whenTrue, whenFalse], null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitPipe = function (ast) {
        var value = ast.exp.visit(this);
        var args = this._visitAll(ast.args);
        return this._addRecord(proto_record_1.RecordType.Pipe, ast.name, ast.name, args, null, value);
    };
    _ConvertAstIntoProtoRecords.prototype.visitKeyedRead = function (ast) {
        var obj = ast.obj.visit(this);
        var key = ast.key.visit(this);
        return this._addRecord(proto_record_1.RecordType.KeyedRead, "keyedAccess", change_detection_util_1.ChangeDetectionUtil.keyedAccess, [key], null, obj);
    };
    _ConvertAstIntoProtoRecords.prototype.visitChain = function (ast) {
        var _this = this;
        var args = ast.expressions.map(function (e) { return e.visit(_this); });
        return this._addRecord(proto_record_1.RecordType.Chain, "chain", null, args, null, 0);
    };
    _ConvertAstIntoProtoRecords.prototype.visitQuote = function (ast) {
        throw new exceptions_1.BaseException(("Caught uninterpreted expression at " + ast.location + ": " + ast.uninterpretedExpression + ". ") +
            ("Expression prefix " + ast.prefix + " did not match a template transformer to interpret the expression."));
    };
    _ConvertAstIntoProtoRecords.prototype._visitAll = function (asts) {
        var res = collection_1.ListWrapper.createFixedSize(asts.length);
        for (var i = 0; i < asts.length; ++i) {
            res[i] = asts[i].visit(this);
        }
        return res;
    };
    /**
     * Adds a `ProtoRecord` and returns its selfIndex.
     */
    _ConvertAstIntoProtoRecords.prototype._addRecord = function (type, name, funcOrValue, args, fixedArgs, context) {
        var selfIndex = this._records.length + 1;
        if (context instanceof directive_record_1.DirectiveIndex) {
            this._records.push(new proto_record_1.ProtoRecord(type, name, funcOrValue, args, fixedArgs, -1, context, selfIndex, this._bindingRecord, false, false, false, false, this._bindingIndex));
        }
        else {
            this._records.push(new proto_record_1.ProtoRecord(type, name, funcOrValue, args, fixedArgs, context, null, selfIndex, this._bindingRecord, false, false, false, false, this._bindingIndex));
        }
        return selfIndex;
    };
    return _ConvertAstIntoProtoRecords;
})();
function _arrayFn(length) {
    switch (length) {
        case 0:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn0;
        case 1:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn1;
        case 2:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn2;
        case 3:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn3;
        case 4:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn4;
        case 5:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn5;
        case 6:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn6;
        case 7:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn7;
        case 8:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn8;
        case 9:
            return change_detection_util_1.ChangeDetectionUtil.arrayFn9;
        default:
            throw new exceptions_1.BaseException("Does not support literal maps with more than 9 elements");
    }
}
function _mapPrimitiveName(keys) {
    var stringifiedKeys = keys.map(function (k) { return lang_1.isString(k) ? "\"" + k + "\"" : "" + k; }).join(', ');
    return "mapFn([" + stringifiedKeys + "])";
}
function _operationToPrimitiveName(operation) {
    switch (operation) {
        case '+':
            return "operation_add";
        case '-':
            return "operation_subtract";
        case '*':
            return "operation_multiply";
        case '/':
            return "operation_divide";
        case '%':
            return "operation_remainder";
        case '==':
            return "operation_equals";
        case '!=':
            return "operation_not_equals";
        case '===':
            return "operation_identical";
        case '!==':
            return "operation_not_identical";
        case '<':
            return "operation_less_then";
        case '>':
            return "operation_greater_then";
        case '<=':
            return "operation_less_or_equals_then";
        case '>=':
            return "operation_greater_or_equals_then";
        default:
            throw new exceptions_1.BaseException("Unsupported operation " + operation);
    }
}
function _operationToFunction(operation) {
    switch (operation) {
        case '+':
            return change_detection_util_1.ChangeDetectionUtil.operation_add;
        case '-':
            return change_detection_util_1.ChangeDetectionUtil.operation_subtract;
        case '*':
            return change_detection_util_1.ChangeDetectionUtil.operation_multiply;
        case '/':
            return change_detection_util_1.ChangeDetectionUtil.operation_divide;
        case '%':
            return change_detection_util_1.ChangeDetectionUtil.operation_remainder;
        case '==':
            return change_detection_util_1.ChangeDetectionUtil.operation_equals;
        case '!=':
            return change_detection_util_1.ChangeDetectionUtil.operation_not_equals;
        case '===':
            return change_detection_util_1.ChangeDetectionUtil.operation_identical;
        case '!==':
            return change_detection_util_1.ChangeDetectionUtil.operation_not_identical;
        case '<':
            return change_detection_util_1.ChangeDetectionUtil.operation_less_then;
        case '>':
            return change_detection_util_1.ChangeDetectionUtil.operation_greater_then;
        case '<=':
            return change_detection_util_1.ChangeDetectionUtil.operation_less_or_equals_then;
        case '>=':
            return change_detection_util_1.ChangeDetectionUtil.operation_greater_or_equals_then;
        default:
            throw new exceptions_1.BaseException("Unsupported operation " + operation);
    }
}
function s(v) {
    return lang_1.isPresent(v) ? "" + v : '';
}
function _interpolationFn(strings) {
    var length = strings.length;
    var c0 = length > 0 ? strings[0] : null;
    var c1 = length > 1 ? strings[1] : null;
    var c2 = length > 2 ? strings[2] : null;
    var c3 = length > 3 ? strings[3] : null;
    var c4 = length > 4 ? strings[4] : null;
    var c5 = length > 5 ? strings[5] : null;
    var c6 = length > 6 ? strings[6] : null;
    var c7 = length > 7 ? strings[7] : null;
    var c8 = length > 8 ? strings[8] : null;
    var c9 = length > 9 ? strings[9] : null;
    switch (length - 1) {
        case 1:
            return function (a1) { return c0 + s(a1) + c1; };
        case 2:
            return function (a1, a2) { return c0 + s(a1) + c1 + s(a2) + c2; };
        case 3:
            return function (a1, a2, a3) { return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3; };
        case 4:
            return function (a1, a2, a3, a4) { return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4; };
        case 5:
            return function (a1, a2, a3, a4, a5) {
                return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5;
            };
        case 6:
            return function (a1, a2, a3, a4, a5, a6) {
                return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6;
            };
        case 7:
            return function (a1, a2, a3, a4, a5, a6, a7) { return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) +
                c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7; };
        case 8:
            return function (a1, a2, a3, a4, a5, a6, a7, a8) { return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) +
                c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) +
                c8; };
        case 9:
            return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) { return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 +
                s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) +
                c7 + s(a8) + c8 + s(a9) + c9; };
        default:
            throw new exceptions_1.BaseException("Does not support more than 9 expressions");
    }
}
},{"./change_detection_util":10,"./coalesce":12,"./directive_record":21,"./dynamic_change_detector":22,"./event_binding":23,"./parser/ast":28,"./proto_record":35,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],35:[function(require,module,exports){
'use strict';(function (RecordType) {
    RecordType[RecordType["Self"] = 0] = "Self";
    RecordType[RecordType["Const"] = 1] = "Const";
    RecordType[RecordType["PrimitiveOp"] = 2] = "PrimitiveOp";
    RecordType[RecordType["PropertyRead"] = 3] = "PropertyRead";
    RecordType[RecordType["PropertyWrite"] = 4] = "PropertyWrite";
    RecordType[RecordType["Local"] = 5] = "Local";
    RecordType[RecordType["InvokeMethod"] = 6] = "InvokeMethod";
    RecordType[RecordType["InvokeClosure"] = 7] = "InvokeClosure";
    RecordType[RecordType["KeyedRead"] = 8] = "KeyedRead";
    RecordType[RecordType["KeyedWrite"] = 9] = "KeyedWrite";
    RecordType[RecordType["Pipe"] = 10] = "Pipe";
    RecordType[RecordType["Interpolate"] = 11] = "Interpolate";
    RecordType[RecordType["SafeProperty"] = 12] = "SafeProperty";
    RecordType[RecordType["CollectionLiteral"] = 13] = "CollectionLiteral";
    RecordType[RecordType["SafeMethodInvoke"] = 14] = "SafeMethodInvoke";
    RecordType[RecordType["DirectiveLifecycle"] = 15] = "DirectiveLifecycle";
    RecordType[RecordType["Chain"] = 16] = "Chain";
    RecordType[RecordType["SkipRecordsIf"] = 17] = "SkipRecordsIf";
    RecordType[RecordType["SkipRecordsIfNot"] = 18] = "SkipRecordsIfNot";
    RecordType[RecordType["SkipRecords"] = 19] = "SkipRecords"; // Skip records unconditionally
})(exports.RecordType || (exports.RecordType = {}));
var RecordType = exports.RecordType;
var ProtoRecord = (function () {
    function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, directiveIndex, selfIndex, bindingRecord, lastInBinding, lastInDirective, argumentToPureFunction, referencedBySelf, propertyBindingIndex) {
        this.mode = mode;
        this.name = name;
        this.funcOrValue = funcOrValue;
        this.args = args;
        this.fixedArgs = fixedArgs;
        this.contextIndex = contextIndex;
        this.directiveIndex = directiveIndex;
        this.selfIndex = selfIndex;
        this.bindingRecord = bindingRecord;
        this.lastInBinding = lastInBinding;
        this.lastInDirective = lastInDirective;
        this.argumentToPureFunction = argumentToPureFunction;
        this.referencedBySelf = referencedBySelf;
        this.propertyBindingIndex = propertyBindingIndex;
    }
    ProtoRecord.prototype.isPureFunction = function () {
        return this.mode === RecordType.Interpolate || this.mode === RecordType.CollectionLiteral;
    };
    ProtoRecord.prototype.isUsedByOtherRecord = function () { return !this.lastInBinding || this.referencedBySelf; };
    ProtoRecord.prototype.shouldBeChecked = function () {
        return this.argumentToPureFunction || this.lastInBinding || this.isPureFunction() ||
            this.isPipeRecord();
    };
    ProtoRecord.prototype.isPipeRecord = function () { return this.mode === RecordType.Pipe; };
    ProtoRecord.prototype.isConditionalSkipRecord = function () {
        return this.mode === RecordType.SkipRecordsIfNot || this.mode === RecordType.SkipRecordsIf;
    };
    ProtoRecord.prototype.isUnconditionalSkipRecord = function () { return this.mode === RecordType.SkipRecords; };
    ProtoRecord.prototype.isSkipRecord = function () {
        return this.isConditionalSkipRecord() || this.isUnconditionalSkipRecord();
    };
    ProtoRecord.prototype.isLifeCycleRecord = function () { return this.mode === RecordType.DirectiveLifecycle; };
    return ProtoRecord;
})();
exports.ProtoRecord = ProtoRecord;
},{}],36:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
var Console = (function () {
    function Console() {
    }
    Console.prototype.log = function (message) { lang_1.print(message); };
    Console = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Console);
    return Console;
})();
exports.Console = Console;
},{"angular2/src/core/di":38,"angular2/src/facade/lang":98}],37:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var view_1 = require('angular2/src/core/linker/view');
var view_ref_1 = require('angular2/src/core/linker/view_ref');
/**
 * A DebugElement contains information from the Angular compiler about an
 * element and provides access to the corresponding ElementInjector and
 * underlying DOM Element, as well as a way to query for children.
 *
 * A DebugElement can be obtained from a {@link ComponentFixture} or from an
 * {@link ElementRef} via {@link inspectElement}.
 */
var DebugElement = (function () {
    function DebugElement() {
    }
    Object.defineProperty(DebugElement.prototype, "componentInstance", {
        /**
         * Return the instance of the component associated with this element, if any.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DebugElement.prototype, "nativeElement", {
        /**
         * Return the native HTML element for this DebugElement.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DebugElement.prototype, "elementRef", {
        /**
         * Return an Angular {@link ElementRef} for this element.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DebugElement.prototype, "children", {
        /**
         * Get child DebugElements from within the Light DOM.
         *
         * @return {DebugElement[]}
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DebugElement.prototype, "componentViewChildren", {
        /**
         * Get the root DebugElement children of a component. Returns an empty
         * list if the current DebugElement is not a component root.
         *
         * @return {DebugElement[]}
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Return the first descendant TestElement matching the given predicate
     * and scope.
     *
     * @param {Function: boolean} predicate
     * @param {Scope} scope
     *
     * @return {DebugElement}
     */
    DebugElement.prototype.query = function (predicate, scope) {
        if (scope === void 0) { scope = Scope.all; }
        var results = this.queryAll(predicate, scope);
        return results.length > 0 ? results[0] : null;
    };
    /**
     * Return descendant TestElememts matching the given predicate
     * and scope.
     *
     * @param {Function: boolean} predicate
     * @param {Scope} scope
     *
     * @return {DebugElement[]}
     */
    DebugElement.prototype.queryAll = function (predicate, scope) {
        if (scope === void 0) { scope = Scope.all; }
        var elementsInScope = scope(this);
        return elementsInScope.filter(predicate);
    };
    return DebugElement;
})();
exports.DebugElement = DebugElement;
var DebugElement_ = (function (_super) {
    __extends(DebugElement_, _super);
    function DebugElement_(_parentView, _boundElementIndex) {
        _super.call(this);
        this._parentView = _parentView;
        this._boundElementIndex = _boundElementIndex;
        this._elementInjector = this._parentView.elementInjectors[this._boundElementIndex];
    }
    Object.defineProperty(DebugElement_.prototype, "componentInstance", {
        get: function () {
            if (!lang_1.isPresent(this._elementInjector)) {
                return null;
            }
            return this._elementInjector.getComponent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugElement_.prototype, "nativeElement", {
        get: function () { return this.elementRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugElement_.prototype, "elementRef", {
        get: function () { return this._parentView.elementRefs[this._boundElementIndex]; },
        enumerable: true,
        configurable: true
    });
    DebugElement_.prototype.getDirectiveInstance = function (directiveIndex) {
        return this._elementInjector.getDirectiveAtIndex(directiveIndex);
    };
    Object.defineProperty(DebugElement_.prototype, "children", {
        get: function () {
            return this._getChildElements(this._parentView, this._boundElementIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugElement_.prototype, "componentViewChildren", {
        get: function () {
            var shadowView = this._parentView.getNestedView(this._boundElementIndex);
            if (!lang_1.isPresent(shadowView) || shadowView.proto.type !== view_1.ViewType.COMPONENT) {
                // The current element is not a component.
                return [];
            }
            return this._getChildElements(shadowView, null);
        },
        enumerable: true,
        configurable: true
    });
    DebugElement_.prototype.triggerEventHandler = function (eventName, eventObj) {
        this._parentView.triggerEventHandlers(eventName, eventObj, this._boundElementIndex);
    };
    DebugElement_.prototype.hasDirective = function (type) {
        if (!lang_1.isPresent(this._elementInjector)) {
            return false;
        }
        return this._elementInjector.hasDirective(type);
    };
    DebugElement_.prototype.inject = function (type) {
        if (!lang_1.isPresent(this._elementInjector)) {
            return null;
        }
        return this._elementInjector.get(type);
    };
    DebugElement_.prototype.getLocal = function (name) { return this._parentView.locals.get(name); };
    /** @internal */
    DebugElement_.prototype._getChildElements = function (view, parentBoundElementIndex) {
        var _this = this;
        var els = [];
        var parentElementBinder = null;
        if (lang_1.isPresent(parentBoundElementIndex)) {
            parentElementBinder = view.proto.elementBinders[parentBoundElementIndex - view.elementOffset];
        }
        for (var i = 0; i < view.proto.elementBinders.length; ++i) {
            var binder = view.proto.elementBinders[i];
            if (binder.parent == parentElementBinder) {
                els.push(new DebugElement_(view, view.elementOffset + i));
                var views = view.viewContainers[view.elementOffset + i];
                if (lang_1.isPresent(views)) {
                    views.views.forEach(function (nextView) { els = els.concat(_this._getChildElements(nextView, null)); });
                }
            }
        }
        return els;
    };
    return DebugElement_;
})(DebugElement);
exports.DebugElement_ = DebugElement_;
/**
 * Returns a {@link DebugElement} for an {@link ElementRef}.
 *
 * @param {ElementRef}: elementRef
 * @return {DebugElement}
 */
function inspectElement(elementRef) {
    return new DebugElement_(view_ref_1.internalView(elementRef.parentView), elementRef.boundElementIndex);
}
exports.inspectElement = inspectElement;
/**
 * Maps an array of {@link DebugElement}s to an array of native DOM elements.
 */
function asNativeElements(arr) {
    return arr.map(function (debugEl) { return debugEl.nativeElement; });
}
exports.asNativeElements = asNativeElements;
/**
 * Set of scope functions used with {@link DebugElement}'s query functionality.
 */
var Scope = (function () {
    function Scope() {
    }
    /**
     * Scope queries to both the light dom and view of an element and its
     * children.
     *
     * ## Example
     *
     * {@example core/debug/ts/debug_element/debug_element.ts region='scope_all'}
     */
    Scope.all = function (debugElement) {
        var scope = [];
        scope.push(debugElement);
        debugElement.children.forEach(function (child) { return scope = scope.concat(Scope.all(child)); });
        debugElement.componentViewChildren.forEach(function (child) { return scope = scope.concat(Scope.all(child)); });
        return scope;
    };
    /**
     * Scope queries to the light dom of an element and its children.
     *
     * ## Example
     *
     * {@example core/debug/ts/debug_element/debug_element.ts region='scope_light'}
     */
    Scope.light = function (debugElement) {
        var scope = [];
        debugElement.children.forEach(function (child) {
            scope.push(child);
            scope = scope.concat(Scope.light(child));
        });
        return scope;
    };
    /**
     * Scope queries to the view of an element of its children.
     *
     * ## Example
     *
     * {@example core/debug/ts/debug_element/debug_element.ts region='scope_view'}
     */
    Scope.view = function (debugElement) {
        var scope = [];
        debugElement.componentViewChildren.forEach(function (child) {
            scope.push(child);
            scope = scope.concat(Scope.light(child));
        });
        return scope;
    };
    return Scope;
})();
exports.Scope = Scope;
},{"angular2/src/core/linker/view":63,"angular2/src/core/linker/view_ref":69,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],38:[function(require,module,exports){
'use strict';/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var metadata_1 = require('./di/metadata');
exports.InjectMetadata = metadata_1.InjectMetadata;
exports.OptionalMetadata = metadata_1.OptionalMetadata;
exports.InjectableMetadata = metadata_1.InjectableMetadata;
exports.SelfMetadata = metadata_1.SelfMetadata;
exports.HostMetadata = metadata_1.HostMetadata;
exports.SkipSelfMetadata = metadata_1.SkipSelfMetadata;
exports.DependencyMetadata = metadata_1.DependencyMetadata;
// we have to reexport * because Dart and TS export two different sets of types
__export(require('./di/decorators'));
var forward_ref_1 = require('./di/forward_ref');
exports.forwardRef = forward_ref_1.forwardRef;
exports.resolveForwardRef = forward_ref_1.resolveForwardRef;
var injector_1 = require('./di/injector');
exports.Injector = injector_1.Injector;
var provider_1 = require('./di/provider');
exports.Binding = provider_1.Binding;
exports.ProviderBuilder = provider_1.ProviderBuilder;
exports.ResolvedFactory = provider_1.ResolvedFactory;
exports.Dependency = provider_1.Dependency;
exports.bind = provider_1.bind;
exports.Provider = provider_1.Provider;
exports.provide = provider_1.provide;
var key_1 = require('./di/key');
exports.Key = key_1.Key;
exports.TypeLiteral = key_1.TypeLiteral;
var exceptions_1 = require('./di/exceptions');
exports.NoProviderError = exceptions_1.NoProviderError;
exports.AbstractProviderError = exceptions_1.AbstractProviderError;
exports.CyclicDependencyError = exceptions_1.CyclicDependencyError;
exports.InstantiationError = exceptions_1.InstantiationError;
exports.InvalidProviderError = exceptions_1.InvalidProviderError;
exports.NoAnnotationError = exceptions_1.NoAnnotationError;
exports.OutOfBoundsError = exceptions_1.OutOfBoundsError;
var opaque_token_1 = require('./di/opaque_token');
exports.OpaqueToken = opaque_token_1.OpaqueToken;
},{"./di/decorators":39,"./di/exceptions":40,"./di/forward_ref":41,"./di/injector":42,"./di/key":43,"./di/metadata":44,"./di/opaque_token":45,"./di/provider":46}],39:[function(require,module,exports){
'use strict';var metadata_1 = require('./metadata');
var decorators_1 = require('../util/decorators');
/**
 * Factory for creating {@link InjectMetadata}.
 */
exports.Inject = decorators_1.makeParamDecorator(metadata_1.InjectMetadata);
/**
 * Factory for creating {@link OptionalMetadata}.
 */
exports.Optional = decorators_1.makeParamDecorator(metadata_1.OptionalMetadata);
/**
 * Factory for creating {@link InjectableMetadata}.
 */
exports.Injectable = decorators_1.makeDecorator(metadata_1.InjectableMetadata);
/**
 * Factory for creating {@link SelfMetadata}.
 */
exports.Self = decorators_1.makeParamDecorator(metadata_1.SelfMetadata);
/**
 * Factory for creating {@link HostMetadata}.
 */
exports.Host = decorators_1.makeParamDecorator(metadata_1.HostMetadata);
/**
 * Factory for creating {@link SkipSelfMetadata}.
 */
exports.SkipSelf = decorators_1.makeParamDecorator(metadata_1.SkipSelfMetadata);
},{"../util/decorators":90,"./metadata":44}],40:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
function findFirstClosedCycle(keys) {
    var res = [];
    for (var i = 0; i < keys.length; ++i) {
        if (collection_1.ListWrapper.contains(res, keys[i])) {
            res.push(keys[i]);
            return res;
        }
        else {
            res.push(keys[i]);
        }
    }
    return res;
}
function constructResolvingPath(keys) {
    if (keys.length > 1) {
        var reversed = findFirstClosedCycle(collection_1.ListWrapper.reversed(keys));
        var tokenStrs = reversed.map(function (k) { return lang_1.stringify(k.token); });
        return " (" + tokenStrs.join(' -> ') + ")";
    }
    else {
        return "";
    }
}
/**
 * Base class for all errors arising from misconfigured providers.
 */
var AbstractProviderError = (function (_super) {
    __extends(AbstractProviderError, _super);
    function AbstractProviderError(injector, key, constructResolvingMessage) {
        _super.call(this, "DI Exception");
        this.keys = [key];
        this.injectors = [injector];
        this.constructResolvingMessage = constructResolvingMessage;
        this.message = this.constructResolvingMessage(this.keys);
    }
    AbstractProviderError.prototype.addKey = function (injector, key) {
        this.injectors.push(injector);
        this.keys.push(key);
        this.message = this.constructResolvingMessage(this.keys);
    };
    Object.defineProperty(AbstractProviderError.prototype, "context", {
        get: function () { return this.injectors[this.injectors.length - 1].debugContext(); },
        enumerable: true,
        configurable: true
    });
    return AbstractProviderError;
})(exceptions_1.BaseException);
exports.AbstractProviderError = AbstractProviderError;
/**
 * Thrown when trying to retrieve a dependency by `Key` from {@link Injector}, but the
 * {@link Injector} does not have a {@link Provider} for {@link Key}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
 *
 * ```typescript
 * class A {
 *   constructor(b:B) {}
 * }
 *
 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
 * ```
 */
var NoProviderError = (function (_super) {
    __extends(NoProviderError, _super);
    function NoProviderError(injector, key) {
        _super.call(this, injector, key, function (keys) {
            var first = lang_1.stringify(collection_1.ListWrapper.first(keys).token);
            return "No provider for " + first + "!" + constructResolvingPath(keys);
        });
    }
    return NoProviderError;
})(AbstractProviderError);
exports.NoProviderError = NoProviderError;
/**
 * Thrown when dependencies form a cycle.
 *
 * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
 *
 * ```typescript
 * var injector = Injector.resolveAndCreate([
 *   provide("one", {useFactory: (two) => "two", deps: [[new Inject("two")]]}),
 *   provide("two", {useFactory: (one) => "one", deps: [[new Inject("one")]]})
 * ]);
 *
 * expect(() => injector.get("one")).toThrowError();
 * ```
 *
 * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
 */
var CyclicDependencyError = (function (_super) {
    __extends(CyclicDependencyError, _super);
    function CyclicDependencyError(injector, key) {
        _super.call(this, injector, key, function (keys) {
            return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
        });
    }
    return CyclicDependencyError;
})(AbstractProviderError);
exports.CyclicDependencyError = CyclicDependencyError;
/**
 * Thrown when a constructing type returns with an Error.
 *
 * The `InstantiationError` class contains the original error plus the dependency graph which caused
 * this object to be instantiated.
 *
 * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
 *
 * ```typescript
 * class A {
 *   constructor() {
 *     throw new Error('message');
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([A]);

 * try {
 *   injector.get(A);
 * } catch (e) {
 *   expect(e instanceof InstantiationError).toBe(true);
 *   expect(e.originalException.message).toEqual("message");
 *   expect(e.originalStack).toBeDefined();
 * }
 * ```
 */
var InstantiationError = (function (_super) {
    __extends(InstantiationError, _super);
    function InstantiationError(injector, originalException, originalStack, key) {
        _super.call(this, "DI Exception", originalException, originalStack, null);
        this.keys = [key];
        this.injectors = [injector];
    }
    InstantiationError.prototype.addKey = function (injector, key) {
        this.injectors.push(injector);
        this.keys.push(key);
    };
    Object.defineProperty(InstantiationError.prototype, "wrapperMessage", {
        get: function () {
            var first = lang_1.stringify(collection_1.ListWrapper.first(this.keys).token);
            return "Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "causeKey", {
        get: function () { return this.keys[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "context", {
        get: function () { return this.injectors[this.injectors.length - 1].debugContext(); },
        enumerable: true,
        configurable: true
    });
    return InstantiationError;
})(exceptions_1.WrappedException);
exports.InstantiationError = InstantiationError;
/**
 * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
 * creation.
 *
 * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
 *
 * ```typescript
 * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
 * ```
 */
var InvalidProviderError = (function (_super) {
    __extends(InvalidProviderError, _super);
    function InvalidProviderError(provider) {
        _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " +
            provider.toString());
    }
    return InvalidProviderError;
})(exceptions_1.BaseException);
exports.InvalidProviderError = InvalidProviderError;
/**
 * Thrown when the class has no annotation information.
 *
 * Lack of annotation information prevents the {@link Injector} from determining which dependencies
 * need to be injected into the constructor.
 *
 * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
 *
 * ```typescript
 * class A {
 *   constructor(b) {}
 * }
 *
 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
 * ```
 *
 * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
 *
 * ```typescript
 * class B {}
 *
 * class A {
 *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
 * }
 *
 * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
 * ```
 */
var NoAnnotationError = (function (_super) {
    __extends(NoAnnotationError, _super);
    function NoAnnotationError(typeOrFunc, params) {
        _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
    }
    NoAnnotationError._genMessage = function (typeOrFunc, params) {
        var signature = [];
        for (var i = 0, ii = params.length; i < ii; i++) {
            var parameter = params[i];
            if (lang_1.isBlank(parameter) || parameter.length == 0) {
                signature.push('?');
            }
            else {
                signature.push(parameter.map(lang_1.stringify).join(' '));
            }
        }
        return "Cannot resolve all parameters for " + lang_1.stringify(typeOrFunc) + "(" +
            signature.join(', ') + "). " + 'Make sure they all have valid type or annotations.';
    };
    return NoAnnotationError;
})(exceptions_1.BaseException);
exports.NoAnnotationError = NoAnnotationError;
/**
 * Thrown when getting an object by index.
 *
 * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
 *
 * ```typescript
 * class A {}
 *
 * var injector = Injector.resolveAndCreate([A]);
 *
 * expect(() => injector.getAt(100)).toThrowError();
 * ```
 */
var OutOfBoundsError = (function (_super) {
    __extends(OutOfBoundsError, _super);
    function OutOfBoundsError(index) {
        _super.call(this, "Index " + index + " is out-of-bounds.");
    }
    return OutOfBoundsError;
})(exceptions_1.BaseException);
exports.OutOfBoundsError = OutOfBoundsError;
// TODO: add a working example after alpha38 is released
/**
 * Thrown when a multi provider and a regular provider are bound to the same token.
 *
 * ### Example
 *
 * ```typescript
 * expect(() => Injector.resolveAndCreate([
 *   new Provider("Strings", {useValue: "string1", multi: true}),
 *   new Provider("Strings", {useValue: "string2", multi: false})
 * ])).toThrowError();
 * ```
 */
var MixingMultiProvidersWithRegularProvidersError = (function (_super) {
    __extends(MixingMultiProvidersWithRegularProvidersError, _super);
    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
        _super.call(this, "Cannot mix multi providers and regular providers, got: " + provider1.toString() + " " +
            provider2.toString());
    }
    return MixingMultiProvidersWithRegularProvidersError;
})(exceptions_1.BaseException);
exports.MixingMultiProvidersWithRegularProvidersError = MixingMultiProvidersWithRegularProvidersError;
},{"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],41:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
/**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
 * DI is declared,
 * but not yet defined. It is also used when the `token` which we use when creating a query is not
 * yet defined.
 *
 * ### Example
 * {@example core/di/ts/forward_ref/forward_ref.ts region='forward_ref'}
 */
function forwardRef(forwardRefFn) {
    forwardRefFn.__forward_ref__ = forwardRef;
    forwardRefFn.toString = function () { return lang_1.stringify(this()); };
    return forwardRefFn;
}
exports.forwardRef = forwardRef;
/**
 * Lazily retrieves the reference value from a forwardRef.
 *
 * Acts as the identity function when given a non-forward-ref value.
 *
 * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
 *
 * ```typescript
 * var ref = forwardRef(() => "refValue");
 * expect(resolveForwardRef(ref)).toEqual("refValue");
 * expect(resolveForwardRef("regularValue")).toEqual("regularValue");
 * ```
 *
 * See: {@link forwardRef}
 */
function resolveForwardRef(type) {
    if (lang_1.isFunction(type) && type.hasOwnProperty('__forward_ref__') &&
        type.__forward_ref__ === forwardRef) {
        return type();
    }
    else {
        return type;
    }
}
exports.resolveForwardRef = resolveForwardRef;
},{"angular2/src/facade/lang":98}],42:[function(require,module,exports){
'use strict';var collection_1 = require('angular2/src/facade/collection');
var provider_1 = require('./provider');
var exceptions_1 = require('./exceptions');
var lang_1 = require('angular2/src/facade/lang');
var key_1 = require('./key');
var metadata_1 = require('./metadata');
// Threshold for the dynamic version
var _MAX_CONSTRUCTION_COUNTER = 10;
exports.UNDEFINED = lang_1.CONST_EXPR(new Object());
/**
 * Visibility of a {@link Provider}.
 */
(function (Visibility) {
    /**
     * A `Public` {@link Provider} is only visible to regular (as opposed to host) child injectors.
     */
    Visibility[Visibility["Public"] = 0] = "Public";
    /**
     * A `Private` {@link Provider} is only visible to host (as opposed to regular) child injectors.
     */
    Visibility[Visibility["Private"] = 1] = "Private";
    /**
     * A `PublicAndPrivate` {@link Provider} is visible to both host and regular child injectors.
     */
    Visibility[Visibility["PublicAndPrivate"] = 2] = "PublicAndPrivate";
})(exports.Visibility || (exports.Visibility = {}));
var Visibility = exports.Visibility;
function canSee(src, dst) {
    return (src === dst) ||
        (dst === Visibility.PublicAndPrivate || src === Visibility.PublicAndPrivate);
}
var ProtoInjectorInlineStrategy = (function () {
    function ProtoInjectorInlineStrategy(protoEI, bwv) {
        this.provider0 = null;
        this.provider1 = null;
        this.provider2 = null;
        this.provider3 = null;
        this.provider4 = null;
        this.provider5 = null;
        this.provider6 = null;
        this.provider7 = null;
        this.provider8 = null;
        this.provider9 = null;
        this.keyId0 = null;
        this.keyId1 = null;
        this.keyId2 = null;
        this.keyId3 = null;
        this.keyId4 = null;
        this.keyId5 = null;
        this.keyId6 = null;
        this.keyId7 = null;
        this.keyId8 = null;
        this.keyId9 = null;
        this.visibility0 = null;
        this.visibility1 = null;
        this.visibility2 = null;
        this.visibility3 = null;
        this.visibility4 = null;
        this.visibility5 = null;
        this.visibility6 = null;
        this.visibility7 = null;
        this.visibility8 = null;
        this.visibility9 = null;
        var length = bwv.length;
        if (length > 0) {
            this.provider0 = bwv[0].provider;
            this.keyId0 = bwv[0].getKeyId();
            this.visibility0 = bwv[0].visibility;
        }
        if (length > 1) {
            this.provider1 = bwv[1].provider;
            this.keyId1 = bwv[1].getKeyId();
            this.visibility1 = bwv[1].visibility;
        }
        if (length > 2) {
            this.provider2 = bwv[2].provider;
            this.keyId2 = bwv[2].getKeyId();
            this.visibility2 = bwv[2].visibility;
        }
        if (length > 3) {
            this.provider3 = bwv[3].provider;
            this.keyId3 = bwv[3].getKeyId();
            this.visibility3 = bwv[3].visibility;
        }
        if (length > 4) {
            this.provider4 = bwv[4].provider;
            this.keyId4 = bwv[4].getKeyId();
            this.visibility4 = bwv[4].visibility;
        }
        if (length > 5) {
            this.provider5 = bwv[5].provider;
            this.keyId5 = bwv[5].getKeyId();
            this.visibility5 = bwv[5].visibility;
        }
        if (length > 6) {
            this.provider6 = bwv[6].provider;
            this.keyId6 = bwv[6].getKeyId();
            this.visibility6 = bwv[6].visibility;
        }
        if (length > 7) {
            this.provider7 = bwv[7].provider;
            this.keyId7 = bwv[7].getKeyId();
            this.visibility7 = bwv[7].visibility;
        }
        if (length > 8) {
            this.provider8 = bwv[8].provider;
            this.keyId8 = bwv[8].getKeyId();
            this.visibility8 = bwv[8].visibility;
        }
        if (length > 9) {
            this.provider9 = bwv[9].provider;
            this.keyId9 = bwv[9].getKeyId();
            this.visibility9 = bwv[9].visibility;
        }
    }
    ProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function (index) {
        if (index == 0)
            return this.provider0;
        if (index == 1)
            return this.provider1;
        if (index == 2)
            return this.provider2;
        if (index == 3)
            return this.provider3;
        if (index == 4)
            return this.provider4;
        if (index == 5)
            return this.provider5;
        if (index == 6)
            return this.provider6;
        if (index == 7)
            return this.provider7;
        if (index == 8)
            return this.provider8;
        if (index == 9)
            return this.provider9;
        throw new exceptions_1.OutOfBoundsError(index);
    };
    ProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function (injector) {
        return new InjectorInlineStrategy(injector, this);
    };
    return ProtoInjectorInlineStrategy;
})();
exports.ProtoInjectorInlineStrategy = ProtoInjectorInlineStrategy;
var ProtoInjectorDynamicStrategy = (function () {
    function ProtoInjectorDynamicStrategy(protoInj, bwv) {
        var len = bwv.length;
        this.providers = collection_1.ListWrapper.createFixedSize(len);
        this.keyIds = collection_1.ListWrapper.createFixedSize(len);
        this.visibilities = collection_1.ListWrapper.createFixedSize(len);
        for (var i = 0; i < len; i++) {
            this.providers[i] = bwv[i].provider;
            this.keyIds[i] = bwv[i].getKeyId();
            this.visibilities[i] = bwv[i].visibility;
        }
    }
    ProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function (index) {
        if (index < 0 || index >= this.providers.length) {
            throw new exceptions_1.OutOfBoundsError(index);
        }
        return this.providers[index];
    };
    ProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function (ei) {
        return new InjectorDynamicStrategy(this, ei);
    };
    return ProtoInjectorDynamicStrategy;
})();
exports.ProtoInjectorDynamicStrategy = ProtoInjectorDynamicStrategy;
var ProtoInjector = (function () {
    function ProtoInjector(bwv) {
        this.numberOfProviders = bwv.length;
        this._strategy = bwv.length > _MAX_CONSTRUCTION_COUNTER ?
            new ProtoInjectorDynamicStrategy(this, bwv) :
            new ProtoInjectorInlineStrategy(this, bwv);
    }
    ProtoInjector.prototype.getProviderAtIndex = function (index) { return this._strategy.getProviderAtIndex(index); };
    return ProtoInjector;
})();
exports.ProtoInjector = ProtoInjector;
var InjectorInlineStrategy = (function () {
    function InjectorInlineStrategy(injector, protoStrategy) {
        this.injector = injector;
        this.protoStrategy = protoStrategy;
        this.obj0 = exports.UNDEFINED;
        this.obj1 = exports.UNDEFINED;
        this.obj2 = exports.UNDEFINED;
        this.obj3 = exports.UNDEFINED;
        this.obj4 = exports.UNDEFINED;
        this.obj5 = exports.UNDEFINED;
        this.obj6 = exports.UNDEFINED;
        this.obj7 = exports.UNDEFINED;
        this.obj8 = exports.UNDEFINED;
        this.obj9 = exports.UNDEFINED;
    }
    InjectorInlineStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
    InjectorInlineStrategy.prototype.instantiateProvider = function (provider, visibility) {
        return this.injector._new(provider, visibility);
    };
    InjectorInlineStrategy.prototype.attach = function (parent, isHost) {
        var inj = this.injector;
        inj._parent = parent;
        inj._isHost = isHost;
    };
    InjectorInlineStrategy.prototype.getObjByKeyId = function (keyId, visibility) {
        var p = this.protoStrategy;
        var inj = this.injector;
        if (p.keyId0 === keyId && canSee(p.visibility0, visibility)) {
            if (this.obj0 === exports.UNDEFINED) {
                this.obj0 = inj._new(p.provider0, p.visibility0);
            }
            return this.obj0;
        }
        if (p.keyId1 === keyId && canSee(p.visibility1, visibility)) {
            if (this.obj1 === exports.UNDEFINED) {
                this.obj1 = inj._new(p.provider1, p.visibility1);
            }
            return this.obj1;
        }
        if (p.keyId2 === keyId && canSee(p.visibility2, visibility)) {
            if (this.obj2 === exports.UNDEFINED) {
                this.obj2 = inj._new(p.provider2, p.visibility2);
            }
            return this.obj2;
        }
        if (p.keyId3 === keyId && canSee(p.visibility3, visibility)) {
            if (this.obj3 === exports.UNDEFINED) {
                this.obj3 = inj._new(p.provider3, p.visibility3);
            }
            return this.obj3;
        }
        if (p.keyId4 === keyId && canSee(p.visibility4, visibility)) {
            if (this.obj4 === exports.UNDEFINED) {
                this.obj4 = inj._new(p.provider4, p.visibility4);
            }
            return this.obj4;
        }
        if (p.keyId5 === keyId && canSee(p.visibility5, visibility)) {
            if (this.obj5 === exports.UNDEFINED) {
                this.obj5 = inj._new(p.provider5, p.visibility5);
            }
            return this.obj5;
        }
        if (p.keyId6 === keyId && canSee(p.visibility6, visibility)) {
            if (this.obj6 === exports.UNDEFINED) {
                this.obj6 = inj._new(p.provider6, p.visibility6);
            }
            return this.obj6;
        }
        if (p.keyId7 === keyId && canSee(p.visibility7, visibility)) {
            if (this.obj7 === exports.UNDEFINED) {
                this.obj7 = inj._new(p.provider7, p.visibility7);
            }
            return this.obj7;
        }
        if (p.keyId8 === keyId && canSee(p.visibility8, visibility)) {
            if (this.obj8 === exports.UNDEFINED) {
                this.obj8 = inj._new(p.provider8, p.visibility8);
            }
            return this.obj8;
        }
        if (p.keyId9 === keyId && canSee(p.visibility9, visibility)) {
            if (this.obj9 === exports.UNDEFINED) {
                this.obj9 = inj._new(p.provider9, p.visibility9);
            }
            return this.obj9;
        }
        return exports.UNDEFINED;
    };
    InjectorInlineStrategy.prototype.getObjAtIndex = function (index) {
        if (index == 0)
            return this.obj0;
        if (index == 1)
            return this.obj1;
        if (index == 2)
            return this.obj2;
        if (index == 3)
            return this.obj3;
        if (index == 4)
            return this.obj4;
        if (index == 5)
            return this.obj5;
        if (index == 6)
            return this.obj6;
        if (index == 7)
            return this.obj7;
        if (index == 8)
            return this.obj8;
        if (index == 9)
            return this.obj9;
        throw new exceptions_1.OutOfBoundsError(index);
    };
    InjectorInlineStrategy.prototype.getMaxNumberOfObjects = function () { return _MAX_CONSTRUCTION_COUNTER; };
    return InjectorInlineStrategy;
})();
exports.InjectorInlineStrategy = InjectorInlineStrategy;
var InjectorDynamicStrategy = (function () {
    function InjectorDynamicStrategy(protoStrategy, injector) {
        this.protoStrategy = protoStrategy;
        this.injector = injector;
        this.objs = collection_1.ListWrapper.createFixedSize(protoStrategy.providers.length);
        collection_1.ListWrapper.fill(this.objs, exports.UNDEFINED);
    }
    InjectorDynamicStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
    InjectorDynamicStrategy.prototype.instantiateProvider = function (provider, visibility) {
        return this.injector._new(provider, visibility);
    };
    InjectorDynamicStrategy.prototype.attach = function (parent, isHost) {
        var inj = this.injector;
        inj._parent = parent;
        inj._isHost = isHost;
    };
    InjectorDynamicStrategy.prototype.getObjByKeyId = function (keyId, visibility) {
        var p = this.protoStrategy;
        for (var i = 0; i < p.keyIds.length; i++) {
            if (p.keyIds[i] === keyId && canSee(p.visibilities[i], visibility)) {
                if (this.objs[i] === exports.UNDEFINED) {
                    this.objs[i] = this.injector._new(p.providers[i], p.visibilities[i]);
                }
                return this.objs[i];
            }
        }
        return exports.UNDEFINED;
    };
    InjectorDynamicStrategy.prototype.getObjAtIndex = function (index) {
        if (index < 0 || index >= this.objs.length) {
            throw new exceptions_1.OutOfBoundsError(index);
        }
        return this.objs[index];
    };
    InjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function () { return this.objs.length; };
    return InjectorDynamicStrategy;
})();
exports.InjectorDynamicStrategy = InjectorDynamicStrategy;
var ProviderWithVisibility = (function () {
    function ProviderWithVisibility(provider, visibility) {
        this.provider = provider;
        this.visibility = visibility;
    }
    ;
    ProviderWithVisibility.prototype.getKeyId = function () { return this.provider.key.id; };
    return ProviderWithVisibility;
})();
exports.ProviderWithVisibility = ProviderWithVisibility;
/**
 * A dependency injection container used for instantiating objects and resolving dependencies.
 *
 * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
 * constructor dependencies.
 *
 * In typical use, application code asks for the dependencies in the constructor and they are
 * resolved by the `Injector`.
 *
 * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
 *
 * The following example creates an `Injector` configured to create `Engine` and `Car`.
 *
 * ```typescript
 * @Injectable()
 * class Engine {
 * }
 *
 * @Injectable()
 * class Car {
 *   constructor(public engine:Engine) {}
 * }
 *
 * var injector = Injector.resolveAndCreate([Car, Engine]);
 * var car = injector.get(Car);
 * expect(car instanceof Car).toBe(true);
 * expect(car.engine instanceof Engine).toBe(true);
 * ```
 *
 * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
 * resolve all of the object's dependencies automatically.
 */
var Injector = (function () {
    /**
     * Private
     */
    function Injector(_proto /* ProtoInjector */, _parent, _depProvider, _debugContext) {
        if (_parent === void 0) { _parent = null; }
        if (_depProvider === void 0) { _depProvider = null; }
        if (_debugContext === void 0) { _debugContext = null; }
        this._depProvider = _depProvider;
        this._debugContext = _debugContext;
        /** @internal */
        this._isHost = false;
        /** @internal */
        this._constructionCounter = 0;
        this._proto = _proto;
        this._parent = _parent;
        this._strategy = _proto._strategy.createInjectorStrategy(this);
    }
    /**
     * Turns an array of provider definitions into an array of resolved providers.
     *
     * A resolution is a process of flattening multiple nested arrays and converting individual
     * providers into an array of {@link ResolvedProvider}s.
     *
     * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var providers = Injector.resolve([Car, [[Engine]]]);
     *
     * expect(providers.length).toEqual(2);
     *
     * expect(providers[0] instanceof ResolvedProvider).toBe(true);
     * expect(providers[0].key.displayName).toBe("Car");
     * expect(providers[0].dependencies.length).toEqual(1);
     * expect(providers[0].factory).toBeDefined();
     *
     * expect(providers[1].key.displayName).toBe("Engine");
     * });
     * ```
     *
     * See {@link Injector#fromResolvedProviders} for more info.
     */
    Injector.resolve = function (providers) {
        return provider_1.resolveProviders(providers);
    };
    /**
     * Resolves an array of providers and creates an injector from those providers.
     *
     * The passed-in providers can be an array of `Type`, {@link Provider},
     * or a recursive array of more providers.
     *
     * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = Injector.resolveAndCreate([Car, Engine]);
     * expect(injector.get(Car) instanceof Car).toBe(true);
     * ```
     *
     * This function is slower than the corresponding `fromResolvedProviders`
     * because it needs to resolve the passed-in providers first.
     * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
     */
    Injector.resolveAndCreate = function (providers) {
        var resolvedProviders = Injector.resolve(providers);
        return Injector.fromResolvedProviders(resolvedProviders);
    };
    /**
     * Creates an injector from previously resolved providers.
     *
     * This API is the recommended way to construct injectors in performance-sensitive parts.
     *
     * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var providers = Injector.resolve([Car, Engine]);
     * var injector = Injector.fromResolvedProviders(providers);
     * expect(injector.get(Car) instanceof Car).toBe(true);
     * ```
     */
    Injector.fromResolvedProviders = function (providers) {
        var bd = providers.map(function (b) { return new ProviderWithVisibility(b, Visibility.Public); });
        var proto = new ProtoInjector(bd);
        return new Injector(proto, null, null);
    };
    /**
     * @deprecated
     */
    Injector.fromResolvedBindings = function (providers) {
        return Injector.fromResolvedProviders(providers);
    };
    /**
     * @internal
     */
    Injector.prototype.debugContext = function () { return this._debugContext(); };
    /**
     * Retrieves an instance from the injector based on the provided token.
     * Throws {@link NoProviderError} if not found.
     *
     * ### Example ([live demo](http://plnkr.co/edit/HeXSHg?p=preview))
     *
     * ```typescript
     * var injector = Injector.resolveAndCreate([
     *   provide("validToken", {useValue: "Value"})
     * ]);
     * expect(injector.get("validToken")).toEqual("Value");
     * expect(() => injector.get("invalidToken")).toThrowError();
     * ```
     *
     * `Injector` returns itself when given `Injector` as a token.
     *
     * ```typescript
     * var injector = Injector.resolveAndCreate([]);
     * expect(injector.get(Injector)).toBe(injector);
     * ```
     */
    Injector.prototype.get = function (token) {
        return this._getByKey(key_1.Key.get(token), null, null, false, Visibility.PublicAndPrivate);
    };
    /**
     * Retrieves an instance from the injector based on the provided token.
     * Returns null if not found.
     *
     * ### Example ([live demo](http://plnkr.co/edit/tpEbEy?p=preview))
     *
     * ```typescript
     * var injector = Injector.resolveAndCreate([
     *   provide("validToken", {useValue: "Value"})
     * ]);
     * expect(injector.getOptional("validToken")).toEqual("Value");
     * expect(injector.getOptional("invalidToken")).toBe(null);
     * ```
     *
     * `Injector` returns itself when given `Injector` as a token.
     *
     * ```typescript
     * var injector = Injector.resolveAndCreate([]);
     * expect(injector.getOptional(Injector)).toBe(injector);
     * ```
     */
    Injector.prototype.getOptional = function (token) {
        return this._getByKey(key_1.Key.get(token), null, null, true, Visibility.PublicAndPrivate);
    };
    /**
     * @internal
     */
    Injector.prototype.getAt = function (index) { return this._strategy.getObjAtIndex(index); };
    Object.defineProperty(Injector.prototype, "parent", {
        /**
         * Parent of this injector.
         *
         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
         * -->
         *
         * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
         *
         * ```typescript
         * var parent = Injector.resolveAndCreate([]);
         * var child = parent.resolveAndCreateChild([]);
         * expect(child.parent).toBe(parent);
         * ```
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Injector.prototype, "internalStrategy", {
        /**
         * @internal
         * Internal. Do not use.
         * We return `any` not to export the InjectorStrategy type.
         */
        get: function () { return this._strategy; },
        enumerable: true,
        configurable: true
    });
    /**
     * Resolves an array of providers and creates a child injector from those providers.
     *
     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
     * -->
     *
     * The passed-in providers can be an array of `Type`, {@link Provider},
     * or a recursive array of more providers.
     *
     * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
     *
     * ```typescript
     * class ParentProvider {}
     * class ChildProvider {}
     *
     * var parent = Injector.resolveAndCreate([ParentProvider]);
     * var child = parent.resolveAndCreateChild([ChildProvider]);
     *
     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
     * ```
     *
     * This function is slower than the corresponding `createChildFromResolved`
     * because it needs to resolve the passed-in providers first.
     * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
     */
    Injector.prototype.resolveAndCreateChild = function (providers) {
        var resolvedProviders = Injector.resolve(providers);
        return this.createChildFromResolved(resolvedProviders);
    };
    /**
     * Creates a child injector from previously resolved providers.
     *
     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
     * -->
     *
     * This API is the recommended way to construct injectors in performance-sensitive parts.
     *
     * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
     *
     * ```typescript
     * class ParentProvider {}
     * class ChildProvider {}
     *
     * var parentProviders = Injector.resolve([ParentProvider]);
     * var childProviders = Injector.resolve([ChildProvider]);
     *
     * var parent = Injector.fromResolvedProviders(parentProviders);
     * var child = parent.createChildFromResolved(childProviders);
     *
     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
     * ```
     */
    Injector.prototype.createChildFromResolved = function (providers) {
        var bd = providers.map(function (b) { return new ProviderWithVisibility(b, Visibility.Public); });
        var proto = new ProtoInjector(bd);
        var inj = new Injector(proto, null, null);
        inj._parent = this;
        return inj;
    };
    /**
     * Resolves a provider and instantiates an object in the context of the injector.
     *
     * The created object does not get cached by the injector.
     *
     * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = Injector.resolveAndCreate([Engine]);
     *
     * var car = injector.resolveAndInstantiate(Car);
     * expect(car.engine).toBe(injector.get(Engine));
     * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
     * ```
     */
    Injector.prototype.resolveAndInstantiate = function (provider) {
        return this.instantiateResolved(Injector.resolve([provider])[0]);
    };
    /**
     * Instantiates an object using a resolved provider in the context of the injector.
     *
     * The created object does not get cached by the injector.
     *
     * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = Injector.resolveAndCreate([Engine]);
     * var carProvider = Injector.resolve([Car])[0];
     * var car = injector.instantiateResolved(carProvider);
     * expect(car.engine).toBe(injector.get(Engine));
     * expect(car).not.toBe(injector.instantiateResolved(carProvider));
     * ```
     */
    Injector.prototype.instantiateResolved = function (provider) {
        return this._instantiateProvider(provider, Visibility.PublicAndPrivate);
    };
    /** @internal */
    Injector.prototype._new = function (provider, visibility) {
        if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
            throw new exceptions_1.CyclicDependencyError(this, provider.key);
        }
        return this._instantiateProvider(provider, visibility);
    };
    Injector.prototype._instantiateProvider = function (provider, visibility) {
        if (provider.multiProvider) {
            var res = collection_1.ListWrapper.createFixedSize(provider.resolvedFactories.length);
            for (var i = 0; i < provider.resolvedFactories.length; ++i) {
                res[i] = this._instantiate(provider, provider.resolvedFactories[i], visibility);
            }
            return res;
        }
        else {
            return this._instantiate(provider, provider.resolvedFactories[0], visibility);
        }
    };
    Injector.prototype._instantiate = function (provider, resolvedFactory, visibility) {
        var factory = resolvedFactory.factory;
        var deps = resolvedFactory.dependencies;
        var length = deps.length;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19;
        try {
            d0 = length > 0 ? this._getByDependency(provider, deps[0], visibility) : null;
            d1 = length > 1 ? this._getByDependency(provider, deps[1], visibility) : null;
            d2 = length > 2 ? this._getByDependency(provider, deps[2], visibility) : null;
            d3 = length > 3 ? this._getByDependency(provider, deps[3], visibility) : null;
            d4 = length > 4 ? this._getByDependency(provider, deps[4], visibility) : null;
            d5 = length > 5 ? this._getByDependency(provider, deps[5], visibility) : null;
            d6 = length > 6 ? this._getByDependency(provider, deps[6], visibility) : null;
            d7 = length > 7 ? this._getByDependency(provider, deps[7], visibility) : null;
            d8 = length > 8 ? this._getByDependency(provider, deps[8], visibility) : null;
            d9 = length > 9 ? this._getByDependency(provider, deps[9], visibility) : null;
            d10 = length > 10 ? this._getByDependency(provider, deps[10], visibility) : null;
            d11 = length > 11 ? this._getByDependency(provider, deps[11], visibility) : null;
            d12 = length > 12 ? this._getByDependency(provider, deps[12], visibility) : null;
            d13 = length > 13 ? this._getByDependency(provider, deps[13], visibility) : null;
            d14 = length > 14 ? this._getByDependency(provider, deps[14], visibility) : null;
            d15 = length > 15 ? this._getByDependency(provider, deps[15], visibility) : null;
            d16 = length > 16 ? this._getByDependency(provider, deps[16], visibility) : null;
            d17 = length > 17 ? this._getByDependency(provider, deps[17], visibility) : null;
            d18 = length > 18 ? this._getByDependency(provider, deps[18], visibility) : null;
            d19 = length > 19 ? this._getByDependency(provider, deps[19], visibility) : null;
        }
        catch (e) {
            if (e instanceof exceptions_1.AbstractProviderError || e instanceof exceptions_1.InstantiationError) {
                e.addKey(this, provider.key);
            }
            throw e;
        }
        var obj;
        try {
            switch (length) {
                case 0:
                    obj = factory();
                    break;
                case 1:
                    obj = factory(d0);
                    break;
                case 2:
                    obj = factory(d0, d1);
                    break;
                case 3:
                    obj = factory(d0, d1, d2);
                    break;
                case 4:
                    obj = factory(d0, d1, d2, d3);
                    break;
                case 5:
                    obj = factory(d0, d1, d2, d3, d4);
                    break;
                case 6:
                    obj = factory(d0, d1, d2, d3, d4, d5);
                    break;
                case 7:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6);
                    break;
                case 8:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
                    break;
                case 9:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
                    break;
                case 10:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
                    break;
                case 11:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
                    break;
                case 12:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
                    break;
                case 13:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
                    break;
                case 14:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
                    break;
                case 15:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
                    break;
                case 16:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
                    break;
                case 17:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
                    break;
                case 18:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
                    break;
                case 19:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
                    break;
                case 20:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
                    break;
            }
        }
        catch (e) {
            throw new exceptions_1.InstantiationError(this, e, e.stack, provider.key);
        }
        return obj;
    };
    Injector.prototype._getByDependency = function (provider, dep, providerVisibility) {
        var special = lang_1.isPresent(this._depProvider) ?
            this._depProvider.getDependency(this, provider, dep) :
            exports.UNDEFINED;
        if (special !== exports.UNDEFINED) {
            return special;
        }
        else {
            return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional, providerVisibility);
        }
    };
    Injector.prototype._getByKey = function (key, lowerBoundVisibility, upperBoundVisibility, optional, providerVisibility) {
        if (key === INJECTOR_KEY) {
            return this;
        }
        if (upperBoundVisibility instanceof metadata_1.SelfMetadata) {
            return this._getByKeySelf(key, optional, providerVisibility);
        }
        else if (upperBoundVisibility instanceof metadata_1.HostMetadata) {
            return this._getByKeyHost(key, optional, providerVisibility, lowerBoundVisibility);
        }
        else {
            return this._getByKeyDefault(key, optional, providerVisibility, lowerBoundVisibility);
        }
    };
    /** @internal */
    Injector.prototype._throwOrNull = function (key, optional) {
        if (optional) {
            return null;
        }
        else {
            throw new exceptions_1.NoProviderError(this, key);
        }
    };
    /** @internal */
    Injector.prototype._getByKeySelf = function (key, optional, providerVisibility) {
        var obj = this._strategy.getObjByKeyId(key.id, providerVisibility);
        return (obj !== exports.UNDEFINED) ? obj : this._throwOrNull(key, optional);
    };
    /** @internal */
    Injector.prototype._getByKeyHost = function (key, optional, providerVisibility, lowerBoundVisibility) {
        var inj = this;
        if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
            if (inj._isHost) {
                return this._getPrivateDependency(key, optional, inj);
            }
            else {
                inj = inj._parent;
            }
        }
        while (inj != null) {
            var obj = inj._strategy.getObjByKeyId(key.id, providerVisibility);
            if (obj !== exports.UNDEFINED)
                return obj;
            if (lang_1.isPresent(inj._parent) && inj._isHost) {
                return this._getPrivateDependency(key, optional, inj);
            }
            else {
                inj = inj._parent;
            }
        }
        return this._throwOrNull(key, optional);
    };
    /** @internal */
    Injector.prototype._getPrivateDependency = function (key, optional, inj) {
        var obj = inj._parent._strategy.getObjByKeyId(key.id, Visibility.Private);
        return (obj !== exports.UNDEFINED) ? obj : this._throwOrNull(key, optional);
    };
    /** @internal */
    Injector.prototype._getByKeyDefault = function (key, optional, providerVisibility, lowerBoundVisibility) {
        var inj = this;
        if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
            providerVisibility = inj._isHost ? Visibility.PublicAndPrivate : Visibility.Public;
            inj = inj._parent;
        }
        while (inj != null) {
            var obj = inj._strategy.getObjByKeyId(key.id, providerVisibility);
            if (obj !== exports.UNDEFINED)
                return obj;
            providerVisibility = inj._isHost ? Visibility.PublicAndPrivate : Visibility.Public;
            inj = inj._parent;
        }
        return this._throwOrNull(key, optional);
    };
    Object.defineProperty(Injector.prototype, "displayName", {
        get: function () {
            return "Injector(providers: [" + _mapProviders(this, function (b) { return (" \"" + b.key.displayName + "\" "); }).join(", ") + "])";
        },
        enumerable: true,
        configurable: true
    });
    Injector.prototype.toString = function () { return this.displayName; };
    return Injector;
})();
exports.Injector = Injector;
var INJECTOR_KEY = key_1.Key.get(Injector);
function _mapProviders(injector, fn) {
    var res = [];
    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
        res.push(fn(injector._proto.getProviderAtIndex(i)));
    }
    return res;
}
},{"./exceptions":40,"./key":43,"./metadata":44,"./provider":46,"angular2/src/facade/collection":94,"angular2/src/facade/lang":98}],43:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var type_literal_1 = require('./type_literal');
var forward_ref_1 = require('./forward_ref');
var type_literal_2 = require('./type_literal');
exports.TypeLiteral = type_literal_2.TypeLiteral;
/**
 * A unique object used for retrieving items from the {@link Injector}.
 *
 * Keys have:
 * - a system-wide unique `id`.
 * - a `token`.
 *
 * `Key` is used internally by {@link Injector} because its system-wide unique `id` allows the
 * injector to store created objects in a more efficient way.
 *
 * `Key` should not be created directly. {@link Injector} creates keys automatically when resolving
 * providers.
 */
var Key = (function () {
    /**
     * Private
     */
    function Key(token, id) {
        this.token = token;
        this.id = id;
        if (lang_1.isBlank(token)) {
            throw new exceptions_1.BaseException('Token must be defined!');
        }
    }
    Object.defineProperty(Key.prototype, "displayName", {
        /**
         * Returns a stringified token.
         */
        get: function () { return lang_1.stringify(this.token); },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves a `Key` for a token.
     */
    Key.get = function (token) { return _globalKeyRegistry.get(forward_ref_1.resolveForwardRef(token)); };
    Object.defineProperty(Key, "numberOfKeys", {
        /**
         * @returns the number of keys registered in the system.
         */
        get: function () { return _globalKeyRegistry.numberOfKeys; },
        enumerable: true,
        configurable: true
    });
    return Key;
})();
exports.Key = Key;
/**
 * @internal
 */
var KeyRegistry = (function () {
    function KeyRegistry() {
        this._allKeys = new Map();
    }
    KeyRegistry.prototype.get = function (token) {
        if (token instanceof Key)
            return token;
        // TODO: workaround for https://github.com/Microsoft/TypeScript/issues/3123
        var theToken = token;
        if (token instanceof type_literal_1.TypeLiteral) {
            theToken = token.type;
        }
        token = theToken;
        if (this._allKeys.has(token)) {
            return this._allKeys.get(token);
        }
        var newKey = new Key(token, Key.numberOfKeys);
        this._allKeys.set(token, newKey);
        return newKey;
    };
    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
        get: function () { return this._allKeys.size; },
        enumerable: true,
        configurable: true
    });
    return KeyRegistry;
})();
exports.KeyRegistry = KeyRegistry;
var _globalKeyRegistry = new KeyRegistry();
},{"./forward_ref":41,"./type_literal":47,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],44:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require("angular2/src/facade/lang");
/**
 * A parameter metadata that specifies a dependency.
 *
 * ### Example ([live demo](http://plnkr.co/edit/6uHYJK?p=preview))
 *
 * ```typescript
 * class Engine {}
 *
 * @Injectable()
 * class Car {
 *   engine;
 *   constructor(@Inject("MyEngine") engine:Engine) {
 *     this.engine = engine;
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([
 *  provide("MyEngine", {useClass: Engine}),
 *  Car
 * ]);
 *
 * expect(injector.get(Car).engine instanceof Engine).toBe(true);
 * ```
 *
 * When `@Inject()` is not present, {@link Injector} will use the type annotation of the parameter.
 *
 * ### Example
 *
 * ```typescript
 * class Engine {}
 *
 * @Injectable()
 * class Car {
 *   constructor(public engine: Engine) {} //same as constructor(@Inject(Engine) engine:Engine)
 * }
 *
 * var injector = Injector.resolveAndCreate([Engine, Car]);
 * expect(injector.get(Car).engine instanceof Engine).toBe(true);
 * ```
 */
var InjectMetadata = (function () {
    function InjectMetadata(token) {
        this.token = token;
    }
    InjectMetadata.prototype.toString = function () { return "@Inject(" + lang_1.stringify(this.token) + ")"; };
    InjectMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object])
    ], InjectMetadata);
    return InjectMetadata;
})();
exports.InjectMetadata = InjectMetadata;
/**
 * A parameter metadata that marks a dependency as optional. {@link Injector} provides `null` if
 * the dependency is not found.
 *
 * ### Example ([live demo](http://plnkr.co/edit/AsryOm?p=preview))
 *
 * ```typescript
 * class Engine {}
 *
 * @Injectable()
 * class Car {
 *   engine;
 *   constructor(@Optional() engine:Engine) {
 *     this.engine = engine;
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([Car]);
 * expect(injector.get(Car).engine).toBeNull();
 * ```
 */
var OptionalMetadata = (function () {
    function OptionalMetadata() {
    }
    OptionalMetadata.prototype.toString = function () { return "@Optional()"; };
    OptionalMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], OptionalMetadata);
    return OptionalMetadata;
})();
exports.OptionalMetadata = OptionalMetadata;
/**
 * `DependencyMetadata` is used by the framework to extend DI.
 * This is internal to Angular and should not be used directly.
 */
var DependencyMetadata = (function () {
    function DependencyMetadata() {
    }
    Object.defineProperty(DependencyMetadata.prototype, "token", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    DependencyMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], DependencyMetadata);
    return DependencyMetadata;
})();
exports.DependencyMetadata = DependencyMetadata;
/**
 * A marker metadata that marks a class as available to {@link Injector} for creation.
 *
 * ### Example ([live demo](http://plnkr.co/edit/Wk4DMQ?p=preview))
 *
 * ```typescript
 * @Injectable()
 * class UsefulService {}
 *
 * @Injectable()
 * class NeedsService {
 *   constructor(public service:UsefulService) {}
 * }
 *
 * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
 * expect(injector.get(NeedsService).service instanceof UsefulService).toBe(true);
 * ```
 * {@link Injector} will throw {@link NoAnnotationError} when trying to instantiate a class that
 * does not have `@Injectable` marker, as shown in the example below.
 *
 * ```typescript
 * class UsefulService {}
 *
 * class NeedsService {
 *   constructor(public service:UsefulService) {}
 * }
 *
 * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
 * expect(() => injector.get(NeedsService)).toThrowError();
 * ```
 */
var InjectableMetadata = (function () {
    function InjectableMetadata() {
    }
    InjectableMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], InjectableMetadata);
    return InjectableMetadata;
})();
exports.InjectableMetadata = InjectableMetadata;
/**
 * Specifies that an {@link Injector} should retrieve a dependency only from itself.
 *
 * ### Example ([live demo](http://plnkr.co/edit/NeagAg?p=preview))
 *
 * ```typescript
 * class Dependency {
 * }
 *
 * @Injectable()
 * class NeedsDependency {
 *   dependency;
 *   constructor(@Self() dependency:Dependency) {
 *     this.dependency = dependency;
 *   }
 * }
 *
 * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
 * var nd = inj.get(NeedsDependency);
 *
 * expect(nd.dependency instanceof Dependency).toBe(true);
 *
 * var inj = Injector.resolveAndCreate([Dependency]);
 * var child = inj.resolveAndCreateChild([NeedsDependency]);
 * expect(() => child.get(NeedsDependency)).toThrowError();
 * ```
 */
var SelfMetadata = (function () {
    function SelfMetadata() {
    }
    SelfMetadata.prototype.toString = function () { return "@Self()"; };
    SelfMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], SelfMetadata);
    return SelfMetadata;
})();
exports.SelfMetadata = SelfMetadata;
/**
 * Specifies that the dependency resolution should start from the parent injector.
 *
 * ### Example ([live demo](http://plnkr.co/edit/Wchdzb?p=preview))
 *
 * ```typescript
 * class Dependency {
 * }
 *
 * @Injectable()
 * class NeedsDependency {
 *   dependency;
 *   constructor(@SkipSelf() dependency:Dependency) {
 *     this.dependency = dependency;
 *   }
 * }
 *
 * var parent = Injector.resolveAndCreate([Dependency]);
 * var child = parent.resolveAndCreateChild([NeedsDependency]);
 * expect(child.get(NeedsDependency).dependency instanceof Depedency).toBe(true);
 *
 * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
 * expect(() => inj.get(NeedsDependency)).toThrowError();
 * ```
 */
var SkipSelfMetadata = (function () {
    function SkipSelfMetadata() {
    }
    SkipSelfMetadata.prototype.toString = function () { return "@SkipSelf()"; };
    SkipSelfMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], SkipSelfMetadata);
    return SkipSelfMetadata;
})();
exports.SkipSelfMetadata = SkipSelfMetadata;
/**
 * Specifies that an injector should retrieve a dependency from any injector until reaching the
 * closest host.
 *
 * In Angular, a component element is automatically declared as a host for all the injectors in
 * its view.
 *
 * ### Example ([live demo](http://plnkr.co/edit/GX79pV?p=preview))
 *
 * In the following example `App` contains `ParentCmp`, which contains `ChildDirective`.
 * So `ParentCmp` is the host of `ChildDirective`.
 *
 * `ChildDirective` depends on two services: `HostService` and `OtherService`.
 * `HostService` is defined at `ParentCmp`, and `OtherService` is defined at `App`.
 *
 *```typescript
 * class OtherService {}
 * class HostService {}
 *
 * @Directive({
 *   selector: 'child-directive'
 * })
 * class ChildDirective {
 *   constructor(@Optional() @Host() os:OtherService, @Optional() @Host() hs:HostService){
 *     console.log("os is null", os);
 *     console.log("hs is NOT null", hs);
 *   }
 * }
 *
 * @Component({
 *   selector: 'parent-cmp',
 *   providers: [HostService],
 *   template: `
 *     Dir: <child-directive></child-directive>
 *   `,
 *   directives: [ChildDirective]
 * })
 * class ParentCmp {
 * }
 *
 * @Component({
 *   selector: 'app',
 *   providers: [OtherService],
 *   template: `
 *     Parent: <parent-cmp></parent-cmp>
 *   `,
 *   directives: [ParentCmp]
 * })
 * class App {
 * }
 *
 * bootstrap(App);
 *```
 */
var HostMetadata = (function () {
    function HostMetadata() {
    }
    HostMetadata.prototype.toString = function () { return "@Host()"; };
    HostMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], HostMetadata);
    return HostMetadata;
})();
exports.HostMetadata = HostMetadata;
},{"angular2/src/facade/lang":98}],45:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
/**
 * Creates a token that can be used in a DI Provider.
 *
 * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
 *
 * ```typescript
 * var t = new OpaqueToken("value");
 *
 * var injector = Injector.resolveAndCreate([
 *   provide(t, {useValue: "providedValue"})
 * ]);
 *
 * expect(injector.get(t)).toEqual("bindingValue");
 * ```
 *
 * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
 * caused by multiple providers using the same string as two different tokens.
 *
 * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
 * error messages.
 */
var OpaqueToken = (function () {
    function OpaqueToken(_desc) {
        this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
    OpaqueToken = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String])
    ], OpaqueToken);
    return OpaqueToken;
})();
exports.OpaqueToken = OpaqueToken;
},{"angular2/src/facade/lang":98}],46:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var reflection_1 = require('angular2/src/core/reflection/reflection');
var key_1 = require('./key');
var metadata_1 = require('./metadata');
var exceptions_2 = require('./exceptions');
var forward_ref_1 = require('./forward_ref');
/**
 * `Dependency` is used by the framework to extend DI.
 * This is internal to Angular and should not be used directly.
 */
var Dependency = (function () {
    function Dependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
        this.key = key;
        this.optional = optional;
        this.lowerBoundVisibility = lowerBoundVisibility;
        this.upperBoundVisibility = upperBoundVisibility;
        this.properties = properties;
    }
    Dependency.fromKey = function (key) { return new Dependency(key, false, null, null, []); };
    return Dependency;
})();
exports.Dependency = Dependency;
var _EMPTY_LIST = lang_1.CONST_EXPR([]);
/**
 * Describes how the {@link Injector} should instantiate a given token.
 *
 * See {@link provide}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/GNAyj6K6PfYg2NBzgwZ5?p%3Dpreview&p=preview))
 *
 * ```javascript
 * var injector = Injector.resolveAndCreate([
 *   new Provider("message", { useValue: 'Hello' })
 * ]);
 *
 * expect(injector.get("message")).toEqual('Hello');
 * ```
 */
var Provider = (function () {
    function Provider(token, _a) {
        var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
        this.token = token;
        this.useClass = useClass;
        this.useValue = useValue;
        this.useExisting = useExisting;
        this.useFactory = useFactory;
        this.dependencies = deps;
        this._multi = multi;
    }
    Object.defineProperty(Provider.prototype, "multi", {
        // TODO: Provide a full working example after alpha38 is released.
        /**
         * Creates multiple providers matching the same token (a multi-provider).
         *
         * Multi-providers are used for creating pluggable service, where the system comes
         * with some default providers, and the user can register additonal providers.
         * The combination of the default providers and the additional providers will be
         * used to drive the behavior of the system.
         *
         * ### Example
         *
         * ```typescript
         * var injector = Injector.resolveAndCreate([
         *   new Provider("Strings", { useValue: "String1", multi: true}),
         *   new Provider("Strings", { useValue: "String2", multi: true})
         * ]);
         *
         * expect(injector.get("Strings")).toEqual(["String1", "String2"]);
         * ```
         *
         * Multi-providers and regular providers cannot be mixed. The following
         * will throw an exception:
         *
         * ```typescript
         * var injector = Injector.resolveAndCreate([
         *   new Provider("Strings", { useValue: "String1", multi: true }),
         *   new Provider("Strings", { useValue: "String2"})
         * ]);
         * ```
         */
        get: function () { return lang_1.normalizeBool(this._multi); },
        enumerable: true,
        configurable: true
    });
    Provider = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object, Object])
    ], Provider);
    return Provider;
})();
exports.Provider = Provider;
/**
 * See {@link Provider} instead.
 *
 * @deprecated
 */
var Binding = (function (_super) {
    __extends(Binding, _super);
    function Binding(token, _a) {
        var toClass = _a.toClass, toValue = _a.toValue, toAlias = _a.toAlias, toFactory = _a.toFactory, deps = _a.deps, multi = _a.multi;
        _super.call(this, token, {
            useClass: toClass,
            useValue: toValue,
            useExisting: toAlias,
            useFactory: toFactory,
            deps: deps,
            multi: multi
        });
    }
    Object.defineProperty(Binding.prototype, "toClass", {
        /**
         * @deprecated
         */
        get: function () { return this.useClass; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "toAlias", {
        /**
         * @deprecated
         */
        get: function () { return this.useExisting; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "toFactory", {
        /**
         * @deprecated
         */
        get: function () { return this.useFactory; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "toValue", {
        /**
         * @deprecated
         */
        get: function () { return this.useValue; },
        enumerable: true,
        configurable: true
    });
    Binding = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object, Object])
    ], Binding);
    return Binding;
})(Provider);
exports.Binding = Binding;
var ResolvedProvider_ = (function () {
    function ResolvedProvider_(key, resolvedFactories, multiProvider) {
        this.key = key;
        this.resolvedFactories = resolvedFactories;
        this.multiProvider = multiProvider;
    }
    Object.defineProperty(ResolvedProvider_.prototype, "resolvedFactory", {
        get: function () { return this.resolvedFactories[0]; },
        enumerable: true,
        configurable: true
    });
    return ResolvedProvider_;
})();
exports.ResolvedProvider_ = ResolvedProvider_;
/**
 * An internal resolved representation of a factory function created by resolving {@link Provider}.
 */
var ResolvedFactory = (function () {
    function ResolvedFactory(
        /**
         * Factory function which can return an instance of an object represented by a key.
         */
        factory, 
        /**
         * Arguments (dependencies) to the `factory` function.
         */
        dependencies) {
        this.factory = factory;
        this.dependencies = dependencies;
    }
    return ResolvedFactory;
})();
exports.ResolvedFactory = ResolvedFactory;
/**
 * Creates a {@link Provider}.
 *
 * To construct a {@link Provider}, bind a `token` to either a class, a value, a factory function,
 * or
 * to an existing `token`.
 * See {@link ProviderBuilder} for more details.
 *
 * The `token` is most commonly a class or {@link angular2/di/OpaqueToken}.
 *
 * @deprecated
 */
function bind(token) {
    return new ProviderBuilder(token);
}
exports.bind = bind;
/**
 * Creates a {@link Provider}.
 *
 * See {@link Provider} for more details.
 *
 * <!-- TODO: improve the docs -->
 */
function provide(token, _a) {
    var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
    return new Provider(token, {
        useClass: useClass,
        useValue: useValue,
        useExisting: useExisting,
        useFactory: useFactory,
        deps: deps,
        multi: multi
    });
}
exports.provide = provide;
/**
 * Helper class for the {@link bind} function.
 */
var ProviderBuilder = (function () {
    function ProviderBuilder(token) {
        this.token = token;
    }
    /**
     * Binds a DI token to a class.
     *
     * ### Example ([live demo](http://plnkr.co/edit/ZpBCSYqv6e2ud5KXLdxQ?p=preview))
     *
     * Because `toAlias` and `toClass` are often confused, the example contains
     * both use cases for easy comparison.
     *
     * ```typescript
     * class Vehicle {}
     *
     * class Car extends Vehicle {}
     *
     * var injectorClass = Injector.resolveAndCreate([
     *   Car,
     *   provide(Vehicle, {useClass: Car})
     * ]);
     * var injectorAlias = Injector.resolveAndCreate([
     *   Car,
     *   provide(Vehicle, {useExisting: Car})
     * ]);
     *
     * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
     * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
     *
     * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
     * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
     * ```
     */
    ProviderBuilder.prototype.toClass = function (type) {
        if (!lang_1.isType(type)) {
            throw new exceptions_1.BaseException("Trying to create a class provider but \"" + lang_1.stringify(type) + "\" is not a class!");
        }
        return new Provider(this.token, { useClass: type });
    };
    /**
     * Binds a DI token to a value.
     *
     * ### Example ([live demo](http://plnkr.co/edit/G024PFHmDL0cJFgfZK8O?p=preview))
     *
     * ```typescript
     * var injector = Injector.resolveAndCreate([
     *   provide('message', {useValue: 'Hello'})
     * ]);
     *
     * expect(injector.get('message')).toEqual('Hello');
     * ```
     */
    ProviderBuilder.prototype.toValue = function (value) { return new Provider(this.token, { useValue: value }); };
    /**
     * Binds a DI token to an existing token.
     *
     * Angular will return the same instance as if the provided token was used. (This is
     * in contrast to `useClass` where a separate instance of `useClass` will be returned.)
     *
     * ### Example ([live demo](http://plnkr.co/edit/uBaoF2pN5cfc5AfZapNw?p=preview))
     *
     * Because `toAlias` and `toClass` are often confused, the example contains
     * both use cases for easy comparison.
     *
     * ```typescript
     * class Vehicle {}
     *
     * class Car extends Vehicle {}
     *
     * var injectorAlias = Injector.resolveAndCreate([
     *   Car,
     *   provide(Vehicle, {useExisting: Car})
     * ]);
     * var injectorClass = Injector.resolveAndCreate([
     *   Car,
     *   provide(Vehicle, {useClass: Car})
     * ]);
     *
     * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
     * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
     *
     * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
     * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
     * ```
     */
    ProviderBuilder.prototype.toAlias = function (aliasToken) {
        if (lang_1.isBlank(aliasToken)) {
            throw new exceptions_1.BaseException("Can not alias " + lang_1.stringify(this.token) + " to a blank value!");
        }
        return new Provider(this.token, { useExisting: aliasToken });
    };
    /**
     * Binds a DI token to a function which computes the value.
     *
     * ### Example ([live demo](http://plnkr.co/edit/OejNIfTT3zb1iBxaIYOb?p=preview))
     *
     * ```typescript
     * var injector = Injector.resolveAndCreate([
     *   provide(Number, {useFactory: () => { return 1+2; }}),
     *   provide(String, {useFactory: (v) => { return "Value: " + v; }, deps: [Number]})
     * ]);
     *
     * expect(injector.get(Number)).toEqual(3);
     * expect(injector.get(String)).toEqual('Value: 3');
     * ```
     */
    ProviderBuilder.prototype.toFactory = function (factory, dependencies) {
        if (!lang_1.isFunction(factory)) {
            throw new exceptions_1.BaseException("Trying to create a factory provider but \"" + lang_1.stringify(factory) + "\" is not a function!");
        }
        return new Provider(this.token, { useFactory: factory, deps: dependencies });
    };
    return ProviderBuilder;
})();
exports.ProviderBuilder = ProviderBuilder;
/**
 * Resolve a single provider.
 */
function resolveFactory(provider) {
    var factoryFn;
    var resolvedDeps;
    if (lang_1.isPresent(provider.useClass)) {
        var useClass = forward_ref_1.resolveForwardRef(provider.useClass);
        factoryFn = reflection_1.reflector.factory(useClass);
        resolvedDeps = _dependenciesFor(useClass);
    }
    else if (lang_1.isPresent(provider.useExisting)) {
        factoryFn = function (aliasInstance) { return aliasInstance; };
        resolvedDeps = [Dependency.fromKey(key_1.Key.get(provider.useExisting))];
    }
    else if (lang_1.isPresent(provider.useFactory)) {
        factoryFn = provider.useFactory;
        resolvedDeps = _constructDependencies(provider.useFactory, provider.dependencies);
    }
    else {
        factoryFn = function () { return provider.useValue; };
        resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedFactory(factoryFn, resolvedDeps);
}
exports.resolveFactory = resolveFactory;
/**
 * Converts the {@link Provider} into {@link ResolvedProvider}.
 *
 * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
 * convenience provider syntax.
 */
function resolveProvider(provider) {
    return new ResolvedProvider_(key_1.Key.get(provider.token), [resolveFactory(provider)], false);
}
exports.resolveProvider = resolveProvider;
/**
 * Resolve a list of Providers.
 */
function resolveProviders(providers) {
    var normalized = _createListOfProviders(_normalizeProviders(providers, new Map()));
    return normalized.map(function (b) {
        if (b instanceof _NormalizedProvider) {
            return new ResolvedProvider_(b.key, [b.resolvedFactory], false);
        }
        else {
            var arr = b;
            return new ResolvedProvider_(arr[0].key, arr.map(function (_) { return _.resolvedFactory; }), true);
        }
    });
}
exports.resolveProviders = resolveProviders;
/**
 * The algorithm works as follows:
 *
 * [Provider] -> [_NormalizedProvider|[_NormalizedProvider]] -> [ResolvedProvider]
 *
 * _NormalizedProvider is essentially a resolved provider before it was grouped by key.
 */
var _NormalizedProvider = (function () {
    function _NormalizedProvider(key, resolvedFactory) {
        this.key = key;
        this.resolvedFactory = resolvedFactory;
    }
    return _NormalizedProvider;
})();
function _createListOfProviders(flattenedProviders) {
    return collection_1.MapWrapper.values(flattenedProviders);
}
function _normalizeProviders(providers, res) {
    providers.forEach(function (b) {
        if (b instanceof lang_1.Type) {
            _normalizeProvider(provide(b, { useClass: b }), res);
        }
        else if (b instanceof Provider) {
            _normalizeProvider(b, res);
        }
        else if (b instanceof Array) {
            _normalizeProviders(b, res);
        }
        else if (b instanceof ProviderBuilder) {
            throw new exceptions_2.InvalidProviderError(b.token);
        }
        else {
            throw new exceptions_2.InvalidProviderError(b);
        }
    });
    return res;
}
function _normalizeProvider(b, res) {
    var key = key_1.Key.get(b.token);
    var factory = resolveFactory(b);
    var normalized = new _NormalizedProvider(key, factory);
    if (b.multi) {
        var existingProvider = res.get(key.id);
        if (existingProvider instanceof Array) {
            existingProvider.push(normalized);
        }
        else if (lang_1.isBlank(existingProvider)) {
            res.set(key.id, [normalized]);
        }
        else {
            throw new exceptions_2.MixingMultiProvidersWithRegularProvidersError(existingProvider, b);
        }
    }
    else {
        var existingProvider = res.get(key.id);
        if (existingProvider instanceof Array) {
            throw new exceptions_2.MixingMultiProvidersWithRegularProvidersError(existingProvider, b);
        }
        res.set(key.id, normalized);
    }
}
function _constructDependencies(factoryFunction, dependencies) {
    if (lang_1.isBlank(dependencies)) {
        return _dependenciesFor(factoryFunction);
    }
    else {
        var params = dependencies.map(function (t) { return [t]; });
        return dependencies.map(function (t) { return _extractToken(factoryFunction, t, params); });
    }
}
function _dependenciesFor(typeOrFunc) {
    var params = reflection_1.reflector.parameters(typeOrFunc);
    if (lang_1.isBlank(params))
        return [];
    if (params.some(lang_1.isBlank)) {
        throw new exceptions_2.NoAnnotationError(typeOrFunc, params);
    }
    return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
}
function _extractToken(typeOrFunc, metadata /*any[] | any*/, params) {
    var depProps = [];
    var token = null;
    var optional = false;
    if (!lang_1.isArray(metadata)) {
        if (metadata instanceof metadata_1.InjectMetadata) {
            return _createDependency(metadata.token, optional, null, null, depProps);
        }
        else {
            return _createDependency(metadata, optional, null, null, depProps);
        }
    }
    var lowerBoundVisibility = null;
    var upperBoundVisibility = null;
    for (var i = 0; i < metadata.length; ++i) {
        var paramMetadata = metadata[i];
        if (paramMetadata instanceof lang_1.Type) {
            token = paramMetadata;
        }
        else if (paramMetadata instanceof metadata_1.InjectMetadata) {
            token = paramMetadata.token;
        }
        else if (paramMetadata instanceof metadata_1.OptionalMetadata) {
            optional = true;
        }
        else if (paramMetadata instanceof metadata_1.SelfMetadata) {
            upperBoundVisibility = paramMetadata;
        }
        else if (paramMetadata instanceof metadata_1.HostMetadata) {
            upperBoundVisibility = paramMetadata;
        }
        else if (paramMetadata instanceof metadata_1.SkipSelfMetadata) {
            lowerBoundVisibility = paramMetadata;
        }
        else if (paramMetadata instanceof metadata_1.DependencyMetadata) {
            if (lang_1.isPresent(paramMetadata.token)) {
                token = paramMetadata.token;
            }
            depProps.push(paramMetadata);
        }
    }
    token = forward_ref_1.resolveForwardRef(token);
    if (lang_1.isPresent(token)) {
        return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
    }
    else {
        throw new exceptions_2.NoAnnotationError(typeOrFunc, params);
    }
}
function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
    return new Dependency(key_1.Key.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
}
},{"./exceptions":40,"./forward_ref":41,"./key":43,"./metadata":44,"angular2/src/core/reflection/reflection":82,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],47:[function(require,module,exports){
'use strict';/**
 * Type literals is a Dart-only feature. This is here only so we can x-compile
 * to multiple languages.
 */
var TypeLiteral = (function () {
    function TypeLiteral() {
    }
    Object.defineProperty(TypeLiteral.prototype, "type", {
        get: function () { throw new Error("Type literals are only supported in Dart"); },
        enumerable: true,
        configurable: true
    });
    return TypeLiteral;
})();
exports.TypeLiteral = TypeLiteral;
},{}],48:[function(require,module,exports){
'use strict';// Public API for compiler
var directive_resolver_1 = require('./linker/directive_resolver');
exports.DirectiveResolver = directive_resolver_1.DirectiveResolver;
var view_resolver_1 = require('./linker/view_resolver');
exports.ViewResolver = view_resolver_1.ViewResolver;
var compiler_1 = require('./linker/compiler');
exports.Compiler = compiler_1.Compiler;
var view_manager_1 = require('./linker/view_manager');
exports.AppViewManager = view_manager_1.AppViewManager;
var query_list_1 = require('./linker/query_list');
exports.QueryList = query_list_1.QueryList;
var dynamic_component_loader_1 = require('./linker/dynamic_component_loader');
exports.DynamicComponentLoader = dynamic_component_loader_1.DynamicComponentLoader;
var element_ref_1 = require('./linker/element_ref');
exports.ElementRef = element_ref_1.ElementRef;
var template_ref_1 = require('./linker/template_ref');
exports.TemplateRef = template_ref_1.TemplateRef;
var view_ref_1 = require('./linker/view_ref');
exports.ViewRef = view_ref_1.ViewRef;
exports.ProtoViewRef = view_ref_1.ProtoViewRef;
var view_container_ref_1 = require('./linker/view_container_ref');
exports.ViewContainerRef = view_container_ref_1.ViewContainerRef;
var dynamic_component_loader_2 = require('./linker/dynamic_component_loader');
exports.ComponentRef = dynamic_component_loader_2.ComponentRef;
},{"./linker/compiler":49,"./linker/directive_resolver":51,"./linker/dynamic_component_loader":52,"./linker/element_ref":55,"./linker/query_list":60,"./linker/template_ref":62,"./linker/view_container_ref":64,"./linker/view_manager":66,"./linker/view_ref":69,"./linker/view_resolver":70}],49:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var proto_view_factory_1 = require('angular2/src/core/linker/proto_view_factory');
var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var async_1 = require('angular2/src/facade/async');
var reflection_1 = require('angular2/src/core/reflection/reflection');
var template_commands_1 = require('angular2/src/core/linker/template_commands');
/**
 * Low-level service for compiling {@link Component}s into {@link ProtoViewRef ProtoViews}s, which
 * can later be used to create and render a Component instance.
 *
 * Most applications should instead use higher-level {@link DynamicComponentLoader} service, which
 * both compiles and instantiates a Component.
 */
var Compiler = (function () {
    function Compiler() {
    }
    return Compiler;
})();
exports.Compiler = Compiler;
function _isCompiledHostTemplate(type) {
    return type instanceof template_commands_1.CompiledHostTemplate;
}
var Compiler_ = (function (_super) {
    __extends(Compiler_, _super);
    function Compiler_(_protoViewFactory) {
        _super.call(this);
        this._protoViewFactory = _protoViewFactory;
    }
    Compiler_.prototype.compileInHost = function (componentType) {
        var metadatas = reflection_1.reflector.annotations(componentType);
        var compiledHostTemplate = metadatas.find(_isCompiledHostTemplate);
        if (lang_1.isBlank(compiledHostTemplate)) {
            throw new exceptions_1.BaseException("No precompiled template for component " + lang_1.stringify(componentType) + " found");
        }
        return async_1.PromiseWrapper.resolve(this._createProtoView(compiledHostTemplate));
    };
    Compiler_.prototype._createProtoView = function (compiledHostTemplate) {
        return this._protoViewFactory.createHost(compiledHostTemplate).ref;
    };
    Compiler_.prototype.clearCache = function () { this._protoViewFactory.clearCache(); };
    Compiler_ = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [proto_view_factory_1.ProtoViewFactory])
    ], Compiler_);
    return Compiler_;
})(Compiler);
exports.Compiler_ = Compiler_;
function internalCreateProtoView(compiler, compiledHostTemplate) {
    return compiler._createProtoView(compiledHostTemplate);
}
exports.internalCreateProtoView = internalCreateProtoView;
},{"angular2/src/core/di":38,"angular2/src/core/linker/proto_view_factory":59,"angular2/src/core/linker/template_commands":61,"angular2/src/core/reflection/reflection":82,"angular2/src/facade/async":93,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],50:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var interfaces_1 = require('./interfaces');
function hasLifecycleHook(lcInterface, token) {
    if (!(token instanceof lang_1.Type))
        return false;
    var proto = token.prototype;
    switch (lcInterface) {
        case interfaces_1.LifecycleHooks.AfterContentInit:
            return !!proto.ngAfterContentInit;
        case interfaces_1.LifecycleHooks.AfterContentChecked:
            return !!proto.ngAfterContentChecked;
        case interfaces_1.LifecycleHooks.AfterViewInit:
            return !!proto.ngAfterViewInit;
        case interfaces_1.LifecycleHooks.AfterViewChecked:
            return !!proto.ngAfterViewChecked;
        case interfaces_1.LifecycleHooks.OnChanges:
            return !!proto.ngOnChanges;
        case interfaces_1.LifecycleHooks.DoCheck:
            return !!proto.ngDoCheck;
        case interfaces_1.LifecycleHooks.OnDestroy:
            return !!proto.ngOnDestroy;
        case interfaces_1.LifecycleHooks.OnInit:
            return !!proto.ngOnInit;
        default:
            return false;
    }
}
exports.hasLifecycleHook = hasLifecycleHook;
},{"./interfaces":57,"angular2/src/facade/lang":98}],51:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var metadata_1 = require('angular2/src/core/metadata');
var reflection_1 = require('angular2/src/core/reflection/reflection');
function _isDirectiveMetadata(type) {
    return type instanceof metadata_1.DirectiveMetadata;
}
/*
 * Resolve a `Type` for {@link DirectiveMetadata}.
 *
 * This interface can be overridden by the application developer to create custom behavior.
 *
 * See {@link Compiler}
 */
var DirectiveResolver = (function () {
    function DirectiveResolver() {
    }
    /**
     * Return {@link DirectiveMetadata} for a given `Type`.
     */
    DirectiveResolver.prototype.resolve = function (type) {
        var typeMetadata = reflection_1.reflector.annotations(di_1.resolveForwardRef(type));
        if (lang_1.isPresent(typeMetadata)) {
            var metadata = typeMetadata.find(_isDirectiveMetadata);
            if (lang_1.isPresent(metadata)) {
                var propertyMetadata = reflection_1.reflector.propMetadata(type);
                return this._mergeWithPropertyMetadata(metadata, propertyMetadata);
            }
        }
        throw new exceptions_1.BaseException("No Directive annotation found on " + lang_1.stringify(type));
    };
    DirectiveResolver.prototype._mergeWithPropertyMetadata = function (dm, propertyMetadata) {
        var inputs = [];
        var outputs = [];
        var host = {};
        var queries = {};
        collection_1.StringMapWrapper.forEach(propertyMetadata, function (metadata, propName) {
            metadata.forEach(function (a) {
                if (a instanceof metadata_1.InputMetadata) {
                    if (lang_1.isPresent(a.bindingPropertyName)) {
                        inputs.push(propName + ": " + a.bindingPropertyName);
                    }
                    else {
                        inputs.push(propName);
                    }
                }
                if (a instanceof metadata_1.OutputMetadata) {
                    if (lang_1.isPresent(a.bindingPropertyName)) {
                        outputs.push(propName + ": " + a.bindingPropertyName);
                    }
                    else {
                        outputs.push(propName);
                    }
                }
                if (a instanceof metadata_1.HostBindingMetadata) {
                    if (lang_1.isPresent(a.hostPropertyName)) {
                        host[("[" + a.hostPropertyName + "]")] = propName;
                    }
                    else {
                        host[("[" + propName + "]")] = propName;
                    }
                }
                if (a instanceof metadata_1.HostListenerMetadata) {
                    var args = lang_1.isPresent(a.args) ? a.args.join(', ') : '';
                    host[("(" + a.eventName + ")")] = propName + "(" + args + ")";
                }
                if (a instanceof metadata_1.ContentChildrenMetadata) {
                    queries[propName] = a;
                }
                if (a instanceof metadata_1.ViewChildrenMetadata) {
                    queries[propName] = a;
                }
                if (a instanceof metadata_1.ContentChildMetadata) {
                    queries[propName] = a;
                }
                if (a instanceof metadata_1.ViewChildMetadata) {
                    queries[propName] = a;
                }
            });
        });
        return this._merge(dm, inputs, outputs, host, queries);
    };
    DirectiveResolver.prototype._merge = function (dm, inputs, outputs, host, queries) {
        var mergedInputs = lang_1.isPresent(dm.inputs) ? collection_1.ListWrapper.concat(dm.inputs, inputs) : inputs;
        var mergedOutputs = lang_1.isPresent(dm.outputs) ? collection_1.ListWrapper.concat(dm.outputs, outputs) : outputs;
        var mergedHost = lang_1.isPresent(dm.host) ? collection_1.StringMapWrapper.merge(dm.host, host) : host;
        var mergedQueries = lang_1.isPresent(dm.queries) ? collection_1.StringMapWrapper.merge(dm.queries, queries) : queries;
        if (dm instanceof metadata_1.ComponentMetadata) {
            return new metadata_1.ComponentMetadata({
                selector: dm.selector,
                inputs: mergedInputs,
                outputs: mergedOutputs,
                host: mergedHost,
                exportAs: dm.exportAs,
                moduleId: dm.moduleId,
                queries: mergedQueries,
                changeDetection: dm.changeDetection,
                providers: dm.providers,
                viewProviders: dm.viewProviders
            });
        }
        else {
            return new metadata_1.DirectiveMetadata({
                selector: dm.selector,
                inputs: mergedInputs,
                outputs: mergedOutputs,
                host: mergedHost,
                exportAs: dm.exportAs,
                queries: mergedQueries,
                providers: dm.providers
            });
        }
    };
    DirectiveResolver = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DirectiveResolver);
    return DirectiveResolver;
})();
exports.DirectiveResolver = DirectiveResolver;
},{"angular2/src/core/di":38,"angular2/src/core/metadata":71,"angular2/src/core/reflection/reflection":82,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],52:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
var compiler_1 = require('./compiler');
var lang_1 = require('angular2/src/facade/lang');
var view_manager_1 = require('angular2/src/core/linker/view_manager');
/**
 * Represents an instance of a Component created via {@link DynamicComponentLoader}.
 *
 * `ComponentRef` provides access to the Component Instance as well other objects related to this
 * Component Instance and allows you to destroy the Component Instance via the {@link #dispose}
 * method.
 */
var ComponentRef = (function () {
    function ComponentRef() {
    }
    Object.defineProperty(ComponentRef.prototype, "hostView", {
        /**
         * The {@link ViewRef} of the Host View of this Component instance.
         */
        get: function () { return this.location.parentView; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "hostComponent", {
        /**
         * @internal
         *
         * The instance of the component.
         *
         * TODO(i): this api should be removed
         */
        get: function () { return this.instance; },
        enumerable: true,
        configurable: true
    });
    return ComponentRef;
})();
exports.ComponentRef = ComponentRef;
var ComponentRef_ = (function (_super) {
    __extends(ComponentRef_, _super);
    /**
     * TODO(i): refactor into public/private fields
     */
    function ComponentRef_(location, instance, componentType, injector, _dispose) {
        _super.call(this);
        this._dispose = _dispose;
        this.location = location;
        this.instance = instance;
        this.componentType = componentType;
        this.injector = injector;
    }
    Object.defineProperty(ComponentRef_.prototype, "hostComponentType", {
        /**
         * @internal
         *
         * Returns the type of this Component instance.
         *
         * TODO(i): this api should be removed
         */
        get: function () { return this.componentType; },
        enumerable: true,
        configurable: true
    });
    ComponentRef_.prototype.dispose = function () { this._dispose(); };
    return ComponentRef_;
})(ComponentRef);
exports.ComponentRef_ = ComponentRef_;
/**
 * Service for instantiating a Component and attaching it to a View at a specified location.
 */
var DynamicComponentLoader = (function () {
    function DynamicComponentLoader() {
    }
    return DynamicComponentLoader;
})();
exports.DynamicComponentLoader = DynamicComponentLoader;
var DynamicComponentLoader_ = (function (_super) {
    __extends(DynamicComponentLoader_, _super);
    function DynamicComponentLoader_(_compiler, _viewManager) {
        _super.call(this);
        this._compiler = _compiler;
        this._viewManager = _viewManager;
    }
    DynamicComponentLoader_.prototype.loadAsRoot = function (type, overrideSelector, injector, onDispose) {
        var _this = this;
        return this._compiler.compileInHost(type).then(function (hostProtoViewRef) {
            var hostViewRef = _this._viewManager.createRootHostView(hostProtoViewRef, overrideSelector, injector);
            var newLocation = _this._viewManager.getHostElement(hostViewRef);
            var component = _this._viewManager.getComponent(newLocation);
            var dispose = function () {
                if (lang_1.isPresent(onDispose)) {
                    onDispose();
                }
                _this._viewManager.destroyRootHostView(hostViewRef);
            };
            return new ComponentRef_(newLocation, component, type, injector, dispose);
        });
    };
    DynamicComponentLoader_.prototype.loadIntoLocation = function (type, hostLocation, anchorName, providers) {
        if (providers === void 0) { providers = null; }
        return this.loadNextToLocation(type, this._viewManager.getNamedElementInComponentView(hostLocation, anchorName), providers);
    };
    DynamicComponentLoader_.prototype.loadNextToLocation = function (type, location, providers) {
        var _this = this;
        if (providers === void 0) { providers = null; }
        return this._compiler.compileInHost(type).then(function (hostProtoViewRef) {
            var viewContainer = _this._viewManager.getViewContainer(location);
            var hostViewRef = viewContainer.createHostView(hostProtoViewRef, viewContainer.length, providers);
            var newLocation = _this._viewManager.getHostElement(hostViewRef);
            var component = _this._viewManager.getComponent(newLocation);
            var dispose = function () {
                var index = viewContainer.indexOf(hostViewRef);
                if (index !== -1) {
                    viewContainer.remove(index);
                }
            };
            return new ComponentRef_(newLocation, component, type, null, dispose);
        });
    };
    DynamicComponentLoader_ = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [compiler_1.Compiler, view_manager_1.AppViewManager])
    ], DynamicComponentLoader_);
    return DynamicComponentLoader_;
})(DynamicComponentLoader);
exports.DynamicComponentLoader_ = DynamicComponentLoader_;
},{"./compiler":49,"angular2/src/core/di":38,"angular2/src/core/linker/view_manager":66,"angular2/src/facade/lang":98}],53:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var ElementBinder = (function () {
    function ElementBinder(index, parent, distanceToParent, protoElementInjector, componentDirective, nestedProtoView) {
        this.index = index;
        this.parent = parent;
        this.distanceToParent = distanceToParent;
        this.protoElementInjector = protoElementInjector;
        this.componentDirective = componentDirective;
        this.nestedProtoView = nestedProtoView;
        if (lang_1.isBlank(index)) {
            throw new exceptions_1.BaseException('null index not allowed.');
        }
    }
    return ElementBinder;
})();
exports.ElementBinder = ElementBinder;
},{"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],54:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var async_1 = require('angular2/src/facade/async');
var collection_1 = require('angular2/src/facade/collection');
var di_1 = require('angular2/src/core/di');
var injector_1 = require('angular2/src/core/di/injector');
var provider_1 = require('angular2/src/core/di/provider');
var di_2 = require('../metadata/di');
/* circular */ var avmModule = require('./view_manager');
var view_container_ref_1 = require('./view_container_ref');
var element_ref_1 = require('./element_ref');
var template_ref_1 = require('./template_ref');
var directives_1 = require('../metadata/directives');
var directive_lifecycle_reflector_1 = require('./directive_lifecycle_reflector');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var query_list_1 = require('./query_list');
var reflection_1 = require('angular2/src/core/reflection/reflection');
var event_config_1 = require('angular2/src/core/linker/event_config');
var pipe_provider_1 = require('angular2/src/core/pipes/pipe_provider');
var interfaces_1 = require('./interfaces');
var view_container_ref_2 = require("./view_container_ref");
var _staticKeys;
var StaticKeys = (function () {
    function StaticKeys() {
        this.viewManagerId = di_1.Key.get(avmModule.AppViewManager).id;
        this.templateRefId = di_1.Key.get(template_ref_1.TemplateRef).id;
        this.viewContainerId = di_1.Key.get(view_container_ref_1.ViewContainerRef).id;
        this.changeDetectorRefId = di_1.Key.get(change_detection_1.ChangeDetectorRef).id;
        this.elementRefId = di_1.Key.get(element_ref_1.ElementRef).id;
    }
    StaticKeys.instance = function () {
        if (lang_1.isBlank(_staticKeys))
            _staticKeys = new StaticKeys();
        return _staticKeys;
    };
    return StaticKeys;
})();
exports.StaticKeys = StaticKeys;
var TreeNode = (function () {
    function TreeNode(parent) {
        if (lang_1.isPresent(parent)) {
            parent.addChild(this);
        }
        else {
            this._parent = null;
        }
    }
    TreeNode.prototype.addChild = function (child) { child._parent = this; };
    TreeNode.prototype.remove = function () { this._parent = null; };
    Object.defineProperty(TreeNode.prototype, "parent", {
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    return TreeNode;
})();
exports.TreeNode = TreeNode;
var DirectiveDependency = (function (_super) {
    __extends(DirectiveDependency, _super);
    function DirectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties, attributeName, queryDecorator) {
        _super.call(this, key, optional, lowerBoundVisibility, upperBoundVisibility, properties);
        this.attributeName = attributeName;
        this.queryDecorator = queryDecorator;
        this._verify();
    }
    /** @internal */
    DirectiveDependency.prototype._verify = function () {
        var count = 0;
        if (lang_1.isPresent(this.queryDecorator))
            count++;
        if (lang_1.isPresent(this.attributeName))
            count++;
        if (count > 1)
            throw new exceptions_1.BaseException('A directive injectable can contain only one of the following @Attribute or @Query.');
    };
    DirectiveDependency.createFrom = function (d) {
        return new DirectiveDependency(d.key, d.optional, d.lowerBoundVisibility, d.upperBoundVisibility, d.properties, DirectiveDependency._attributeName(d.properties), DirectiveDependency._query(d.properties));
    };
    /** @internal */
    DirectiveDependency._attributeName = function (properties) {
        var p = properties.find(function (p) { return p instanceof di_2.AttributeMetadata; });
        return lang_1.isPresent(p) ? p.attributeName : null;
    };
    /** @internal */
    DirectiveDependency._query = function (properties) {
        return properties.find(function (p) { return p instanceof di_2.QueryMetadata; });
    };
    return DirectiveDependency;
})(di_1.Dependency);
exports.DirectiveDependency = DirectiveDependency;
var DirectiveProvider = (function (_super) {
    __extends(DirectiveProvider, _super);
    function DirectiveProvider(key, factory, deps, metadata, providers, viewProviders) {
        _super.call(this, key, [new provider_1.ResolvedFactory(factory, deps)], false);
        this.metadata = metadata;
        this.providers = providers;
        this.viewProviders = viewProviders;
        this.callOnDestroy = directive_lifecycle_reflector_1.hasLifecycleHook(interfaces_1.LifecycleHooks.OnDestroy, key.token);
    }
    Object.defineProperty(DirectiveProvider.prototype, "displayName", {
        get: function () { return this.key.displayName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectiveProvider.prototype, "queries", {
        get: function () {
            if (lang_1.isBlank(this.metadata.queries))
                return [];
            var res = [];
            collection_1.StringMapWrapper.forEach(this.metadata.queries, function (meta, fieldName) {
                var setter = reflection_1.reflector.setter(fieldName);
                res.push(new QueryMetadataWithSetter(setter, meta));
            });
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectiveProvider.prototype, "eventEmitters", {
        get: function () {
            return lang_1.isPresent(this.metadata) && lang_1.isPresent(this.metadata.outputs) ? this.metadata.outputs :
                [];
        },
        enumerable: true,
        configurable: true
    });
    DirectiveProvider.createFromProvider = function (provider, meta) {
        if (lang_1.isBlank(meta)) {
            meta = new directives_1.DirectiveMetadata();
        }
        var rb = provider_1.resolveProvider(provider);
        var rf = rb.resolvedFactories[0];
        var deps = rf.dependencies.map(DirectiveDependency.createFrom);
        var providers = lang_1.isPresent(meta.providers) ? meta.providers : [];
        var viewBindigs = meta instanceof directives_1.ComponentMetadata && lang_1.isPresent(meta.viewProviders) ?
            meta.viewProviders :
            [];
        return new DirectiveProvider(rb.key, rf.factory, deps, meta, providers, viewBindigs);
    };
    DirectiveProvider.createFromType = function (type, annotation) {
        var provider = new di_1.Provider(type, { useClass: type });
        return DirectiveProvider.createFromProvider(provider, annotation);
    };
    return DirectiveProvider;
})(provider_1.ResolvedProvider_);
exports.DirectiveProvider = DirectiveProvider;
// TODO(rado): benchmark and consider rolling in as ElementInjector fields.
var PreBuiltObjects = (function () {
    function PreBuiltObjects(viewManager, view, elementRef, templateRef) {
        this.viewManager = viewManager;
        this.view = view;
        this.elementRef = elementRef;
        this.templateRef = templateRef;
        this.nestedView = null;
    }
    return PreBuiltObjects;
})();
exports.PreBuiltObjects = PreBuiltObjects;
var QueryMetadataWithSetter = (function () {
    function QueryMetadataWithSetter(setter, metadata) {
        this.setter = setter;
        this.metadata = metadata;
    }
    return QueryMetadataWithSetter;
})();
exports.QueryMetadataWithSetter = QueryMetadataWithSetter;
var EventEmitterAccessor = (function () {
    function EventEmitterAccessor(eventName, getter) {
        this.eventName = eventName;
        this.getter = getter;
    }
    EventEmitterAccessor.prototype.subscribe = function (view, boundElementIndex, directive) {
        var _this = this;
        var eventEmitter = this.getter(directive);
        return async_1.ObservableWrapper.subscribe(eventEmitter, function (eventObj) { return view.triggerEventHandlers(_this.eventName, eventObj, boundElementIndex); });
    };
    return EventEmitterAccessor;
})();
exports.EventEmitterAccessor = EventEmitterAccessor;
function _createEventEmitterAccessors(bwv) {
    var provider = bwv.provider;
    if (!(provider instanceof DirectiveProvider))
        return [];
    var db = provider;
    return db.eventEmitters.map(function (eventConfig) {
        var parsedEvent = event_config_1.EventConfig.parse(eventConfig);
        return new EventEmitterAccessor(parsedEvent.eventName, reflection_1.reflector.getter(parsedEvent.fieldName));
    });
}
function _createProtoQueryRefs(providers) {
    var res = [];
    collection_1.ListWrapper.forEachWithIndex(providers, function (b, i) {
        if (b.provider instanceof DirectiveProvider) {
            var directiveProvider = b.provider;
            // field queries
            var queries = directiveProvider.queries;
            queries.forEach(function (q) { return res.push(new ProtoQueryRef(i, q.setter, q.metadata)); });
            // queries passed into the constructor.
            // TODO: remove this after constructor queries are no longer supported
            var deps = directiveProvider.resolvedFactory.dependencies;
            deps.forEach(function (d) {
                if (lang_1.isPresent(d.queryDecorator))
                    res.push(new ProtoQueryRef(i, null, d.queryDecorator));
            });
        }
    });
    return res;
}
var ProtoElementInjector = (function () {
    function ProtoElementInjector(parent, index, bwv, distanceToParent, _firstProviderIsComponent, directiveVariableBindings) {
        this.parent = parent;
        this.index = index;
        this.distanceToParent = distanceToParent;
        this.directiveVariableBindings = directiveVariableBindings;
        this._firstProviderIsComponent = _firstProviderIsComponent;
        var length = bwv.length;
        this.protoInjector = new injector_1.ProtoInjector(bwv);
        this.eventEmitterAccessors = collection_1.ListWrapper.createFixedSize(length);
        for (var i = 0; i < length; ++i) {
            this.eventEmitterAccessors[i] = _createEventEmitterAccessors(bwv[i]);
        }
        this.protoQueryRefs = _createProtoQueryRefs(bwv);
    }
    ProtoElementInjector.create = function (parent, index, providers, firstProviderIsComponent, distanceToParent, directiveVariableBindings) {
        var bd = [];
        ProtoElementInjector._createDirectiveProviderWithVisibility(providers, bd, firstProviderIsComponent);
        if (firstProviderIsComponent) {
            ProtoElementInjector._createViewProvidersWithVisibility(providers, bd);
        }
        ProtoElementInjector._createProvidersWithVisibility(providers, bd);
        return new ProtoElementInjector(parent, index, bd, distanceToParent, firstProviderIsComponent, directiveVariableBindings);
    };
    ProtoElementInjector._createDirectiveProviderWithVisibility = function (dirProviders, bd, firstProviderIsComponent) {
        dirProviders.forEach(function (dirProvider) {
            bd.push(ProtoElementInjector._createProviderWithVisibility(firstProviderIsComponent, dirProvider, dirProviders, dirProvider));
        });
    };
    ProtoElementInjector._createProvidersWithVisibility = function (dirProviders, bd) {
        var providersFromAllDirectives = [];
        dirProviders.forEach(function (dirProvider) {
            providersFromAllDirectives =
                collection_1.ListWrapper.concat(providersFromAllDirectives, dirProvider.providers);
        });
        var resolved = di_1.Injector.resolve(providersFromAllDirectives);
        resolved.forEach(function (b) { return bd.push(new injector_1.ProviderWithVisibility(b, injector_1.Visibility.Public)); });
    };
    ProtoElementInjector._createProviderWithVisibility = function (firstProviderIsComponent, dirProvider, dirProviders, provider) {
        var isComponent = firstProviderIsComponent && dirProviders[0] === dirProvider;
        return new injector_1.ProviderWithVisibility(provider, isComponent ? injector_1.Visibility.PublicAndPrivate : injector_1.Visibility.Public);
    };
    ProtoElementInjector._createViewProvidersWithVisibility = function (dirProviders, bd) {
        var resolvedViewProviders = di_1.Injector.resolve(dirProviders[0].viewProviders);
        resolvedViewProviders.forEach(function (b) { return bd.push(new injector_1.ProviderWithVisibility(b, injector_1.Visibility.Private)); });
    };
    ProtoElementInjector.prototype.instantiate = function (parent) {
        return new ElementInjector(this, parent);
    };
    ProtoElementInjector.prototype.directParent = function () { return this.distanceToParent < 2 ? this.parent : null; };
    Object.defineProperty(ProtoElementInjector.prototype, "hasBindings", {
        get: function () { return this.eventEmitterAccessors.length > 0; },
        enumerable: true,
        configurable: true
    });
    ProtoElementInjector.prototype.getProviderAtIndex = function (index) { return this.protoInjector.getProviderAtIndex(index); };
    return ProtoElementInjector;
})();
exports.ProtoElementInjector = ProtoElementInjector;
var _Context = (function () {
    function _Context(element, componentElement, injector) {
        this.element = element;
        this.componentElement = componentElement;
        this.injector = injector;
    }
    return _Context;
})();
var ElementInjector = (function (_super) {
    __extends(ElementInjector, _super);
    function ElementInjector(_proto, parent) {
        var _this = this;
        _super.call(this, parent);
        this._preBuiltObjects = null;
        this._proto = _proto;
        this._injector =
            new di_1.Injector(this._proto.protoInjector, null, this, function () { return _this._debugContext(); });
        // we couple ourselves to the injector strategy to avoid polymoprhic calls
        var injectorStrategy = this._injector.internalStrategy;
        this._strategy = injectorStrategy instanceof injector_1.InjectorInlineStrategy ?
            new ElementInjectorInlineStrategy(injectorStrategy, this) :
            new ElementInjectorDynamicStrategy(injectorStrategy, this);
        this.hydrated = false;
        this._queryStrategy = this._buildQueryStrategy();
    }
    ElementInjector.prototype.dehydrate = function () {
        this.hydrated = false;
        this._host = null;
        this._preBuiltObjects = null;
        this._strategy.callOnDestroy();
        this._strategy.dehydrate();
        this._queryStrategy.dehydrate();
    };
    ElementInjector.prototype.hydrate = function (imperativelyCreatedInjector, host, preBuiltObjects) {
        this._host = host;
        this._preBuiltObjects = preBuiltObjects;
        this._reattachInjectors(imperativelyCreatedInjector);
        this._queryStrategy.hydrate();
        this._strategy.hydrate();
        this.hydrated = true;
    };
    ElementInjector.prototype._debugContext = function () {
        var p = this._preBuiltObjects;
        var index = p.elementRef.boundElementIndex - p.view.elementOffset;
        var c = this._preBuiltObjects.view.getDebugContext(index, null);
        return lang_1.isPresent(c) ? new _Context(c.element, c.componentElement, c.injector) : null;
    };
    ElementInjector.prototype._reattachInjectors = function (imperativelyCreatedInjector) {
        // Dynamically-loaded component in the template. Not a root ElementInjector.
        if (lang_1.isPresent(this._parent)) {
            if (lang_1.isPresent(imperativelyCreatedInjector)) {
                // The imperative injector is similar to having an element between
                // the dynamic-loaded component and its parent => no boundaries.
                this._reattachInjector(this._injector, imperativelyCreatedInjector, false);
                this._reattachInjector(imperativelyCreatedInjector, this._parent._injector, false);
            }
            else {
                this._reattachInjector(this._injector, this._parent._injector, false);
            }
        }
        else if (lang_1.isPresent(this._host)) {
            // The imperative injector is similar to having an element between
            // the dynamic-loaded component and its parent => no boundary between
            // the component and imperativelyCreatedInjector.
            // But since it is a root ElementInjector, we need to create a boundary
            // between imperativelyCreatedInjector and _host.
            if (lang_1.isPresent(imperativelyCreatedInjector)) {
                this._reattachInjector(this._injector, imperativelyCreatedInjector, false);
                this._reattachInjector(imperativelyCreatedInjector, this._host._injector, true);
            }
            else {
                this._reattachInjector(this._injector, this._host._injector, true);
            }
        }
        else {
            if (lang_1.isPresent(imperativelyCreatedInjector)) {
                this._reattachInjector(this._injector, imperativelyCreatedInjector, true);
            }
        }
    };
    ElementInjector.prototype._reattachInjector = function (injector, parentInjector, isBoundary) {
        injector.internalStrategy.attach(parentInjector, isBoundary);
    };
    ElementInjector.prototype.hasVariableBinding = function (name) {
        var vb = this._proto.directiveVariableBindings;
        return lang_1.isPresent(vb) && vb.has(name);
    };
    ElementInjector.prototype.getVariableBinding = function (name) {
        var index = this._proto.directiveVariableBindings.get(name);
        return lang_1.isPresent(index) ? this.getDirectiveAtIndex(index) : this.getElementRef();
    };
    ElementInjector.prototype.get = function (token) { return this._injector.get(token); };
    ElementInjector.prototype.hasDirective = function (type) { return lang_1.isPresent(this._injector.getOptional(type)); };
    ElementInjector.prototype.getEventEmitterAccessors = function () { return this._proto.eventEmitterAccessors; };
    ElementInjector.prototype.getDirectiveVariableBindings = function () {
        return this._proto.directiveVariableBindings;
    };
    ElementInjector.prototype.getComponent = function () { return this._strategy.getComponent(); };
    ElementInjector.prototype.getInjector = function () { return this._injector; };
    ElementInjector.prototype.getElementRef = function () { return this._preBuiltObjects.elementRef; };
    ElementInjector.prototype.getViewContainerRef = function () {
        return new view_container_ref_2.ViewContainerRef_(this._preBuiltObjects.viewManager, this.getElementRef());
    };
    ElementInjector.prototype.getNestedView = function () { return this._preBuiltObjects.nestedView; };
    ElementInjector.prototype.getView = function () { return this._preBuiltObjects.view; };
    ElementInjector.prototype.directParent = function () { return this._proto.distanceToParent < 2 ? this.parent : null; };
    ElementInjector.prototype.isComponentKey = function (key) { return this._strategy.isComponentKey(key); };
    ElementInjector.prototype.getDependency = function (injector, provider, dep) {
        var key = dep.key;
        if (provider instanceof DirectiveProvider) {
            var dirDep = dep;
            var dirProvider = provider;
            var staticKeys = StaticKeys.instance();
            if (key.id === staticKeys.viewManagerId)
                return this._preBuiltObjects.viewManager;
            if (lang_1.isPresent(dirDep.attributeName))
                return this._buildAttribute(dirDep);
            if (lang_1.isPresent(dirDep.queryDecorator))
                return this._queryStrategy.findQuery(dirDep.queryDecorator).list;
            if (dirDep.key.id === StaticKeys.instance().changeDetectorRefId) {
                // We provide the component's view change detector to components and
                // the surrounding component's change detector to directives.
                if (dirProvider.metadata instanceof directives_1.ComponentMetadata) {
                    var componentView = this._preBuiltObjects.view.getNestedView(this._preBuiltObjects.elementRef.boundElementIndex);
                    return componentView.changeDetector.ref;
                }
                else {
                    return this._preBuiltObjects.view.changeDetector.ref;
                }
            }
            if (dirDep.key.id === StaticKeys.instance().elementRefId) {
                return this.getElementRef();
            }
            if (dirDep.key.id === StaticKeys.instance().viewContainerId) {
                return this.getViewContainerRef();
            }
            if (dirDep.key.id === StaticKeys.instance().templateRefId) {
                if (lang_1.isBlank(this._preBuiltObjects.templateRef)) {
                    if (dirDep.optional) {
                        return null;
                    }
                    throw new di_1.NoProviderError(null, dirDep.key);
                }
                return this._preBuiltObjects.templateRef;
            }
        }
        else if (provider instanceof pipe_provider_1.PipeProvider) {
            if (dep.key.id === StaticKeys.instance().changeDetectorRefId) {
                var componentView = this._preBuiltObjects.view.getNestedView(this._preBuiltObjects.elementRef.boundElementIndex);
                return componentView.changeDetector.ref;
            }
        }
        return injector_1.UNDEFINED;
    };
    ElementInjector.prototype._buildAttribute = function (dep) {
        var attributes = this._proto.attributes;
        if (lang_1.isPresent(attributes) && attributes.has(dep.attributeName)) {
            return attributes.get(dep.attributeName);
        }
        else {
            return null;
        }
    };
    ElementInjector.prototype.addDirectivesMatchingQuery = function (query, list) {
        var templateRef = lang_1.isBlank(this._preBuiltObjects) ? null : this._preBuiltObjects.templateRef;
        if (query.selector === template_ref_1.TemplateRef && lang_1.isPresent(templateRef)) {
            list.push(templateRef);
        }
        this._strategy.addDirectivesMatchingQuery(query, list);
    };
    ElementInjector.prototype._buildQueryStrategy = function () {
        if (this._proto.protoQueryRefs.length === 0) {
            return _emptyQueryStrategy;
        }
        else if (this._proto.protoQueryRefs.length <=
            InlineQueryStrategy.NUMBER_OF_SUPPORTED_QUERIES) {
            return new InlineQueryStrategy(this);
        }
        else {
            return new DynamicQueryStrategy(this);
        }
    };
    ElementInjector.prototype.link = function (parent) { parent.addChild(this); };
    ElementInjector.prototype.unlink = function () { this.remove(); };
    ElementInjector.prototype.getDirectiveAtIndex = function (index) { return this._injector.getAt(index); };
    ElementInjector.prototype.hasInstances = function () { return this._proto.hasBindings && this.hydrated; };
    ElementInjector.prototype.getHost = function () { return this._host; };
    ElementInjector.prototype.getBoundElementIndex = function () { return this._proto.index; };
    ElementInjector.prototype.getRootViewInjectors = function () {
        if (!this.hydrated)
            return [];
        var view = this._preBuiltObjects.view;
        var nestedView = view.getNestedView(view.elementOffset + this.getBoundElementIndex());
        return lang_1.isPresent(nestedView) ? nestedView.rootElementInjectors : [];
    };
    ElementInjector.prototype.ngAfterViewChecked = function () { this._queryStrategy.updateViewQueries(); };
    ElementInjector.prototype.ngAfterContentChecked = function () { this._queryStrategy.updateContentQueries(); };
    ElementInjector.prototype.traverseAndSetQueriesAsDirty = function () {
        var inj = this;
        while (lang_1.isPresent(inj)) {
            inj._setQueriesAsDirty();
            inj = inj.parent;
        }
    };
    ElementInjector.prototype._setQueriesAsDirty = function () {
        this._queryStrategy.setContentQueriesAsDirty();
        if (lang_1.isPresent(this._host))
            this._host._queryStrategy.setViewQueriesAsDirty();
    };
    return ElementInjector;
})(TreeNode);
exports.ElementInjector = ElementInjector;
var _EmptyQueryStrategy = (function () {
    function _EmptyQueryStrategy() {
    }
    _EmptyQueryStrategy.prototype.setContentQueriesAsDirty = function () { };
    _EmptyQueryStrategy.prototype.setViewQueriesAsDirty = function () { };
    _EmptyQueryStrategy.prototype.hydrate = function () { };
    _EmptyQueryStrategy.prototype.dehydrate = function () { };
    _EmptyQueryStrategy.prototype.updateContentQueries = function () { };
    _EmptyQueryStrategy.prototype.updateViewQueries = function () { };
    _EmptyQueryStrategy.prototype.findQuery = function (query) {
        throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    return _EmptyQueryStrategy;
})();
var _emptyQueryStrategy = new _EmptyQueryStrategy();
var InlineQueryStrategy = (function () {
    function InlineQueryStrategy(ei) {
        var protoRefs = ei._proto.protoQueryRefs;
        if (protoRefs.length > 0)
            this.query0 = new QueryRef(protoRefs[0], ei);
        if (protoRefs.length > 1)
            this.query1 = new QueryRef(protoRefs[1], ei);
        if (protoRefs.length > 2)
            this.query2 = new QueryRef(protoRefs[2], ei);
    }
    InlineQueryStrategy.prototype.setContentQueriesAsDirty = function () {
        if (lang_1.isPresent(this.query0) && !this.query0.isViewQuery)
            this.query0.dirty = true;
        if (lang_1.isPresent(this.query1) && !this.query1.isViewQuery)
            this.query1.dirty = true;
        if (lang_1.isPresent(this.query2) && !this.query2.isViewQuery)
            this.query2.dirty = true;
    };
    InlineQueryStrategy.prototype.setViewQueriesAsDirty = function () {
        if (lang_1.isPresent(this.query0) && this.query0.isViewQuery)
            this.query0.dirty = true;
        if (lang_1.isPresent(this.query1) && this.query1.isViewQuery)
            this.query1.dirty = true;
        if (lang_1.isPresent(this.query2) && this.query2.isViewQuery)
            this.query2.dirty = true;
    };
    InlineQueryStrategy.prototype.hydrate = function () {
        if (lang_1.isPresent(this.query0))
            this.query0.hydrate();
        if (lang_1.isPresent(this.query1))
            this.query1.hydrate();
        if (lang_1.isPresent(this.query2))
            this.query2.hydrate();
    };
    InlineQueryStrategy.prototype.dehydrate = function () {
        if (lang_1.isPresent(this.query0))
            this.query0.dehydrate();
        if (lang_1.isPresent(this.query1))
            this.query1.dehydrate();
        if (lang_1.isPresent(this.query2))
            this.query2.dehydrate();
    };
    InlineQueryStrategy.prototype.updateContentQueries = function () {
        if (lang_1.isPresent(this.query0) && !this.query0.isViewQuery) {
            this.query0.update();
        }
        if (lang_1.isPresent(this.query1) && !this.query1.isViewQuery) {
            this.query1.update();
        }
        if (lang_1.isPresent(this.query2) && !this.query2.isViewQuery) {
            this.query2.update();
        }
    };
    InlineQueryStrategy.prototype.updateViewQueries = function () {
        if (lang_1.isPresent(this.query0) && this.query0.isViewQuery) {
            this.query0.update();
        }
        if (lang_1.isPresent(this.query1) && this.query1.isViewQuery) {
            this.query1.update();
        }
        if (lang_1.isPresent(this.query2) && this.query2.isViewQuery) {
            this.query2.update();
        }
    };
    InlineQueryStrategy.prototype.findQuery = function (query) {
        if (lang_1.isPresent(this.query0) && this.query0.protoQueryRef.query === query) {
            return this.query0;
        }
        if (lang_1.isPresent(this.query1) && this.query1.protoQueryRef.query === query) {
            return this.query1;
        }
        if (lang_1.isPresent(this.query2) && this.query2.protoQueryRef.query === query) {
            return this.query2;
        }
        throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    InlineQueryStrategy.NUMBER_OF_SUPPORTED_QUERIES = 3;
    return InlineQueryStrategy;
})();
var DynamicQueryStrategy = (function () {
    function DynamicQueryStrategy(ei) {
        this.queries = ei._proto.protoQueryRefs.map(function (p) { return new QueryRef(p, ei); });
    }
    DynamicQueryStrategy.prototype.setContentQueriesAsDirty = function () {
        for (var i = 0; i < this.queries.length; ++i) {
            var q = this.queries[i];
            if (!q.isViewQuery)
                q.dirty = true;
        }
    };
    DynamicQueryStrategy.prototype.setViewQueriesAsDirty = function () {
        for (var i = 0; i < this.queries.length; ++i) {
            var q = this.queries[i];
            if (q.isViewQuery)
                q.dirty = true;
        }
    };
    DynamicQueryStrategy.prototype.hydrate = function () {
        for (var i = 0; i < this.queries.length; ++i) {
            var q = this.queries[i];
            q.hydrate();
        }
    };
    DynamicQueryStrategy.prototype.dehydrate = function () {
        for (var i = 0; i < this.queries.length; ++i) {
            var q = this.queries[i];
            q.dehydrate();
        }
    };
    DynamicQueryStrategy.prototype.updateContentQueries = function () {
        for (var i = 0; i < this.queries.length; ++i) {
            var q = this.queries[i];
            if (!q.isViewQuery) {
                q.update();
            }
        }
    };
    DynamicQueryStrategy.prototype.updateViewQueries = function () {
        for (var i = 0; i < this.queries.length; ++i) {
            var q = this.queries[i];
            if (q.isViewQuery) {
                q.update();
            }
        }
    };
    DynamicQueryStrategy.prototype.findQuery = function (query) {
        for (var i = 0; i < this.queries.length; ++i) {
            var q = this.queries[i];
            if (q.protoQueryRef.query === query) {
                return q;
            }
        }
        throw new exceptions_1.BaseException("Cannot find query for directive " + query + ".");
    };
    return DynamicQueryStrategy;
})();
/**
 * Strategy used by the `ElementInjector` when the number of providers is 10 or less.
 * In such a case, inlining fields is beneficial for performances.
 */
var ElementInjectorInlineStrategy = (function () {
    function ElementInjectorInlineStrategy(injectorStrategy, _ei) {
        this.injectorStrategy = injectorStrategy;
        this._ei = _ei;
    }
    ElementInjectorInlineStrategy.prototype.hydrate = function () {
        var i = this.injectorStrategy;
        var p = i.protoStrategy;
        i.resetConstructionCounter();
        if (p.provider0 instanceof DirectiveProvider && lang_1.isPresent(p.keyId0) && i.obj0 === injector_1.UNDEFINED)
            i.obj0 = i.instantiateProvider(p.provider0, p.visibility0);
        if (p.provider1 instanceof DirectiveProvider && lang_1.isPresent(p.keyId1) && i.obj1 === injector_1.UNDEFINED)
            i.obj1 = i.instantiateProvider(p.provider1, p.visibility1);
        if (p.provider2 instanceof DirectiveProvider && lang_1.isPresent(p.keyId2) && i.obj2 === injector_1.UNDEFINED)
            i.obj2 = i.instantiateProvider(p.provider2, p.visibility2);
        if (p.provider3 instanceof DirectiveProvider && lang_1.isPresent(p.keyId3) && i.obj3 === injector_1.UNDEFINED)
            i.obj3 = i.instantiateProvider(p.provider3, p.visibility3);
        if (p.provider4 instanceof DirectiveProvider && lang_1.isPresent(p.keyId4) && i.obj4 === injector_1.UNDEFINED)
            i.obj4 = i.instantiateProvider(p.provider4, p.visibility4);
        if (p.provider5 instanceof DirectiveProvider && lang_1.isPresent(p.keyId5) && i.obj5 === injector_1.UNDEFINED)
            i.obj5 = i.instantiateProvider(p.provider5, p.visibility5);
        if (p.provider6 instanceof DirectiveProvider && lang_1.isPresent(p.keyId6) && i.obj6 === injector_1.UNDEFINED)
            i.obj6 = i.instantiateProvider(p.provider6, p.visibility6);
        if (p.provider7 instanceof DirectiveProvider && lang_1.isPresent(p.keyId7) && i.obj7 === injector_1.UNDEFINED)
            i.obj7 = i.instantiateProvider(p.provider7, p.visibility7);
        if (p.provider8 instanceof DirectiveProvider && lang_1.isPresent(p.keyId8) && i.obj8 === injector_1.UNDEFINED)
            i.obj8 = i.instantiateProvider(p.provider8, p.visibility8);
        if (p.provider9 instanceof DirectiveProvider && lang_1.isPresent(p.keyId9) && i.obj9 === injector_1.UNDEFINED)
            i.obj9 = i.instantiateProvider(p.provider9, p.visibility9);
    };
    ElementInjectorInlineStrategy.prototype.dehydrate = function () {
        var i = this.injectorStrategy;
        i.obj0 = injector_1.UNDEFINED;
        i.obj1 = injector_1.UNDEFINED;
        i.obj2 = injector_1.UNDEFINED;
        i.obj3 = injector_1.UNDEFINED;
        i.obj4 = injector_1.UNDEFINED;
        i.obj5 = injector_1.UNDEFINED;
        i.obj6 = injector_1.UNDEFINED;
        i.obj7 = injector_1.UNDEFINED;
        i.obj8 = injector_1.UNDEFINED;
        i.obj9 = injector_1.UNDEFINED;
    };
    ElementInjectorInlineStrategy.prototype.callOnDestroy = function () {
        var i = this.injectorStrategy;
        var p = i.protoStrategy;
        if (p.provider0 instanceof DirectiveProvider &&
            p.provider0.callOnDestroy) {
            i.obj0.ngOnDestroy();
        }
        if (p.provider1 instanceof DirectiveProvider &&
            p.provider1.callOnDestroy) {
            i.obj1.ngOnDestroy();
        }
        if (p.provider2 instanceof DirectiveProvider &&
            p.provider2.callOnDestroy) {
            i.obj2.ngOnDestroy();
        }
        if (p.provider3 instanceof DirectiveProvider &&
            p.provider3.callOnDestroy) {
            i.obj3.ngOnDestroy();
        }
        if (p.provider4 instanceof DirectiveProvider &&
            p.provider4.callOnDestroy) {
            i.obj4.ngOnDestroy();
        }
        if (p.provider5 instanceof DirectiveProvider &&
            p.provider5.callOnDestroy) {
            i.obj5.ngOnDestroy();
        }
        if (p.provider6 instanceof DirectiveProvider &&
            p.provider6.callOnDestroy) {
            i.obj6.ngOnDestroy();
        }
        if (p.provider7 instanceof DirectiveProvider &&
            p.provider7.callOnDestroy) {
            i.obj7.ngOnDestroy();
        }
        if (p.provider8 instanceof DirectiveProvider &&
            p.provider8.callOnDestroy) {
            i.obj8.ngOnDestroy();
        }
        if (p.provider9 instanceof DirectiveProvider &&
            p.provider9.callOnDestroy) {
            i.obj9.ngOnDestroy();
        }
    };
    ElementInjectorInlineStrategy.prototype.getComponent = function () { return this.injectorStrategy.obj0; };
    ElementInjectorInlineStrategy.prototype.isComponentKey = function (key) {
        return this._ei._proto._firstProviderIsComponent && lang_1.isPresent(key) &&
            key.id === this.injectorStrategy.protoStrategy.keyId0;
    };
    ElementInjectorInlineStrategy.prototype.addDirectivesMatchingQuery = function (query, list) {
        var i = this.injectorStrategy;
        var p = i.protoStrategy;
        if (lang_1.isPresent(p.provider0) && p.provider0.key.token === query.selector) {
            if (i.obj0 === injector_1.UNDEFINED)
                i.obj0 = i.instantiateProvider(p.provider0, p.visibility0);
            list.push(i.obj0);
        }
        if (lang_1.isPresent(p.provider1) && p.provider1.key.token === query.selector) {
            if (i.obj1 === injector_1.UNDEFINED)
                i.obj1 = i.instantiateProvider(p.provider1, p.visibility1);
            list.push(i.obj1);
        }
        if (lang_1.isPresent(p.provider2) && p.provider2.key.token === query.selector) {
            if (i.obj2 === injector_1.UNDEFINED)
                i.obj2 = i.instantiateProvider(p.provider2, p.visibility2);
            list.push(i.obj2);
        }
        if (lang_1.isPresent(p.provider3) && p.provider3.key.token === query.selector) {
            if (i.obj3 === injector_1.UNDEFINED)
                i.obj3 = i.instantiateProvider(p.provider3, p.visibility3);
            list.push(i.obj3);
        }
        if (lang_1.isPresent(p.provider4) && p.provider4.key.token === query.selector) {
            if (i.obj4 === injector_1.UNDEFINED)
                i.obj4 = i.instantiateProvider(p.provider4, p.visibility4);
            list.push(i.obj4);
        }
        if (lang_1.isPresent(p.provider5) && p.provider5.key.token === query.selector) {
            if (i.obj5 === injector_1.UNDEFINED)
                i.obj5 = i.instantiateProvider(p.provider5, p.visibility5);
            list.push(i.obj5);
        }
        if (lang_1.isPresent(p.provider6) && p.provider6.key.token === query.selector) {
            if (i.obj6 === injector_1.UNDEFINED)
                i.obj6 = i.instantiateProvider(p.provider6, p.visibility6);
            list.push(i.obj6);
        }
        if (lang_1.isPresent(p.provider7) && p.provider7.key.token === query.selector) {
            if (i.obj7 === injector_1.UNDEFINED)
                i.obj7 = i.instantiateProvider(p.provider7, p.visibility7);
            list.push(i.obj7);
        }
        if (lang_1.isPresent(p.provider8) && p.provider8.key.token === query.selector) {
            if (i.obj8 === injector_1.UNDEFINED)
                i.obj8 = i.instantiateProvider(p.provider8, p.visibility8);
            list.push(i.obj8);
        }
        if (lang_1.isPresent(p.provider9) && p.provider9.key.token === query.selector) {
            if (i.obj9 === injector_1.UNDEFINED)
                i.obj9 = i.instantiateProvider(p.provider9, p.visibility9);
            list.push(i.obj9);
        }
    };
    return ElementInjectorInlineStrategy;
})();
/**
 * Strategy used by the `ElementInjector` when the number of bindings is 11 or more.
 * In such a case, there are too many fields to inline (see ElementInjectorInlineStrategy).
 */
var ElementInjectorDynamicStrategy = (function () {
    function ElementInjectorDynamicStrategy(injectorStrategy, _ei) {
        this.injectorStrategy = injectorStrategy;
        this._ei = _ei;
    }
    ElementInjectorDynamicStrategy.prototype.hydrate = function () {
        var inj = this.injectorStrategy;
        var p = inj.protoStrategy;
        inj.resetConstructionCounter();
        for (var i = 0; i < p.keyIds.length; i++) {
            if (p.providers[i] instanceof DirectiveProvider && lang_1.isPresent(p.keyIds[i]) &&
                inj.objs[i] === injector_1.UNDEFINED) {
                inj.objs[i] = inj.instantiateProvider(p.providers[i], p.visibilities[i]);
            }
        }
    };
    ElementInjectorDynamicStrategy.prototype.dehydrate = function () {
        var inj = this.injectorStrategy;
        collection_1.ListWrapper.fill(inj.objs, injector_1.UNDEFINED);
    };
    ElementInjectorDynamicStrategy.prototype.callOnDestroy = function () {
        var ist = this.injectorStrategy;
        var p = ist.protoStrategy;
        for (var i = 0; i < p.providers.length; i++) {
            if (p.providers[i] instanceof DirectiveProvider &&
                p.providers[i].callOnDestroy) {
                ist.objs[i].ngOnDestroy();
            }
        }
    };
    ElementInjectorDynamicStrategy.prototype.getComponent = function () { return this.injectorStrategy.objs[0]; };
    ElementInjectorDynamicStrategy.prototype.isComponentKey = function (key) {
        var p = this.injectorStrategy.protoStrategy;
        return this._ei._proto._firstProviderIsComponent && lang_1.isPresent(key) && key.id === p.keyIds[0];
    };
    ElementInjectorDynamicStrategy.prototype.addDirectivesMatchingQuery = function (query, list) {
        var ist = this.injectorStrategy;
        var p = ist.protoStrategy;
        for (var i = 0; i < p.providers.length; i++) {
            if (p.providers[i].key.token === query.selector) {
                if (ist.objs[i] === injector_1.UNDEFINED) {
                    ist.objs[i] = ist.instantiateProvider(p.providers[i], p.visibilities[i]);
                }
                list.push(ist.objs[i]);
            }
        }
    };
    return ElementInjectorDynamicStrategy;
})();
var ProtoQueryRef = (function () {
    function ProtoQueryRef(dirIndex, setter, query) {
        this.dirIndex = dirIndex;
        this.setter = setter;
        this.query = query;
    }
    Object.defineProperty(ProtoQueryRef.prototype, "usesPropertySyntax", {
        get: function () { return lang_1.isPresent(this.setter); },
        enumerable: true,
        configurable: true
    });
    return ProtoQueryRef;
})();
exports.ProtoQueryRef = ProtoQueryRef;
var QueryRef = (function () {
    function QueryRef(protoQueryRef, originator) {
        this.protoQueryRef = protoQueryRef;
        this.originator = originator;
    }
    Object.defineProperty(QueryRef.prototype, "isViewQuery", {
        get: function () { return this.protoQueryRef.query.isViewQuery; },
        enumerable: true,
        configurable: true
    });
    QueryRef.prototype.update = function () {
        if (!this.dirty)
            return;
        this._update();
        this.dirty = false;
        // TODO delete the check once only field queries are supported
        if (this.protoQueryRef.usesPropertySyntax) {
            var dir = this.originator.getDirectiveAtIndex(this.protoQueryRef.dirIndex);
            if (this.protoQueryRef.query.first) {
                this.protoQueryRef.setter(dir, this.list.length > 0 ? this.list.first : null);
            }
            else {
                this.protoQueryRef.setter(dir, this.list);
            }
        }
        this.list.notifyOnChanges();
    };
    QueryRef.prototype._update = function () {
        var aggregator = [];
        if (this.protoQueryRef.query.isViewQuery) {
            var view = this.originator.getView();
            // intentionally skipping originator for view queries.
            var nestedView = view.getNestedView(view.elementOffset + this.originator.getBoundElementIndex());
            if (lang_1.isPresent(nestedView))
                this._visitView(nestedView, aggregator);
        }
        else {
            this._visit(this.originator, aggregator);
        }
        this.list.reset(aggregator);
    };
    ;
    QueryRef.prototype._visit = function (inj, aggregator) {
        var view = inj.getView();
        var startIdx = view.elementOffset + inj._proto.index;
        for (var i = startIdx; i < view.elementOffset + view.ownBindersCount; i++) {
            var curInj = view.elementInjectors[i];
            if (lang_1.isBlank(curInj))
                continue;
            // The first injector after inj, that is outside the subtree rooted at
            // inj has to have a null parent or a parent that is an ancestor of inj.
            if (i > startIdx && (lang_1.isBlank(curInj) || lang_1.isBlank(curInj.parent) ||
                view.elementOffset + curInj.parent._proto.index < startIdx)) {
                break;
            }
            if (!this.protoQueryRef.query.descendants &&
                !(curInj.parent == this.originator || curInj == this.originator))
                continue;
            // We visit the view container(VC) views right after the injector that contains
            // the VC. Theoretically, that might not be the right order if there are
            // child injectors of said injector. Not clear whether if such case can
            // even be constructed with the current apis.
            this._visitInjector(curInj, aggregator);
            var vc = view.viewContainers[i];
            if (lang_1.isPresent(vc))
                this._visitViewContainer(vc, aggregator);
        }
    };
    QueryRef.prototype._visitInjector = function (inj, aggregator) {
        if (this.protoQueryRef.query.isVarBindingQuery) {
            this._aggregateVariableBinding(inj, aggregator);
        }
        else {
            this._aggregateDirective(inj, aggregator);
        }
    };
    QueryRef.prototype._visitViewContainer = function (vc, aggregator) {
        for (var j = 0; j < vc.views.length; j++) {
            this._visitView(vc.views[j], aggregator);
        }
    };
    QueryRef.prototype._visitView = function (view, aggregator) {
        for (var i = view.elementOffset; i < view.elementOffset + view.ownBindersCount; i++) {
            var inj = view.elementInjectors[i];
            if (lang_1.isBlank(inj))
                continue;
            this._visitInjector(inj, aggregator);
            var vc = view.viewContainers[i];
            if (lang_1.isPresent(vc))
                this._visitViewContainer(vc, aggregator);
        }
    };
    QueryRef.prototype._aggregateVariableBinding = function (inj, aggregator) {
        var vb = this.protoQueryRef.query.varBindings;
        for (var i = 0; i < vb.length; ++i) {
            if (inj.hasVariableBinding(vb[i])) {
                aggregator.push(inj.getVariableBinding(vb[i]));
            }
        }
    };
    QueryRef.prototype._aggregateDirective = function (inj, aggregator) {
        inj.addDirectivesMatchingQuery(this.protoQueryRef.query, aggregator);
    };
    QueryRef.prototype.dehydrate = function () { this.list = null; };
    QueryRef.prototype.hydrate = function () {
        this.list = new query_list_1.QueryList();
        this.dirty = true;
    };
    return QueryRef;
})();
exports.QueryRef = QueryRef;
},{"../metadata/di":72,"../metadata/directives":73,"./directive_lifecycle_reflector":50,"./element_ref":55,"./interfaces":57,"./query_list":60,"./template_ref":62,"./view_container_ref":64,"./view_manager":66,"angular2/src/core/change_detection/change_detection":8,"angular2/src/core/di":38,"angular2/src/core/di/injector":42,"angular2/src/core/di/provider":46,"angular2/src/core/linker/event_config":56,"angular2/src/core/pipes/pipe_provider":75,"angular2/src/core/reflection/reflection":82,"angular2/src/facade/async":93,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],55:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exceptions_1 = require('angular2/src/facade/exceptions');
/**
 * Represents a location in a View that has an injection, change-detection and render context
 * associated with it.
 *
 * An `ElementRef` is created for each element in the Template that contains a Directive, Component
 * or data-binding.
 *
 * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 */
var ElementRef = (function () {
    function ElementRef() {
    }
    Object.defineProperty(ElementRef.prototype, "nativeElement", {
        /**
         * The underlying native element or `null` if direct access to native elements is not supported
         * (e.g. when the application runs in a web worker).
         *
         * <div class="callout is-critical">
         *   <header>Use with caution</header>
         *   <p>
         *    Use this API as the last resort when direct access to DOM is needed. Use templating and
         *    data-binding provided by Angular instead. Alternatively you take a look at {@link Renderer}
         *    which provides API that can safely be used even when direct access to native elements is not
         *    supported.
         *   </p>
         *   <p>
         *    Relying on direct DOM access creates tight coupling between your application and rendering
         *    layers which will make it impossible to separate the two and deploy your application into a
         *    web worker.
         *   </p>
         * </div>
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ElementRef.prototype, "renderView", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    return ElementRef;
})();
exports.ElementRef = ElementRef;
var ElementRef_ = (function (_super) {
    __extends(ElementRef_, _super);
    function ElementRef_(parentView, 
        /**
         * Index of the element inside the {@link ViewRef}.
         *
         * This is used internally by the Angular framework to locate elements.
         */
        boundElementIndex, _renderer) {
        _super.call(this);
        this.parentView = parentView;
        this.boundElementIndex = boundElementIndex;
        this._renderer = _renderer;
    }
    Object.defineProperty(ElementRef_.prototype, "renderView", {
        get: function () { return this.parentView.render; },
        set: function (value) { exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementRef_.prototype, "nativeElement", {
        get: function () { return this._renderer.getNativeElementSync(this); },
        enumerable: true,
        configurable: true
    });
    return ElementRef_;
})(ElementRef);
exports.ElementRef_ = ElementRef_;
},{"angular2/src/facade/exceptions":96}],56:[function(require,module,exports){
'use strict';exports.EVENT_TARGET_SEPARATOR = ':';
var EventConfig = (function () {
    function EventConfig(fieldName, eventName, isLongForm) {
        this.fieldName = fieldName;
        this.eventName = eventName;
        this.isLongForm = isLongForm;
    }
    EventConfig.parse = function (eventConfig) {
        var fieldName = eventConfig, eventName = eventConfig, isLongForm = false;
        var separatorIdx = eventConfig.indexOf(exports.EVENT_TARGET_SEPARATOR);
        if (separatorIdx > -1) {
            // long format: 'fieldName: eventName'
            fieldName = eventConfig.substring(0, separatorIdx).trim();
            eventName = eventConfig.substring(separatorIdx + 1).trim();
            isLongForm = true;
        }
        return new EventConfig(fieldName, eventName, isLongForm);
    };
    EventConfig.prototype.getFullName = function () {
        return this.isLongForm ? "" + this.fieldName + exports.EVENT_TARGET_SEPARATOR + this.eventName :
            this.eventName;
    };
    return EventConfig;
})();
exports.EventConfig = EventConfig;
},{}],57:[function(require,module,exports){
'use strict';(function (LifecycleHooks) {
    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
})(exports.LifecycleHooks || (exports.LifecycleHooks = {}));
var LifecycleHooks = exports.LifecycleHooks;
/**
 * @internal
 */
exports.LIFECYCLE_HOOKS_VALUES = [
    LifecycleHooks.OnInit,
    LifecycleHooks.OnDestroy,
    LifecycleHooks.DoCheck,
    LifecycleHooks.OnChanges,
    LifecycleHooks.AfterContentInit,
    LifecycleHooks.AfterContentChecked,
    LifecycleHooks.AfterViewInit,
    LifecycleHooks.AfterViewChecked
];
},{}],58:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var metadata_1 = require('angular2/src/core/metadata');
var reflection_1 = require('angular2/src/core/reflection/reflection');
function _isPipeMetadata(type) {
    return type instanceof metadata_1.PipeMetadata;
}
/**
 * Resolve a `Type` for {@link PipeMetadata}.
 *
 * This interface can be overridden by the application developer to create custom behavior.
 *
 * See {@link Compiler}
 */
var PipeResolver = (function () {
    function PipeResolver() {
    }
    /**
     * Return {@link PipeMetadata} for a given `Type`.
     */
    PipeResolver.prototype.resolve = function (type) {
        var metas = reflection_1.reflector.annotations(di_1.resolveForwardRef(type));
        if (lang_1.isPresent(metas)) {
            var annotation = metas.find(_isPipeMetadata);
            if (lang_1.isPresent(annotation)) {
                return annotation;
            }
        }
        throw new exceptions_1.BaseException("No Pipe decorator found on " + lang_1.stringify(type));
    };
    PipeResolver = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PipeResolver);
    return PipeResolver;
})();
exports.PipeResolver = PipeResolver;
},{"angular2/src/core/di":38,"angular2/src/core/metadata":71,"angular2/src/core/reflection/reflection":82,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],59:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var lang_1 = require('angular2/src/facade/lang');
var api_1 = require('angular2/src/core/render/api');
var di_1 = require('angular2/src/core/di');
var pipe_provider_1 = require('../pipes/pipe_provider');
var pipes_1 = require('../pipes/pipes');
var view_1 = require('./view');
var element_binder_1 = require('./element_binder');
var element_injector_1 = require('./element_injector');
var directive_resolver_1 = require('./directive_resolver');
var view_resolver_1 = require('./view_resolver');
var pipe_resolver_1 = require('./pipe_resolver');
var view_2 = require('../metadata/view');
var platform_directives_and_pipes_1 = require('angular2/src/core/platform_directives_and_pipes');
var template_commands_1 = require('./template_commands');
var api_2 = require('angular2/src/core/render/api');
var application_tokens_1 = require('angular2/src/core/application_tokens');
var ProtoViewFactory = (function () {
    function ProtoViewFactory(_renderer, _platformPipes, _directiveResolver, _viewResolver, _pipeResolver, _appId) {
        this._renderer = _renderer;
        this._platformPipes = _platformPipes;
        this._directiveResolver = _directiveResolver;
        this._viewResolver = _viewResolver;
        this._pipeResolver = _pipeResolver;
        this._appId = _appId;
        this._cache = new Map();
        this._nextTemplateId = 0;
    }
    ProtoViewFactory.prototype.clearCache = function () { this._cache.clear(); };
    ProtoViewFactory.prototype.createHost = function (compiledHostTemplate) {
        var compiledTemplate = compiledHostTemplate.template;
        var result = this._cache.get(compiledTemplate.id);
        if (lang_1.isBlank(result)) {
            var emptyMap = {};
            var shortId = this._appId + "-" + this._nextTemplateId++;
            this._renderer.registerComponentTemplate(new api_1.RenderComponentTemplate(compiledTemplate.id, shortId, view_2.ViewEncapsulation.None, compiledTemplate.commands, []));
            result =
                new view_1.AppProtoView(compiledTemplate.id, compiledTemplate.commands, view_1.ViewType.HOST, true, compiledTemplate.changeDetectorFactory, null, new pipes_1.ProtoPipes(emptyMap));
            this._cache.set(compiledTemplate.id, result);
        }
        return result;
    };
    ProtoViewFactory.prototype._createComponent = function (cmd) {
        var _this = this;
        var nestedProtoView = this._cache.get(cmd.templateId);
        if (lang_1.isBlank(nestedProtoView)) {
            var component = cmd.directives[0];
            var view = this._viewResolver.resolve(component);
            var compiledTemplate = cmd.templateGetter();
            var styles = _flattenStyleArr(compiledTemplate.styles, []);
            var shortId = this._appId + "-" + this._nextTemplateId++;
            this._renderer.registerComponentTemplate(new api_1.RenderComponentTemplate(compiledTemplate.id, shortId, cmd.encapsulation, compiledTemplate.commands, styles));
            var boundPipes = this._flattenPipes(view).map(function (pipe) { return _this._bindPipe(pipe); });
            nestedProtoView = new view_1.AppProtoView(compiledTemplate.id, compiledTemplate.commands, view_1.ViewType.COMPONENT, true, compiledTemplate.changeDetectorFactory, null, pipes_1.ProtoPipes.fromProviders(boundPipes));
            // Note: The cache is updated before recursing
            // to be able to resolve cycles
            this._cache.set(compiledTemplate.id, nestedProtoView);
            this._initializeProtoView(nestedProtoView, null);
        }
        return nestedProtoView;
    };
    ProtoViewFactory.prototype._createEmbeddedTemplate = function (cmd, parent) {
        var nestedProtoView = new view_1.AppProtoView(parent.templateId, cmd.children, view_1.ViewType.EMBEDDED, cmd.isMerged, cmd.changeDetectorFactory, arrayToMap(cmd.variableNameAndValues, true), new pipes_1.ProtoPipes(parent.pipes.config));
        if (cmd.isMerged) {
            this.initializeProtoViewIfNeeded(nestedProtoView);
        }
        return nestedProtoView;
    };
    ProtoViewFactory.prototype.initializeProtoViewIfNeeded = function (protoView) {
        if (!protoView.isInitialized()) {
            var render = this._renderer.createProtoView(protoView.templateId, protoView.templateCmds);
            this._initializeProtoView(protoView, render);
        }
    };
    ProtoViewFactory.prototype._initializeProtoView = function (protoView, render) {
        var initializer = new _ProtoViewInitializer(protoView, this._directiveResolver, this);
        template_commands_1.visitAllCommands(initializer, protoView.templateCmds);
        var mergeInfo = new view_1.AppProtoViewMergeInfo(initializer.mergeEmbeddedViewCount, initializer.mergeElementCount, initializer.mergeViewCount);
        protoView.init(render, initializer.elementBinders, initializer.boundTextCount, mergeInfo, initializer.variableLocations);
    };
    ProtoViewFactory.prototype._bindPipe = function (typeOrProvider) {
        var meta = this._pipeResolver.resolve(typeOrProvider);
        return pipe_provider_1.PipeProvider.createFromType(typeOrProvider, meta);
    };
    ProtoViewFactory.prototype._flattenPipes = function (view) {
        var pipes = [];
        if (lang_1.isPresent(this._platformPipes)) {
            _flattenArray(this._platformPipes, pipes);
        }
        if (lang_1.isPresent(view.pipes)) {
            _flattenArray(view.pipes, pipes);
        }
        return pipes;
    };
    ProtoViewFactory = __decorate([
        di_1.Injectable(),
        __param(1, di_1.Optional()),
        __param(1, di_1.Inject(platform_directives_and_pipes_1.PLATFORM_PIPES)),
        __param(5, di_1.Inject(application_tokens_1.APP_ID)), 
        __metadata('design:paramtypes', [api_2.Renderer, Array, directive_resolver_1.DirectiveResolver, view_resolver_1.ViewResolver, pipe_resolver_1.PipeResolver, String])
    ], ProtoViewFactory);
    return ProtoViewFactory;
})();
exports.ProtoViewFactory = ProtoViewFactory;
function createComponent(protoViewFactory, cmd) {
    return protoViewFactory._createComponent(cmd);
}
function createEmbeddedTemplate(protoViewFactory, cmd, parent) {
    return protoViewFactory._createEmbeddedTemplate(cmd, parent);
}
var _ProtoViewInitializer = (function () {
    function _ProtoViewInitializer(_protoView, _directiveResolver, _protoViewFactory) {
        this._protoView = _protoView;
        this._directiveResolver = _directiveResolver;
        this._protoViewFactory = _protoViewFactory;
        this.variableLocations = new Map();
        this.boundTextCount = 0;
        this.boundElementIndex = 0;
        this.elementBinderStack = [];
        this.distanceToParentElementBinder = 0;
        this.distanceToParentProtoElementInjector = 0;
        this.elementBinders = [];
        this.mergeEmbeddedViewCount = 0;
        this.mergeElementCount = 0;
        this.mergeViewCount = 1;
    }
    _ProtoViewInitializer.prototype.visitText = function (cmd, context) {
        if (cmd.isBound) {
            this.boundTextCount++;
        }
        return null;
    };
    _ProtoViewInitializer.prototype.visitNgContent = function (cmd, context) { return null; };
    _ProtoViewInitializer.prototype.visitBeginElement = function (cmd, context) {
        if (cmd.isBound) {
            this._visitBeginBoundElement(cmd, null);
        }
        else {
            this._visitBeginElement(cmd, null, null);
        }
        return null;
    };
    _ProtoViewInitializer.prototype.visitEndElement = function (context) { return this._visitEndElement(); };
    _ProtoViewInitializer.prototype.visitBeginComponent = function (cmd, context) {
        var nestedProtoView = createComponent(this._protoViewFactory, cmd);
        return this._visitBeginBoundElement(cmd, nestedProtoView);
    };
    _ProtoViewInitializer.prototype.visitEndComponent = function (context) { return this._visitEndElement(); };
    _ProtoViewInitializer.prototype.visitEmbeddedTemplate = function (cmd, context) {
        var nestedProtoView = createEmbeddedTemplate(this._protoViewFactory, cmd, this._protoView);
        if (cmd.isMerged) {
            this.mergeEmbeddedViewCount++;
        }
        this._visitBeginBoundElement(cmd, nestedProtoView);
        return this._visitEndElement();
    };
    _ProtoViewInitializer.prototype._visitBeginBoundElement = function (cmd, nestedProtoView) {
        if (lang_1.isPresent(nestedProtoView) && nestedProtoView.isMergable) {
            this.mergeElementCount += nestedProtoView.mergeInfo.elementCount;
            this.mergeViewCount += nestedProtoView.mergeInfo.viewCount;
            this.mergeEmbeddedViewCount += nestedProtoView.mergeInfo.embeddedViewCount;
        }
        var elementBinder = _createElementBinder(this._directiveResolver, nestedProtoView, this.elementBinderStack, this.boundElementIndex, this.distanceToParentElementBinder, this.distanceToParentProtoElementInjector, cmd);
        this.elementBinders.push(elementBinder);
        var protoElementInjector = elementBinder.protoElementInjector;
        for (var i = 0; i < cmd.variableNameAndValues.length; i += 2) {
            this.variableLocations.set(cmd.variableNameAndValues[i], this.boundElementIndex);
        }
        this.boundElementIndex++;
        this.mergeElementCount++;
        return this._visitBeginElement(cmd, elementBinder, protoElementInjector);
    };
    _ProtoViewInitializer.prototype._visitBeginElement = function (cmd, elementBinder, protoElementInjector) {
        this.distanceToParentElementBinder =
            lang_1.isPresent(elementBinder) ? 1 : this.distanceToParentElementBinder + 1;
        this.distanceToParentProtoElementInjector =
            lang_1.isPresent(protoElementInjector) ? 1 : this.distanceToParentProtoElementInjector + 1;
        this.elementBinderStack.push(elementBinder);
        return null;
    };
    _ProtoViewInitializer.prototype._visitEndElement = function () {
        var parentElementBinder = this.elementBinderStack.pop();
        var parentProtoElementInjector = lang_1.isPresent(parentElementBinder) ? parentElementBinder.protoElementInjector : null;
        this.distanceToParentElementBinder = lang_1.isPresent(parentElementBinder) ?
            parentElementBinder.distanceToParent :
            this.distanceToParentElementBinder - 1;
        this.distanceToParentProtoElementInjector = lang_1.isPresent(parentProtoElementInjector) ?
            parentProtoElementInjector.distanceToParent :
            this.distanceToParentProtoElementInjector - 1;
        return null;
    };
    return _ProtoViewInitializer;
})();
function _createElementBinder(directiveResolver, nestedProtoView, elementBinderStack, boundElementIndex, distanceToParentBinder, distanceToParentPei, beginElementCmd) {
    var parentElementBinder = null;
    var parentProtoElementInjector = null;
    if (distanceToParentBinder > 0) {
        parentElementBinder = elementBinderStack[elementBinderStack.length - distanceToParentBinder];
    }
    if (lang_1.isBlank(parentElementBinder)) {
        distanceToParentBinder = -1;
    }
    if (distanceToParentPei > 0) {
        var peiBinder = elementBinderStack[elementBinderStack.length - distanceToParentPei];
        if (lang_1.isPresent(peiBinder)) {
            parentProtoElementInjector = peiBinder.protoElementInjector;
        }
    }
    if (lang_1.isBlank(parentProtoElementInjector)) {
        distanceToParentPei = -1;
    }
    var componentDirectiveProvider = null;
    var isEmbeddedTemplate = false;
    var directiveProviders = beginElementCmd.directives.map(function (type) { return provideDirective(directiveResolver, type); });
    if (beginElementCmd instanceof template_commands_1.BeginComponentCmd) {
        componentDirectiveProvider = directiveProviders[0];
    }
    else if (beginElementCmd instanceof template_commands_1.EmbeddedTemplateCmd) {
        isEmbeddedTemplate = true;
    }
    var protoElementInjector = null;
    // Create a protoElementInjector for any element that either has bindings *or* has one
    // or more var- defined *or* for <template> elements:
    // - Elements with a var- defined need a their own element injector
    //   so that, when hydrating, $implicit can be set to the element.
    // - <template> elements need their own ElementInjector so that we can query their TemplateRef
    var hasVariables = beginElementCmd.variableNameAndValues.length > 0;
    if (directiveProviders.length > 0 || hasVariables || isEmbeddedTemplate) {
        var directiveVariableBindings = new Map();
        if (!isEmbeddedTemplate) {
            directiveVariableBindings = createDirectiveVariableBindings(beginElementCmd.variableNameAndValues, directiveProviders);
        }
        protoElementInjector = element_injector_1.ProtoElementInjector.create(parentProtoElementInjector, boundElementIndex, directiveProviders, lang_1.isPresent(componentDirectiveProvider), distanceToParentPei, directiveVariableBindings);
        protoElementInjector.attributes = arrayToMap(beginElementCmd.attrNameAndValues, false);
    }
    return new element_binder_1.ElementBinder(boundElementIndex, parentElementBinder, distanceToParentBinder, protoElementInjector, componentDirectiveProvider, nestedProtoView);
}
function provideDirective(directiveResolver, type) {
    var annotation = directiveResolver.resolve(type);
    return element_injector_1.DirectiveProvider.createFromType(type, annotation);
}
function createDirectiveVariableBindings(variableNameAndValues, directiveProviders) {
    var directiveVariableBindings = new Map();
    for (var i = 0; i < variableNameAndValues.length; i += 2) {
        var templateName = variableNameAndValues[i];
        var dirIndex = variableNameAndValues[i + 1];
        if (lang_1.isNumber(dirIndex)) {
            directiveVariableBindings.set(templateName, dirIndex);
        }
        else {
            // a variable without a directive index -> reference the element
            directiveVariableBindings.set(templateName, null);
        }
    }
    return directiveVariableBindings;
}
exports.createDirectiveVariableBindings = createDirectiveVariableBindings;
function arrayToMap(arr, inverse) {
    var result = new Map();
    for (var i = 0; i < arr.length; i += 2) {
        if (inverse) {
            result.set(arr[i + 1], arr[i]);
        }
        else {
            result.set(arr[i], arr[i + 1]);
        }
    }
    return result;
}
function _flattenArray(tree, out) {
    for (var i = 0; i < tree.length; i++) {
        var item = di_1.resolveForwardRef(tree[i]);
        if (lang_1.isArray(item)) {
            _flattenArray(item, out);
        }
        else {
            out.push(item);
        }
    }
}
function _flattenStyleArr(arr, out) {
    for (var i = 0; i < arr.length; i++) {
        var entry = arr[i];
        if (lang_1.isArray(entry)) {
            _flattenStyleArr(entry, out);
        }
        else {
            out.push(entry);
        }
    }
    return out;
}
},{"../metadata/view":74,"../pipes/pipe_provider":75,"../pipes/pipes":76,"./directive_resolver":51,"./element_binder":53,"./element_injector":54,"./pipe_resolver":58,"./template_commands":61,"./view":63,"./view_resolver":70,"angular2/src/core/application_tokens":4,"angular2/src/core/di":38,"angular2/src/core/platform_directives_and_pipes":78,"angular2/src/core/render/api":86,"angular2/src/facade/lang":98}],60:[function(require,module,exports){
'use strict';var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var async_1 = require('angular2/src/facade/async');
/**
 * An unmodifiable list of items that Angular keeps up to date when the state
 * of the application changes.
 *
 * The type of object that {@link QueryMetadata} and {@link ViewQueryMetadata} provide.
 *
 * Implements an iterable interface, therefore it can be used in both ES6
 * javascript `for (var i of items)` loops as well as in Angular templates with
 * `*ngFor="#i of myList"`.
 *
 * Changes can be observed by subscribing to the changes `Observable`.
 *
 * NOTE: In the future this class will implement an `Observable` interface.
 *
 * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
 * ```typescript
 * @Component({...})
 * class Container {
 *   constructor(@Query(Item) items: QueryList<Item>) {
 *     items.changes.subscribe(_ => console.log(items.length));
 *   }
 * }
 * ```
 */
var QueryList = (function () {
    function QueryList() {
        this._results = [];
        this._emitter = new async_1.EventEmitter();
    }
    Object.defineProperty(QueryList.prototype, "changes", {
        get: function () { return this._emitter; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "length", {
        get: function () { return this._results.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "first", {
        get: function () { return collection_1.ListWrapper.first(this._results); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "last", {
        get: function () { return collection_1.ListWrapper.last(this._results); },
        enumerable: true,
        configurable: true
    });
    /**
     * returns a new array with the passed in function applied to each element.
     */
    QueryList.prototype.map = function (fn) { return this._results.map(fn); };
    /**
     * returns a filtered array.
     */
    QueryList.prototype.filter = function (fn) { return this._results.filter(fn); };
    /**
     * returns a reduced value.
     */
    QueryList.prototype.reduce = function (fn, init) { return this._results.reduce(fn, init); };
    /**
     * converts QueryList into an array
     */
    QueryList.prototype.toArray = function () { return collection_1.ListWrapper.clone(this._results); };
    QueryList.prototype[lang_1.getSymbolIterator()] = function () { return this._results[lang_1.getSymbolIterator()](); };
    QueryList.prototype.toString = function () { return this._results.toString(); };
    /**
     * @internal
     */
    QueryList.prototype.reset = function (res) { this._results = res; };
    /** @internal */
    QueryList.prototype.notifyOnChanges = function () { this._emitter.emit(this); };
    return QueryList;
})();
exports.QueryList = QueryList;
},{"angular2/src/facade/async":93,"angular2/src/facade/collection":94,"angular2/src/facade/lang":98}],61:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var api_1 = require('angular2/src/core/render/api');
var metadata_1 = require('angular2/src/core/metadata');
// Export ViewEncapsulation so that compiled templates only need to depend
// on template_commands.
var metadata_2 = require('angular2/src/core/metadata');
exports.ViewEncapsulation = metadata_2.ViewEncapsulation;
/**
 * A compiled host template.
 *
 * This is const as we are storing it as annotation
 * for the compiled component type.
 */
var CompiledHostTemplate = (function () {
    function CompiledHostTemplate(template) {
        this.template = template;
    }
    CompiledHostTemplate = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [CompiledComponentTemplate])
    ], CompiledHostTemplate);
    return CompiledHostTemplate;
})();
exports.CompiledHostTemplate = CompiledHostTemplate;
/**
 * A compiled template.
 */
var CompiledComponentTemplate = (function () {
    function CompiledComponentTemplate(id, changeDetectorFactory, commands, styles) {
        this.id = id;
        this.changeDetectorFactory = changeDetectorFactory;
        this.commands = commands;
        this.styles = styles;
    }
    CompiledComponentTemplate = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String, Function, Array, Array])
    ], CompiledComponentTemplate);
    return CompiledComponentTemplate;
})();
exports.CompiledComponentTemplate = CompiledComponentTemplate;
var EMPTY_ARR = lang_1.CONST_EXPR([]);
var TextCmd = (function () {
    function TextCmd(value, isBound, ngContentIndex) {
        this.value = value;
        this.isBound = isBound;
        this.ngContentIndex = ngContentIndex;
    }
    TextCmd.prototype.visit = function (visitor, context) {
        return visitor.visitText(this, context);
    };
    TextCmd = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String, Boolean, Number])
    ], TextCmd);
    return TextCmd;
})();
exports.TextCmd = TextCmd;
var NgContentCmd = (function () {
    function NgContentCmd(index, ngContentIndex) {
        this.index = index;
        this.ngContentIndex = ngContentIndex;
        this.isBound = false;
    }
    NgContentCmd.prototype.visit = function (visitor, context) {
        return visitor.visitNgContent(this, context);
    };
    NgContentCmd = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Number, Number])
    ], NgContentCmd);
    return NgContentCmd;
})();
exports.NgContentCmd = NgContentCmd;
var IBeginElementCmd = (function (_super) {
    __extends(IBeginElementCmd, _super);
    function IBeginElementCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(IBeginElementCmd.prototype, "variableNameAndValues", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IBeginElementCmd.prototype, "eventTargetAndNames", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IBeginElementCmd.prototype, "directives", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    return IBeginElementCmd;
})(api_1.RenderBeginElementCmd);
exports.IBeginElementCmd = IBeginElementCmd;
var BeginElementCmd = (function () {
    function BeginElementCmd(name, attrNameAndValues, eventTargetAndNames, variableNameAndValues, directives, isBound, ngContentIndex) {
        this.name = name;
        this.attrNameAndValues = attrNameAndValues;
        this.eventTargetAndNames = eventTargetAndNames;
        this.variableNameAndValues = variableNameAndValues;
        this.directives = directives;
        this.isBound = isBound;
        this.ngContentIndex = ngContentIndex;
    }
    BeginElementCmd.prototype.visit = function (visitor, context) {
        return visitor.visitBeginElement(this, context);
    };
    BeginElementCmd = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String, Array, Array, Array, Array, Boolean, Number])
    ], BeginElementCmd);
    return BeginElementCmd;
})();
exports.BeginElementCmd = BeginElementCmd;
var EndElementCmd = (function () {
    function EndElementCmd() {
    }
    EndElementCmd.prototype.visit = function (visitor, context) {
        return visitor.visitEndElement(context);
    };
    EndElementCmd = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], EndElementCmd);
    return EndElementCmd;
})();
exports.EndElementCmd = EndElementCmd;
var BeginComponentCmd = (function () {
    function BeginComponentCmd(name, attrNameAndValues, eventTargetAndNames, variableNameAndValues, directives, encapsulation, ngContentIndex, 
        // Note: the template needs to be stored as a function
        // so that we can resolve cycles
        templateGetter /*() => CompiledComponentTemplate*/) {
        this.name = name;
        this.attrNameAndValues = attrNameAndValues;
        this.eventTargetAndNames = eventTargetAndNames;
        this.variableNameAndValues = variableNameAndValues;
        this.directives = directives;
        this.encapsulation = encapsulation;
        this.ngContentIndex = ngContentIndex;
        this.templateGetter = templateGetter;
        this.isBound = true;
    }
    Object.defineProperty(BeginComponentCmd.prototype, "templateId", {
        get: function () { return this.templateGetter().id; },
        enumerable: true,
        configurable: true
    });
    BeginComponentCmd.prototype.visit = function (visitor, context) {
        return visitor.visitBeginComponent(this, context);
    };
    BeginComponentCmd = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String, Array, Array, Array, Array, Number, Number, Function])
    ], BeginComponentCmd);
    return BeginComponentCmd;
})();
exports.BeginComponentCmd = BeginComponentCmd;
var EndComponentCmd = (function () {
    function EndComponentCmd() {
    }
    EndComponentCmd.prototype.visit = function (visitor, context) {
        return visitor.visitEndComponent(context);
    };
    EndComponentCmd = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], EndComponentCmd);
    return EndComponentCmd;
})();
exports.EndComponentCmd = EndComponentCmd;
var EmbeddedTemplateCmd = (function () {
    function EmbeddedTemplateCmd(attrNameAndValues, variableNameAndValues, directives, isMerged, ngContentIndex, changeDetectorFactory, children) {
        this.attrNameAndValues = attrNameAndValues;
        this.variableNameAndValues = variableNameAndValues;
        this.directives = directives;
        this.isMerged = isMerged;
        this.ngContentIndex = ngContentIndex;
        this.changeDetectorFactory = changeDetectorFactory;
        this.children = children;
        this.isBound = true;
        this.name = null;
        this.eventTargetAndNames = EMPTY_ARR;
    }
    EmbeddedTemplateCmd.prototype.visit = function (visitor, context) {
        return visitor.visitEmbeddedTemplate(this, context);
    };
    EmbeddedTemplateCmd = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Array, Array, Array, Boolean, Number, Function, Array])
    ], EmbeddedTemplateCmd);
    return EmbeddedTemplateCmd;
})();
exports.EmbeddedTemplateCmd = EmbeddedTemplateCmd;
function visitAllCommands(visitor, cmds, context) {
    if (context === void 0) { context = null; }
    for (var i = 0; i < cmds.length; i++) {
        cmds[i].visit(visitor, context);
    }
}
exports.visitAllCommands = visitAllCommands;
},{"angular2/src/core/metadata":71,"angular2/src/core/render/api":86,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],62:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_ref_1 = require('./view_ref');
/**
 * Represents an Embedded Template that can be used to instantiate Embedded Views.
 *
 * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
 * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
 * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
 * `TemplateRef` from a Component or a Directive via {@link Query}.
 *
 * To instantiate Embedded Views based on a Template, use
 * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
 * View Container.
 */
var TemplateRef = (function () {
    function TemplateRef() {
    }
    return TemplateRef;
})();
exports.TemplateRef = TemplateRef;
var TemplateRef_ = (function (_super) {
    __extends(TemplateRef_, _super);
    function TemplateRef_(elementRef) {
        _super.call(this);
        this.elementRef = elementRef;
    }
    TemplateRef_.prototype._getProtoView = function () {
        var elementRef = this.elementRef;
        var parentView = view_ref_1.internalView(elementRef.parentView);
        return parentView.proto.elementBinders[elementRef.boundElementIndex - parentView.elementOffset]
            .nestedProtoView;
    };
    Object.defineProperty(TemplateRef_.prototype, "protoViewRef", {
        /**
         * Reference to the ProtoView used for creating Embedded Views that are based on the compiled
         * Embedded Template.
         */
        get: function () { return this._getProtoView().ref; },
        enumerable: true,
        configurable: true
    });
    TemplateRef_.prototype.hasLocal = function (name) {
        return this._getProtoView().templateVariableBindings.has(name);
    };
    return TemplateRef_;
})(TemplateRef);
exports.TemplateRef_ = TemplateRef_;
},{"./view_ref":69}],63:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var collection_1 = require('angular2/src/facade/collection');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var interfaces_1 = require('angular2/src/core/change_detection/interfaces');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var view_ref_1 = require('./view_ref');
var util_1 = require('angular2/src/core/render/util');
var view_ref_2 = require("./view_ref");
var interfaces_2 = require('angular2/src/core/change_detection/interfaces');
exports.DebugContext = interfaces_2.DebugContext;
var REFLECT_PREFIX = 'ng-reflect-';
(function (ViewType) {
    // A view that contains the host element with bound component directive.
    // Contains a COMPONENT view
    ViewType[ViewType["HOST"] = 0] = "HOST";
    // The view of the component
    // Can contain 0 to n EMBEDDED views
    ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
    // A view that is embedded into another View via a <template> element
    // inside of a COMPONENT view
    ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
})(exports.ViewType || (exports.ViewType = {}));
var ViewType = exports.ViewType;
var AppViewContainer = (function () {
    function AppViewContainer() {
        // The order in this list matches the DOM order.
        this.views = [];
    }
    return AppViewContainer;
})();
exports.AppViewContainer = AppViewContainer;
/**
 * Cost of making objects: http://jsperf.com/instantiate-size-of-object
 *
 */
var AppView = (function () {
    function AppView(renderer, proto, viewOffset, elementOffset, textOffset, protoLocals, render, renderFragment, containerElementInjector) {
        this.renderer = renderer;
        this.proto = proto;
        this.viewOffset = viewOffset;
        this.elementOffset = elementOffset;
        this.textOffset = textOffset;
        this.render = render;
        this.renderFragment = renderFragment;
        this.containerElementInjector = containerElementInjector;
        // AppViews that have been merged in depth first order.
        // This list is shared between all merged views. Use this.elementOffset to get the local
        // entries.
        this.views = null;
        // ElementInjectors of all AppViews in views grouped by view.
        // This list is shared between all merged views. Use this.elementOffset to get the local
        // entries.
        this.elementInjectors = null;
        // ViewContainers of all AppViews in views grouped by view.
        // This list is shared between all merged views. Use this.elementOffset to get the local
        // entries.
        this.viewContainers = null;
        // PreBuiltObjects of all AppViews in views grouped by view.
        // This list is shared between all merged views. Use this.elementOffset to get the local
        // entries.
        this.preBuiltObjects = null;
        this.changeDetector = null;
        /**
         * The context against which data-binding expressions in this view are evaluated against.
         * This is always a component instance.
         */
        this.context = null;
        this.ref = new view_ref_2.ViewRef_(this);
        this.locals = new change_detection_1.Locals(null, collection_1.MapWrapper.clone(protoLocals)); // TODO optimize this
    }
    AppView.prototype.init = function (changeDetector, elementInjectors, rootElementInjectors, preBuiltObjects, views, elementRefs, viewContainers) {
        this.changeDetector = changeDetector;
        this.elementInjectors = elementInjectors;
        this.rootElementInjectors = rootElementInjectors;
        this.preBuiltObjects = preBuiltObjects;
        this.views = views;
        this.elementRefs = elementRefs;
        this.viewContainers = viewContainers;
    };
    AppView.prototype.setLocal = function (contextName, value) {
        if (!this.hydrated())
            throw new exceptions_1.BaseException('Cannot set locals on dehydrated view.');
        if (!this.proto.templateVariableBindings.has(contextName)) {
            return;
        }
        var templateName = this.proto.templateVariableBindings.get(contextName);
        this.locals.set(templateName, value);
    };
    AppView.prototype.hydrated = function () { return lang_1.isPresent(this.context); };
    /**
     * Triggers the event handlers for the element and the directives.
     *
     * This method is intended to be called from directive EventEmitters.
     *
     * @param {string} eventName
     * @param {*} eventObj
     * @param {number} boundElementIndex
     */
    AppView.prototype.triggerEventHandlers = function (eventName, eventObj, boundElementIndex) {
        var locals = new collection_1.Map();
        locals.set('$event', eventObj);
        this.dispatchEvent(boundElementIndex, eventName, locals);
    };
    // dispatch to element injector or text nodes based on context
    AppView.prototype.notifyOnBinding = function (b, currentValue) {
        if (b.isTextNode()) {
            this.renderer.setText(this.render, b.elementIndex + this.textOffset, currentValue);
        }
        else {
            var elementRef = this.elementRefs[this.elementOffset + b.elementIndex];
            if (b.isElementProperty()) {
                this.renderer.setElementProperty(elementRef, b.name, currentValue);
            }
            else if (b.isElementAttribute()) {
                this.renderer.setElementAttribute(elementRef, b.name, lang_1.isPresent(currentValue) ? "" + currentValue : null);
            }
            else if (b.isElementClass()) {
                this.renderer.setElementClass(elementRef, b.name, currentValue);
            }
            else if (b.isElementStyle()) {
                var unit = lang_1.isPresent(b.unit) ? b.unit : '';
                this.renderer.setElementStyle(elementRef, b.name, lang_1.isPresent(currentValue) ? "" + currentValue + unit : null);
            }
            else {
                throw new exceptions_1.BaseException('Unsupported directive record');
            }
        }
    };
    AppView.prototype.logBindingUpdate = function (b, value) {
        if (b.isDirective() || b.isElementProperty()) {
            var elementRef = this.elementRefs[this.elementOffset + b.elementIndex];
            this.renderer.setBindingDebugInfo(elementRef, "" + REFLECT_PREFIX + util_1.camelCaseToDashCase(b.name), "" + value);
        }
    };
    AppView.prototype.notifyAfterContentChecked = function () {
        var eiCount = this.proto.elementBinders.length;
        var ei = this.elementInjectors;
        for (var i = eiCount - 1; i >= 0; i--) {
            if (lang_1.isPresent(ei[i + this.elementOffset]))
                ei[i + this.elementOffset].ngAfterContentChecked();
        }
    };
    AppView.prototype.notifyAfterViewChecked = function () {
        var eiCount = this.proto.elementBinders.length;
        var ei = this.elementInjectors;
        for (var i = eiCount - 1; i >= 0; i--) {
            if (lang_1.isPresent(ei[i + this.elementOffset]))
                ei[i + this.elementOffset].ngAfterViewChecked();
        }
    };
    AppView.prototype.getDirectiveFor = function (directive) {
        var elementInjector = this.elementInjectors[this.elementOffset + directive.elementIndex];
        return elementInjector.getDirectiveAtIndex(directive.directiveIndex);
    };
    AppView.prototype.getNestedView = function (boundElementIndex) {
        var eli = this.elementInjectors[boundElementIndex];
        return lang_1.isPresent(eli) ? eli.getNestedView() : null;
    };
    AppView.prototype.getContainerElement = function () {
        return lang_1.isPresent(this.containerElementInjector) ?
            this.containerElementInjector.getElementRef() :
            null;
    };
    AppView.prototype.getDebugContext = function (elementIndex, directiveIndex) {
        try {
            var offsettedIndex = this.elementOffset + elementIndex;
            var hasRefForIndex = offsettedIndex < this.elementRefs.length;
            var elementRef = hasRefForIndex ? this.elementRefs[this.elementOffset + elementIndex] : null;
            var container = this.getContainerElement();
            var ei = hasRefForIndex ? this.elementInjectors[this.elementOffset + elementIndex] : null;
            var element = lang_1.isPresent(elementRef) ? elementRef.nativeElement : null;
            var componentElement = lang_1.isPresent(container) ? container.nativeElement : null;
            var directive = lang_1.isPresent(directiveIndex) ? this.getDirectiveFor(directiveIndex) : null;
            var injector = lang_1.isPresent(ei) ? ei.getInjector() : null;
            return new interfaces_1.DebugContext(element, componentElement, directive, this.context, _localsToStringMap(this.locals), injector);
        }
        catch (e) {
            // TODO: vsavkin log the exception once we have a good way to log errors and warnings
            // if an error happens during getting the debug context, we return null.
            return null;
        }
    };
    AppView.prototype.getDetectorFor = function (directive) {
        var childView = this.getNestedView(this.elementOffset + directive.elementIndex);
        return lang_1.isPresent(childView) ? childView.changeDetector : null;
    };
    AppView.prototype.invokeElementMethod = function (elementIndex, methodName, args) {
        this.renderer.invokeElementMethod(this.elementRefs[elementIndex], methodName, args);
    };
    // implementation of RenderEventDispatcher#dispatchRenderEvent
    AppView.prototype.dispatchRenderEvent = function (boundElementIndex, eventName, locals) {
        var elementRef = this.elementRefs[boundElementIndex];
        var view = view_ref_1.internalView(elementRef.parentView);
        return view.dispatchEvent(elementRef.boundElementIndex, eventName, locals);
    };
    // returns false if preventDefault must be applied to the DOM event
    AppView.prototype.dispatchEvent = function (boundElementIndex, eventName, locals) {
        try {
            if (this.hydrated()) {
                return !this.changeDetector.handleEvent(eventName, boundElementIndex - this.elementOffset, new change_detection_1.Locals(this.locals, locals));
            }
            else {
                return true;
            }
        }
        catch (e) {
            var c = this.getDebugContext(boundElementIndex - this.elementOffset, null);
            var context = lang_1.isPresent(c) ? new _Context(c.element, c.componentElement, c.context, c.locals, c.injector) :
                null;
            throw new EventEvaluationError(eventName, e, e.stack, context);
        }
    };
    Object.defineProperty(AppView.prototype, "ownBindersCount", {
        get: function () { return this.proto.elementBinders.length; },
        enumerable: true,
        configurable: true
    });
    return AppView;
})();
exports.AppView = AppView;
function _localsToStringMap(locals) {
    var res = {};
    var c = locals;
    while (lang_1.isPresent(c)) {
        res = collection_1.StringMapWrapper.merge(res, collection_1.MapWrapper.toStringMap(c.current));
        c = c.parent;
    }
    return res;
}
/**
 * Error context included when an event handler throws an exception.
 */
var _Context = (function () {
    function _Context(element, componentElement, context, locals, injector) {
        this.element = element;
        this.componentElement = componentElement;
        this.context = context;
        this.locals = locals;
        this.injector = injector;
    }
    return _Context;
})();
/**
 * Wraps an exception thrown by an event handler.
 */
var EventEvaluationError = (function (_super) {
    __extends(EventEvaluationError, _super);
    function EventEvaluationError(eventName, originalException, originalStack, context) {
        _super.call(this, "Error during evaluation of \"" + eventName + "\"", originalException, originalStack, context);
    }
    return EventEvaluationError;
})(exceptions_1.WrappedException);
var AppProtoViewMergeInfo = (function () {
    function AppProtoViewMergeInfo(embeddedViewCount, elementCount, viewCount) {
        this.embeddedViewCount = embeddedViewCount;
        this.elementCount = elementCount;
        this.viewCount = viewCount;
    }
    return AppProtoViewMergeInfo;
})();
exports.AppProtoViewMergeInfo = AppProtoViewMergeInfo;
/**
 *
 */
var AppProtoView = (function () {
    function AppProtoView(templateId, templateCmds, type, isMergable, changeDetectorFactory, templateVariableBindings, pipes) {
        this.templateId = templateId;
        this.templateCmds = templateCmds;
        this.type = type;
        this.isMergable = isMergable;
        this.changeDetectorFactory = changeDetectorFactory;
        this.templateVariableBindings = templateVariableBindings;
        this.pipes = pipes;
        this.elementBinders = null;
        this.mergeInfo = null;
        this.variableLocations = null;
        this.textBindingCount = null;
        this.render = null;
        this.ref = new view_ref_2.ProtoViewRef_(this);
    }
    AppProtoView.prototype.init = function (render, elementBinders, textBindingCount, mergeInfo, variableLocations) {
        var _this = this;
        this.render = render;
        this.elementBinders = elementBinders;
        this.textBindingCount = textBindingCount;
        this.mergeInfo = mergeInfo;
        this.variableLocations = variableLocations;
        this.protoLocals = new collection_1.Map();
        if (lang_1.isPresent(this.templateVariableBindings)) {
            this.templateVariableBindings.forEach(function (templateName, _) { _this.protoLocals.set(templateName, null); });
        }
        if (lang_1.isPresent(variableLocations)) {
            // The view's locals needs to have a full set of variable names at construction time
            // in order to prevent new variables from being set later in the lifecycle. Since we don't
            // want
            // to actually create variable bindings for the $implicit bindings, add to the
            // protoLocals manually.
            variableLocations.forEach(function (_, templateName) { _this.protoLocals.set(templateName, null); });
        }
    };
    AppProtoView.prototype.isInitialized = function () { return lang_1.isPresent(this.elementBinders); };
    return AppProtoView;
})();
exports.AppProtoView = AppProtoView;
},{"./view_ref":69,"angular2/src/core/change_detection/change_detection":8,"angular2/src/core/change_detection/interfaces":25,"angular2/src/core/render/util":87,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],64:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var collection_1 = require('angular2/src/facade/collection');
var exceptions_1 = require('angular2/src/facade/exceptions');
var lang_1 = require('angular2/src/facade/lang');
var view_ref_1 = require('./view_ref');
/**
 * Represents a container where one or more Views can be attached.
 *
 * The container can contain two kinds of Views. Host Views, created by instantiating a
 * {@link Component} via {@link #createHostView}, and Embedded Views, created by instantiating an
 * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
 *
 * The location of the View Container within the containing View is specified by the Anchor
 * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
 * have a single View Container.
 *
 * Root elements of Views attached to this container become siblings of the Anchor Element in
 * the Rendered View.
 *
 * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
 * with `ViewContainerRef` on the Element, or you obtain it via
 * {@link AppViewManager#getViewContainer}.
 *
 * <!-- TODO(i): we are also considering ElementRef#viewContainer api -->
 */
var ViewContainerRef = (function () {
    function ViewContainerRef() {
    }
    /**
     * Destroys all Views in this container.
     */
    ViewContainerRef.prototype.clear = function () {
        for (var i = this.length - 1; i >= 0; i--) {
            this.remove(i);
        }
    };
    Object.defineProperty(ViewContainerRef.prototype, "length", {
        /**
         * Returns the number of Views currently attached to this container.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return ViewContainerRef;
})();
exports.ViewContainerRef = ViewContainerRef;
var ViewContainerRef_ = (function (_super) {
    __extends(ViewContainerRef_, _super);
    function ViewContainerRef_(viewManager, element) {
        _super.call(this);
        this.viewManager = viewManager;
        this.element = element;
    }
    ViewContainerRef_.prototype._getViews = function () {
        var element = this.element;
        var vc = view_ref_1.internalView(element.parentView).viewContainers[element.boundElementIndex];
        return lang_1.isPresent(vc) ? vc.views : [];
    };
    ViewContainerRef_.prototype.get = function (index) { return this._getViews()[index].ref; };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
        get: function () { return this._getViews().length; },
        enumerable: true,
        configurable: true
    });
    // TODO(rado): profile and decide whether bounds checks should be added
    // to the methods below.
    ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, index) {
        if (index === void 0) { index = -1; }
        if (index == -1)
            index = this.length;
        return this.viewManager.createEmbeddedViewInContainer(this.element, index, templateRef);
    };
    ViewContainerRef_.prototype.createHostView = function (protoViewRef, index, dynamicallyCreatedProviders) {
        if (protoViewRef === void 0) { protoViewRef = null; }
        if (index === void 0) { index = -1; }
        if (dynamicallyCreatedProviders === void 0) { dynamicallyCreatedProviders = null; }
        if (index == -1)
            index = this.length;
        return this.viewManager.createHostViewInContainer(this.element, index, protoViewRef, dynamicallyCreatedProviders);
    };
    // TODO(i): refactor insert+remove into move
    ViewContainerRef_.prototype.insert = function (viewRef, index) {
        if (index === void 0) { index = -1; }
        if (index == -1)
            index = this.length;
        return this.viewManager.attachViewInContainer(this.element, index, viewRef);
    };
    ViewContainerRef_.prototype.indexOf = function (viewRef) {
        return collection_1.ListWrapper.indexOf(this._getViews(), view_ref_1.internalView(viewRef));
    };
    // TODO(i): rename to destroy
    ViewContainerRef_.prototype.remove = function (index) {
        if (index === void 0) { index = -1; }
        if (index == -1)
            index = this.length - 1;
        this.viewManager.destroyViewInContainer(this.element, index);
        // view is intentionally not returned to the client.
    };
    // TODO(i): refactor insert+remove into move
    ViewContainerRef_.prototype.detach = function (index) {
        if (index === void 0) { index = -1; }
        if (index == -1)
            index = this.length - 1;
        return this.viewManager.detachViewInContainer(this.element, index);
    };
    return ViewContainerRef_;
})(ViewContainerRef);
exports.ViewContainerRef_ = ViewContainerRef_;
},{"./view_ref":69,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],65:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
/**
 * Listener for view creation / destruction.
 */
var AppViewListener = (function () {
    function AppViewListener() {
    }
    AppViewListener.prototype.onViewCreated = function (view) { };
    AppViewListener.prototype.onViewDestroyed = function (view) { };
    AppViewListener = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppViewListener);
    return AppViewListener;
})();
exports.AppViewListener = AppViewListener;
},{"angular2/src/core/di":38}],66:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var viewModule = require('./view');
var view_ref_1 = require('./view_ref');
var api_1 = require('angular2/src/core/render/api');
var view_manager_utils_1 = require('./view_manager_utils');
var view_pool_1 = require('./view_pool');
var view_listener_1 = require('./view_listener');
var profile_1 = require('../profile/profile');
var proto_view_factory_1 = require('./proto_view_factory');
/**
 * Service exposing low level API for creating, moving and destroying Views.
 *
 * Most applications should use higher-level abstractions like {@link DynamicComponentLoader} and
 * {@link ViewContainerRef} instead.
 */
var AppViewManager = (function () {
    function AppViewManager() {
    }
    /**
     * Returns the {@link ElementRef} that makes up the specified Host View.
     */
    AppViewManager.prototype.getHostElement = function (hostViewRef) {
        var hostView = view_ref_1.internalView(hostViewRef);
        if (hostView.proto.type !== viewModule.ViewType.HOST) {
            throw new exceptions_1.BaseException('This operation is only allowed on host views');
        }
        return hostView.elementRefs[hostView.elementOffset];
    };
    return AppViewManager;
})();
exports.AppViewManager = AppViewManager;
var AppViewManager_ = (function (_super) {
    __extends(AppViewManager_, _super);
    function AppViewManager_(_viewPool, _viewListener, _utils, _renderer, _protoViewFactory) {
        _super.call(this);
        this._viewPool = _viewPool;
        this._viewListener = _viewListener;
        this._utils = _utils;
        this._renderer = _renderer;
        /** @internal */
        this._createRootHostViewScope = profile_1.wtfCreateScope('AppViewManager#createRootHostView()');
        /** @internal */
        this._destroyRootHostViewScope = profile_1.wtfCreateScope('AppViewManager#destroyRootHostView()');
        /** @internal */
        this._createEmbeddedViewInContainerScope = profile_1.wtfCreateScope('AppViewManager#createEmbeddedViewInContainer()');
        /** @internal */
        this._createHostViewInContainerScope = profile_1.wtfCreateScope('AppViewManager#createHostViewInContainer()');
        /** @internal */
        this._destroyViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#destroyViewInContainer()');
        /** @internal */
        this._attachViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#attachViewInContainer()');
        /** @internal */
        this._detachViewInContainerScope = profile_1.wtfCreateScope('AppViewMananger#detachViewInContainer()');
        this._protoViewFactory = _protoViewFactory;
    }
    AppViewManager_.prototype.getViewContainer = function (location) {
        var hostView = view_ref_1.internalView(location.parentView);
        return hostView.elementInjectors[location.boundElementIndex]
            .getViewContainerRef();
    };
    AppViewManager_.prototype.getNamedElementInComponentView = function (hostLocation, variableName) {
        var hostView = view_ref_1.internalView(hostLocation.parentView);
        var boundElementIndex = hostLocation.boundElementIndex;
        var componentView = hostView.getNestedView(boundElementIndex);
        if (lang_1.isBlank(componentView)) {
            throw new exceptions_1.BaseException("There is no component directive at element " + boundElementIndex);
        }
        var binderIdx = componentView.proto.variableLocations.get(variableName);
        if (lang_1.isBlank(binderIdx)) {
            throw new exceptions_1.BaseException("Could not find variable " + variableName);
        }
        return componentView.elementRefs[componentView.elementOffset + binderIdx];
    };
    AppViewManager_.prototype.getComponent = function (hostLocation) {
        var hostView = view_ref_1.internalView(hostLocation.parentView);
        var boundElementIndex = hostLocation.boundElementIndex;
        return this._utils.getComponentInstance(hostView, boundElementIndex);
    };
    AppViewManager_.prototype.createRootHostView = function (hostProtoViewRef, overrideSelector, injector) {
        var s = this._createRootHostViewScope();
        var hostProtoView = view_ref_1.internalProtoView(hostProtoViewRef);
        this._protoViewFactory.initializeProtoViewIfNeeded(hostProtoView);
        var hostElementSelector = overrideSelector;
        if (lang_1.isBlank(hostElementSelector)) {
            hostElementSelector = hostProtoView.elementBinders[0].componentDirective.metadata.selector;
        }
        var renderViewWithFragments = this._renderer.createRootHostView(hostProtoView.render, hostProtoView.mergeInfo.embeddedViewCount + 1, hostElementSelector);
        var hostView = this._createMainView(hostProtoView, renderViewWithFragments);
        this._renderer.hydrateView(hostView.render);
        this._utils.hydrateRootHostView(hostView, injector);
        return profile_1.wtfLeave(s, hostView.ref);
    };
    AppViewManager_.prototype.destroyRootHostView = function (hostViewRef) {
        // Note: Don't put the hostView into the view pool
        // as it is depending on the element for which it was created.
        var s = this._destroyRootHostViewScope();
        var hostView = view_ref_1.internalView(hostViewRef);
        this._renderer.detachFragment(hostView.renderFragment);
        this._renderer.dehydrateView(hostView.render);
        this._viewDehydrateRecurse(hostView);
        this._viewListener.onViewDestroyed(hostView);
        this._renderer.destroyView(hostView.render);
        profile_1.wtfLeave(s);
    };
    AppViewManager_.prototype.createEmbeddedViewInContainer = function (viewContainerLocation, index, templateRef) {
        var s = this._createEmbeddedViewInContainerScope();
        var protoView = view_ref_1.internalProtoView(templateRef.protoViewRef);
        if (protoView.type !== viewModule.ViewType.EMBEDDED) {
            throw new exceptions_1.BaseException('This method can only be called with embedded ProtoViews!');
        }
        this._protoViewFactory.initializeProtoViewIfNeeded(protoView);
        return profile_1.wtfLeave(s, this._createViewInContainer(viewContainerLocation, index, protoView, templateRef.elementRef, null));
    };
    AppViewManager_.prototype.createHostViewInContainer = function (viewContainerLocation, index, protoViewRef, imperativelyCreatedInjector) {
        var s = this._createHostViewInContainerScope();
        var protoView = view_ref_1.internalProtoView(protoViewRef);
        if (protoView.type !== viewModule.ViewType.HOST) {
            throw new exceptions_1.BaseException('This method can only be called with host ProtoViews!');
        }
        this._protoViewFactory.initializeProtoViewIfNeeded(protoView);
        return profile_1.wtfLeave(s, this._createViewInContainer(viewContainerLocation, index, protoView, viewContainerLocation, imperativelyCreatedInjector));
    };
    /**
     *
     * See {@link AppViewManager#destroyViewInContainer}.
     * @internal
     */
    AppViewManager_.prototype._createViewInContainer = function (viewContainerLocation, index, protoView, context, imperativelyCreatedInjector) {
        var parentView = view_ref_1.internalView(viewContainerLocation.parentView);
        var boundElementIndex = viewContainerLocation.boundElementIndex;
        var contextView = view_ref_1.internalView(context.parentView);
        var contextBoundElementIndex = context.boundElementIndex;
        var embeddedFragmentView = contextView.getNestedView(contextBoundElementIndex);
        var view;
        if (protoView.type === viewModule.ViewType.EMBEDDED && lang_1.isPresent(embeddedFragmentView) &&
            !embeddedFragmentView.hydrated()) {
            // Case 1: instantiate the first view of a template that has been merged into a parent
            view = embeddedFragmentView;
            this._attachRenderView(parentView, boundElementIndex, index, view);
        }
        else {
            // Case 2: instantiate another copy of the template or a host ProtoView.
            // This is a separate case
            // as we only inline one copy of the template into the parent view.
            view = this._createPooledView(protoView);
            this._attachRenderView(parentView, boundElementIndex, index, view);
            this._renderer.hydrateView(view.render);
        }
        this._utils.attachViewInContainer(parentView, boundElementIndex, contextView, contextBoundElementIndex, index, view);
        try {
            this._utils.hydrateViewInContainer(parentView, boundElementIndex, contextView, contextBoundElementIndex, index, imperativelyCreatedInjector);
        }
        catch (e) {
            this._utils.detachViewInContainer(parentView, boundElementIndex, index);
            throw e;
        }
        return view.ref;
    };
    /** @internal */
    AppViewManager_.prototype._attachRenderView = function (parentView, boundElementIndex, index, view) {
        var elementRef = parentView.elementRefs[boundElementIndex];
        if (index === 0) {
            this._renderer.attachFragmentAfterElement(elementRef, view.renderFragment);
        }
        else {
            var prevView = parentView.viewContainers[boundElementIndex].views[index - 1];
            this._renderer.attachFragmentAfterFragment(prevView.renderFragment, view.renderFragment);
        }
    };
    AppViewManager_.prototype.destroyViewInContainer = function (viewContainerLocation, index) {
        var s = this._destroyViewInContainerScope();
        var parentView = view_ref_1.internalView(viewContainerLocation.parentView);
        var boundElementIndex = viewContainerLocation.boundElementIndex;
        this._destroyViewInContainer(parentView, boundElementIndex, index);
        profile_1.wtfLeave(s);
    };
    // TODO(i): refactor detachViewInContainer+attachViewInContainer to moveViewInContainer
    AppViewManager_.prototype.attachViewInContainer = function (viewContainerLocation, index, viewRef) {
        var s = this._attachViewInContainerScope();
        var view = view_ref_1.internalView(viewRef);
        var parentView = view_ref_1.internalView(viewContainerLocation.parentView);
        var boundElementIndex = viewContainerLocation.boundElementIndex;
        // TODO(tbosch): the public methods attachViewInContainer/detachViewInContainer
        // are used for moving elements without the same container.
        // We will change this into an atomic `move` operation, which should preserve the
        // previous parent injector (see https://github.com/angular/angular/issues/1377).
        // Right now we are destroying any special
        // context view that might have been used.
        this._utils.attachViewInContainer(parentView, boundElementIndex, null, null, index, view);
        this._attachRenderView(parentView, boundElementIndex, index, view);
        return profile_1.wtfLeave(s, viewRef);
    };
    // TODO(i): refactor detachViewInContainer+attachViewInContainer to moveViewInContainer
    AppViewManager_.prototype.detachViewInContainer = function (viewContainerLocation, index) {
        var s = this._detachViewInContainerScope();
        var parentView = view_ref_1.internalView(viewContainerLocation.parentView);
        var boundElementIndex = viewContainerLocation.boundElementIndex;
        var viewContainer = parentView.viewContainers[boundElementIndex];
        var view = viewContainer.views[index];
        this._utils.detachViewInContainer(parentView, boundElementIndex, index);
        this._renderer.detachFragment(view.renderFragment);
        return profile_1.wtfLeave(s, view.ref);
    };
    /** @internal */
    AppViewManager_.prototype._createMainView = function (protoView, renderViewWithFragments) {
        var mergedParentView = this._utils.createView(protoView, renderViewWithFragments, this, this._renderer);
        this._renderer.setEventDispatcher(mergedParentView.render, mergedParentView);
        this._viewListener.onViewCreated(mergedParentView);
        return mergedParentView;
    };
    /** @internal */
    AppViewManager_.prototype._createPooledView = function (protoView) {
        var view = this._viewPool.getView(protoView);
        if (lang_1.isBlank(view)) {
            view = this._createMainView(protoView, this._renderer.createView(protoView.render, protoView.mergeInfo.embeddedViewCount + 1));
        }
        return view;
    };
    /** @internal */
    AppViewManager_.prototype._destroyPooledView = function (view) {
        var wasReturned = this._viewPool.returnView(view);
        if (!wasReturned) {
            this._viewListener.onViewDestroyed(view);
            this._renderer.destroyView(view.render);
        }
    };
    /** @internal */
    AppViewManager_.prototype._destroyViewInContainer = function (parentView, boundElementIndex, index) {
        var viewContainer = parentView.viewContainers[boundElementIndex];
        var view = viewContainer.views[index];
        this._viewDehydrateRecurse(view);
        this._utils.detachViewInContainer(parentView, boundElementIndex, index);
        if (view.viewOffset > 0) {
            // Case 1: a view that is part of another view.
            // Just detach the fragment
            this._renderer.detachFragment(view.renderFragment);
        }
        else {
            // Case 2: a view that is not part of another view.
            // dehydrate and destroy it.
            this._renderer.dehydrateView(view.render);
            this._renderer.detachFragment(view.renderFragment);
            this._destroyPooledView(view);
        }
    };
    /** @internal */
    AppViewManager_.prototype._viewDehydrateRecurse = function (view) {
        if (view.hydrated()) {
            this._utils.dehydrateView(view);
        }
        var viewContainers = view.viewContainers;
        var startViewOffset = view.viewOffset;
        var endViewOffset = view.viewOffset + view.proto.mergeInfo.viewCount - 1;
        var elementOffset = view.elementOffset;
        for (var viewIdx = startViewOffset; viewIdx <= endViewOffset; viewIdx++) {
            var currView = view.views[viewIdx];
            for (var binderIdx = 0; binderIdx < currView.proto.elementBinders.length; binderIdx++, elementOffset++) {
                var vc = viewContainers[elementOffset];
                if (lang_1.isPresent(vc)) {
                    for (var j = vc.views.length - 1; j >= 0; j--) {
                        this._destroyViewInContainer(currView, elementOffset, j);
                    }
                }
            }
        }
    };
    AppViewManager_ = __decorate([
        di_1.Injectable(),
        __param(4, di_1.Inject(di_1.forwardRef(function () { return proto_view_factory_1.ProtoViewFactory; }))), 
        __metadata('design:paramtypes', [view_pool_1.AppViewPool, view_listener_1.AppViewListener, view_manager_utils_1.AppViewManagerUtils, api_1.Renderer, Object])
    ], AppViewManager_);
    return AppViewManager_;
})(AppViewManager);
exports.AppViewManager_ = AppViewManager_;
},{"../profile/profile":80,"./proto_view_factory":59,"./view":63,"./view_listener":65,"./view_manager_utils":67,"./view_pool":68,"./view_ref":69,"angular2/src/core/di":38,"angular2/src/core/render/api":86,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],67:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
var collection_1 = require('angular2/src/facade/collection');
var eli = require('./element_injector');
var lang_1 = require('angular2/src/facade/lang');
var viewModule = require('./view');
var element_ref_1 = require('./element_ref');
var template_ref_1 = require('./template_ref');
var pipes_1 = require('angular2/src/core/pipes/pipes');
var AppViewManagerUtils = (function () {
    function AppViewManagerUtils() {
    }
    AppViewManagerUtils.prototype.getComponentInstance = function (parentView, boundElementIndex) {
        var eli = parentView.elementInjectors[boundElementIndex];
        return eli.getComponent();
    };
    AppViewManagerUtils.prototype.createView = function (mergedParentViewProto, renderViewWithFragments, viewManager, renderer) {
        var renderFragments = renderViewWithFragments.fragmentRefs;
        var renderView = renderViewWithFragments.viewRef;
        var elementCount = mergedParentViewProto.mergeInfo.elementCount;
        var viewCount = mergedParentViewProto.mergeInfo.viewCount;
        var elementRefs = collection_1.ListWrapper.createFixedSize(elementCount);
        var viewContainers = collection_1.ListWrapper.createFixedSize(elementCount);
        var preBuiltObjects = collection_1.ListWrapper.createFixedSize(elementCount);
        var elementInjectors = collection_1.ListWrapper.createFixedSize(elementCount);
        var views = collection_1.ListWrapper.createFixedSize(viewCount);
        var elementOffset = 0;
        var textOffset = 0;
        var fragmentIdx = 0;
        var containerElementIndicesByViewIndex = collection_1.ListWrapper.createFixedSize(viewCount);
        for (var viewOffset = 0; viewOffset < viewCount; viewOffset++) {
            var containerElementIndex = containerElementIndicesByViewIndex[viewOffset];
            var containerElementInjector = lang_1.isPresent(containerElementIndex) ? elementInjectors[containerElementIndex] : null;
            var parentView = lang_1.isPresent(containerElementInjector) ? preBuiltObjects[containerElementIndex].view : null;
            var protoView = lang_1.isPresent(containerElementIndex) ?
                parentView.proto.elementBinders[containerElementIndex - parentView.elementOffset]
                    .nestedProtoView :
                mergedParentViewProto;
            var renderFragment = null;
            if (viewOffset === 0 || protoView.type === viewModule.ViewType.EMBEDDED) {
                renderFragment = renderFragments[fragmentIdx++];
            }
            var currentView = new viewModule.AppView(renderer, protoView, viewOffset, elementOffset, textOffset, protoView.protoLocals, renderView, renderFragment, containerElementInjector);
            views[viewOffset] = currentView;
            if (lang_1.isPresent(containerElementIndex)) {
                preBuiltObjects[containerElementIndex].nestedView = currentView;
            }
            var rootElementInjectors = [];
            var nestedViewOffset = viewOffset + 1;
            for (var binderIdx = 0; binderIdx < protoView.elementBinders.length; binderIdx++) {
                var binder = protoView.elementBinders[binderIdx];
                var boundElementIndex = elementOffset + binderIdx;
                var elementInjector = null;
                if (lang_1.isPresent(binder.nestedProtoView) && binder.nestedProtoView.isMergable) {
                    containerElementIndicesByViewIndex[nestedViewOffset] = boundElementIndex;
                    nestedViewOffset += binder.nestedProtoView.mergeInfo.viewCount;
                }
                // elementInjectors and rootElementInjectors
                var protoElementInjector = binder.protoElementInjector;
                if (lang_1.isPresent(protoElementInjector)) {
                    if (lang_1.isPresent(protoElementInjector.parent)) {
                        var parentElementInjector = elementInjectors[elementOffset + protoElementInjector.parent.index];
                        elementInjector = protoElementInjector.instantiate(parentElementInjector);
                    }
                    else {
                        elementInjector = protoElementInjector.instantiate(null);
                        rootElementInjectors.push(elementInjector);
                    }
                }
                elementInjectors[boundElementIndex] = elementInjector;
                // elementRefs
                var el = new element_ref_1.ElementRef_(currentView.ref, boundElementIndex, renderer);
                elementRefs[el.boundElementIndex] = el;
                // preBuiltObjects
                if (lang_1.isPresent(elementInjector)) {
                    var templateRef = lang_1.isPresent(binder.nestedProtoView) &&
                        binder.nestedProtoView.type === viewModule.ViewType.EMBEDDED ?
                        new template_ref_1.TemplateRef_(el) :
                        null;
                    preBuiltObjects[boundElementIndex] =
                        new eli.PreBuiltObjects(viewManager, currentView, el, templateRef);
                }
            }
            currentView.init(protoView.changeDetectorFactory(currentView), elementInjectors, rootElementInjectors, preBuiltObjects, views, elementRefs, viewContainers);
            if (lang_1.isPresent(parentView) && protoView.type === viewModule.ViewType.COMPONENT) {
                parentView.changeDetector.addViewChild(currentView.changeDetector);
            }
            elementOffset += protoView.elementBinders.length;
            textOffset += protoView.textBindingCount;
        }
        return views[0];
    };
    AppViewManagerUtils.prototype.hydrateRootHostView = function (hostView, injector) {
        this._hydrateView(hostView, injector, null, new Object(), null);
    };
    // Misnomer: this method is attaching next to the view container.
    AppViewManagerUtils.prototype.attachViewInContainer = function (parentView, boundElementIndex, contextView, contextBoundElementIndex, index, view) {
        if (lang_1.isBlank(contextView)) {
            contextView = parentView;
            contextBoundElementIndex = boundElementIndex;
        }
        parentView.changeDetector.addContentChild(view.changeDetector);
        var viewContainer = parentView.viewContainers[boundElementIndex];
        if (lang_1.isBlank(viewContainer)) {
            viewContainer = new viewModule.AppViewContainer();
            parentView.viewContainers[boundElementIndex] = viewContainer;
        }
        collection_1.ListWrapper.insert(viewContainer.views, index, view);
        var elementInjector = contextView.elementInjectors[contextBoundElementIndex];
        for (var i = view.rootElementInjectors.length - 1; i >= 0; i--) {
            if (lang_1.isPresent(elementInjector.parent)) {
                view.rootElementInjectors[i].link(elementInjector.parent);
            }
        }
        elementInjector.traverseAndSetQueriesAsDirty();
    };
    AppViewManagerUtils.prototype.detachViewInContainer = function (parentView, boundElementIndex, index) {
        var viewContainer = parentView.viewContainers[boundElementIndex];
        var view = viewContainer.views[index];
        parentView.elementInjectors[boundElementIndex].traverseAndSetQueriesAsDirty();
        view.changeDetector.remove();
        collection_1.ListWrapper.removeAt(viewContainer.views, index);
        for (var i = 0; i < view.rootElementInjectors.length; ++i) {
            var inj = view.rootElementInjectors[i];
            inj.unlink();
        }
    };
    AppViewManagerUtils.prototype.hydrateViewInContainer = function (parentView, boundElementIndex, contextView, contextBoundElementIndex, index, imperativelyCreatedProviders) {
        if (lang_1.isBlank(contextView)) {
            contextView = parentView;
            contextBoundElementIndex = boundElementIndex;
        }
        var viewContainer = parentView.viewContainers[boundElementIndex];
        var view = viewContainer.views[index];
        var elementInjector = contextView.elementInjectors[contextBoundElementIndex];
        var injector = lang_1.isPresent(imperativelyCreatedProviders) ?
            di_1.Injector.fromResolvedProviders(imperativelyCreatedProviders) :
            null;
        this._hydrateView(view, injector, elementInjector.getHost(), contextView.context, contextView.locals);
    };
    /** @internal */
    AppViewManagerUtils.prototype._hydrateView = function (initView, imperativelyCreatedInjector, hostElementInjector, context, parentLocals) {
        var viewIdx = initView.viewOffset;
        var endViewOffset = viewIdx + initView.proto.mergeInfo.viewCount - 1;
        while (viewIdx <= endViewOffset) {
            var currView = initView.views[viewIdx];
            var currProtoView = currView.proto;
            if (currView !== initView && currView.proto.type === viewModule.ViewType.EMBEDDED) {
                // Don't hydrate components of embedded fragment views.
                viewIdx += currView.proto.mergeInfo.viewCount;
            }
            else {
                if (currView !== initView) {
                    // hydrate a nested component view
                    imperativelyCreatedInjector = null;
                    parentLocals = null;
                    hostElementInjector = currView.containerElementInjector;
                    context = hostElementInjector.getComponent();
                }
                currView.context = context;
                currView.locals.parent = parentLocals;
                var binders = currProtoView.elementBinders;
                for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
                    var boundElementIndex = binderIdx + currView.elementOffset;
                    var elementInjector = initView.elementInjectors[boundElementIndex];
                    if (lang_1.isPresent(elementInjector)) {
                        elementInjector.hydrate(imperativelyCreatedInjector, hostElementInjector, currView.preBuiltObjects[boundElementIndex]);
                        this._populateViewLocals(currView, elementInjector, boundElementIndex);
                        this._setUpEventEmitters(currView, elementInjector, boundElementIndex);
                    }
                }
                var pipes = lang_1.isPresent(hostElementInjector) ?
                    new pipes_1.Pipes(currView.proto.pipes, hostElementInjector.getInjector()) :
                    null;
                currView.changeDetector.hydrate(currView.context, currView.locals, currView, pipes);
                viewIdx++;
            }
        }
    };
    /** @internal */
    AppViewManagerUtils.prototype._populateViewLocals = function (view, elementInjector, boundElementIdx) {
        if (lang_1.isPresent(elementInjector.getDirectiveVariableBindings())) {
            elementInjector.getDirectiveVariableBindings().forEach(function (directiveIndex, name) {
                if (lang_1.isBlank(directiveIndex)) {
                    view.locals.set(name, view.elementRefs[boundElementIdx].nativeElement);
                }
                else {
                    view.locals.set(name, elementInjector.getDirectiveAtIndex(directiveIndex));
                }
            });
        }
    };
    /** @internal */
    AppViewManagerUtils.prototype._setUpEventEmitters = function (view, elementInjector, boundElementIndex) {
        var emitters = elementInjector.getEventEmitterAccessors();
        for (var directiveIndex = 0; directiveIndex < emitters.length; ++directiveIndex) {
            var directiveEmitters = emitters[directiveIndex];
            var directive = elementInjector.getDirectiveAtIndex(directiveIndex);
            for (var eventIndex = 0; eventIndex < directiveEmitters.length; ++eventIndex) {
                var eventEmitterAccessor = directiveEmitters[eventIndex];
                eventEmitterAccessor.subscribe(view, boundElementIndex, directive);
            }
        }
    };
    AppViewManagerUtils.prototype.dehydrateView = function (initView) {
        var endViewOffset = initView.viewOffset + initView.proto.mergeInfo.viewCount - 1;
        for (var viewIdx = initView.viewOffset; viewIdx <= endViewOffset; viewIdx++) {
            var currView = initView.views[viewIdx];
            if (currView.hydrated()) {
                if (lang_1.isPresent(currView.locals)) {
                    currView.locals.clearValues();
                }
                currView.context = null;
                currView.changeDetector.dehydrate();
                var binders = currView.proto.elementBinders;
                for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
                    var eli = initView.elementInjectors[currView.elementOffset + binderIdx];
                    if (lang_1.isPresent(eli)) {
                        eli.dehydrate();
                    }
                }
            }
        }
    };
    AppViewManagerUtils = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppViewManagerUtils);
    return AppViewManagerUtils;
})();
exports.AppViewManagerUtils = AppViewManagerUtils;
},{"./element_injector":54,"./element_ref":55,"./template_ref":62,"./view":63,"angular2/src/core/di":38,"angular2/src/core/pipes/pipes":76,"angular2/src/facade/collection":94,"angular2/src/facade/lang":98}],68:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
var collection_1 = require('angular2/src/facade/collection');
exports.APP_VIEW_POOL_CAPACITY = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppViewPool.viewPoolCapacity'));
var AppViewPool = (function () {
    function AppViewPool(poolCapacityPerProtoView) {
        /** @internal */
        this._pooledViewsPerProtoView = new collection_1.Map();
        this._poolCapacityPerProtoView = poolCapacityPerProtoView;
    }
    AppViewPool.prototype.getView = function (protoView) {
        var pooledViews = this._pooledViewsPerProtoView.get(protoView);
        if (lang_1.isPresent(pooledViews) && pooledViews.length > 0) {
            return pooledViews.pop();
        }
        return null;
    };
    AppViewPool.prototype.returnView = function (view) {
        var protoView = view.proto;
        var pooledViews = this._pooledViewsPerProtoView.get(protoView);
        if (lang_1.isBlank(pooledViews)) {
            pooledViews = [];
            this._pooledViewsPerProtoView.set(protoView, pooledViews);
        }
        var haveRemainingCapacity = pooledViews.length < this._poolCapacityPerProtoView;
        if (haveRemainingCapacity) {
            pooledViews.push(view);
        }
        return haveRemainingCapacity;
    };
    AppViewPool = __decorate([
        di_1.Injectable(),
        __param(0, di_1.Inject(exports.APP_VIEW_POOL_CAPACITY)), 
        __metadata('design:paramtypes', [Object])
    ], AppViewPool);
    return AppViewPool;
})();
exports.AppViewPool = AppViewPool;
},{"angular2/src/core/di":38,"angular2/src/facade/collection":94,"angular2/src/facade/lang":98}],69:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
// This is a workaround for privacy in Dart as we don't have library parts
function internalView(viewRef) {
    return viewRef._view;
}
exports.internalView = internalView;
// This is a workaround for privacy in Dart as we don't have library parts
function internalProtoView(protoViewRef) {
    return lang_1.isPresent(protoViewRef) ? protoViewRef._protoView : null;
}
exports.internalProtoView = internalProtoView;
/**
 * Represents an Angular View.
 *
 * <!-- TODO: move the next two paragraphs to the dev guide -->
 * A View is a fundamental building block of the application UI. It is the smallest grouping of
 * Elements which are created and destroyed together.
 *
 * Properties of elements in a View can change, but the structure (number and order) of elements in
 * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
 * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
 * <!-- /TODO -->
 *
 * ### Example
 *
 * Given this template...
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <li *ngFor="var item of items">{{item}}</li>
 * </ul>
 * ```
 *
 * ... we have two {@link ProtoViewRef}s:
 *
 * Outer {@link ProtoViewRef}:
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <template ngFor var-item [ngForOf]="items"></template>
 * </ul>
 * ```
 *
 * Inner {@link ProtoViewRef}:
 * ```
 *   <li>{{item}}</li>
 * ```
 *
 * Notice that the original template is broken down into two separate {@link ProtoViewRef}s.
 *
 * The outer/inner {@link ProtoViewRef}s are then assembled into views like so:
 *
 * ```
 * <!-- ViewRef: outer-0 -->
 * Count: 2
 * <ul>
 *   <template view-container-ref></template>
 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
 * </ul>
 * <!-- /ViewRef: outer-0 -->
 * ```
 */
var ViewRef = (function () {
    function ViewRef() {
    }
    Object.defineProperty(ViewRef.prototype, "changeDetectorRef", {
        get: function () { return exceptions_1.unimplemented(); },
        set: function (value) {
            exceptions_1.unimplemented(); // TODO: https://github.com/Microsoft/TypeScript/issues/12
        },
        enumerable: true,
        configurable: true
    });
    return ViewRef;
})();
exports.ViewRef = ViewRef;
var ViewRef_ = (function (_super) {
    __extends(ViewRef_, _super);
    function ViewRef_(_view) {
        _super.call(this);
        this._changeDetectorRef = null;
        this._view = _view;
    }
    Object.defineProperty(ViewRef_.prototype, "render", {
        /**
         * Return `RenderViewRef`
         */
        get: function () { return this._view.render; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "renderFragment", {
        /**
         * Return `RenderFragmentRef`
         */
        get: function () { return this._view.renderFragment; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "changeDetectorRef", {
        /**
         * Return `ChangeDetectorRef`
         */
        get: function () {
            if (this._changeDetectorRef === null) {
                this._changeDetectorRef = this._view.changeDetector.ref;
            }
            return this._changeDetectorRef;
        },
        enumerable: true,
        configurable: true
    });
    ViewRef_.prototype.setLocal = function (variableName, value) { this._view.setLocal(variableName, value); };
    return ViewRef_;
})(ViewRef);
exports.ViewRef_ = ViewRef_;
/**
 * Represents an Angular ProtoView.
 *
 * A ProtoView is a prototypical {@link ViewRef View} that is the result of Template compilation and
 * is used by Angular to efficiently create an instance of this View based on the compiled Template.
 *
 * Most ProtoViews are created and used internally by Angular and you don't need to know about them,
 * except in advanced use-cases where you compile components yourself via the low-level
 * {@link Compiler#compileInHost} API.
 *
 *
 * ### Example
 *
 * Given this template:
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <li *ngFor="var item of items">{{item}}</li>
 * </ul>
 * ```
 *
 * Angular desugars and compiles the template into two ProtoViews:
 *
 * Outer ProtoView:
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <template ngFor var-item [ngForOf]="items"></template>
 * </ul>
 * ```
 *
 * Inner ProtoView:
 * ```
 *   <li>{{item}}</li>
 * ```
 *
 * Notice that the original template is broken down into two separate ProtoViews.
 */
var ProtoViewRef = (function () {
    function ProtoViewRef() {
    }
    return ProtoViewRef;
})();
exports.ProtoViewRef = ProtoViewRef;
var ProtoViewRef_ = (function (_super) {
    __extends(ProtoViewRef_, _super);
    function ProtoViewRef_(_protoView) {
        _super.call(this);
        this._protoView = _protoView;
    }
    return ProtoViewRef_;
})(ProtoViewRef);
exports.ProtoViewRef_ = ProtoViewRef_;
},{"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],70:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
var view_1 = require('../metadata/view');
var directives_1 = require('../metadata/directives');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var reflection_1 = require('angular2/src/core/reflection/reflection');
/**
 * Resolves types to {@link ViewMetadata}.
 */
var ViewResolver = (function () {
    function ViewResolver() {
        /** @internal */
        this._cache = new collection_1.Map();
    }
    ViewResolver.prototype.resolve = function (component) {
        var view = this._cache.get(component);
        if (lang_1.isBlank(view)) {
            view = this._resolve(component);
            this._cache.set(component, view);
        }
        return view;
    };
    /** @internal */
    ViewResolver.prototype._resolve = function (component) {
        var compMeta;
        var viewMeta;
        reflection_1.reflector.annotations(component).forEach(function (m) {
            if (m instanceof view_1.ViewMetadata) {
                viewMeta = m;
            }
            if (m instanceof directives_1.ComponentMetadata) {
                compMeta = m;
            }
        });
        if (lang_1.isPresent(compMeta)) {
            if (lang_1.isBlank(compMeta.template) && lang_1.isBlank(compMeta.templateUrl) && lang_1.isBlank(viewMeta)) {
                throw new exceptions_1.BaseException("Component '" + lang_1.stringify(component) + "' must have either 'template', 'templateUrl', or '@View' set.");
            }
            else if (lang_1.isPresent(compMeta.template) && lang_1.isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("template", component);
            }
            else if (lang_1.isPresent(compMeta.templateUrl) && lang_1.isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("templateUrl", component);
            }
            else if (lang_1.isPresent(compMeta.directives) && lang_1.isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("directives", component);
            }
            else if (lang_1.isPresent(compMeta.pipes) && lang_1.isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("pipes", component);
            }
            else if (lang_1.isPresent(compMeta.encapsulation) && lang_1.isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("encapsulation", component);
            }
            else if (lang_1.isPresent(compMeta.styles) && lang_1.isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("styles", component);
            }
            else if (lang_1.isPresent(compMeta.styleUrls) && lang_1.isPresent(viewMeta)) {
                this._throwMixingViewAndComponent("styleUrls", component);
            }
            else if (lang_1.isPresent(viewMeta)) {
                return viewMeta;
            }
            else {
                return new view_1.ViewMetadata({
                    templateUrl: compMeta.templateUrl,
                    template: compMeta.template,
                    directives: compMeta.directives,
                    pipes: compMeta.pipes,
                    encapsulation: compMeta.encapsulation,
                    styles: compMeta.styles,
                    styleUrls: compMeta.styleUrls
                });
            }
        }
        else {
            if (lang_1.isBlank(viewMeta)) {
                throw new exceptions_1.BaseException("No View decorator found on component '" + lang_1.stringify(component) + "'");
            }
            else {
                return viewMeta;
            }
        }
        return null;
    };
    /** @internal */
    ViewResolver.prototype._throwMixingViewAndComponent = function (propertyName, component) {
        throw new exceptions_1.BaseException("Component '" + lang_1.stringify(component) + "' cannot have both '" + propertyName + "' and '@View' set at the same time\"");
    };
    ViewResolver = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ViewResolver);
    return ViewResolver;
})();
exports.ViewResolver = ViewResolver;
},{"../metadata/directives":73,"../metadata/view":74,"angular2/src/core/di":38,"angular2/src/core/reflection/reflection":82,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],71:[function(require,module,exports){
'use strict';/**
 * This indirection is needed to free up Component, etc symbols in the public API
 * to be used by the decorator versions of these annotations.
 */
var di_1 = require('./metadata/di');
exports.QueryMetadata = di_1.QueryMetadata;
exports.ContentChildrenMetadata = di_1.ContentChildrenMetadata;
exports.ContentChildMetadata = di_1.ContentChildMetadata;
exports.ViewChildrenMetadata = di_1.ViewChildrenMetadata;
exports.ViewQueryMetadata = di_1.ViewQueryMetadata;
exports.ViewChildMetadata = di_1.ViewChildMetadata;
exports.AttributeMetadata = di_1.AttributeMetadata;
var directives_1 = require('./metadata/directives');
exports.ComponentMetadata = directives_1.ComponentMetadata;
exports.DirectiveMetadata = directives_1.DirectiveMetadata;
exports.PipeMetadata = directives_1.PipeMetadata;
exports.InputMetadata = directives_1.InputMetadata;
exports.OutputMetadata = directives_1.OutputMetadata;
exports.HostBindingMetadata = directives_1.HostBindingMetadata;
exports.HostListenerMetadata = directives_1.HostListenerMetadata;
var view_1 = require('./metadata/view');
exports.ViewMetadata = view_1.ViewMetadata;
exports.ViewEncapsulation = view_1.ViewEncapsulation;
var di_2 = require('./metadata/di');
var directives_2 = require('./metadata/directives');
var view_2 = require('./metadata/view');
var decorators_1 = require('./util/decorators');
// TODO(alexeagle): remove the duplication of this doc. It is copied from ComponentMetadata.
/**
 * Declare reusable UI building blocks for an application.
 *
 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
 * `@Component`
 * annotation specifies when a component is instantiated, and which properties and hostListeners it
 * binds to.
 *
 * When a component is instantiated, Angular
 * - creates a shadow DOM for the component.
 * - loads the selected template into the shadow DOM.
 * - creates all the injectable objects configured with `providers` and `viewProviders`.
 *
 * All template expressions and statements are then evaluated against the component instance.
 *
 * For details on the `@View` annotation, see {@link ViewMetadata}.
 *
 * ## Lifecycle hooks
 *
 * When the component class implements some {@link angular2/lifecycle_hooks} the callbacks are
 * called by the change detection at defined points in time during the life of the component.
 *
 * ### Example
 *
 * {@example core/ts/metadata/metadata.ts region='component'}
 */
exports.Component = decorators_1.makeDecorator(directives_2.ComponentMetadata, function (fn) { return fn.View = exports.View; });
// TODO(alexeagle): remove the duplication of this doc. It is copied from DirectiveMetadata.
/**
 * Directives allow you to attach behavior to elements in the DOM.
 *
 * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
 *
 * A directive consists of a single directive annotation and a controller class. When the
 * directive's `selector` matches
 * elements in the DOM, the following steps occur:
 *
 * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
 * arguments.
 * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
 * depth-first order,
 *    as declared in the HTML.
 *
 * ## Understanding How Injection Works
 *
 * There are three stages of injection resolution.
 * - *Pre-existing Injectors*:
 *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
 * the dependency was
 *     specified as `@Optional`, returns `null`.
 *   - The platform injector resolves browser singleton resources, such as: cookies, title,
 * location, and others.
 * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
 * the same parent-child hierarchy
 *     as the component instances in the DOM.
 * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
 * element has an `ElementInjector`
 *     which follow the same parent-child hierarchy as the DOM elements themselves.
 *
 * When a template is instantiated, it also must instantiate the corresponding directives in a
 * depth-first order. The
 * current `ElementInjector` resolves the constructor dependencies for each directive.
 *
 * Angular then resolves dependencies as follows, according to the order in which they appear in the
 * {@link ViewMetadata}:
 *
 * 1. Dependencies on the current element
 * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
 * 3. Dependencies on component injectors and their parents until it encounters the root component
 * 4. Dependencies on pre-existing injectors
 *
 *
 * The `ElementInjector` can inject other directives, element-specific special objects, or it can
 * delegate to the parent
 * injector.
 *
 * To inject other directives, declare the constructor parameter as:
 * - `directive:DirectiveType`: a directive on the current element only
 * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
 * element and the
 *    Shadow DOM root.
 * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
 * directives.
 * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
 * child directives.
 *
 * To inject element-specific special objects, declare the constructor parameter as:
 * - `element: ElementRef` to obtain a reference to logical element in the view.
 * - `viewContainer: ViewContainerRef` to control child template instantiation, for
 * {@link DirectiveMetadata} directives only
 * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
 *
 * ### Example
 *
 * The following example demonstrates how dependency injection resolves constructor arguments in
 * practice.
 *
 *
 * Assume this HTML template:
 *
 * ```
 * <div dependency="1">
 *   <div dependency="2">
 *     <div dependency="3" my-directive>
 *       <div dependency="4">
 *         <div dependency="5"></div>
 *       </div>
 *       <div dependency="6"></div>
 *     </div>
 *   </div>
 * </div>
 * ```
 *
 * With the following `dependency` decorator and `SomeService` injectable class.
 *
 * ```
 * @Injectable()
 * class SomeService {
 * }
 *
 * @Directive({
 *   selector: '[dependency]',
 *   inputs: [
 *     'id: dependency'
 *   ]
 * })
 * class Dependency {
 *   id:string;
 * }
 * ```
 *
 * Let's step through the different ways in which `MyDirective` could be declared...
 *
 *
 * ### No injection
 *
 * Here the constructor is declared with no arguments, therefore nothing is injected into
 * `MyDirective`.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor() {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with no dependencies.
 *
 *
 * ### Component-level injection
 *
 * Directives can inject any injectable instance from the closest component injector or any of its
 * parents.
 *
 * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
 * from the parent
 * component's injector.
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(someService: SomeService) {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with a dependency on `SomeService`.
 *
 *
 * ### Injecting a directive from the current element
 *
 * Directives can inject other directives declared on the current element.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(dependency: Dependency) {
 *     expect(dependency.id).toEqual(3);
 *   }
 * }
 * ```
 * This directive would be instantiated with `Dependency` declared at the same element, in this case
 * `dependency="3"`.
 *
 * ### Injecting a directive from any ancestor elements
 *
 * Directives can inject other directives declared on any ancestor element (in the current Shadow
 * DOM), i.e. on the current element, the
 * parent element, or its parents.
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(@Host() dependency: Dependency) {
 *     expect(dependency.id).toEqual(2);
 *   }
 * }
 * ```
 *
 * `@Host` checks the current element, the parent, as well as its parents recursively. If
 * `dependency="2"` didn't
 * exist on the direct parent, this injection would
 * have returned
 * `dependency="1"`.
 *
 *
 * ### Injecting a live collection of direct child directives
 *
 *
 * A directive can also query for other child directives. Since parent directives are instantiated
 * before child directives, a directive can't simply inject the list of child directives. Instead,
 * the directive injects a {@link QueryList}, which updates its contents as children are added,
 * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
 * `ngIf`, or an `ngSwitch`.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
 * 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
 *
 * ### Injecting a live collection of descendant directives
 *
 * By passing the descendant flag to `@Query` above, we can include the children of the child
 * elements.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
 *
 * ### Optional injection
 *
 * The normal behavior of directives is to return an error when a specified dependency cannot be
 * resolved. If you
 * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
 * with `@Optional()`.
 * This explicitly permits the author of a template to treat some of the surrounding directives as
 * optional.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(@Optional() dependency:Dependency) {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with a `Dependency` directive found on the current element.
 * If none can be
 * found, the injector supplies `null` instead of throwing an error.
 *
 * ### Example
 *
 * Here we use a decorator directive to simply define basic tool-tip behavior.
 *
 * ```
 * @Directive({
 *   selector: '[tooltip]',
 *   inputs: [
 *     'text: tooltip'
 *   ],
 *   host: {
 *     '(mouseenter)': 'onMouseEnter()',
 *     '(mouseleave)': 'onMouseLeave()'
 *   }
 * })
 * class Tooltip{
 *   text:string;
 *   overlay:Overlay; // NOT YET IMPLEMENTED
 *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
 *
 *   constructor(overlayManager:OverlayManager) {
 *     this.overlay = overlay;
 *   }
 *
 *   onMouseEnter() {
 *     // exact signature to be determined
 *     this.overlay = this.overlayManager.open(text, ...);
 *   }
 *
 *   onMouseLeave() {
 *     this.overlay.close();
 *     this.overlay = null;
 *   }
 * }
 * ```
 * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
 * `tooltip` selector,
 * like so:
 *
 * ```
 * <div tooltip="some text here"></div>
 * ```
 *
 * Directives can also control the instantiation, destruction, and positioning of inline template
 * elements:
 *
 * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
 * runtime.
 * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
 * location in the current view
 * where these actions are performed.
 *
 * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
 * `<template>` element. Thus a
 * directive in a child view cannot inject the directive that created it.
 *
 * Since directives that create views via ViewContainers are common in Angular, and using the full
 * `<template>` element syntax is wordy, Angular
 * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
 * equivalent.
 *
 * Thus,
 *
 * ```
 * <ul>
 *   <li *foo="bar" title="text"></li>
 * </ul>
 * ```
 *
 * Expands in use to:
 *
 * ```
 * <ul>
 *   <template [foo]="bar">
 *     <li title="text"></li>
 *   </template>
 * </ul>
 * ```
 *
 * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
 * the directive
 * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
 *
 * ## Lifecycle hooks
 *
 * When the directive class implements some {@link angular2/lifecycle_hooks} the callbacks are
 * called by the change detection at defined points in time during the life of the directive.
 *
 * ### Example
 *
 * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
 *
 * Here is a simple directive that triggers on an `unless` selector:
 *
 * ```
 * @Directive({
 *   selector: '[unless]',
 *   inputs: ['unless']
 * })
 * export class Unless {
 *   viewContainer: ViewContainerRef;
 *   templateRef: TemplateRef;
 *   prevCondition: boolean;
 *
 *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
 *     this.viewContainer = viewContainer;
 *     this.templateRef = templateRef;
 *     this.prevCondition = null;
 *   }
 *
 *   set unless(newCondition) {
 *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
 *       this.prevCondition = true;
 *       this.viewContainer.clear();
 *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
 *       this.prevCondition = false;
 *       this.viewContainer.create(this.templateRef);
 *     }
 *   }
 * }
 * ```
 *
 * We can then use this `unless` selector in a template:
 * ```
 * <ul>
 *   <li *unless="expr"></li>
 * </ul>
 * ```
 *
 * Once the directive instantiates the child view, the shorthand notation for the template expands
 * and the result is:
 *
 * ```
 * <ul>
 *   <template [unless]="exp">
 *     <li></li>
 *   </template>
 *   <li></li>
 * </ul>
 * ```
 *
 * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
 * the instantiated
 * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
 */
exports.Directive = decorators_1.makeDecorator(directives_2.DirectiveMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewMetadata.
/**
 * Metadata properties available for configuring Views.
 *
 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
 * within the template.
 *
 * When a component is instantiated, the template is loaded into the component's shadow root, and
 * the expressions and statements in the template are evaluated against the component.
 *
 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
 *
 * ### Example
 *
 * ```
 * @Component({
 *   selector: 'greet',
 *   template: 'Hello {{name}}!',
 *   directives: [GreetUser, Bold]
 * })
 * class Greet {
 *   name: string;
 *
 *   constructor() {
 *     this.name = 'World';
 *   }
 * }
 * ```
 */
exports.View = decorators_1.makeDecorator(view_2.ViewMetadata, function (fn) { return fn.View = exports.View; });
/**
 * Specifies that a constant attribute value should be injected.
 *
 * The directive can inject constant string literals of host element attributes.
 *
 * ### Example
 *
 * Suppose we have an `<input>` element and want to know its `type`.
 *
 * ```html
 * <input type="text">
 * ```
 *
 * A decorator can inject string literal `text` like so:
 *
 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
 */
exports.Attribute = decorators_1.makeParamDecorator(di_2.AttributeMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from QueryMetadata.
/**
 * Declares an injectable parameter to be a live list of directives or variable
 * bindings from the content children of a directive.
 *
 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
 *
 * Assume that `<tabs>` component would like to get a list its children `<pane>`
 * components as shown in this example:
 *
 * ```html
 * <tabs>
 *   <pane title="Overview">...</pane>
 *   <pane *ngFor="#o of objects" [title]="o.title">{{o.text}}</pane>
 * </tabs>
 * ```
 *
 * The preferred solution is to query for `Pane` directives using this decorator.
 *
 * ```javascript
 * @Component({
 *   selector: 'pane',
 *   inputs: ['title']
 * })
 * class Pane {
 *   title:string;
 * }
 *
 * @Component({
 *  selector: 'tabs',
 *  template: `
 *    <ul>
 *      <li *ngFor="#pane of panes">{{pane.title}}</li>
 *    </ul>
 *    <content></content>
 *  `
 * })
 * class Tabs {
 *   panes: QueryList<Pane>;
 *   constructor(@Query(Pane) panes:QueryList<Pane>) {
 *     this.panes = panes;
 *   }
 * }
 * ```
 *
 * A query can look for variable bindings by passing in a string with desired binding symbol.
 *
 * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
 * ```html
 * <seeker>
 *   <div #findme>...</div>
 * </seeker>
 *
 * @Component({ selector: 'foo' })
 * class seeker {
 *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
 * }
 * ```
 *
 * In this case the object that is injected depend on the type of the variable
 * binding. It can be an ElementRef, a directive or a component.
 *
 * Passing in a comma separated list of variable bindings will query for all of them.
 *
 * ```html
 * <seeker>
 *   <div #findMe>...</div>
 *   <div #findMeToo>...</div>
 * </seeker>
 *
 *  @Component({
 *   selector: 'foo'
 * })
 * class Seeker {
 *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
 * }
 * ```
 *
 * Configure whether query looks for direct children or all descendants
 * of the querying element, by using the `descendants` parameter.
 * It is set to `false` by default.
 *
 * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
 * ```html
 * <container #first>
 *   <item>a</item>
 *   <item>b</item>
 *   <container #second>
 *     <item>c</item>
 *   </container>
 * </container>
 * ```
 *
 * When querying for items, the first container will see only `a` and `b` by default,
 * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
 *
 * The queried directives are kept in a depth-first pre-order with respect to their
 * positions in the DOM.
 *
 * Query does not look deep into any subcomponent views.
 *
 * Query is updated as part of the change-detection cycle. Since change detection
 * happens after construction of a directive, QueryList will always be empty when observed in the
 * constructor.
 *
 * The injected object is an unmodifiable live list.
 * See {@link QueryList} for more details.
 */
exports.Query = decorators_1.makeParamDecorator(di_2.QueryMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildrenMetadata.
/**
 * Configures a content query.
 *
 * Content queries are set before the `ngAfterContentInit` callback is called.
 *
 * ### Example
 *
 * ```
 * @Directive({
 *   selector: 'someDir'
 * })
 * class SomeDir {
 *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
 *
 *   ngAfterContentInit() {
 *     // contentChildren is set
 *   }
 * }
 * ```
 */
exports.ContentChildren = decorators_1.makePropDecorator(di_2.ContentChildrenMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildMetadata.
/**
 * Configures a content query.
 *
 * Content queries are set before the `ngAfterContentInit` callback is called.
 *
 * ### Example
 *
 * ```
 * @Directive({
 *   selector: 'someDir'
 * })
 * class SomeDir {
 *   @ContentChild(ChildDirective) contentChild;
 *
 *   ngAfterContentInit() {
 *     // contentChild is set
 *   }
 * }
 * ```
 */
exports.ContentChild = decorators_1.makePropDecorator(di_2.ContentChildMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildrenMetadata.
/**
 * Configures a view query.
 *
 * View queries are set before the `ngAfterViewInit` callback is called.
 *
 * ### Example
 *
 * ```
 * @Component({
 *   selector: 'someDir',
 *   templateUrl: 'someTemplate',
 *   directives: [ItemDirective]
 * })
 * class SomeDir {
 *   @ViewChildren(ItemDirective) viewChildren: QueryList<ItemDirective>;
 *
 *   ngAfterViewInit() {
 *     // viewChildren is set
 *   }
 * }
 * ```
 */
exports.ViewChildren = decorators_1.makePropDecorator(di_2.ViewChildrenMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildMetadata.
/**
 * Configures a view query.
 *
 * View queries are set before the `ngAfterViewInit` callback is called.
 *
 * ### Example
 *
 * ```
 * @Component({
 *   selector: 'someDir',
 *   templateUrl: 'someTemplate',
 *   directives: [ItemDirective]
 * })
 * class SomeDir {
 *   @ViewChild(ItemDirective) viewChild:ItemDirective;
 *
 *   ngAfterViewInit() {
 *     // viewChild is set
 *   }
 * }
 * ```
 */
exports.ViewChild = decorators_1.makePropDecorator(di_2.ViewChildMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewQueryMetadata.
/**
 * Similar to {@link QueryMetadata}, but querying the component view, instead of
 * the content children.
 *
 * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
 *
 * ```javascript
 * @Component({...})
 * @View({
 *   template: `
 *     <item> a </item>
 *     <item> b </item>
 *     <item> c </item>
 *   `
 * })
 * class MyComponent {
 *   shown: boolean;
 *
 *   constructor(private @Query(Item) items:QueryList<Item>) {
 *     items.onChange(() => console.log(items.length));
 *   }
 * }
 * ```
 *
 * Supports the same querying parameters as {@link QueryMetadata}, except
 * `descendants`. This always queries the whole view.
 *
 * As `shown` is flipped between true and false, items will contain zero of one
 * items.
 *
 * Specifies that a {@link QueryList} should be injected.
 *
 * The injected object is an iterable and observable live list.
 * See {@link QueryList} for more details.
 */
exports.ViewQuery = decorators_1.makeParamDecorator(di_2.ViewQueryMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from PipeMetadata.
/**
 * Declare reusable pipe function.
 *
 * ### Example
 *
 * {@example core/ts/metadata/metadata.ts region='pipe'}
 */
exports.Pipe = decorators_1.makeDecorator(directives_2.PipeMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from InputMetadata.
/**
 * Declares a data-bound input property.
 *
 * Angular automatically updates data-bound properties during change detection.
 *
 * `InputMetadata` takes an optional parameter that specifies the name
 * used when instantiating a component in the template. When not provided,
 * the name of the decorated property is used.
 *
 * ### Example
 *
 * The following example creates a component with two input properties.
 *
 * ```typescript
 * @Component({
 *   selector: 'bank-account',
 *   template: `
 *     Bank Name: {{bankName}}
 *     Account Id: {{id}}
 *   `
 * })
 * class BankAccount {
 *   @Input() bankName: string;
 *   @Input('account-id') id: string;
 *
 *   // this property is not bound, and won't be automatically updated by Angular
 *   normalizedBankName: string;
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `
 *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
 *   `,
 *   directives: [BankAccount]
 * })
 * class App {}
 *
 * bootstrap(App);
 * ```
 */
exports.Input = decorators_1.makePropDecorator(directives_2.InputMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from OutputMetadata.
/**
 * Declares an event-bound output property.
 *
 * When an output property emits an event, an event handler attached to that event
 * the template is invoked.
 *
 * `OutputMetadata` takes an optional parameter that specifies the name
 * used when instantiating a component in the template. When not provided,
 * the name of the decorated property is used.
 *
 * ### Example
 *
 * ```typescript
 * @Directive({
 *   selector: 'interval-dir',
 * })
 * class IntervalDir {
 *   @Output() everySecond = new EventEmitter();
 *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
 *
 *   constructor() {
 *     setInterval(() => this.everySecond.emit("event"), 1000);
 *     setInterval(() => this.five5Secs.emit("event"), 5000);
 *   }
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `
 *     <interval-dir (every-second)="everySecond()" (every-five-seconds)="everyFiveSeconds()">
 *     </interval-dir>
 *   `,
 *   directives: [IntervalDir]
 * })
 * class App {
 *   everySecond() { console.log('second'); }
 *   everyFiveSeconds() { console.log('five seconds'); }
 * }
 * bootstrap(App);
 * ```
 */
exports.Output = decorators_1.makePropDecorator(directives_2.OutputMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from HostBindingMetadata.
/**
 * Declares a host property binding.
 *
 * Angular automatically checks host property bindings during change detection.
 * If a binding changes, it will update the host element of the directive.
 *
 * `HostBindingMetadata` takes an optional parameter that specifies the property
 * name of the host element that will be updated. When not provided,
 * the class property name is used.
 *
 * ### Example
 *
 * The following example creates a directive that sets the `valid` and `invalid` classes
 * on the DOM element that has ngModel directive on it.
 *
 * ```typescript
 * @Directive({selector: '[ngModel]'})
 * class NgModelStatus {
 *   constructor(public control:NgModel) {}
 *   @HostBinding('[class.valid]') get valid { return this.control.valid; }
 *   @HostBinding('[class.invalid]') get invalid { return this.control.invalid; }
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `<input [(ngModel)]="prop">`,
 *   directives: [FORM_DIRECTIVES, NgModelStatus]
 * })
 * class App {
 *   prop;
 * }
 *
 * bootstrap(App);
 * ```
 */
exports.HostBinding = decorators_1.makePropDecorator(directives_2.HostBindingMetadata);
// TODO(alexeagle): remove the duplication of this doc. It is copied from HostListenerMetadata.
/**
 * Declares a host listener.
 *
 * Angular will invoke the decorated method when the host element emits the specified event.
 *
 * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
 * event.
 *
 * ### Example
 *
 * The following example declares a directive that attaches a click listener to the button and
 * counts clicks.
 *
 * ```typescript
 * @Directive({selector: 'button[counting]'})
 * class CountClicks {
 *   numberOfClicks = 0;
 *
 *   @HostListener('click', ['$event.target'])
 *   onClick(btn) {
 *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
 *   }
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `<button counting>Increment</button>`,
 *   directives: [CountClicks]
 * })
 * class App {}
 *
 * bootstrap(App);
 * ```
 */
exports.HostListener = decorators_1.makePropDecorator(directives_2.HostListenerMetadata);
},{"./metadata/di":72,"./metadata/directives":73,"./metadata/view":74,"./util/decorators":90}],72:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var metadata_1 = require('angular2/src/core/di/metadata');
/**
 * Specifies that a constant attribute value should be injected.
 *
 * The directive can inject constant string literals of host element attributes.
 *
 * ### Example
 *
 * Suppose we have an `<input>` element and want to know its `type`.
 *
 * ```html
 * <input type="text">
 * ```
 *
 * A decorator can inject string literal `text` like so:
 *
 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
 */
var AttributeMetadata = (function (_super) {
    __extends(AttributeMetadata, _super);
    function AttributeMetadata(attributeName) {
        _super.call(this);
        this.attributeName = attributeName;
    }
    Object.defineProperty(AttributeMetadata.prototype, "token", {
        get: function () {
            // Normally one would default a token to a type of an injected value but here
            // the type of a variable is "string" and we can't use primitive type as a return value
            // so we use instance of Attribute instead. This doesn't matter much in practice as arguments
            // with @Attribute annotation are injected by ElementInjector that doesn't take tokens into
            // account.
            return this;
        },
        enumerable: true,
        configurable: true
    });
    AttributeMetadata.prototype.toString = function () { return "@Attribute(" + lang_1.stringify(this.attributeName) + ")"; };
    AttributeMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String])
    ], AttributeMetadata);
    return AttributeMetadata;
})(metadata_1.DependencyMetadata);
exports.AttributeMetadata = AttributeMetadata;
/**
 * Declares an injectable parameter to be a live list of directives or variable
 * bindings from the content children of a directive.
 *
 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
 *
 * Assume that `<tabs>` component would like to get a list its children `<pane>`
 * components as shown in this example:
 *
 * ```html
 * <tabs>
 *   <pane title="Overview">...</pane>
 *   <pane *ngFor="#o of objects" [title]="o.title">{{o.text}}</pane>
 * </tabs>
 * ```
 *
 * The preferred solution is to query for `Pane` directives using this decorator.
 *
 * ```javascript
 * @Component({
 *   selector: 'pane',
 *   inputs: ['title']
 * })
 * class Pane {
 *   title:string;
 * }
 *
 * @Component({
 *  selector: 'tabs',
 *  template: `
 *    <ul>
 *      <li *ngFor="#pane of panes">{{pane.title}}</li>
 *    </ul>
 *    <content></content>
 *  `
 * })
 * class Tabs {
 *   panes: QueryList<Pane>;
 *   constructor(@Query(Pane) panes:QueryList<Pane>) {
  *    this.panes = panes;
  *  }
 * }
 * ```
 *
 * A query can look for variable bindings by passing in a string with desired binding symbol.
 *
 * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
 * ```html
 * <seeker>
 *   <div #findme>...</div>
 * </seeker>
 *
 * @Component({ selector: 'seeker' })
 * class Seeker {
 *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
 * }
 * ```
 *
 * In this case the object that is injected depend on the type of the variable
 * binding. It can be an ElementRef, a directive or a component.
 *
 * Passing in a comma separated list of variable bindings will query for all of them.
 *
 * ```html
 * <seeker>
 *   <div #find-me>...</div>
 *   <div #find-me-too>...</div>
 * </seeker>
 *
 *  @Component({
 *   selector: 'seeker'
 * })
 * class Seeker {
 *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
 * }
 * ```
 *
 * Configure whether query looks for direct children or all descendants
 * of the querying element, by using the `descendants` parameter.
 * It is set to `false` by default.
 *
 * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
 * ```html
 * <container #first>
 *   <item>a</item>
 *   <item>b</item>
 *   <container #second>
 *     <item>c</item>
 *   </container>
 * </container>
 * ```
 *
 * When querying for items, the first container will see only `a` and `b` by default,
 * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
 *
 * The queried directives are kept in a depth-first pre-order with respect to their
 * positions in the DOM.
 *
 * Query does not look deep into any subcomponent views.
 *
 * Query is updated as part of the change-detection cycle. Since change detection
 * happens after construction of a directive, QueryList will always be empty when observed in the
 * constructor.
 *
 * The injected object is an unmodifiable live list.
 * See {@link QueryList} for more details.
 */
var QueryMetadata = (function (_super) {
    __extends(QueryMetadata, _super);
    function QueryMetadata(_selector, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d;
        _super.call(this);
        this._selector = _selector;
        this.descendants = descendants;
        this.first = first;
    }
    Object.defineProperty(QueryMetadata.prototype, "isViewQuery", {
        /**
         * always `false` to differentiate it with {@link ViewQueryMetadata}.
         */
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "selector", {
        /**
         * what this is querying for.
         */
        get: function () { return di_1.resolveForwardRef(this._selector); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "isVarBindingQuery", {
        /**
         * whether this is querying for a variable binding or a directive.
         */
        get: function () { return lang_1.isString(this.selector); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryMetadata.prototype, "varBindings", {
        /**
         * returns a list of variable bindings this is querying for.
         * Only applicable if this is a variable bindings query.
         */
        get: function () { return this.selector.split(','); },
        enumerable: true,
        configurable: true
    });
    QueryMetadata.prototype.toString = function () { return "@Query(" + lang_1.stringify(this.selector) + ")"; };
    QueryMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object, Object])
    ], QueryMetadata);
    return QueryMetadata;
})(metadata_1.DependencyMetadata);
exports.QueryMetadata = QueryMetadata;
// TODO: add an example after ContentChildren and ViewChildren are in master
/**
 * Configures a content query.
 *
 * Content queries are set before the `ngAfterContentInit` callback is called.
 *
 * ### Example
 *
 * ```
 * @Directive({
 *   selector: 'someDir'
 * })
 * class SomeDir {
 *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
 *
 *   ngAfterContentInit() {
 *     // contentChildren is set
 *   }
 * }
 * ```
 */
var ContentChildrenMetadata = (function (_super) {
    __extends(ContentChildrenMetadata, _super);
    function ContentChildrenMetadata(_selector, _a) {
        var _b = (_a === void 0 ? {} : _a).descendants, descendants = _b === void 0 ? false : _b;
        _super.call(this, _selector, { descendants: descendants });
    }
    ContentChildrenMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object, Object])
    ], ContentChildrenMetadata);
    return ContentChildrenMetadata;
})(QueryMetadata);
exports.ContentChildrenMetadata = ContentChildrenMetadata;
// TODO: add an example after ContentChild and ViewChild are in master
/**
 * Configures a content query.
 *
 * Content queries are set before the `ngAfterContentInit` callback is called.
 *
 * ### Example
 *
 * ```
 * @Directive({
 *   selector: 'someDir'
 * })
 * class SomeDir {
 *   @ContentChild(ChildDirective) contentChild;
 *
 *   ngAfterContentInit() {
 *     // contentChild is set
 *   }
 * }
 * ```
 */
var ContentChildMetadata = (function (_super) {
    __extends(ContentChildMetadata, _super);
    function ContentChildMetadata(_selector) {
        _super.call(this, _selector, { descendants: true, first: true });
    }
    ContentChildMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object])
    ], ContentChildMetadata);
    return ContentChildMetadata;
})(QueryMetadata);
exports.ContentChildMetadata = ContentChildMetadata;
/**
 * Similar to {@link QueryMetadata}, but querying the component view, instead of
 * the content children.
 *
 * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
 *
 * ```javascript
 * @Component({...})
 * @View({
 *   template: `
 *     <item> a </item>
 *     <item> b </item>
 *     <item> c </item>
 *   `
 * })
 * class MyComponent {
 *   shown: boolean;
 *
 *   constructor(private @Query(Item) items:QueryList<Item>) {
 *     items.onChange(() => console.log(items.length));
 *   }
 * }
 * ```
 *
 * Supports the same querying parameters as {@link QueryMetadata}, except
 * `descendants`. This always queries the whole view.
 *
 * As `shown` is flipped between true and false, items will contain zero of one
 * items.
 *
 * Specifies that a {@link QueryList} should be injected.
 *
 * The injected object is an iterable and observable live list.
 * See {@link QueryList} for more details.
 */
var ViewQueryMetadata = (function (_super) {
    __extends(ViewQueryMetadata, _super);
    function ViewQueryMetadata(_selector, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d;
        _super.call(this, _selector, { descendants: descendants, first: first });
    }
    Object.defineProperty(ViewQueryMetadata.prototype, "isViewQuery", {
        /**
         * always `true` to differentiate it with {@link QueryMetadata}.
         */
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    ViewQueryMetadata.prototype.toString = function () { return "@ViewQuery(" + lang_1.stringify(this.selector) + ")"; };
    ViewQueryMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object, Object])
    ], ViewQueryMetadata);
    return ViewQueryMetadata;
})(QueryMetadata);
exports.ViewQueryMetadata = ViewQueryMetadata;
/**
 * Configures a view query.
 *
 * View queries are set before the `ngAfterViewInit` callback is called.
 *
 * ### Example
 *
 * ```
 * @Component({
 *   selector: 'someDir',
 *   templateUrl: 'someTemplate',
 *   directives: [ItemDirective]
 * })
 * class SomeDir {
 *   @ViewChildren(ItemDirective) viewChildren: QueryList<ItemDirective>;
 *
 *   ngAfterViewInit() {
 *     // viewChildren is set
 *   }
 * }
 * ```
 */
var ViewChildrenMetadata = (function (_super) {
    __extends(ViewChildrenMetadata, _super);
    function ViewChildrenMetadata(_selector) {
        _super.call(this, _selector, { descendants: true });
    }
    ViewChildrenMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object])
    ], ViewChildrenMetadata);
    return ViewChildrenMetadata;
})(ViewQueryMetadata);
exports.ViewChildrenMetadata = ViewChildrenMetadata;
/**
 * Configures a view query.
 *
 * View queries are set before the `ngAfterViewInit` callback is called.
 *
 * ### Example
 *
 * ```
 * @Component({
 *   selector: 'someDir',
 *   templateUrl: 'someTemplate',
 *   directives: [ItemDirective]
 * })
 * class SomeDir {
 *   @ViewChild(ItemDirective) viewChild:ItemDirective;
 *
 *   ngAfterViewInit() {
 *     // viewChild is set
 *   }
 * }
 * ```
 */
var ViewChildMetadata = (function (_super) {
    __extends(ViewChildMetadata, _super);
    function ViewChildMetadata(_selector) {
        _super.call(this, _selector, { descendants: true, first: true });
    }
    ViewChildMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object])
    ], ViewChildMetadata);
    return ViewChildMetadata;
})(ViewQueryMetadata);
exports.ViewChildMetadata = ViewChildMetadata;
},{"angular2/src/core/di":38,"angular2/src/core/di/metadata":44,"angular2/src/facade/lang":98}],73:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
var metadata_1 = require('angular2/src/core/di/metadata');
var change_detection_1 = require('angular2/src/core/change_detection');
/**
 * Directives allow you to attach behavior to elements in the DOM.
 *
 * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
 *
 * A directive consists of a single directive annotation and a controller class. When the
 * directive's `selector` matches
 * elements in the DOM, the following steps occur:
 *
 * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
 * arguments.
 * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
 * depth-first order,
 *    as declared in the HTML.
 *
 * ## Understanding How Injection Works
 *
 * There are three stages of injection resolution.
 * - *Pre-existing Injectors*:
 *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
 * the dependency was
 *     specified as `@Optional`, returns `null`.
 *   - The platform injector resolves browser singleton resources, such as: cookies, title,
 * location, and others.
 * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
 * the same parent-child hierarchy
 *     as the component instances in the DOM.
 * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
 * element has an `ElementInjector`
 *     which follow the same parent-child hierarchy as the DOM elements themselves.
 *
 * When a template is instantiated, it also must instantiate the corresponding directives in a
 * depth-first order. The
 * current `ElementInjector` resolves the constructor dependencies for each directive.
 *
 * Angular then resolves dependencies as follows, according to the order in which they appear in the
 * {@link ViewMetadata}:
 *
 * 1. Dependencies on the current element
 * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
 * 3. Dependencies on component injectors and their parents until it encounters the root component
 * 4. Dependencies on pre-existing injectors
 *
 *
 * The `ElementInjector` can inject other directives, element-specific special objects, or it can
 * delegate to the parent
 * injector.
 *
 * To inject other directives, declare the constructor parameter as:
 * - `directive:DirectiveType`: a directive on the current element only
 * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
 * element and the
 *    Shadow DOM root.
 * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
 * directives.
 * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
 * child directives.
 *
 * To inject element-specific special objects, declare the constructor parameter as:
 * - `element: ElementRef` to obtain a reference to logical element in the view.
 * - `viewContainer: ViewContainerRef` to control child template instantiation, for
 * {@link DirectiveMetadata} directives only
 * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
 *
 * ### Example
 *
 * The following example demonstrates how dependency injection resolves constructor arguments in
 * practice.
 *
 *
 * Assume this HTML template:
 *
 * ```
 * <div dependency="1">
 *   <div dependency="2">
 *     <div dependency="3" my-directive>
 *       <div dependency="4">
 *         <div dependency="5"></div>
 *       </div>
 *       <div dependency="6"></div>
 *     </div>
 *   </div>
 * </div>
 * ```
 *
 * With the following `dependency` decorator and `SomeService` injectable class.
 *
 * ```
 * @Injectable()
 * class SomeService {
 * }
 *
 * @Directive({
 *   selector: '[dependency]',
 *   inputs: [
 *     'id: dependency'
 *   ]
 * })
 * class Dependency {
 *   id:string;
 * }
 * ```
 *
 * Let's step through the different ways in which `MyDirective` could be declared...
 *
 *
 * ### No injection
 *
 * Here the constructor is declared with no arguments, therefore nothing is injected into
 * `MyDirective`.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor() {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with no dependencies.
 *
 *
 * ### Component-level injection
 *
 * Directives can inject any injectable instance from the closest component injector or any of its
 * parents.
 *
 * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
 * from the parent
 * component's injector.
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(someService: SomeService) {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with a dependency on `SomeService`.
 *
 *
 * ### Injecting a directive from the current element
 *
 * Directives can inject other directives declared on the current element.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(dependency: Dependency) {
 *     expect(dependency.id).toEqual(3);
 *   }
 * }
 * ```
 * This directive would be instantiated with `Dependency` declared at the same element, in this case
 * `dependency="3"`.
 *
 * ### Injecting a directive from any ancestor elements
 *
 * Directives can inject other directives declared on any ancestor element (in the current Shadow
 * DOM), i.e. on the current element, the
 * parent element, or its parents.
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(@Host() dependency: Dependency) {
 *     expect(dependency.id).toEqual(2);
 *   }
 * }
 * ```
 *
 * `@Host` checks the current element, the parent, as well as its parents recursively. If
 * `dependency="2"` didn't
 * exist on the direct parent, this injection would
 * have returned
 * `dependency="1"`.
 *
 *
 * ### Injecting a live collection of direct child directives
 *
 *
 * A directive can also query for other child directives. Since parent directives are instantiated
 * before child directives, a directive can't simply inject the list of child directives. Instead,
 * the directive injects a {@link QueryList}, which updates its contents as children are added,
 * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
 * `ngIf`, or an `ngSwitch`.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
 * `Dependency` 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
 *
 * ### Injecting a live collection of descendant directives
 *
 * By passing the descendant flag to `@Query` above, we can include the children of the child
 * elements.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
 *
 * ### Optional injection
 *
 * The normal behavior of directives is to return an error when a specified dependency cannot be
 * resolved. If you
 * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
 * with `@Optional()`.
 * This explicitly permits the author of a template to treat some of the surrounding directives as
 * optional.
 *
 * ```
 * @Directive({ selector: '[my-directive]' })
 * class MyDirective {
 *   constructor(@Optional() dependency:Dependency) {
 *   }
 * }
 * ```
 *
 * This directive would be instantiated with a `Dependency` directive found on the current element.
 * If none can be
 * found, the injector supplies `null` instead of throwing an error.
 *
 * ### Example
 *
 * Here we use a decorator directive to simply define basic tool-tip behavior.
 *
 * ```
 * @Directive({
 *   selector: '[tooltip]',
 *   inputs: [
 *     'text: tooltip'
 *   ],
 *   host: {
 *     '(mouseenter)': 'onMouseEnter()',
 *     '(mouseleave)': 'onMouseLeave()'
 *   }
 * })
 * class Tooltip{
 *   text:string;
 *   overlay:Overlay; // NOT YET IMPLEMENTED
 *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
 *
 *   constructor(overlayManager:OverlayManager) {
 *     this.overlay = overlay;
 *   }
 *
 *   onMouseEnter() {
 *     // exact signature to be determined
 *     this.overlay = this.overlayManager.open(text, ...);
 *   }
 *
 *   onMouseLeave() {
 *     this.overlay.close();
 *     this.overlay = null;
 *   }
 * }
 * ```
 * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
 * `tooltip` selector,
 * like so:
 *
 * ```
 * <div tooltip="some text here"></div>
 * ```
 *
 * Directives can also control the instantiation, destruction, and positioning of inline template
 * elements:
 *
 * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
 * runtime.
 * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
 * location in the current view
 * where these actions are performed.
 *
 * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
 * `<template>` element. Thus a
 * directive in a child view cannot inject the directive that created it.
 *
 * Since directives that create views via ViewContainers are common in Angular, and using the full
 * `<template>` element syntax is wordy, Angular
 * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
 * equivalent.
 *
 * Thus,
 *
 * ```
 * <ul>
 *   <li *foo="bar" title="text"></li>
 * </ul>
 * ```
 *
 * Expands in use to:
 *
 * ```
 * <ul>
 *   <template [foo]="bar">
 *     <li title="text"></li>
 *   </template>
 * </ul>
 * ```
 *
 * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
 * the directive
 * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
 *
 * ## Lifecycle hooks
 *
 * When the directive class implements some {@link angular2/lifecycle_hooks} the callbacks are
 * called by the change detection at defined points in time during the life of the directive.
 *
 * ### Example
 *
 * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
 *
 * Here is a simple directive that triggers on an `unless` selector:
 *
 * ```
 * @Directive({
 *   selector: '[unless]',
 *   inputs: ['unless']
 * })
 * export class Unless {
 *   viewContainer: ViewContainerRef;
 *   templateRef: TemplateRef;
 *   prevCondition: boolean;
 *
 *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
 *     this.viewContainer = viewContainer;
 *     this.templateRef = templateRef;
 *     this.prevCondition = null;
 *   }
 *
 *   set unless(newCondition) {
 *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
 *       this.prevCondition = true;
 *       this.viewContainer.clear();
 *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
 *       this.prevCondition = false;
 *       this.viewContainer.create(this.templateRef);
 *     }
 *   }
 * }
 * ```
 *
 * We can then use this `unless` selector in a template:
 * ```
 * <ul>
 *   <li *unless="expr"></li>
 * </ul>
 * ```
 *
 * Once the directive instantiates the child view, the shorthand notation for the template expands
 * and the result is:
 *
 * ```
 * <ul>
 *   <template [unless]="exp">
 *     <li></li>
 *   </template>
 *   <li></li>
 * </ul>
 * ```
 *
 * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
 * the instantiated
 * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
 */
var DirectiveMetadata = (function (_super) {
    __extends(DirectiveMetadata, _super);
    function DirectiveMetadata(_a) {
        var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, bindings = _b.bindings, providers = _b.providers, exportAs = _b.exportAs, queries = _b.queries;
        _super.call(this);
        this.selector = selector;
        this._inputs = inputs;
        this._properties = properties;
        this._outputs = outputs;
        this._events = events;
        this.host = host;
        this.exportAs = exportAs;
        this.queries = queries;
        this._providers = providers;
        this._bindings = bindings;
    }
    Object.defineProperty(DirectiveMetadata.prototype, "inputs", {
        /**
         * Enumerates the set of data-bound input properties for a directive
         *
         * Angular automatically updates input properties during change detection.
         *
         * The `inputs` property defines a set of `directiveProperty` to `bindingProperty`
         * configuration:
         *
         * - `directiveProperty` specifies the component property where the value is written.
         * - `bindingProperty` specifies the DOM property where the value is read from.
         *
         * When `bindingProperty` is not provided, it is assumed to be equal to `directiveProperty`.
         *
         * ### Example ([live demo](http://plnkr.co/edit/ivhfXY?p=preview))
         *
         * The following example creates a component with two data-bound properties.
         *
         * ```typescript
         * @Component({
         *   selector: 'bank-account',
         *   inputs: ['bankName', 'id: account-id'],
         *   template: `
         *     Bank Name: {{bankName}}
         *     Account Id: {{id}}
         *   `
         * })
         * class BankAccount {
         *   bankName: string;
         *   id: string;
         *
         *   // this property is not bound, and won't be automatically updated by Angular
         *   normalizedBankName: string;
         * }
         *
         * @Component({
         *   selector: 'app',
         *   template: `
         *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
         *   `,
         *   directives: [BankAccount]
         * })
         * class App {}
         *
         * bootstrap(App);
         * ```
         *
         */
        get: function () {
            return lang_1.isPresent(this._properties) && this._properties.length > 0 ? this._properties :
                this._inputs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "properties", {
        get: function () { return this.inputs; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "outputs", {
        /**
         * Enumerates the set of event-bound output properties.
         *
         * When an output property emits an event, an event handler attached to that event
         * the template is invoked.
         *
         * The `outputs` property defines a set of `directiveProperty` to `bindingProperty`
         * configuration:
         *
         * - `directiveProperty` specifies the component property that emits events.
         * - `bindingProperty` specifies the DOM property the event handler is attached to.
         *
         * ### Example ([live demo](http://plnkr.co/edit/d5CNq7?p=preview))
         *
         * ```typescript
         * @Directive({
         *   selector: 'interval-dir',
         *   outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
         * })
         * class IntervalDir {
         *   everySecond = new EventEmitter();
         *   five5Secs = new EventEmitter();
         *
         *   constructor() {
         *     setInterval(() => this.everySecond.emit("event"), 1000);
         *     setInterval(() => this.five5Secs.emit("event"), 5000);
         *   }
         * }
         *
         * @Component({
         *   selector: 'app',
         *   template: `
         *     <interval-dir (every-second)="everySecond()" (every-five-seconds)="everyFiveSeconds()">
         *     </interval-dir>
         *   `,
         *   directives: [IntervalDir]
         * })
         * class App {
         *   everySecond() { console.log('second'); }
         *   everyFiveSeconds() { console.log('five seconds'); }
         * }
         * bootstrap(App);
         * ```
         *
         */
        get: function () {
            return lang_1.isPresent(this._events) && this._events.length > 0 ? this._events : this._outputs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "events", {
        get: function () { return this.outputs; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "providers", {
        /**
         * Defines the set of injectable objects that are visible to a Directive and its light DOM
         * children.
         *
         * ## Simple Example
         *
         * Here is an example of a class that can be injected:
         *
         * ```
         * class Greeter {
         *    greet(name:string) {
         *      return 'Hello ' + name + '!';
         *    }
         * }
         *
         * @Directive({
         *   selector: 'greet',
         *   bindings: [
         *     Greeter
         *   ]
         * })
         * class HelloWorld {
         *   greeter:Greeter;
         *
         *   constructor(greeter:Greeter) {
         *     this.greeter = greeter;
         *   }
         * }
         * ```
         */
        get: function () {
            return lang_1.isPresent(this._bindings) && this._bindings.length > 0 ? this._bindings :
                this._providers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectiveMetadata.prototype, "bindings", {
        /** @deprecated */
        get: function () { return this.providers; },
        enumerable: true,
        configurable: true
    });
    DirectiveMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object])
    ], DirectiveMetadata);
    return DirectiveMetadata;
})(metadata_1.InjectableMetadata);
exports.DirectiveMetadata = DirectiveMetadata;
/**
 * Declare reusable UI building blocks for an application.
 *
 * Each Angular component requires a single `@Component` annotation. The
 * `@Component`
 * annotation specifies when a component is instantiated, and which properties and hostListeners it
 * binds to.
 *
 * When a component is instantiated, Angular
 * - creates a shadow DOM for the component.
 * - loads the selected template into the shadow DOM.
 * - creates all the injectable objects configured with `providers` and `viewProviders`.
 *
 * All template expressions and statements are then evaluated against the component instance.
 *
 * For details on the `@View` annotation, see {@link ViewMetadata}.
 *
 * ## Lifecycle hooks
 *
 * When the component class implements some {@link angular2/lifecycle_hooks} the callbacks are
 * called by the change detection at defined points in time during the life of the component.
 *
 * ### Example
 *
 * {@example core/ts/metadata/metadata.ts region='component'}
 */
var ComponentMetadata = (function (_super) {
    __extends(ComponentMetadata, _super);
    function ComponentMetadata(_a) {
        var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, exportAs = _b.exportAs, moduleId = _b.moduleId, bindings = _b.bindings, providers = _b.providers, viewBindings = _b.viewBindings, viewProviders = _b.viewProviders, _c = _b.changeDetection, changeDetection = _c === void 0 ? change_detection_1.ChangeDetectionStrategy.Default : _c, queries = _b.queries, templateUrl = _b.templateUrl, template = _b.template, styleUrls = _b.styleUrls, styles = _b.styles, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation;
        _super.call(this, {
            selector: selector,
            inputs: inputs,
            outputs: outputs,
            properties: properties,
            events: events,
            host: host,
            exportAs: exportAs,
            bindings: bindings,
            providers: providers,
            queries: queries
        });
        this.changeDetection = changeDetection;
        this._viewProviders = viewProviders;
        this._viewBindings = viewBindings;
        this.templateUrl = templateUrl;
        this.template = template;
        this.styleUrls = styleUrls;
        this.styles = styles;
        this.directives = directives;
        this.pipes = pipes;
        this.encapsulation = encapsulation;
        this.moduleId = moduleId;
    }
    Object.defineProperty(ComponentMetadata.prototype, "viewProviders", {
        /**
         * Defines the set of injectable objects that are visible to its view DOM children.
         *
         * ## Simple Example
         *
         * Here is an example of a class that can be injected:
         *
         * ```
         * class Greeter {
         *    greet(name:string) {
         *      return 'Hello ' + name + '!';
         *    }
         * }
         *
         * @Directive({
         *   selector: 'needs-greeter'
         * })
         * class NeedsGreeter {
         *   greeter:Greeter;
         *
         *   constructor(greeter:Greeter) {
         *     this.greeter = greeter;
         *   }
         * }
         *
         * @Component({
         *   selector: 'greet',
         *   viewProviders: [
         *     Greeter
         *   ],
         *   template: `<needs-greeter></needs-greeter>`,
         *   directives: [NeedsGreeter]
         * })
         * class HelloWorld {
         * }
         *
         * ```
         */
        get: function () {
            return lang_1.isPresent(this._viewBindings) && this._viewBindings.length > 0 ? this._viewBindings :
                this._viewProviders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentMetadata.prototype, "viewBindings", {
        get: function () { return this.viewProviders; },
        enumerable: true,
        configurable: true
    });
    ComponentMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object])
    ], ComponentMetadata);
    return ComponentMetadata;
})(DirectiveMetadata);
exports.ComponentMetadata = ComponentMetadata;
/**
 * Declare reusable pipe function.
 *
 * A "pure" pipe is only re-evaluated when either the input or any of the arguments change.
 *
 * When not specified, pipes default to being pure.
 *
 * ### Example
 *
 * {@example core/ts/metadata/metadata.ts region='pipe'}
 */
var PipeMetadata = (function (_super) {
    __extends(PipeMetadata, _super);
    function PipeMetadata(_a) {
        var name = _a.name, pure = _a.pure;
        _super.call(this);
        this.name = name;
        this._pure = pure;
    }
    Object.defineProperty(PipeMetadata.prototype, "pure", {
        get: function () { return lang_1.isPresent(this._pure) ? this._pure : true; },
        enumerable: true,
        configurable: true
    });
    PipeMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object])
    ], PipeMetadata);
    return PipeMetadata;
})(metadata_1.InjectableMetadata);
exports.PipeMetadata = PipeMetadata;
/**
 * Declares a data-bound input property.
 *
 * Angular automatically updates data-bound properties during change detection.
 *
 * `InputMetadata` takes an optional parameter that specifies the name
 * used when instantiating a component in the template. When not provided,
 * the name of the decorated property is used.
 *
 * ### Example
 *
 * The following example creates a component with two input properties.
 *
 * ```typescript
 * @Component({
 *   selector: 'bank-account',
 *   template: `
 *     Bank Name: {{bankName}}
 *     Account Id: {{id}}
 *   `
 * })
 * class BankAccount {
 *   @Input() bankName: string;
 *   @Input('account-id') id: string;
 *
 *   // this property is not bound, and won't be automatically updated by Angular
 *   normalizedBankName: string;
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `
 *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
 *   `,
 *   directives: [BankAccount]
 * })
 * class App {}
 *
 * bootstrap(App);
 * ```
 */
var InputMetadata = (function () {
    function InputMetadata(
        /**
         * Name used when instantiating a component in the temlate.
         */
        bindingPropertyName) {
        this.bindingPropertyName = bindingPropertyName;
    }
    InputMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String])
    ], InputMetadata);
    return InputMetadata;
})();
exports.InputMetadata = InputMetadata;
/**
 * Declares an event-bound output property.
 *
 * When an output property emits an event, an event handler attached to that event
 * the template is invoked.
 *
 * `OutputMetadata` takes an optional parameter that specifies the name
 * used when instantiating a component in the template. When not provided,
 * the name of the decorated property is used.
 *
 * ### Example
 *
 * ```typescript
 * @Directive({
 *   selector: 'interval-dir',
 * })
 * class IntervalDir {
 *   @Output() everySecond = new EventEmitter();
 *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
 *
 *   constructor() {
 *     setInterval(() => this.everySecond.emit("event"), 1000);
 *     setInterval(() => this.five5Secs.emit("event"), 5000);
 *   }
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `
 *     <interval-dir (every-second)="everySecond()" (every-five-seconds)="everyFiveSeconds()">
 *     </interval-dir>
 *   `,
 *   directives: [IntervalDir]
 * })
 * class App {
 *   everySecond() { console.log('second'); }
 *   everyFiveSeconds() { console.log('five seconds'); }
 * }
 * bootstrap(App);
 * ```
 */
var OutputMetadata = (function () {
    function OutputMetadata(bindingPropertyName) {
        this.bindingPropertyName = bindingPropertyName;
    }
    OutputMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String])
    ], OutputMetadata);
    return OutputMetadata;
})();
exports.OutputMetadata = OutputMetadata;
/**
 * Declares a host property binding.
 *
 * Angular automatically checks host property bindings during change detection.
 * If a binding changes, it will update the host element of the directive.
 *
 * `HostBindingMetadata` takes an optional parameter that specifies the property
 * name of the host element that will be updated. When not provided,
 * the class property name is used.
 *
 * ### Example
 *
 * The following example creates a directive that sets the `valid` and `invalid` classes
 * on the DOM element that has ngModel directive on it.
 *
 * ```typescript
 * @Directive({selector: '[ngModel]'})
 * class NgModelStatus {
 *   constructor(public control:NgModel) {}
 *   @HostBinding('[class.valid]') get valid { return this.control.valid; }
 *   @HostBinding('[class.invalid]') get invalid { return this.control.invalid; }
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `<input [(ngModel)]="prop">`,
 *   directives: [FORM_DIRECTIVES, NgModelStatus]
 * })
 * class App {
 *   prop;
 * }
 *
 * bootstrap(App);
 * ```
 */
var HostBindingMetadata = (function () {
    function HostBindingMetadata(hostPropertyName) {
        this.hostPropertyName = hostPropertyName;
    }
    HostBindingMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String])
    ], HostBindingMetadata);
    return HostBindingMetadata;
})();
exports.HostBindingMetadata = HostBindingMetadata;
/**
 * Declares a host listener.
 *
 * Angular will invoke the decorated method when the host element emits the specified event.
 *
 * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
 * event.
 *
 * ### Example
 *
 * The following example declares a directive that attaches a click listener to the button and
 * counts clicks.
 *
 * ```typescript
 * @Directive({selector: 'button[counting]'})
 * class CountClicks {
 *   numberOfClicks = 0;
 *
 *   @HostListener('click', ['$event.target'])
 *   onClick(btn) {
 *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
 *   }
 * }
 *
 * @Component({
 *   selector: 'app',
 *   template: `<button counting>Increment</button>`,
 *   directives: [CountClicks]
 * })
 * class App {}
 *
 * bootstrap(App);
 * ```
 */
var HostListenerMetadata = (function () {
    function HostListenerMetadata(eventName, args) {
        this.eventName = eventName;
        this.args = args;
    }
    HostListenerMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String, Array])
    ], HostListenerMetadata);
    return HostListenerMetadata;
})();
exports.HostListenerMetadata = HostListenerMetadata;
},{"angular2/src/core/change_detection":5,"angular2/src/core/di/metadata":44,"angular2/src/facade/lang":98}],74:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
/**
 * Defines template and style encapsulation options available for Component's {@link View}.
 *
 * See {@link ViewMetadata#encapsulation}.
 */
(function (ViewEncapsulation) {
    /**
     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
     * Element and pre-processing the style rules provided via
     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
     * attribute to all selectors.
     *
     * This is the default option.
     */
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    /**
     * Use the native encapsulation mechanism of the renderer.
     *
     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
     * creating a ShadowRoot for Component's Host Element.
     */
    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
    /**
     * Don't provide any template or style encapsulation.
     */
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
})(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
var ViewEncapsulation = exports.ViewEncapsulation;
exports.VIEW_ENCAPSULATION_VALUES = [ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None];
/**
 * Metadata properties available for configuring Views.
 *
 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
 * within the template.
 *
 * When a component is instantiated, the template is loaded into the component's shadow root, and
 * the expressions and statements in the template are evaluated against the component.
 *
 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
 *
 * ### Example
 *
 * ```
 * @Component({
 *   selector: 'greet',
 *   template: 'Hello {{name}}!',
 *   directives: [GreetUser, Bold]
 * })
 * class Greet {
 *   name: string;
 *
 *   constructor() {
 *     this.name = 'World';
 *   }
 * }
 * ```
 */
var ViewMetadata = (function () {
    function ViewMetadata(_a) {
        var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls;
        this.templateUrl = templateUrl;
        this.template = template;
        this.styleUrls = styleUrls;
        this.styles = styles;
        this.directives = directives;
        this.pipes = pipes;
        this.encapsulation = encapsulation;
    }
    ViewMetadata = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [Object])
    ], ViewMetadata);
    return ViewMetadata;
})();
exports.ViewMetadata = ViewMetadata;
},{"angular2/src/facade/lang":98}],75:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = require('angular2/src/core/di/provider');
var di_1 = require('angular2/src/core/di');
var PipeProvider = (function (_super) {
    __extends(PipeProvider, _super);
    function PipeProvider(name, pure, key, resolvedFactories, multiBinding) {
        _super.call(this, key, resolvedFactories, multiBinding);
        this.name = name;
        this.pure = pure;
    }
    PipeProvider.createFromType = function (type, metadata) {
        var provider = new di_1.Provider(type, { useClass: type });
        var rb = provider_1.resolveProvider(provider);
        return new PipeProvider(metadata.name, metadata.pure, rb.key, rb.resolvedFactories, rb.multiProvider);
    };
    return PipeProvider;
})(provider_1.ResolvedProvider_);
exports.PipeProvider = PipeProvider;
},{"angular2/src/core/di":38,"angular2/src/core/di/provider":46}],76:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var cd = require('angular2/src/core/change_detection/pipes');
var ProtoPipes = (function () {
    function ProtoPipes(
        /**
        * Map of {@link PipeMetadata} names to {@link PipeMetadata} implementations.
        */
        config) {
        this.config = config;
        this.config = config;
    }
    ProtoPipes.fromProviders = function (providers) {
        var config = {};
        providers.forEach(function (b) { return config[b.name] = b; });
        return new ProtoPipes(config);
    };
    ProtoPipes.prototype.get = function (name) {
        var provider = this.config[name];
        if (lang_1.isBlank(provider))
            throw new exceptions_1.BaseException("Cannot find pipe '" + name + "'.");
        return provider;
    };
    return ProtoPipes;
})();
exports.ProtoPipes = ProtoPipes;
var Pipes = (function () {
    function Pipes(proto, injector) {
        this.proto = proto;
        this.injector = injector;
        /** @internal */
        this._config = {};
    }
    Pipes.prototype.get = function (name) {
        var cached = collection_1.StringMapWrapper.get(this._config, name);
        if (lang_1.isPresent(cached))
            return cached;
        var p = this.proto.get(name);
        var transform = this.injector.instantiateResolved(p);
        var res = new cd.SelectedPipe(transform, p.pure);
        if (p.pure) {
            collection_1.StringMapWrapper.set(this._config, name, res);
        }
        return res;
    };
    return Pipes;
})();
exports.Pipes = Pipes;
},{"angular2/src/core/change_detection/pipes":33,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],77:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var console_1 = require('angular2/src/core/console');
var reflection_1 = require('./reflection/reflection');
var testability_1 = require('angular2/src/core/testability/testability');
function _reflector() {
    return reflection_1.reflector;
}
/**
 * A default set of providers which should be included in any Angular platform.
 */
exports.PLATFORM_COMMON_PROVIDERS = lang_1.CONST_EXPR([new di_1.Provider(reflection_1.Reflector, { useFactory: _reflector, deps: [] }), testability_1.TestabilityRegistry, console_1.Console]);
},{"./reflection/reflection":82,"angular2/src/core/console":36,"angular2/src/core/di":38,"angular2/src/core/testability/testability":88,"angular2/src/facade/lang":98}],78:[function(require,module,exports){
'use strict';var di_1 = require("angular2/src/core/di");
var lang_1 = require("angular2/src/facade/lang");
/**
 * A token that can be provided when bootstraping an application to make an array of directives
 * available in every component of the application.
 *
 * ### Example
 *
 * ```typescript
 * import {PLATFORM_DIRECTIVES} from 'angular2/core';
 * import {OtherDirective} from './myDirectives';
 *
 * @Component({
 *   selector: 'my-component',
 *   template: `
 *     <!-- can use other directive even though the component does not list it in `directives` -->
 *     <other-directive></other-directive>
 *   `
 * })
 * export class MyComponent {
 *   ...
 * }
 *
 * bootstrap(MyComponent, [provide(PLATFORM_DIRECTIVES, {useValue: [OtherDirective], multi:true})]);
 * ```
 */
exports.PLATFORM_DIRECTIVES = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Directives"));
/**
 * A token that can be provided when bootstraping an application to make an array of pipes
 * available in every component of the application.
 *
 * ### Example
 *
 * ```typescript
 * import {PLATFORM_PIPES} from 'angular2/core';
 * import {OtherPipe} from './myPipe';
 *
 * @Component({
 *   selector: 'my-component',
 *   template: `
 *     {{123 | other-pipe}}
 *   `
 * })
 * export class MyComponent {
 *   ...
 * }
 *
 * bootstrap(MyComponent, [provide(PLATFORM_PIPES, {useValue: [OtherPipe], multi:true})]);
 * ```
 */
exports.PLATFORM_PIPES = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Pipes"));
},{"angular2/src/core/di":38,"angular2/src/facade/lang":98}],79:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
exports.enableProdMode = lang_1.enableProdMode;
},{"angular2/src/facade/lang":98}],80:[function(require,module,exports){
'use strict';var impl = require("./wtf_impl");
// Change exports to const once https://github.com/angular/ts2dart/issues/150
/**
 * True if WTF is enabled.
 */
exports.wtfEnabled = impl.detectWTF();
function noopScope(arg0, arg1) {
    return null;
}
/**
 * Create trace scope.
 *
 * Scopes must be strictly nested and are analogous to stack frames, but
 * do not have to follow the stack frames. Instead it is recommended that they follow logical
 * nesting. You may want to use
 * [Event
 * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
 * as they are defined in WTF.
 *
 * Used to mark scope entry. The return value is used to leave the scope.
 *
 *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
 *
 *     someMethod() {
 *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
 *        // DO SOME WORK HERE
 *        return wtfLeave(s, 123); // Return value 123
 *     }
 *
 * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
 * negatively impact the performance of your application. For this reason we recommend that
 * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
 * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
 * exception, will produce incorrect trace, but presence of exception signifies logic error which
 * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
 * an exception is expected during normal execution while profiling.
 *
 */
exports.wtfCreateScope = exports.wtfEnabled ? impl.createScope : function (signature, flags) { return noopScope; };
/**
 * Used to mark end of Scope.
 *
 * - `scope` to end.
 * - `returnValue` (optional) to be passed to the WTF.
 *
 * Returns the `returnValue for easy chaining.
 */
exports.wtfLeave = exports.wtfEnabled ? impl.leave : function (s, r) { return r; };
/**
 * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
 * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
 * enabled.
 *
 *     someMethod() {
 *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
 *        var future = new Future.delay(5).then((_) {
 *          wtfEndTimeRange(s);
 *        });
 *     }
 */
exports.wtfStartTimeRange = exports.wtfEnabled ? impl.startTimeRange : function (rangeType, action) { return null; };
/**
 * Ends a async time range operation.
 * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
 * enabled.
 */
exports.wtfEndTimeRange = exports.wtfEnabled ? impl.endTimeRange : function (r) {
    return null;
};
},{"./wtf_impl":81}],81:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var trace;
var events;
function detectWTF() {
    var wtf = lang_1.global['wtf'];
    if (wtf) {
        trace = wtf['trace'];
        if (trace) {
            events = trace['events'];
            return true;
        }
    }
    return false;
}
exports.detectWTF = detectWTF;
function createScope(signature, flags) {
    if (flags === void 0) { flags = null; }
    return events.createScope(signature, flags);
}
exports.createScope = createScope;
function leave(scope, returnValue) {
    trace.leaveScope(scope, returnValue);
    return returnValue;
}
exports.leave = leave;
function startTimeRange(rangeType, action) {
    return trace.beginTimeRange(rangeType, action);
}
exports.startTimeRange = startTimeRange;
function endTimeRange(range) {
    trace.endTimeRange(range);
}
exports.endTimeRange = endTimeRange;
},{"angular2/src/facade/lang":98}],82:[function(require,module,exports){
'use strict';var reflector_1 = require('./reflector');
var reflector_2 = require('./reflector');
exports.Reflector = reflector_2.Reflector;
exports.ReflectionInfo = reflector_2.ReflectionInfo;
var reflection_capabilities_1 = require('./reflection_capabilities');
/**
 * The {@link Reflector} used internally in Angular to access metadata
 * about symbols.
 */
exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
},{"./reflection_capabilities":83,"./reflector":84}],83:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var ReflectionCapabilities = (function () {
    function ReflectionCapabilities(reflect) {
        this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
    }
    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
    ReflectionCapabilities.prototype.factory = function (t) {
        switch (t.length) {
            case 0:
                return function () { return new t(); };
            case 1:
                return function (a1) { return new t(a1); };
            case 2:
                return function (a1, a2) { return new t(a1, a2); };
            case 3:
                return function (a1, a2, a3) { return new t(a1, a2, a3); };
            case 4:
                return function (a1, a2, a3, a4) { return new t(a1, a2, a3, a4); };
            case 5:
                return function (a1, a2, a3, a4, a5) { return new t(a1, a2, a3, a4, a5); };
            case 6:
                return function (a1, a2, a3, a4, a5, a6) { return new t(a1, a2, a3, a4, a5, a6); };
            case 7:
                return function (a1, a2, a3, a4, a5, a6, a7) { return new t(a1, a2, a3, a4, a5, a6, a7); };
            case 8:
                return function (a1, a2, a3, a4, a5, a6, a7, a8) { return new t(a1, a2, a3, a4, a5, a6, a7, a8); };
            case 9:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) { return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9); };
            case 10:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
                };
            case 11:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
                };
            case 12:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
                };
            case 13:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
                };
            case 14:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
                };
            case 15:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
                };
            case 16:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
                };
            case 17:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
                };
            case 18:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
                };
            case 19:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
                };
            case 20:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
                };
        }
        ;
        throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
    };
    /** @internal */
    ReflectionCapabilities.prototype._zipTypesAndAnnotaions = function (paramTypes, paramAnnotations) {
        var result;
        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        }
        else {
            result = new Array(paramTypes.length);
        }
        for (var i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    };
    ReflectionCapabilities.prototype.parameters = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.parameters)) {
            return typeOrFunc.parameters;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
            if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
                return this._zipTypesAndAnnotaions(paramTypes, paramAnnotations);
            }
        }
        // The array has to be filled with `undefined` because holes would be skipped by `some`
        var parameters = new Array(typeOrFunc.length);
        parameters.fill(undefined);
        return parameters;
    };
    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.annotations)) {
            var annotations = typeOrFunc.annotations;
            if (lang_1.isFunction(annotations) && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
            if (lang_1.isPresent(annotations))
                return annotations;
        }
        return [];
    };
    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.propMetadata)) {
            var propMetadata = typeOrFunc.propMetadata;
            if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
                propMetadata = propMetadata.propMetadata;
            }
            return propMetadata;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
            if (lang_1.isPresent(propMetadata))
                return propMetadata;
        }
        return {};
    };
    ReflectionCapabilities.prototype.interfaces = function (type) {
        throw new exceptions_1.BaseException("JavaScript does not support interfaces");
    };
    ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
    ReflectionCapabilities.prototype.setter = function (name) {
        return new Function('o', 'v', 'return o.' + name + ' = v;');
    };
    ReflectionCapabilities.prototype.method = function (name) {
        var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
        return new Function('o', 'args', functionBody);
    };
    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
    ReflectionCapabilities.prototype.importUri = function (type) { return './'; };
    return ReflectionCapabilities;
})();
exports.ReflectionCapabilities = ReflectionCapabilities;
},{"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],84:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
/**
 * Reflective information about a symbol, including annotations, interfaces, and other metadata.
 */
var ReflectionInfo = (function () {
    function ReflectionInfo(annotations, parameters, factory, interfaces, propMetadata) {
        this.annotations = annotations;
        this.parameters = parameters;
        this.factory = factory;
        this.interfaces = interfaces;
        this.propMetadata = propMetadata;
    }
    return ReflectionInfo;
})();
exports.ReflectionInfo = ReflectionInfo;
/**
 * Provides access to reflection data about symbols. Used internally by Angular
 * to power dependency injection and compilation.
 */
var Reflector = (function () {
    function Reflector(reflectionCapabilities) {
        /** @internal */
        this._injectableInfo = new collection_1.Map();
        /** @internal */
        this._getters = new collection_1.Map();
        /** @internal */
        this._setters = new collection_1.Map();
        /** @internal */
        this._methods = new collection_1.Map();
        this._usedKeys = null;
        this.reflectionCapabilities = reflectionCapabilities;
    }
    Reflector.prototype.isReflectionEnabled = function () { return this.reflectionCapabilities.isReflectionEnabled(); };
    /**
     * Causes `this` reflector to track keys used to access
     * {@link ReflectionInfo} objects.
     */
    Reflector.prototype.trackUsage = function () { this._usedKeys = new collection_1.Set(); };
    /**
     * Lists types for which reflection information was not requested since
     * {@link #trackUsage} was called. This list could later be audited as
     * potential dead code.
     */
    Reflector.prototype.listUnusedKeys = function () {
        var _this = this;
        if (this._usedKeys == null) {
            throw new exceptions_1.BaseException('Usage tracking is disabled');
        }
        var allTypes = collection_1.MapWrapper.keys(this._injectableInfo);
        return allTypes.filter(function (key) { return !collection_1.SetWrapper.has(_this._usedKeys, key); });
    };
    Reflector.prototype.registerFunction = function (func, funcInfo) {
        this._injectableInfo.set(func, funcInfo);
    };
    Reflector.prototype.registerType = function (type, typeInfo) {
        this._injectableInfo.set(type, typeInfo);
    };
    Reflector.prototype.registerGetters = function (getters) { _mergeMaps(this._getters, getters); };
    Reflector.prototype.registerSetters = function (setters) { _mergeMaps(this._setters, setters); };
    Reflector.prototype.registerMethods = function (methods) { _mergeMaps(this._methods, methods); };
    Reflector.prototype.factory = function (type) {
        if (this._containsReflectionInfo(type)) {
            var res = this._getReflectionInfo(type).factory;
            return lang_1.isPresent(res) ? res : null;
        }
        else {
            return this.reflectionCapabilities.factory(type);
        }
    };
    Reflector.prototype.parameters = function (typeOrFunc) {
        if (this._injectableInfo.has(typeOrFunc)) {
            var res = this._getReflectionInfo(typeOrFunc).parameters;
            return lang_1.isPresent(res) ? res : [];
        }
        else {
            return this.reflectionCapabilities.parameters(typeOrFunc);
        }
    };
    Reflector.prototype.annotations = function (typeOrFunc) {
        if (this._injectableInfo.has(typeOrFunc)) {
            var res = this._getReflectionInfo(typeOrFunc).annotations;
            return lang_1.isPresent(res) ? res : [];
        }
        else {
            return this.reflectionCapabilities.annotations(typeOrFunc);
        }
    };
    Reflector.prototype.propMetadata = function (typeOrFunc) {
        if (this._injectableInfo.has(typeOrFunc)) {
            var res = this._getReflectionInfo(typeOrFunc).propMetadata;
            return lang_1.isPresent(res) ? res : {};
        }
        else {
            return this.reflectionCapabilities.propMetadata(typeOrFunc);
        }
    };
    Reflector.prototype.interfaces = function (type) {
        if (this._injectableInfo.has(type)) {
            var res = this._getReflectionInfo(type).interfaces;
            return lang_1.isPresent(res) ? res : [];
        }
        else {
            return this.reflectionCapabilities.interfaces(type);
        }
    };
    Reflector.prototype.getter = function (name) {
        if (this._getters.has(name)) {
            return this._getters.get(name);
        }
        else {
            return this.reflectionCapabilities.getter(name);
        }
    };
    Reflector.prototype.setter = function (name) {
        if (this._setters.has(name)) {
            return this._setters.get(name);
        }
        else {
            return this.reflectionCapabilities.setter(name);
        }
    };
    Reflector.prototype.method = function (name) {
        if (this._methods.has(name)) {
            return this._methods.get(name);
        }
        else {
            return this.reflectionCapabilities.method(name);
        }
    };
    /** @internal */
    Reflector.prototype._getReflectionInfo = function (typeOrFunc) {
        if (lang_1.isPresent(this._usedKeys)) {
            this._usedKeys.add(typeOrFunc);
        }
        return this._injectableInfo.get(typeOrFunc);
    };
    /** @internal */
    Reflector.prototype._containsReflectionInfo = function (typeOrFunc) { return this._injectableInfo.has(typeOrFunc); };
    Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
    return Reflector;
})();
exports.Reflector = Reflector;
function _mergeMaps(target, config) {
    collection_1.StringMapWrapper.forEach(config, function (v, k) { return target.set(k, v); });
}
},{"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],85:[function(require,module,exports){
'use strict';// Public API for render
var api_1 = require('./render/api');
exports.Renderer = api_1.Renderer;
exports.RenderViewRef = api_1.RenderViewRef;
exports.RenderProtoViewRef = api_1.RenderProtoViewRef;
exports.RenderFragmentRef = api_1.RenderFragmentRef;
exports.RenderViewWithFragments = api_1.RenderViewWithFragments;
exports.RenderTemplateCmd = api_1.RenderTemplateCmd;
exports.RenderTextCmd = api_1.RenderTextCmd;
exports.RenderNgContentCmd = api_1.RenderNgContentCmd;
exports.RenderBeginElementCmd = api_1.RenderBeginElementCmd;
exports.RenderBeginComponentCmd = api_1.RenderBeginComponentCmd;
exports.RenderEmbeddedTemplateCmd = api_1.RenderEmbeddedTemplateCmd;
exports.RenderBeginCmd = api_1.RenderBeginCmd;
exports.RenderComponentTemplate = api_1.RenderComponentTemplate;
},{"./render/api":86}],86:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exceptions_1 = require('angular2/src/facade/exceptions');
/**
 * Represents an Angular ProtoView in the Rendering Context.
 *
 * When you implement a custom {@link Renderer}, `RenderProtoViewRef` specifies what Render View
 * your renderer should create.
 *
 * `RenderProtoViewRef` is a counterpart to {@link ProtoViewRef} available in the Application
 * Context. But unlike `ProtoViewRef`, `RenderProtoViewRef` contains all static nested Proto Views
 * that are recursively merged into a single Render Proto View.

 *
 * <!-- TODO: this is created by Renderer#createProtoView in the new compiler -->
 */
var RenderProtoViewRef = (function () {
    function RenderProtoViewRef() {
    }
    return RenderProtoViewRef;
})();
exports.RenderProtoViewRef = RenderProtoViewRef;
/**
 * Represents a list of sibling Nodes that can be moved by the {@link Renderer} independently of
 * other Render Fragments.
 *
 * Any {@link RenderViewRef} has one Render Fragment.
 *
 * Additionally any View with an Embedded View that contains a {@link NgContentAst View Projection}
 * results in additional Render Fragment.
 */
/*
  <div>foo</div>
  {{bar}}


  <div>foo</div> -> view 1 / fragment 1
  <ul>
    <template ngFor>
      <li>{{fg}}</li> -> view 2 / fragment 1
    </template>
  </ul>
  {{bar}}


  <div>foo</div> -> view 1 / fragment 1
  <ul>
    <template ngIf>
      <li><ng-content></></li> -> view 1 / fragment 2
    </template>
    <template ngFor>
      <li><ng-content></></li> ->
      <li></li>                -> view 1 / fragment 2 + view 2 / fragment 1..n-1
    </template>
  </ul>
  {{bar}}
 */
// TODO(i): refactor into an interface
var RenderFragmentRef = (function () {
    function RenderFragmentRef() {
    }
    return RenderFragmentRef;
})();
exports.RenderFragmentRef = RenderFragmentRef;
/**
 * Represents an Angular View in the Rendering Context.
 *
 * `RenderViewRef` specifies to the {@link Renderer} what View to update or destroy.
 *
 * Unlike a {@link ViewRef} available in the Application Context, Render View contains all the
 * static Component Views that have been recursively merged into a single Render View.
 *
 * Each `RenderViewRef` contains one or more {@link RenderFragmentRef Render Fragments}, these
 * Fragments are created, hydrated, dehydrated and destroyed as a single unit together with the
 * View.
 */
// TODO(i): refactor into an interface
var RenderViewRef = (function () {
    function RenderViewRef() {
    }
    return RenderViewRef;
})();
exports.RenderViewRef = RenderViewRef;
/**
 * Abstract base class for commands to the Angular renderer, using the visitor pattern.
 */
var RenderTemplateCmd = (function () {
    function RenderTemplateCmd() {
    }
    return RenderTemplateCmd;
})();
exports.RenderTemplateCmd = RenderTemplateCmd;
/**
 * Command to begin rendering.
 */
var RenderBeginCmd = (function (_super) {
    __extends(RenderBeginCmd, _super);
    function RenderBeginCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderBeginCmd.prototype, "ngContentIndex", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderBeginCmd.prototype, "isBound", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderBeginCmd;
})(RenderTemplateCmd);
exports.RenderBeginCmd = RenderBeginCmd;
/**
 * Command to render text.
 */
var RenderTextCmd = (function (_super) {
    __extends(RenderTextCmd, _super);
    function RenderTextCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderTextCmd.prototype, "value", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderTextCmd;
})(RenderBeginCmd);
exports.RenderTextCmd = RenderTextCmd;
/**
 * Command to render projected content.
 */
var RenderNgContentCmd = (function (_super) {
    __extends(RenderNgContentCmd, _super);
    function RenderNgContentCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderNgContentCmd.prototype, "index", {
        // The index of this NgContent element
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderNgContentCmd.prototype, "ngContentIndex", {
        // The index of the NgContent element into which this
        // NgContent element should be projected (if any)
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderNgContentCmd;
})(RenderTemplateCmd);
exports.RenderNgContentCmd = RenderNgContentCmd;
/**
 * Command to begin rendering an element.
 */
var RenderBeginElementCmd = (function (_super) {
    __extends(RenderBeginElementCmd, _super);
    function RenderBeginElementCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderBeginElementCmd.prototype, "name", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderBeginElementCmd.prototype, "attrNameAndValues", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderBeginElementCmd.prototype, "eventTargetAndNames", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderBeginElementCmd;
})(RenderBeginCmd);
exports.RenderBeginElementCmd = RenderBeginElementCmd;
/**
 * Command to begin rendering a component.
 */
var RenderBeginComponentCmd = (function (_super) {
    __extends(RenderBeginComponentCmd, _super);
    function RenderBeginComponentCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderBeginComponentCmd.prototype, "templateId", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderBeginComponentCmd;
})(RenderBeginElementCmd);
exports.RenderBeginComponentCmd = RenderBeginComponentCmd;
/**
 * Command to render a component's template.
 */
var RenderEmbeddedTemplateCmd = (function (_super) {
    __extends(RenderEmbeddedTemplateCmd, _super);
    function RenderEmbeddedTemplateCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderEmbeddedTemplateCmd.prototype, "isMerged", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderEmbeddedTemplateCmd.prototype, "children", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderEmbeddedTemplateCmd;
})(RenderBeginElementCmd);
exports.RenderEmbeddedTemplateCmd = RenderEmbeddedTemplateCmd;
/**
 * Container class produced by a {@link Renderer} when creating a Render View.
 *
 * An instance of `RenderViewWithFragments` contains a {@link RenderViewRef} and an array of
 * {@link RenderFragmentRef}s belonging to this Render View.
 */
// TODO(i): refactor this by RenderViewWithFragments and adding fragments directly to RenderViewRef
var RenderViewWithFragments = (function () {
    function RenderViewWithFragments(
        /**
         * Reference to the {@link RenderViewRef}.
         */
        viewRef, 
        /**
         * Array of {@link RenderFragmentRef}s ordered in the depth-first order.
         */
        fragmentRefs) {
        this.viewRef = viewRef;
        this.fragmentRefs = fragmentRefs;
    }
    return RenderViewWithFragments;
})();
exports.RenderViewWithFragments = RenderViewWithFragments;
/**
 * Template for rendering a component, including commands and styles.
 */
var RenderComponentTemplate = (function () {
    function RenderComponentTemplate(id, shortId, encapsulation, commands, styles) {
        this.id = id;
        this.shortId = shortId;
        this.encapsulation = encapsulation;
        this.commands = commands;
        this.styles = styles;
    }
    return RenderComponentTemplate;
})();
exports.RenderComponentTemplate = RenderComponentTemplate;
/**
 * Injectable service that provides a low-level interface for modifying the UI.
 *
 * Use this service to bypass Angular's templating and make custom UI changes that can't be
 * expressed declaratively. For example if you need to set a property or an attribute whose name is
 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
 * respectively.
 *
 * If you are implementing a custom renderer, you must implement this interface.
 *
 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
 */
var Renderer = (function () {
    function Renderer() {
    }
    return Renderer;
})();
exports.Renderer = Renderer;
},{"angular2/src/facade/exceptions":96}],87:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var CAMEL_CASE_REGEXP = /([A-Z])/g;
var DASH_CASE_REGEXP = /-([a-z])/g;
function camelCaseToDashCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
}
exports.camelCaseToDashCase = camelCaseToDashCase;
function dashCaseToCamelCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
}
exports.dashCaseToCamelCase = dashCaseToCamelCase;
},{"angular2/src/facade/lang":98}],88:[function(require,module,exports){
'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var ng_zone_1 = require('../zone/ng_zone');
var async_1 = require('angular2/src/facade/async');
/**
 * The Testability service provides testing hooks that can be accessed from
 * the browser and by services such as Protractor. Each bootstrapped Angular
 * application on the page will have an instance of Testability.
 */
var Testability = (function () {
    function Testability(_ngZone) {
        /** @internal */
        this._pendingCount = 0;
        /** @internal */
        this._callbacks = [];
        /** @internal */
        this._isAngularEventPending = false;
        this._watchAngularEvents(_ngZone);
    }
    /** @internal */
    Testability.prototype._watchAngularEvents = function (_ngZone) {
        var _this = this;
        async_1.ObservableWrapper.subscribe(_ngZone.onTurnStart, function (_) { _this._isAngularEventPending = true; });
        _ngZone.runOutsideAngular(function () {
            async_1.ObservableWrapper.subscribe(_ngZone.onEventDone, function (_) {
                if (!_ngZone.hasPendingTimers) {
                    _this._isAngularEventPending = false;
                    _this._runCallbacksIfReady();
                }
            });
        });
    };
    Testability.prototype.increasePendingRequestCount = function () {
        this._pendingCount += 1;
        return this._pendingCount;
    };
    Testability.prototype.decreasePendingRequestCount = function () {
        this._pendingCount -= 1;
        if (this._pendingCount < 0) {
            throw new exceptions_1.BaseException('pending async requests below zero');
        }
        this._runCallbacksIfReady();
        return this._pendingCount;
    };
    Testability.prototype.isStable = function () { return this._pendingCount == 0 && !this._isAngularEventPending; };
    /** @internal */
    Testability.prototype._runCallbacksIfReady = function () {
        var _this = this;
        if (!this.isStable()) {
            return; // Not ready
        }
        // Schedules the call backs in a new frame so that it is always async.
        async_1.PromiseWrapper.resolve(null).then(function (_) {
            while (_this._callbacks.length !== 0) {
                (_this._callbacks.pop())();
            }
        });
    };
    Testability.prototype.whenStable = function (callback) {
        this._callbacks.push(callback);
        this._runCallbacksIfReady();
    };
    Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
    // This only accounts for ngZone, and not pending counts. Use `whenStable` to
    // check for stability.
    Testability.prototype.isAngularEventPending = function () { return this._isAngularEventPending; };
    Testability.prototype.findBindings = function (using, provider, exactMatch) {
        // TODO(juliemr): implement.
        return [];
    };
    Testability.prototype.findProviders = function (using, provider, exactMatch) {
        // TODO(juliemr): implement.
        return [];
    };
    Testability = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [ng_zone_1.NgZone])
    ], Testability);
    return Testability;
})();
exports.Testability = Testability;
/**
 * A global registry of {@link Testability} instances for specific elements.
 */
var TestabilityRegistry = (function () {
    function TestabilityRegistry() {
        /** @internal */
        this._applications = new collection_1.Map();
        _testabilityGetter.addToWindow(this);
    }
    TestabilityRegistry.prototype.registerApplication = function (token, testability) {
        this._applications.set(token, testability);
    };
    TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
    TestabilityRegistry.prototype.getAllTestabilities = function () { return collection_1.MapWrapper.values(this._applications); };
    TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
        if (findInAncestors === void 0) { findInAncestors = true; }
        return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
    };
    TestabilityRegistry = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TestabilityRegistry);
    return TestabilityRegistry;
})();
exports.TestabilityRegistry = TestabilityRegistry;
var _NoopGetTestability = (function () {
    function _NoopGetTestability() {
    }
    _NoopGetTestability.prototype.addToWindow = function (registry) { };
    _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
        return null;
    };
    _NoopGetTestability = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [])
    ], _NoopGetTestability);
    return _NoopGetTestability;
})();
/**
 * Set the {@link GetTestability} implementation used by the Angular testing framework.
 */
function setTestabilityGetter(getter) {
    _testabilityGetter = getter;
}
exports.setTestabilityGetter = setTestabilityGetter;
var _testabilityGetter = lang_1.CONST_EXPR(new _NoopGetTestability());
},{"../zone/ng_zone":92,"angular2/src/core/di":38,"angular2/src/facade/async":93,"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],89:[function(require,module,exports){
'use strict';// Public API for util
var decorators_1 = require('./util/decorators');
exports.Class = decorators_1.Class;
},{"./util/decorators":90}],90:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
function extractAnnotation(annotation) {
    if (lang_1.isFunction(annotation) && annotation.hasOwnProperty('annotation')) {
        // it is a decorator, extract annotation
        annotation = annotation.annotation;
    }
    return annotation;
}
function applyParams(fnOrArray, key) {
    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
        fnOrArray === Number || fnOrArray === Array) {
        throw new Error("Can not use native " + lang_1.stringify(fnOrArray) + " as constructor");
    }
    if (lang_1.isFunction(fnOrArray)) {
        return fnOrArray;
    }
    else if (fnOrArray instanceof Array) {
        var annotations = fnOrArray;
        var fn = fnOrArray[fnOrArray.length - 1];
        if (!lang_1.isFunction(fn)) {
            throw new Error("Last position of Class method array must be Function in key " + key + " was '" + lang_1.stringify(fn) + "'");
        }
        var annoLength = annotations.length - 1;
        if (annoLength != fn.length) {
            throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + lang_1.stringify(fn));
        }
        var paramsAnnotations = [];
        for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
            var paramAnnotations = [];
            paramsAnnotations.push(paramAnnotations);
            var annotation = annotations[i];
            if (annotation instanceof Array) {
                for (var j = 0; j < annotation.length; j++) {
                    paramAnnotations.push(extractAnnotation(annotation[j]));
                }
            }
            else if (lang_1.isFunction(annotation)) {
                paramAnnotations.push(extractAnnotation(annotation));
            }
            else {
                paramAnnotations.push(annotation);
            }
        }
        Reflect.defineMetadata('parameters', paramsAnnotations, fn);
        return fn;
    }
    else {
        throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + lang_1.stringify(fnOrArray) + "'");
    }
}
/**
 * Provides a way for expressing ES6 classes with parameter annotations in ES5.
 *
 * ## Basic Example
 *
 * ```
 * var Greeter = ng.Class({
 *   constructor: function(name) {
 *     this.name = name;
 *   },
 *
 *   greet: function() {
 *     alert('Hello ' + this.name + '!');
 *   }
 * });
 * ```
 *
 * is equivalent to ES6:
 *
 * ```
 * class Greeter {
 *   constructor(name) {
 *     this.name = name;
 *   }
 *
 *   greet() {
 *     alert('Hello ' + this.name + '!');
 *   }
 * }
 * ```
 *
 * or equivalent to ES5:
 *
 * ```
 * var Greeter = function (name) {
 *   this.name = name;
 * }
 *
 * Greeter.prototype.greet = function () {
 *   alert('Hello ' + this.name + '!');
 * }
 * ```
 *
 * ### Example with parameter annotations
 *
 * ```
 * var MyService = ng.Class({
 *   constructor: [String, [new Query(), QueryList], function(name, queryList) {
 *     ...
 *   }]
 * });
 * ```
 *
 * is equivalent to ES6:
 *
 * ```
 * class MyService {
 *   constructor(name: string, @Query() queryList: QueryList) {
 *     ...
 *   }
 * }
 * ```
 *
 * ### Example with inheritance
 *
 * ```
 * var Shape = ng.Class({
 *   constructor: (color) {
 *     this.color = color;
 *   }
 * });
 *
 * var Square = ng.Class({
 *   extends: Shape,
 *   constructor: function(color, size) {
 *     Shape.call(this, color);
 *     this.size = size;
 *   }
 * });
 * ```
 */
function Class(clsDef) {
    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
    var proto = constructor.prototype;
    if (clsDef.hasOwnProperty('extends')) {
        if (lang_1.isFunction(clsDef.extends)) {
            constructor.prototype = proto =
                Object.create(clsDef.extends.prototype);
        }
        else {
            throw new Error("Class definition 'extends' property must be a constructor function was: " + lang_1.stringify(clsDef.extends));
        }
    }
    for (var key in clsDef) {
        if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
            proto[key] = applyParams(clsDef[key], key);
        }
    }
    if (this && this.annotations instanceof Array) {
        Reflect.defineMetadata('annotations', this.annotations, constructor);
    }
    return constructor;
}
exports.Class = Class;
var Reflect = lang_1.global.Reflect;
if (!(Reflect && Reflect.getMetadata)) {
    throw 'reflect-metadata shim is required when using class decorators';
}
function makeDecorator(annotationCls, chainFn) {
    if (chainFn === void 0) { chainFn = null; }
    function DecoratorFactory(objOrType) {
        var annotationInstance = new annotationCls(objOrType);
        if (this instanceof annotationCls) {
            return annotationInstance;
        }
        else {
            var chainAnnotation = lang_1.isFunction(this) && this.annotations instanceof Array ? this.annotations : [];
            chainAnnotation.push(annotationInstance);
            var TypeDecorator = function TypeDecorator(cls) {
                var annotations = Reflect.getOwnMetadata('annotations', cls);
                annotations = annotations || [];
                annotations.push(annotationInstance);
                Reflect.defineMetadata('annotations', annotations, cls);
                return cls;
            };
            TypeDecorator.annotations = chainAnnotation;
            TypeDecorator.Class = Class;
            if (chainFn)
                chainFn(TypeDecorator);
            return TypeDecorator;
        }
    }
    DecoratorFactory.prototype = Object.create(annotationCls.prototype);
    return DecoratorFactory;
}
exports.makeDecorator = makeDecorator;
function makeParamDecorator(annotationCls) {
    function ParamDecoratorFactory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var annotationInstance = Object.create(annotationCls.prototype);
        annotationCls.apply(annotationInstance, args);
        if (this instanceof annotationCls) {
            return annotationInstance;
        }
        else {
            ParamDecorator.annotation = annotationInstance;
            return ParamDecorator;
        }
        function ParamDecorator(cls, unusedKey, index) {
            var parameters = Reflect.getMetadata('parameters', cls);
            parameters = parameters || [];
            // there might be gaps if some in between parameters do not have annotations.
            // we pad with nulls.
            while (parameters.length <= index) {
                parameters.push(null);
            }
            parameters[index] = parameters[index] || [];
            var annotationsForParam = parameters[index];
            annotationsForParam.push(annotationInstance);
            Reflect.defineMetadata('parameters', parameters, cls);
            return cls;
        }
    }
    ParamDecoratorFactory.prototype = Object.create(annotationCls.prototype);
    return ParamDecoratorFactory;
}
exports.makeParamDecorator = makeParamDecorator;
function makePropDecorator(decoratorCls) {
    function PropDecoratorFactory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var decoratorInstance = Object.create(decoratorCls.prototype);
        decoratorCls.apply(decoratorInstance, args);
        if (this instanceof decoratorCls) {
            return decoratorInstance;
        }
        else {
            return function PropDecorator(target, name) {
                var meta = Reflect.getOwnMetadata('propMetadata', target.constructor);
                meta = meta || {};
                meta[name] = meta[name] || [];
                meta[name].unshift(decoratorInstance);
                Reflect.defineMetadata('propMetadata', meta, target.constructor);
            };
        }
    }
    PropDecoratorFactory.prototype = Object.create(decoratorCls.prototype);
    return PropDecoratorFactory;
}
exports.makePropDecorator = makePropDecorator;
},{"angular2/src/facade/lang":98}],91:[function(require,module,exports){
'use strict';// Public API for Zone
var ng_zone_1 = require('./zone/ng_zone');
exports.NgZone = ng_zone_1.NgZone;
exports.NgZoneError = ng_zone_1.NgZoneError;
},{"./zone/ng_zone":92}],92:[function(require,module,exports){
'use strict';var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var async_1 = require('angular2/src/facade/async');
var profile_1 = require('../profile/profile');
/**
 * Stores error information; delivered via [NgZone.onError] stream.
 */
var NgZoneError = (function () {
    function NgZoneError(error, stackTrace) {
        this.error = error;
        this.stackTrace = stackTrace;
    }
    return NgZoneError;
})();
exports.NgZoneError = NgZoneError;
/**
 * An injectable service for executing work inside or outside of the Angular zone.
 *
 * The most common use of this service is to optimize performance when starting a work consisting of
 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
 * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
 * can reenter the Angular zone via {@link #run}.
 *
 * <!-- TODO: add/fix links to:
 *   - docs explaining zones and the use of zones in Angular and change-detection
 *   - link to runOutsideAngular/run (throughout this file!)
 *   -->
 *
 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
 * ```
 * import {Component, View, NgZone} from 'angular2/core';
 * import {NgIf} from 'angular2/common';
 *
 * @Component({
 *   selector: 'ng-zone-demo'.
 *   template: `
 *     <h2>Demo: NgZone</h2>
 *
 *     <p>Progress: {{progress}}%</p>
 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
 *
 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
 *   `,
 *   directives: [NgIf]
 * })
 * export class NgZoneDemo {
 *   progress: number = 0;
 *   label: string;
 *
 *   constructor(private _ngZone: NgZone) {}
 *
 *   // Loop inside the Angular zone
 *   // so the UI DOES refresh after each setTimeout cycle
 *   processWithinAngularZone() {
 *     this.label = 'inside';
 *     this.progress = 0;
 *     this._increaseProgress(() => console.log('Inside Done!'));
 *   }
 *
 *   // Loop outside of the Angular zone
 *   // so the UI DOES NOT refresh after each setTimeout cycle
 *   processOutsideOfAngularZone() {
 *     this.label = 'outside';
 *     this.progress = 0;
 *     this._ngZone.runOutsideAngular(() => {
 *       this._increaseProgress(() => {
 *       // reenter the Angular zone and display done
 *       this._ngZone.run(() => {console.log('Outside Done!') });
 *     }}));
 *   }
 *
 *
 *   _increaseProgress(doneCallback: () => void) {
 *     this.progress += 1;
 *     console.log(`Current progress: ${this.progress}%`);
 *
 *     if (this.progress < 100) {
 *       window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
 *     } else {
 *       doneCallback();
 *     }
 *   }
 * }
 * ```
 */
var NgZone = (function () {
    /**
     * @param {bool} enableLongStackTrace whether to enable long stack trace. They should only be
     *               enabled in development mode as they significantly impact perf.
     */
    function NgZone(_a) {
        var enableLongStackTrace = _a.enableLongStackTrace;
        /** @internal */
        this._runScope = profile_1.wtfCreateScope("NgZone#run()");
        /** @internal */
        this._microtaskScope = profile_1.wtfCreateScope("NgZone#microtask()");
        // Number of microtasks pending from _innerZone (& descendants)
        /** @internal */
        this._pendingMicrotasks = 0;
        // Whether some code has been executed in the _innerZone (& descendants) in the current turn
        /** @internal */
        this._hasExecutedCodeInInnerZone = false;
        // run() call depth in _mountZone. 0 at the end of a macrotask
        // zone.run(() => {         // top-level call
        //   zone.run(() => {});    // nested call -> in-turn
        // });
        /** @internal */
        this._nestedRun = 0;
        /** @internal */
        this._inVmTurnDone = false;
        /** @internal */
        this._pendingTimeouts = [];
        if (lang_1.global.zone) {
            this._disabled = false;
            this._mountZone = lang_1.global.zone;
            this._innerZone = this._createInnerZone(this._mountZone, enableLongStackTrace);
        }
        else {
            this._disabled = true;
            this._mountZone = null;
        }
        this._onTurnStartEvents = new async_1.EventEmitter(false);
        this._onTurnDoneEvents = new async_1.EventEmitter(false);
        this._onEventDoneEvents = new async_1.EventEmitter(false);
        this._onErrorEvents = new async_1.EventEmitter(false);
    }
    /**
     * Sets the zone hook that is called just before a browser task that is handled by Angular
     * executes.
     *
     * The hook is called once per browser task that is handled by Angular.
     *
     * Setting the hook overrides any previously set hook.
     *
     * @deprecated this API will be removed in the future. Use `onTurnStart` instead.
     */
    NgZone.prototype.overrideOnTurnStart = function (onTurnStartHook) {
        this._onTurnStart = lang_1.normalizeBlank(onTurnStartHook);
    };
    Object.defineProperty(NgZone.prototype, "onTurnStart", {
        /**
         * Notifies subscribers just before Angular event turn starts.
         *
         * Emits an event once per browser task that is handled by Angular.
         */
        get: function () { return this._onTurnStartEvents; },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgZone.prototype._notifyOnTurnStart = function (parentRun) {
        var _this = this;
        parentRun.call(this._innerZone, function () { _this._onTurnStartEvents.emit(null); });
    };
    /**
     * Sets the zone hook that is called immediately after Angular zone is done processing the current
     * task and any microtasks scheduled from that task.
     *
     * This is where we typically do change-detection.
     *
     * The hook is called once per browser task that is handled by Angular.
     *
     * Setting the hook overrides any previously set hook.
     *
     * @deprecated this API will be removed in the future. Use `onTurnDone` instead.
     */
    NgZone.prototype.overrideOnTurnDone = function (onTurnDoneHook) {
        this._onTurnDone = lang_1.normalizeBlank(onTurnDoneHook);
    };
    Object.defineProperty(NgZone.prototype, "onTurnDone", {
        /**
         * Notifies subscribers immediately after Angular zone is done processing
         * the current turn and any microtasks scheduled from that turn.
         *
         * Used by Angular as a signal to kick off change-detection.
         */
        get: function () { return this._onTurnDoneEvents; },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgZone.prototype._notifyOnTurnDone = function (parentRun) {
        var _this = this;
        parentRun.call(this._innerZone, function () { _this._onTurnDoneEvents.emit(null); });
    };
    /**
     * Sets the zone hook that is called immediately after the `onTurnDone` callback is called and any
     * microstasks scheduled from within that callback are drained.
     *
     * `onEventDoneFn` is executed outside Angular zone, which means that we will no longer attempt to
     * sync the UI with any model changes that occur within this callback.
     *
     * This hook is useful for validating application state (e.g. in a test).
     *
     * Setting the hook overrides any previously set hook.
     *
     * @deprecated this API will be removed in the future. Use `onEventDone` instead.
     */
    NgZone.prototype.overrideOnEventDone = function (onEventDoneFn, opt_waitForAsync) {
        var _this = this;
        if (opt_waitForAsync === void 0) { opt_waitForAsync = false; }
        var normalizedOnEventDone = lang_1.normalizeBlank(onEventDoneFn);
        if (opt_waitForAsync) {
            this._onEventDone = function () {
                if (!_this._pendingTimeouts.length) {
                    normalizedOnEventDone();
                }
            };
        }
        else {
            this._onEventDone = normalizedOnEventDone;
        }
    };
    Object.defineProperty(NgZone.prototype, "onEventDone", {
        /**
         * Notifies subscribers immediately after the final `onTurnDone` callback
         * before ending VM event.
         *
         * This event is useful for validating application state (e.g. in a test).
         */
        get: function () { return this._onEventDoneEvents; },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgZone.prototype._notifyOnEventDone = function () {
        var _this = this;
        this.runOutsideAngular(function () { _this._onEventDoneEvents.emit(null); });
    };
    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
        /**
         * Whether there are any outstanding microtasks.
         */
        get: function () { return this._pendingMicrotasks > 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingTimers", {
        /**
         * Whether there are any outstanding timers.
         */
        get: function () { return this._pendingTimeouts.length > 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingAsyncTasks", {
        /**
         * Whether there are any outstanding asychnronous tasks of any kind that are
         * scheduled to run within Angular zone.
         *
         * Useful as a signal of UI stability. For example, when a test reaches a
         * point when [hasPendingAsyncTasks] is `false` it might be a good time to run
         * test expectations.
         */
        get: function () { return this.hasPendingMicrotasks || this.hasPendingTimers; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the zone hook that is called when an error is thrown in the Angular zone.
     *
     * Setting the hook overrides any previously set hook.
     *
     * @deprecated this API will be removed in the future. Use `onError` instead.
     */
    NgZone.prototype.overrideOnErrorHandler = function (errorHandler) {
        this._onErrorHandler = lang_1.normalizeBlank(errorHandler);
    };
    Object.defineProperty(NgZone.prototype, "onError", {
        get: function () { return this._onErrorEvents; },
        enumerable: true,
        configurable: true
    });
    /**
     * Executes the `fn` function synchronously within the Angular zone and returns value returned by
     * the function.
     *
     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * within the Angular zone.
     */
    NgZone.prototype.run = function (fn) {
        if (this._disabled) {
            return fn();
        }
        else {
            var s = this._runScope();
            try {
                return this._innerZone.run(fn);
            }
            finally {
                profile_1.wtfLeave(s);
            }
        }
    };
    /**
     * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
     * the function.
     *
     * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
     * doesn't trigger Angular change-detection or is subject to Angular's error handling.
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * outside of the Angular zone.
     *
     * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
     */
    NgZone.prototype.runOutsideAngular = function (fn) {
        if (this._disabled) {
            return fn();
        }
        else {
            return this._mountZone.run(fn);
        }
    };
    /** @internal */
    NgZone.prototype._createInnerZone = function (zone, enableLongStackTrace) {
        var microtaskScope = this._microtaskScope;
        var ngZone = this;
        var errorHandling;
        if (enableLongStackTrace) {
            errorHandling = collection_1.StringMapWrapper.merge(Zone.longStackTraceZone, { onError: function (e) { ngZone._notifyOnError(this, e); } });
        }
        else {
            errorHandling = { onError: function (e) { ngZone._notifyOnError(this, e); } };
        }
        return zone.fork(errorHandling)
            .fork({
            '$run': function (parentRun) {
                return function () {
                    try {
                        ngZone._nestedRun++;
                        if (!ngZone._hasExecutedCodeInInnerZone) {
                            ngZone._hasExecutedCodeInInnerZone = true;
                            ngZone._notifyOnTurnStart(parentRun);
                            if (ngZone._onTurnStart) {
                                parentRun.call(ngZone._innerZone, ngZone._onTurnStart);
                            }
                        }
                        return parentRun.apply(this, arguments);
                    }
                    finally {
                        ngZone._nestedRun--;
                        // If there are no more pending microtasks, we are at the end of a VM turn (or in
                        // onTurnStart)
                        // _nestedRun will be 0 at the end of a macrotasks (it could be > 0 when there are
                        // nested calls
                        // to run()).
                        if (ngZone._pendingMicrotasks == 0 && ngZone._nestedRun == 0 &&
                            !this._inVmTurnDone) {
                            if (ngZone._hasExecutedCodeInInnerZone) {
                                try {
                                    this._inVmTurnDone = true;
                                    ngZone._notifyOnTurnDone(parentRun);
                                    if (ngZone._onTurnDone) {
                                        parentRun.call(ngZone._innerZone, ngZone._onTurnDone);
                                    }
                                }
                                finally {
                                    this._inVmTurnDone = false;
                                    ngZone._hasExecutedCodeInInnerZone = false;
                                }
                            }
                            if (ngZone._pendingMicrotasks === 0) {
                                ngZone._notifyOnEventDone();
                                if (lang_1.isPresent(ngZone._onEventDone)) {
                                    ngZone.runOutsideAngular(ngZone._onEventDone);
                                }
                            }
                        }
                    }
                };
            },
            '$scheduleMicrotask': function (parentScheduleMicrotask) {
                return function (fn) {
                    ngZone._pendingMicrotasks++;
                    var microtask = function () {
                        var s = microtaskScope();
                        try {
                            fn();
                        }
                        finally {
                            ngZone._pendingMicrotasks--;
                            profile_1.wtfLeave(s);
                        }
                    };
                    parentScheduleMicrotask.call(this, microtask);
                };
            },
            '$setTimeout': function (parentSetTimeout) {
                return function (fn, delay) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    var id;
                    var cb = function () {
                        fn();
                        collection_1.ListWrapper.remove(ngZone._pendingTimeouts, id);
                    };
                    id = parentSetTimeout(cb, delay, args);
                    ngZone._pendingTimeouts.push(id);
                    return id;
                };
            },
            '$clearTimeout': function (parentClearTimeout) {
                return function (id) {
                    parentClearTimeout(id);
                    collection_1.ListWrapper.remove(ngZone._pendingTimeouts, id);
                };
            },
            _innerZone: true
        });
    };
    /** @internal */
    NgZone.prototype._notifyOnError = function (zone, e) {
        if (lang_1.isPresent(this._onErrorHandler) || async_1.ObservableWrapper.hasSubscribers(this._onErrorEvents)) {
            var trace = [lang_1.normalizeBlank(e.stack)];
            while (zone && zone.constructedAtException) {
                trace.push(zone.constructedAtException.get());
                zone = zone.parent;
            }
            if (async_1.ObservableWrapper.hasSubscribers(this._onErrorEvents)) {
                async_1.ObservableWrapper.callEmit(this._onErrorEvents, new NgZoneError(e, trace));
            }
            if (lang_1.isPresent(this._onErrorHandler)) {
                this._onErrorHandler(e, trace);
            }
        }
        else {
            console.log('## _notifyOnError ##');
            console.log(e.stack);
            throw e;
        }
    };
    return NgZone;
})();
exports.NgZone = NgZone;
},{"../profile/profile":80,"angular2/src/facade/async":93,"angular2/src/facade/collection":94,"angular2/src/facade/lang":98}],93:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lang_1 = require('angular2/src/facade/lang');
var promise_1 = require('angular2/src/facade/promise');
exports.PromiseWrapper = promise_1.PromiseWrapper;
exports.Promise = promise_1.Promise;
var Subject_1 = require('rxjs/Subject');
var fromPromise_1 = require('rxjs/observable/fromPromise');
var toPromise_1 = require('rxjs/operator/toPromise');
var Observable_1 = require('rxjs/Observable');
exports.Observable = Observable_1.Observable;
var Subject_2 = require('rxjs/Subject');
exports.Subject = Subject_2.Subject;
var TimerWrapper = (function () {
    function TimerWrapper() {
    }
    TimerWrapper.setTimeout = function (fn, millis) {
        return lang_1.global.setTimeout(fn, millis);
    };
    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
    TimerWrapper.setInterval = function (fn, millis) {
        return lang_1.global.setInterval(fn, millis);
    };
    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
    return TimerWrapper;
})();
exports.TimerWrapper = TimerWrapper;
var ObservableWrapper = (function () {
    function ObservableWrapper() {
    }
    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
        if (onComplete === void 0) { onComplete = function () { }; }
        onError = (typeof onError === "function") && onError || lang_1.noop;
        onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
    };
    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
    /**
     * Returns whether `obs` has any subscribers listening to events.
     */
    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
    /**
     * @deprecated - use callEmit() instead
     */
    ObservableWrapper.callNext = function (emitter, value) { emitter.next(value); };
    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
    ObservableWrapper.fromPromise = function (promise) {
        return fromPromise_1.PromiseObservable.create(promise);
    };
    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
    return ObservableWrapper;
})();
exports.ObservableWrapper = ObservableWrapper;
/**
 * Use by directives and components to emit custom Events.
 *
 * ### Examples
 *
 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
 * title gets clicked:
 *
 * ```
 * @Component({
 *   selector: 'zippy',
 *   template: `
 *   <div class="zippy">
 *     <div (click)="toggle()">Toggle</div>
 *     <div [hidden]="!visible">
 *       <ng-content></ng-content>
 *     </div>
 *  </div>`})
 * export class Zippy {
 *   visible: boolean = true;
 *   @Output() open: EventEmitter<any> = new EventEmitter();
 *   @Output() close: EventEmitter<any> = new EventEmitter();
 *
 *   toggle() {
 *     this.visible = !this.visible;
 *     if (this.visible) {
 *       this.open.emit(null);
 *     } else {
 *       this.close.emit(null);
 *     }
 *   }
 * }
 * ```
 *
 * Use Rx.Observable but provides an adapter to make it work as specified here:
 * https://github.com/jhusain/observable-spec
 *
 * Once a reference implementation of the spec is available, switch to it.
 */
var EventEmitter = (function (_super) {
    __extends(EventEmitter, _super);
    /**
     * Creates an instance of [EventEmitter], which depending on [isAsync],
     * delivers events synchronously or asynchronously.
     */
    function EventEmitter(isAsync) {
        if (isAsync === void 0) { isAsync = true; }
        _super.call(this);
        this._isAsync = isAsync;
    }
    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    /**
     * @deprecated - use .emit(value) instead
     */
    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
        var schedulerFn;
        var errorFn = function (err) { return null; };
        var completeFn = function () { return null; };
        if (generatorOrNext && typeof generatorOrNext === 'object') {
            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext.next(value); }); } :
                function (value) { generatorOrNext.next(value); };
            if (generatorOrNext.error) {
                errorFn = this._isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
                    function (err) { generatorOrNext.error(err); };
            }
            if (generatorOrNext.complete) {
                completeFn = this._isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
                    function () { generatorOrNext.complete(); };
            }
        }
        else {
            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
                function (value) { generatorOrNext(value); };
            if (error) {
                errorFn =
                    this._isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
            }
            if (complete) {
                completeFn =
                    this._isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
            }
        }
        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
    };
    return EventEmitter;
})(Subject_1.Subject);
exports.EventEmitter = EventEmitter;
},{"angular2/src/facade/lang":98,"angular2/src/facade/promise":99,"rxjs/Observable":100,"rxjs/Subject":101,"rxjs/observable/fromPromise":104,"rxjs/operator/toPromise":105}],94:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
exports.Map = lang_1.global.Map;
exports.Set = lang_1.global.Set;
// Safari and Internet Explorer do not support the iterable parameter to the
// Map constructor.  We work around that by manually adding the items.
var createMapFromPairs = (function () {
    try {
        if (new exports.Map([[1, 2]]).size === 1) {
            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
        }
    }
    catch (e) {
    }
    return function createMapAndPopulateFromPairs(pairs) {
        var map = new exports.Map();
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            map.set(pair[0], pair[1]);
        }
        return map;
    };
})();
var createMapFromMap = (function () {
    try {
        if (new exports.Map(new exports.Map())) {
            return function createMapFromMap(m) { return new exports.Map(m); };
        }
    }
    catch (e) {
    }
    return function createMapAndPopulateFromMap(m) {
        var map = new exports.Map();
        m.forEach(function (v, k) { map.set(k, v); });
        return map;
    };
})();
var _clearValues = (function () {
    if ((new exports.Map()).keys().next) {
        return function _clearValues(m) {
            var keyIterator = m.keys();
            var k;
            while (!((k = keyIterator.next()).done)) {
                m.set(k.value, null);
            }
        };
    }
    else {
        return function _clearValuesWithForeEach(m) {
            m.forEach(function (v, k) { m.set(k, null); });
        };
    }
})();
// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
var _arrayFromMap = (function () {
    try {
        if ((new exports.Map()).values().next) {
            return function createArrayFromMap(m, getValues) {
                return getValues ? Array.from(m.values()) : Array.from(m.keys());
            };
        }
    }
    catch (e) {
    }
    return function createArrayFromMapWithForeach(m, getValues) {
        var res = ListWrapper.createFixedSize(m.size), i = 0;
        m.forEach(function (v, k) {
            res[i] = getValues ? v : k;
            i++;
        });
        return res;
    };
})();
var MapWrapper = (function () {
    function MapWrapper() {
    }
    MapWrapper.clone = function (m) { return createMapFromMap(m); };
    MapWrapper.createFromStringMap = function (stringMap) {
        var result = new exports.Map();
        for (var prop in stringMap) {
            result.set(prop, stringMap[prop]);
        }
        return result;
    };
    MapWrapper.toStringMap = function (m) {
        var r = {};
        m.forEach(function (v, k) { return r[k] = v; });
        return r;
    };
    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
    MapWrapper.clearValues = function (m) { _clearValues(m); };
    MapWrapper.iterable = function (m) { return m; };
    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
    return MapWrapper;
})();
exports.MapWrapper = MapWrapper;
/**
 * Wraps Javascript Objects
 */
var StringMapWrapper = (function () {
    function StringMapWrapper() {
    }
    StringMapWrapper.create = function () {
        // Note: We are not using Object.create(null) here due to
        // performance!
        // http://jsperf.com/ng2-object-create-null
        return {};
    };
    StringMapWrapper.contains = function (map, key) {
        return map.hasOwnProperty(key);
    };
    StringMapWrapper.get = function (map, key) {
        return map.hasOwnProperty(key) ? map[key] : undefined;
    };
    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
    StringMapWrapper.keys = function (map) { return Object.keys(map); };
    StringMapWrapper.isEmpty = function (map) {
        for (var prop in map) {
            return false;
        }
        return true;
    };
    StringMapWrapper.delete = function (map, key) { delete map[key]; };
    StringMapWrapper.forEach = function (map, callback) {
        for (var prop in map) {
            if (map.hasOwnProperty(prop)) {
                callback(map[prop], prop);
            }
        }
    };
    StringMapWrapper.merge = function (m1, m2) {
        var m = {};
        for (var attr in m1) {
            if (m1.hasOwnProperty(attr)) {
                m[attr] = m1[attr];
            }
        }
        for (var attr in m2) {
            if (m2.hasOwnProperty(attr)) {
                m[attr] = m2[attr];
            }
        }
        return m;
    };
    StringMapWrapper.equals = function (m1, m2) {
        var k1 = Object.keys(m1);
        var k2 = Object.keys(m2);
        if (k1.length != k2.length) {
            return false;
        }
        var key;
        for (var i = 0; i < k1.length; i++) {
            key = k1[i];
            if (m1[key] !== m2[key]) {
                return false;
            }
        }
        return true;
    };
    return StringMapWrapper;
})();
exports.StringMapWrapper = StringMapWrapper;
var ListWrapper = (function () {
    function ListWrapper() {
    }
    // JS has no way to express a statically fixed size list, but dart does so we
    // keep both methods.
    ListWrapper.createFixedSize = function (size) { return new Array(size); };
    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
    ListWrapper.clone = function (array) { return array.slice(0); };
    ListWrapper.forEachWithIndex = function (array, fn) {
        for (var i = 0; i < array.length; i++) {
            fn(array[i], i);
        }
    };
    ListWrapper.first = function (array) {
        if (!array)
            return null;
        return array[0];
    };
    ListWrapper.last = function (array) {
        if (!array || array.length == 0)
            return null;
        return array[array.length - 1];
    };
    ListWrapper.indexOf = function (array, value, startIndex) {
        if (startIndex === void 0) { startIndex = 0; }
        return array.indexOf(value, startIndex);
    };
    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
    ListWrapper.reversed = function (array) {
        var a = ListWrapper.clone(array);
        return a.reverse();
    };
    ListWrapper.concat = function (a, b) { return a.concat(b); };
    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
    ListWrapper.removeAt = function (list, index) {
        var res = list[index];
        list.splice(index, 1);
        return res;
    };
    ListWrapper.removeAll = function (list, items) {
        for (var i = 0; i < items.length; ++i) {
            var index = list.indexOf(items[i]);
            list.splice(index, 1);
        }
    };
    ListWrapper.remove = function (list, el) {
        var index = list.indexOf(el);
        if (index > -1) {
            list.splice(index, 1);
            return true;
        }
        return false;
    };
    ListWrapper.clear = function (list) { list.length = 0; };
    ListWrapper.isEmpty = function (list) { return list.length == 0; };
    ListWrapper.fill = function (list, value, start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = null; }
        list.fill(value, start, end === null ? list.length : end);
    };
    ListWrapper.equals = function (a, b) {
        if (a.length != b.length)
            return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    };
    ListWrapper.slice = function (l, from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = null; }
        return l.slice(from, to === null ? undefined : to);
    };
    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
    ListWrapper.sort = function (l, compareFn) {
        if (lang_1.isPresent(compareFn)) {
            l.sort(compareFn);
        }
        else {
            l.sort();
        }
    };
    ListWrapper.toString = function (l) { return l.toString(); };
    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
    ListWrapper.maximum = function (list, predicate) {
        if (list.length == 0) {
            return null;
        }
        var solution = null;
        var maxValue = -Infinity;
        for (var index = 0; index < list.length; index++) {
            var candidate = list[index];
            if (lang_1.isBlank(candidate)) {
                continue;
            }
            var candidateValue = predicate(candidate);
            if (candidateValue > maxValue) {
                solution = candidate;
                maxValue = candidateValue;
            }
        }
        return solution;
    };
    return ListWrapper;
})();
exports.ListWrapper = ListWrapper;
function isListLikeIterable(obj) {
    if (!lang_1.isJsObject(obj))
        return false;
    return lang_1.isArray(obj) ||
        (!(obj instanceof exports.Map) &&
            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
}
exports.isListLikeIterable = isListLikeIterable;
function iterateListLike(obj, fn) {
    if (lang_1.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        var iterator = obj[lang_1.getSymbolIterator()]();
        var item;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
exports.iterateListLike = iterateListLike;
// Safari and Internet Explorer do not support the iterable parameter to the
// Set constructor.  We work around that by manually adding the items.
var createSetFromList = (function () {
    var test = new exports.Set([1, 2, 3]);
    if (test.size === 3) {
        return function createSetFromList(lst) { return new exports.Set(lst); };
    }
    else {
        return function createSetAndPopulateFromList(lst) {
            var res = new exports.Set(lst);
            if (res.size !== lst.length) {
                for (var i = 0; i < lst.length; i++) {
                    res.add(lst[i]);
                }
            }
            return res;
        };
    }
})();
var SetWrapper = (function () {
    function SetWrapper() {
    }
    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
    SetWrapper.has = function (s, key) { return s.has(key); };
    SetWrapper.delete = function (m, k) { m.delete(k); };
    return SetWrapper;
})();
exports.SetWrapper = SetWrapper;
},{"angular2/src/facade/lang":98}],95:[function(require,module,exports){
'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var _ArrayLogger = (function () {
    function _ArrayLogger() {
        this.res = [];
    }
    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
    _ArrayLogger.prototype.logGroupEnd = function () { };
    ;
    return _ArrayLogger;
})();
/**
 * Provides a hook for centralized exception handling.
 *
 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
 * intercept error handling,
 * write a custom exception handler that replaces this default as appropriate for your app.
 *
 * ### Example
 *
 * ```javascript
 *
 * class MyExceptionHandler implements ExceptionHandler {
 *   call(error, stackTrace = null, reason = null) {
 *     // do something with the exception
 *   }
 * }
 *
 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
 *
 * ```
 */
var ExceptionHandler = (function () {
    function ExceptionHandler(_logger, _rethrowException) {
        if (_rethrowException === void 0) { _rethrowException = true; }
        this._logger = _logger;
        this._rethrowException = _rethrowException;
    }
    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
        if (stackTrace === void 0) { stackTrace = null; }
        if (reason === void 0) { reason = null; }
        var l = new _ArrayLogger();
        var e = new ExceptionHandler(l, false);
        e.call(exception, stackTrace, reason);
        return l.res.join("\n");
    };
    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
        if (stackTrace === void 0) { stackTrace = null; }
        if (reason === void 0) { reason = null; }
        var originalException = this._findOriginalException(exception);
        var originalStack = this._findOriginalStack(exception);
        var context = this._findContext(exception);
        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
            this._logger.logError("STACKTRACE:");
            this._logger.logError(this._longStackTrace(stackTrace));
        }
        if (lang_1.isPresent(reason)) {
            this._logger.logError("REASON: " + reason);
        }
        if (lang_1.isPresent(originalException)) {
            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
        }
        if (lang_1.isPresent(originalStack)) {
            this._logger.logError("ORIGINAL STACKTRACE:");
            this._logger.logError(this._longStackTrace(originalStack));
        }
        if (lang_1.isPresent(context)) {
            this._logger.logError("ERROR CONTEXT:");
            this._logger.logError(context);
        }
        this._logger.logGroupEnd();
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
        if (this._rethrowException)
            throw exception;
    };
    /** @internal */
    ExceptionHandler.prototype._extractMessage = function (exception) {
        return exception instanceof exceptions_1.WrappedException ? exception.wrapperMessage : exception.toString();
    };
    /** @internal */
    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
            stackTrace.toString();
    };
    /** @internal */
    ExceptionHandler.prototype._findContext = function (exception) {
        try {
            if (!(exception instanceof exceptions_1.WrappedException))
                return null;
            return lang_1.isPresent(exception.context) ? exception.context :
                this._findContext(exception.originalException);
        }
        catch (e) {
            // exception.context can throw an exception. if it happens, we ignore the context.
            return null;
        }
    };
    /** @internal */
    ExceptionHandler.prototype._findOriginalException = function (exception) {
        if (!(exception instanceof exceptions_1.WrappedException))
            return null;
        var e = exception.originalException;
        while (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
            e = e.originalException;
        }
        return e;
    };
    /** @internal */
    ExceptionHandler.prototype._findOriginalStack = function (exception) {
        if (!(exception instanceof exceptions_1.WrappedException))
            return null;
        var e = exception;
        var stack = exception.originalStack;
        while (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
            e = e.originalException;
            if (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
                stack = e.originalStack;
            }
        }
        return stack;
    };
    return ExceptionHandler;
})();
exports.ExceptionHandler = ExceptionHandler;
},{"angular2/src/facade/collection":94,"angular2/src/facade/exceptions":96,"angular2/src/facade/lang":98}],96:[function(require,module,exports){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exception_handler_1 = require('./exception_handler');
var exception_handler_2 = require('./exception_handler');
exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
var BaseException = (function (_super) {
    __extends(BaseException, _super);
    function BaseException(message) {
        if (message === void 0) { message = "--"; }
        _super.call(this, message);
        this.message = message;
        this.stack = (new Error(message)).stack;
    }
    BaseException.prototype.toString = function () { return this.message; };
    return BaseException;
})(Error);
exports.BaseException = BaseException;
/**
 * Wraps an exception and provides additional context or information.
 */
var WrappedException = (function (_super) {
    __extends(WrappedException, _super);
    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
        _super.call(this, _wrapperMessage);
        this._wrapperMessage = _wrapperMessage;
        this._originalException = _originalException;
        this._originalStack = _originalStack;
        this._context = _context;
        this._wrapperStack = (new Error(_wrapperMessage)).stack;
    }
    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
        get: function () { return this._wrapperMessage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
        get: function () { return this._wrapperStack; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "originalException", {
        get: function () { return this._originalException; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "originalStack", {
        get: function () { return this._originalStack; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "context", {
        get: function () { return this._context; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WrappedException.prototype, "message", {
        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
        enumerable: true,
        configurable: true
    });
    WrappedException.prototype.toString = function () { return this.message; };
    return WrappedException;
})(Error);
exports.WrappedException = WrappedException;
function makeTypeError(message) {
    return new TypeError(message);
}
exports.makeTypeError = makeTypeError;
function unimplemented() {
    throw new BaseException('unimplemented');
}
exports.unimplemented = unimplemented;
},{"./exception_handler":95}],97:[function(require,module,exports){
'use strict';// Public API for Facade
var lang_1 = require('./lang');
exports.Type = lang_1.Type;
var async_1 = require('./async');
exports.EventEmitter = async_1.EventEmitter;
var exceptions_1 = require('./exceptions');
exports.WrappedException = exceptions_1.WrappedException;
var exception_handler_1 = require('./exception_handler');
exports.ExceptionHandler = exception_handler_1.ExceptionHandler;
},{"./async":93,"./exception_handler":95,"./exceptions":96,"./lang":98}],98:[function(require,module,exports){
(function (global){
'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    }
    else {
        globalScope = global;
    }
}
else {
    globalScope = window;
}
;
exports.IS_DART = false;
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global = globalScope;
exports.global = _global;
exports.Type = Function;
function getTypeNameForDebugging(type) {
    return type['name'];
}
exports.getTypeNameForDebugging = getTypeNameForDebugging;
exports.Math = _global.Math;
exports.Date = _global.Date;
var _devMode = true;
var _modeLocked = false;
function lockMode() {
    _modeLocked = true;
}
exports.lockMode = lockMode;
/**
 * Disable Angular's development mode, which turns off assertions and other
 * checks within the framework.
 *
 * One important assertion this disables verifies that a change detection pass
 * does not result in additional changes to any bindings (also known as
 * unidirectional data flow).
 */
function enableProdMode() {
    if (_modeLocked) {
        // Cannot use BaseException as that ends up importing from facade/lang.
        throw 'Cannot enable prod mode after platform setup.';
    }
    _devMode = false;
}
exports.enableProdMode = enableProdMode;
function assertionsEnabled() {
    return _devMode;
}
exports.assertionsEnabled = assertionsEnabled;
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};
// This function is needed only to properly support Dart's const expressions
// see https://github.com/angular/ts2dart/pull/151 for more info
function CONST_EXPR(expr) {
    return expr;
}
exports.CONST_EXPR = CONST_EXPR;
function CONST() {
    return function (target) { return target; };
}
exports.CONST = CONST;
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isBlank(obj) {
    return obj === undefined || obj === null;
}
exports.isBlank = isBlank;
function isString(obj) {
    return typeof obj === "string";
}
exports.isString = isString;
function isFunction(obj) {
    return typeof obj === "function";
}
exports.isFunction = isFunction;
function isType(obj) {
    return isFunction(obj);
}
exports.isType = isType;
function isStringMap(obj) {
    return typeof obj === 'object' && obj !== null;
}
exports.isStringMap = isStringMap;
function isPromise(obj) {
    return obj instanceof _global.Promise;
}
exports.isPromise = isPromise;
function isArray(obj) {
    return Array.isArray(obj);
}
exports.isArray = isArray;
function isNumber(obj) {
    return typeof obj === 'number';
}
exports.isNumber = isNumber;
function isDate(obj) {
    return obj instanceof exports.Date && !isNaN(obj.valueOf());
}
exports.isDate = isDate;
function noop() { }
exports.noop = noop;
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token === undefined || token === null) {
        return '' + token;
    }
    if (token.name) {
        return token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf("\n");
    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
}
exports.stringify = stringify;
// serialize / deserialize enum exist only for consistency with dart API
// enums in typescript don't need to be serialized
function serializeEnum(val) {
    return val;
}
exports.serializeEnum = serializeEnum;
function deserializeEnum(val, values) {
    return val;
}
exports.deserializeEnum = deserializeEnum;
var StringWrapper = (function () {
    function StringWrapper() {
    }
    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
    StringWrapper.equals = function (s, s2) { return s === s2; };
    StringWrapper.stripLeft = function (s, charVal) {
        if (s && s.length) {
            var pos = 0;
            for (var i = 0; i < s.length; i++) {
                if (s[i] != charVal)
                    break;
                pos++;
            }
            s = s.substring(pos);
        }
        return s;
    };
    StringWrapper.stripRight = function (s, charVal) {
        if (s && s.length) {
            var pos = s.length;
            for (var i = s.length - 1; i >= 0; i--) {
                if (s[i] != charVal)
                    break;
                pos--;
            }
            s = s.substring(0, pos);
        }
        return s;
    };
    StringWrapper.replace = function (s, from, replace) {
        return s.replace(from, replace);
    };
    StringWrapper.replaceAll = function (s, from, replace) {
        return s.replace(from, replace);
    };
    StringWrapper.slice = function (s, from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = null; }
        return s.slice(from, to === null ? undefined : to);
    };
    StringWrapper.replaceAllMapped = function (s, from, cb) {
        return s.replace(from, function () {
            var matches = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                matches[_i - 0] = arguments[_i];
            }
            // Remove offset & string from the result array
            matches.splice(-2, 2);
            // The callback receives match, p1, ..., pn
            return cb(matches);
        });
    };
    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
    StringWrapper.compare = function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return StringWrapper;
})();
exports.StringWrapper = StringWrapper;
var StringJoiner = (function () {
    function StringJoiner(parts) {
        if (parts === void 0) { parts = []; }
        this.parts = parts;
    }
    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
    return StringJoiner;
})();
exports.StringJoiner = StringJoiner;
var NumberParseError = (function (_super) {
    __extends(NumberParseError, _super);
    function NumberParseError(message) {
        _super.call(this);
        this.message = message;
    }
    NumberParseError.prototype.toString = function () { return this.message; };
    return NumberParseError;
})(Error);
exports.NumberParseError = NumberParseError;
var NumberWrapper = (function () {
    function NumberWrapper() {
    }
    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
    NumberWrapper.equal = function (a, b) { return a === b; };
    NumberWrapper.parseIntAutoRadix = function (text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new NumberParseError("Invalid integer literal when parsing " + text);
        }
        return result;
    };
    NumberWrapper.parseInt = function (text, radix) {
        if (radix == 10) {
            if (/^(\-|\+)?[0-9]+$/.test(text)) {
                return parseInt(text, radix);
            }
        }
        else if (radix == 16) {
            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                return parseInt(text, radix);
            }
        }
        else {
            var result = parseInt(text, radix);
            if (!isNaN(result)) {
                return result;
            }
        }
        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
            radix);
    };
    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
    Object.defineProperty(NumberWrapper, "NaN", {
        get: function () { return NaN; },
        enumerable: true,
        configurable: true
    });
    NumberWrapper.isNaN = function (value) { return isNaN(value); };
    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
    return NumberWrapper;
})();
exports.NumberWrapper = NumberWrapper;
exports.RegExp = _global.RegExp;
var RegExpWrapper = (function () {
    function RegExpWrapper() {
    }
    RegExpWrapper.create = function (regExpStr, flags) {
        if (flags === void 0) { flags = ''; }
        flags = flags.replace(/g/g, '');
        return new _global.RegExp(regExpStr, flags + 'g');
    };
    RegExpWrapper.firstMatch = function (regExp, input) {
        // Reset multimatch regex state
        regExp.lastIndex = 0;
        return regExp.exec(input);
    };
    RegExpWrapper.test = function (regExp, input) {
        regExp.lastIndex = 0;
        return regExp.test(input);
    };
    RegExpWrapper.matcher = function (regExp, input) {
        // Reset regex state for the case
        // someone did not loop over all matches
        // last time.
        regExp.lastIndex = 0;
        return { re: regExp, input: input };
    };
    return RegExpWrapper;
})();
exports.RegExpWrapper = RegExpWrapper;
var RegExpMatcherWrapper = (function () {
    function RegExpMatcherWrapper() {
    }
    RegExpMatcherWrapper.next = function (matcher) {
        return matcher.re.exec(matcher.input);
    };
    return RegExpMatcherWrapper;
})();
exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
var FunctionWrapper = (function () {
    function FunctionWrapper() {
    }
    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
    return FunctionWrapper;
})();
exports.FunctionWrapper = FunctionWrapper;
// JS has NaN !== NaN
function looseIdentical(a, b) {
    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
exports.looseIdentical = looseIdentical;
// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
function getMapKey(value) {
    return value;
}
exports.getMapKey = getMapKey;
function normalizeBlank(obj) {
    return isBlank(obj) ? null : obj;
}
exports.normalizeBlank = normalizeBlank;
function normalizeBool(obj) {
    return isBlank(obj) ? false : obj;
}
exports.normalizeBool = normalizeBool;
function isJsObject(o) {
    return o !== null && (typeof o === "function" || typeof o === "object");
}
exports.isJsObject = isJsObject;
function print(obj) {
    console.log(obj);
}
exports.print = print;
// Can't be all uppercase as our transpiler would think it is a special directive...
var Json = (function () {
    function Json() {
    }
    Json.parse = function (s) { return _global.JSON.parse(s); };
    Json.stringify = function (data) {
        // Dart doesn't take 3 arguments
        return _global.JSON.stringify(data, null, 2);
    };
    return Json;
})();
exports.Json = Json;
var DateWrapper = (function () {
    function DateWrapper() {
    }
    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
        if (month === void 0) { month = 1; }
        if (day === void 0) { day = 1; }
        if (hour === void 0) { hour = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (milliseconds === void 0) { milliseconds = 0; }
        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
    };
    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
    DateWrapper.toMillis = function (date) { return date.getTime(); };
    DateWrapper.now = function () { return new exports.Date(); };
    DateWrapper.toJson = function (date) { return date.toJSON(); };
    return DateWrapper;
})();
exports.DateWrapper = DateWrapper;
function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
        var name = parts.shift();
        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
            obj = obj[name];
        }
        else {
            obj = obj[name] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
exports.setValueOnPath = setValueOnPath;
var _symbolIterator = null;
function getSymbolIterator() {
    if (isBlank(_symbolIterator)) {
        if (isPresent(Symbol) && isPresent(Symbol.iterator)) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    Map.prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
exports.getSymbolIterator = getSymbolIterator;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],99:[function(require,module,exports){
'use strict';// Promises are put into their own facade file so that they can be used without
// introducing a dependency on rxjs. They are re-exported through facade/async.
var PromiseWrapper = (function () {
    function PromiseWrapper() {
    }
    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
    // Note: We can't rename this method into `catch`, as this is not a valid
    // method name in Dart.
    PromiseWrapper.catchError = function (promise, onError) {
        return promise.catch(onError);
    };
    PromiseWrapper.all = function (promises) {
        if (promises.length == 0)
            return Promise.resolve([]);
        return Promise.all(promises);
    };
    PromiseWrapper.then = function (promise, success, rejection) {
        return promise.then(success, rejection);
    };
    PromiseWrapper.wrap = function (computation) {
        return new Promise(function (res, rej) {
            try {
                res(computation());
            }
            catch (e) {
                rej(e);
            }
        });
    };
    PromiseWrapper.scheduleMicrotask = function (computation) {
        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
    };
    PromiseWrapper.isPromise = function (obj) { return obj instanceof Promise; };
    PromiseWrapper.completer = function () {
        var resolve;
        var reject;
        var p = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        return { promise: p, resolve: resolve, reject: reject };
    };
    return PromiseWrapper;
})();
exports.PromiseWrapper = PromiseWrapper;
},{}],100:[function(require,module,exports){
var Subscriber_1 = require('./Subscriber');
var root_1 = require('./util/root');
var SymbolShim_1 = require('./util/SymbolShim');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is
     * called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify
     * of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @returns {Observable} a new observable with the Operator applied
     * @description creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * @method Symbol.observable
     * @returns {Observable} this instance of the observable
     * @description an interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     */
    Observable.prototype[SymbolShim_1.SymbolShim.observable] = function () {
        return this;
    };
    /**
     * @method subscribe
     * @param {Observer|Function} observerOrNext (optional) either an observer defining all functions to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled
     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
     * @returns {Subscription} a subscription reference to the registered handlers
     * @description registers handlers for handling emitted values, error and completions from the observable, and
     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var subscriber;
        if (observerOrNext && typeof observerOrNext === 'object') {
            if (observerOrNext instanceof Subscriber_1.Subscriber) {
                subscriber = observerOrNext;
            }
            else if (observerOrNext[rxSubscriber_1.rxSubscriber]) {
                subscriber = observerOrNext[rxSubscriber_1.rxSubscriber]();
            }
            else {
                subscriber = new Subscriber_1.Subscriber(observerOrNext);
            }
        }
        else {
            var next = observerOrNext;
            subscriber = Subscriber_1.Subscriber.create(next, error, complete);
        }
        subscriber.add(this._subscribe(subscriber));
        return subscriber;
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {any} [thisArg] a `this` context for the `next` handler function
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @returns {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, thisArg, PromiseCtor) {
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        var nextHandler;
        if (thisArg) {
            nextHandler = function nextHandlerFn(value) {
                var _a = nextHandlerFn, thisArg = _a.thisArg, next = _a.next;
                return next.call(thisArg, value);
            };
            nextHandler.thisArg = thisArg;
            nextHandler.next = next;
        }
        else {
            nextHandler = next;
        }
        var promiseCallback = function promiseCallbackFn(resolve, reject) {
            var _a = promiseCallbackFn, source = _a.source, nextHandler = _a.nextHandler;
            source.subscribe(nextHandler, reject, resolve);
        };
        promiseCallback.source = this;
        promiseCallback.nextHandler = nextHandler;
        return new PromiseCtor(promiseCallback);
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source._subscribe(this.operator.call(subscriber));
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * @static
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @returns {Observable} a new cold observable
     * @description creates a new cold Observable by calling the Observable constructor
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
})();
exports.Observable = Observable;

},{"./Subscriber":102,"./symbol/rxSubscriber":111,"./util/SymbolShim":112,"./util/root":114}],101:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('./Observable');
var Subscriber_1 = require('./Subscriber');
var Subscription_1 = require('./Subscription');
var SubjectSubscription_1 = require('./subject/SubjectSubscription');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
var subscriptionAdd = Subscription_1.Subscription.prototype.add;
var subscriptionRemove = Subscription_1.Subscription.prototype.remove;
var subscriptionUnsubscribe = Subscription_1.Subscription.prototype.unsubscribe;
var subscriberNext = Subscriber_1.Subscriber.prototype.next;
var subscriberError = Subscriber_1.Subscriber.prototype.error;
var subscriberComplete = Subscriber_1.Subscriber.prototype.complete;
var _subscriberNext = Subscriber_1.Subscriber.prototype._next;
var _subscriberError = Subscriber_1.Subscriber.prototype._error;
var _subscriberComplete = Subscriber_1.Subscriber.prototype._complete;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.apply(this, arguments);
        this.observers = [];
        this.isUnsubscribed = false;
        this.dispatching = false;
        this.errorSignal = false;
        this.completeSignal = false;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
    };
    Subject.create = function (source, destination) {
        return new BidirectionalSubject(source, destination);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new BidirectionalSubject(this, this.destination || this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (subscriber.isUnsubscribed) {
            return;
        }
        else if (this.errorSignal) {
            subscriber.error(this.errorInstance);
            return;
        }
        else if (this.completeSignal) {
            subscriber.complete();
            return;
        }
        else if (this.isUnsubscribed) {
            throw new Error('Cannot subscribe to a disposed Subject.');
        }
        this.observers.push(subscriber);
        return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
    };
    Subject.prototype.add = function (subscription) {
        subscriptionAdd.call(this, subscription);
    };
    Subject.prototype.remove = function (subscription) {
        subscriptionRemove.call(this, subscription);
    };
    Subject.prototype.unsubscribe = function () {
        this.observers = void 0;
        subscriptionUnsubscribe.call(this);
    };
    Subject.prototype.next = function (value) {
        if (this.isUnsubscribed) {
            return;
        }
        this.dispatching = true;
        this._next(value);
        this.dispatching = false;
        if (this.errorSignal) {
            this.error(this.errorInstance);
        }
        else if (this.completeSignal) {
            this.complete();
        }
    };
    Subject.prototype.error = function (err) {
        if (this.isUnsubscribed || this.completeSignal) {
            return;
        }
        this.errorSignal = true;
        this.errorInstance = err;
        if (this.dispatching) {
            return;
        }
        this._error(err);
        this.unsubscribe();
    };
    Subject.prototype.complete = function () {
        if (this.isUnsubscribed || this.errorSignal) {
            return;
        }
        this.completeSignal = true;
        if (this.dispatching) {
            return;
        }
        this._complete();
        this.unsubscribe();
    };
    Subject.prototype._next = function (value) {
        var index = -1;
        var observers = this.observers.slice(0);
        var len = observers.length;
        while (++index < len) {
            observers[index].next(value);
        }
    };
    Subject.prototype._error = function (err) {
        var index = -1;
        var observers = this.observers;
        var len = observers.length;
        // optimization -- block next, complete, and unsubscribe while dispatching
        this.observers = void 0;
        this.isUnsubscribed = true;
        while (++index < len) {
            observers[index].error(err);
        }
        this.isUnsubscribed = false;
    };
    Subject.prototype._complete = function () {
        var index = -1;
        var observers = this.observers;
        var len = observers.length;
        // optimization -- block next, complete, and unsubscribe while dispatching
        this.observers = void 0; // optimization
        this.isUnsubscribed = true;
        while (++index < len) {
            observers[index].complete();
        }
        this.isUnsubscribed = false;
    };
    return Subject;
})(Observable_1.Observable);
exports.Subject = Subject;
var BidirectionalSubject = (function (_super) {
    __extends(BidirectionalSubject, _super);
    function BidirectionalSubject(source, destination) {
        _super.call(this);
        this.source = source;
        this.destination = destination;
    }
    BidirectionalSubject.prototype._subscribe = function (subscriber) {
        var operator = this.operator;
        return this.source._subscribe.call(this.source, operator ? operator.call(subscriber) : subscriber);
    };
    BidirectionalSubject.prototype.next = function (value) {
        subscriberNext.call(this, value);
    };
    BidirectionalSubject.prototype.error = function (err) {
        subscriberError.call(this, err);
    };
    BidirectionalSubject.prototype.complete = function () {
        subscriberComplete.call(this);
    };
    BidirectionalSubject.prototype._next = function (value) {
        _subscriberNext.call(this, value);
    };
    BidirectionalSubject.prototype._error = function (err) {
        _subscriberError.call(this, err);
    };
    BidirectionalSubject.prototype._complete = function () {
        _subscriberComplete.call(this);
    };
    return BidirectionalSubject;
})(Subject);

},{"./Observable":100,"./Subscriber":102,"./Subscription":103,"./subject/SubjectSubscription":110,"./symbol/rxSubscriber":111}],102:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var noop_1 = require('./util/noop');
var throwError_1 = require('./util/throwError');
var tryOrOnError_1 = require('./util/tryOrOnError');
var Subscription_1 = require('./Subscription');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        _super.call(this);
        this.destination = destination;
        this._isUnsubscribed = false;
        if (!this.destination) {
            return;
        }
        var subscription = destination._subscription;
        if (subscription) {
            this._subscription = subscription;
        }
        else if (destination instanceof Subscriber) {
            this._subscription = destination;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
    };
    Object.defineProperty(Subscriber.prototype, "isUnsubscribed", {
        get: function () {
            var subscription = this._subscription;
            if (subscription) {
                // route to the shared Subscription if it exists
                return this._isUnsubscribed || subscription.isUnsubscribed;
            }
            else {
                return this._isUnsubscribed;
            }
        },
        set: function (value) {
            var subscription = this._subscription;
            if (subscription) {
                // route to the shared Subscription if it exists
                subscription.isUnsubscribed = Boolean(value);
            }
            else {
                this._isUnsubscribed = Boolean(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber();
        subscriber._next = (typeof next === 'function') && tryOrOnError_1.tryOrOnError(next) || noop_1.noop;
        subscriber._error = (typeof error === 'function') && error || throwError_1.throwError;
        subscriber._complete = (typeof complete === 'function') && complete || noop_1.noop;
        return subscriber;
    };
    Subscriber.prototype.add = function (sub) {
        // route add to the shared Subscription if it exists
        var _subscription = this._subscription;
        if (_subscription) {
            _subscription.add(sub);
        }
        else {
            _super.prototype.add.call(this, sub);
        }
    };
    Subscriber.prototype.remove = function (sub) {
        // route remove to the shared Subscription if it exists
        if (this._subscription) {
            this._subscription.remove(sub);
        }
        else {
            _super.prototype.remove.call(this, sub);
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this._isUnsubscribed) {
            return;
        }
        else if (this._subscription) {
            this._isUnsubscribed = true;
        }
        else {
            _super.prototype.unsubscribe.call(this);
        }
    };
    Subscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.next) {
            destination.next(value);
        }
    };
    Subscriber.prototype._error = function (err) {
        var destination = this.destination;
        if (destination.error) {
            destination.error(err);
        }
    };
    Subscriber.prototype._complete = function () {
        var destination = this.destination;
        if (destination.complete) {
            destination.complete();
        }
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isUnsubscribed) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isUnsubscribed) {
            this._error(err);
            this.unsubscribe();
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isUnsubscribed) {
            this._complete();
            this.unsubscribe();
        }
    };
    return Subscriber;
})(Subscription_1.Subscription);
exports.Subscriber = Subscriber;

},{"./Subscription":103,"./symbol/rxSubscriber":111,"./util/noop":113,"./util/throwError":115,"./util/tryOrOnError":116}],103:[function(require,module,exports){
var noop_1 = require('./util/noop');
var Subscription = (function () {
    function Subscription(_unsubscribe) {
        this.isUnsubscribed = false;
        if (_unsubscribe) {
            this._unsubscribe = _unsubscribe;
        }
    }
    Subscription.prototype._unsubscribe = function () {
        noop_1.noop();
    };
    Subscription.prototype.unsubscribe = function () {
        if (this.isUnsubscribed) {
            return;
        }
        this.isUnsubscribed = true;
        var unsubscribe = this._unsubscribe;
        var subscriptions = this._subscriptions;
        this._subscriptions = void 0;
        if (unsubscribe) {
            unsubscribe.call(this);
        }
        if (subscriptions != null) {
            var index = -1;
            var len = subscriptions.length;
            while (++index < len) {
                subscriptions[index].unsubscribe();
            }
        }
    };
    Subscription.prototype.add = function (subscription) {
        // return early if:
        //  1. the subscription is null
        //  2. we're attempting to add our this
        //  3. we're attempting to add the static `empty` Subscription
        if (!subscription || (subscription === this) || (subscription === Subscription.EMPTY)) {
            return;
        }
        var sub = subscription;
        switch (typeof subscription) {
            case 'function':
                sub = new Subscription(subscription);
            case 'object':
                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
                    break;
                }
                else if (this.isUnsubscribed) {
                    sub.unsubscribe();
                }
                else {
                    var subscriptions = this._subscriptions || (this._subscriptions = []);
                    subscriptions.push(sub);
                }
                break;
            default:
                throw new Error('Unrecognized subscription ' + subscription + ' added to Subscription.');
        }
    };
    Subscription.prototype.remove = function (subscription) {
        // return early if:
        //  1. the subscription is null
        //  2. we're attempting to remove ourthis
        //  3. we're attempting to remove the static `empty` Subscription
        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
            return;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.isUnsubscribed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
})();
exports.Subscription = Subscription;

},{"./util/noop":113}],104:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var Subscription_1 = require('../Subscription');
var queue_1 = require('../scheduler/queue');
var PromiseObservable = (function (_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
        if (scheduler === void 0) { scheduler = queue_1.queue; }
        _super.call(this);
        this.promise = promise;
        this.scheduler = scheduler;
        this._isScalar = false;
    }
    PromiseObservable.create = function (promise, scheduler) {
        if (scheduler === void 0) { scheduler = queue_1.queue; }
        return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var scheduler = this.scheduler;
        var promise = this.promise;
        if (scheduler === queue_1.queue) {
            if (this._isScalar) {
                subscriber.next(this.value);
                subscriber.complete();
            }
            else {
                promise.then(function (value) {
                    _this._isScalar = true;
                    _this.value = value;
                    subscriber.next(value);
                    subscriber.complete();
                }, function (err) { return subscriber.error(err); })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    setTimeout(function () { throw err; });
                });
            }
        }
        else {
            var subscription = new Subscription_1.Subscription();
            if (this._isScalar) {
                var value = this.value;
                subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
            }
            else {
                promise.then(function (value) {
                    _this._isScalar = true;
                    _this.value = value;
                    subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                }, function (err) { return subscription.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber })); })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    scheduler.schedule(function () { throw err; });
                });
            }
            return subscription;
        }
    };
    return PromiseObservable;
})(Observable_1.Observable);
exports.PromiseObservable = PromiseObservable;
function dispatchNext(_a) {
    var value = _a.value, subscriber = _a.subscriber;
    subscriber.next(value);
    subscriber.complete();
}
function dispatchError(_a) {
    var err = _a.err, subscriber = _a.subscriber;
    subscriber.error(err);
}

},{"../Observable":100,"../Subscription":103,"../scheduler/queue":109}],105:[function(require,module,exports){
var root_1 = require('../util/root');
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;

},{"../util/root":114}],106:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var QueueAction_1 = require('./QueueAction');
var FutureAction = (function (_super) {
    __extends(FutureAction, _super);
    function FutureAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    FutureAction.prototype.schedule = function (state, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        if (this.isUnsubscribed) {
            return this;
        }
        this.delay = delay;
        this.state = state;
        var id = this.id;
        if (id != null) {
            this.id = undefined;
            clearTimeout(id);
        }
        var scheduler = this.scheduler;
        this.id = setTimeout(function () {
            _this.id = void 0;
            scheduler.actions.push(_this);
            scheduler.flush();
        }, this.delay);
        return this;
    };
    FutureAction.prototype.unsubscribe = function () {
        var id = this.id;
        if (id != null) {
            this.id = void 0;
            clearTimeout(id);
        }
        _super.prototype.unsubscribe.call(this);
    };
    return FutureAction;
})(QueueAction_1.QueueAction);
exports.FutureAction = FutureAction;

},{"./QueueAction":107}],107:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = require('../Subscription');
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state) {
        if (this.isUnsubscribed) {
            return this;
        }
        this.state = state;
        var scheduler = this.scheduler;
        scheduler.actions.push(this);
        scheduler.flush();
        return this;
    };
    QueueAction.prototype.execute = function () {
        if (this.isUnsubscribed) {
            throw new Error('How did did we execute a canceled Action?');
        }
        this.work(this.state);
    };
    QueueAction.prototype.unsubscribe = function () {
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = void 0;
        this.state = void 0;
        this.scheduler = void 0;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        _super.prototype.unsubscribe.call(this);
    };
    return QueueAction;
})(Subscription_1.Subscription);
exports.QueueAction = QueueAction;

},{"../Subscription":103}],108:[function(require,module,exports){
var QueueAction_1 = require('./QueueAction');
var FutureAction_1 = require('./FutureAction');
var QueueScheduler = (function () {
    function QueueScheduler() {
        this.actions = [];
        this.active = false;
        this.scheduled = false;
    }
    QueueScheduler.prototype.now = function () {
        return Date.now();
    };
    QueueScheduler.prototype.flush = function () {
        if (this.active || this.scheduled) {
            return;
        }
        this.active = true;
        var actions = this.actions;
        for (var action = void 0; action = actions.shift();) {
            action.execute();
        }
        this.active = false;
    };
    QueueScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return (delay <= 0) ?
            this.scheduleNow(work, state) :
            this.scheduleLater(work, delay, state);
    };
    QueueScheduler.prototype.scheduleNow = function (work, state) {
        return new QueueAction_1.QueueAction(this, work).schedule(state);
    };
    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
    };
    return QueueScheduler;
})();
exports.QueueScheduler = QueueScheduler;

},{"./FutureAction":106,"./QueueAction":107}],109:[function(require,module,exports){
var QueueScheduler_1 = require('./QueueScheduler');
exports.queue = new QueueScheduler_1.QueueScheduler();

},{"./QueueScheduler":108}],110:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = require('../Subscription');
var Subscriber_1 = require('../Subscriber');
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, observer) {
        _super.call(this);
        this.subject = subject;
        this.observer = observer;
        this.isUnsubscribed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.isUnsubscribed) {
            return;
        }
        this.isUnsubscribed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = void 0;
        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
            return;
        }
        if (this.observer instanceof Subscriber_1.Subscriber) {
            this.observer.unsubscribe();
        }
        var subscriberIndex = observers.indexOf(this.observer);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
})(Subscription_1.Subscription);
exports.SubjectSubscription = SubjectSubscription;

},{"../Subscriber":102,"../Subscription":103}],111:[function(require,module,exports){
var SymbolShim_1 = require('../util/SymbolShim');
/**
 * rxSubscriber symbol is a symbol for retreiving an "Rx safe" Observer from an object
 * "Rx safety" can be defined as an object that has all of the traits of an Rx Subscriber,
 * including the ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription, etc).
 */
exports.rxSubscriber = SymbolShim_1.SymbolShim.for('rxSubscriber');

},{"../util/SymbolShim":112}],112:[function(require,module,exports){
var root_1 = require('./root');
function polyfillSymbol(root) {
    var Symbol = ensureSymbol(root);
    ensureIterator(Symbol, root);
    ensureObservable(Symbol);
    ensureFor(Symbol);
    return Symbol;
}
exports.polyfillSymbol = polyfillSymbol;
function ensureFor(Symbol) {
    if (!Symbol.for) {
        Symbol.for = symbolForPolyfill;
    }
}
exports.ensureFor = ensureFor;
var id = 0;
function ensureSymbol(root) {
    if (!root.Symbol) {
        root.Symbol = function symbolFuncPolyfill(description) {
            return "@@Symbol(" + description + "):" + id++;
        };
    }
    return root.Symbol;
}
exports.ensureSymbol = ensureSymbol;
function symbolForPolyfill(key) {
    return '@@' + key;
}
exports.symbolForPolyfill = symbolForPolyfill;
function ensureIterator(Symbol, root) {
    if (!Symbol.iterator) {
        if (typeof Symbol.for === 'function') {
            Symbol.iterator = Symbol.for('iterator');
        }
        else if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
            // Bug for mozilla version
            Symbol.iterator = '@@iterator';
        }
        else if (root.Map) {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(root.Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' && root.Map.prototype[key] === root.Map.prototype['entries']) {
                    Symbol.iterator = key;
                    break;
                }
            }
        }
        else {
            Symbol.iterator = '@@iterator';
        }
    }
}
exports.ensureIterator = ensureIterator;
function ensureObservable(Symbol) {
    if (!Symbol.observable) {
        if (typeof Symbol.for === 'function') {
            Symbol.observable = Symbol.for('observable');
        }
        else {
            Symbol.observable = '@@observable';
        }
    }
}
exports.ensureObservable = ensureObservable;
exports.SymbolShim = polyfillSymbol(root_1.root);

},{"./root":114}],113:[function(require,module,exports){
/* tslint:disable:no-empty */
function noop() { }
exports.noop = noop;

},{}],114:[function(require,module,exports){
(function (global){
var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
};
exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
/* tslint:disable:no-unused-variable */
var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
var freeGlobal = objectTypes[typeof global] && global;
if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    exports.root = freeGlobal;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],115:[function(require,module,exports){
function throwError(e) { throw e; }
exports.throwError = throwError;

},{}],116:[function(require,module,exports){
function tryOrOnError(target) {
    function tryCatcher() {
        try {
            tryCatcher.target.apply(this, arguments);
        }
        catch (e) {
            this.error(e);
        }
    }
    tryCatcher.target = target;
    return tryCatcher;
}
exports.tryOrOnError = tryOrOnError;

},{}],117:[function(require,module,exports){
'use strict';

var _core = require('angular2/core');

console.log(_core.Component);

(function (app) {
  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    templateUrl: '../src/partials/hey.html'
  }).Class({
    constructor: function constructor() {}
  });

  document.addEventListener('DOMContentLoaded', function () {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));

},{"angular2/core":1}]},{},[117]);

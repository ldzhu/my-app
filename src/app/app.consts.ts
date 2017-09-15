import {Injector} from '@angular/core';

export const APP_CONST: any = {};

/**
 * Allows for retrieving singletons using `APP_INJECTOR.get(MyService)`
 * (whereas `ReflectiveInjector.resolveAndCreate(MyService)` would create a new instance of the service).
 *
 * APP_INJECTOR 全局常量，用于在不想使用DI的地方注入一个单例服务。
 * 使用`ReflectiveInjector.resolveAndCreate(MyService)`这种方式注入的服务不是单例的。
 */
export let APP_INJECTOR: Injector;

/**
 * CommonJS modules export values. ES6 modules export bindings - live connections to values.
 * So treat the imported values as bindings (aliases), not true identifiers.
 * (参考文档)[http://2ality.com/2015/07/es6-module-exports.html]
 */
export function InitAppInjector(i: Injector) {
    APP_INJECTOR = i;
}

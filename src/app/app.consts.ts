/**
 * 应用全局常量：本文件仅定义应用级别的常量，尽量定义在APP_CONST对象里以避免导出多个常量。
 * 类似于APP_INJECTOR这样的常量可以直接定义。
 */
import {Injector} from '@angular/core';

export const APP_CONST: any = {};

/**
 * Allows for retrieving singletons using `APP_INJECTOR.get(MyService)`
 * (whereas `ReflectiveInjector.resolveAndCreate(MyService)` would create a new
 * instance of the service).
 * APP_INJECTOR 全局常量，用于在不想使用DI的地方注入一个单例服务。
 * 使用`ReflectiveInjector.resolveAndCreate(MyService)`这种方式注入的服务不是单例的。
 *
 * 此处本意是定义一个全局的注入器常量，然后在app.module.ts里面初始化它，以便在应用其他不方便
 * 使用依赖注入的地方使用这个注入器常量来获取单例服务。但是因为CommonJS模块和ES6模块的差异的
 * 问题（参见 InitAppInjector函数注释），必须通过一个导出的函数来访问变量。所以在app.module.ts
 * 里通过调用InitAppInjector函数来实现注入器常量的初始化。
 */
export let APP_INJECTOR: Injector;
export let jQuery: any;
export let $: any;
export let kendo: any;

/**
 * CommonJS modules export values. ES6 modules export bindings - live connections to values.
 * So treat the imported values as bindings (aliases), not true identifiers.
 * (参考文档)[http://2ality.com/2015/07/es6-module-exports.html]
 *
 */
export function InitAppInjector(i: Injector) {
    APP_INJECTOR = i;
}

export function InitJQuery(_$) {
    jQuery = _$;
    $ = _$;
}

export function InitKendo(_kendo) {
    kendo = _kendo;
}


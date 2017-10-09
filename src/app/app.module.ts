import {BrowserModule} from '@angular/platform-browser';
import {Injector, LOCALE_ID, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';

/**
 * ngx-translate 国际化框架
 * 参考：https://github.com/ngx-translate/core
 */
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

/**
 * Angular2 redux框架
 * 参考：https://github.com/ngrx/store, http://www.jianshu.com/p/3cf03ae2eac1
 */
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {InitAppInjector, InitJQuery, InitKendo} from './app.consts';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {reducer} from './common/redux/reducer/index';
import {IndexModule} from './index/index.module';
import {UserModule} from './user/user.module';

declare const jQuery: any;
declare const kendo: any;

/**
 * AoT requires an exported function for factories.
 * 加载国际化资源文件。当使用AOT模式编译时，编译器需要一个Factory工厂。
 */
export function HttpLoaderFactory(http: HttpClient) {
    // 加载assets/i18n目录下的所有json文件作为国际化资源文件
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

/**
 * 获取当前系统语言环境。
 * 系统语言环境可以从浏览器获取(ng-translate模块实现了)，但是此处设计为通过ajax从后台获取放入localStorage，以保证和后台语言环境一致。
 */
export function GetLanguage(): string {
    return localStorage.getItem('lang');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        /* 导入国际化模块并加载国际化资源 */
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        /* 导入redux模块 */
        StoreModule.provideStore(reducer),
        /* 导入redux dev模块，使用Redux TimeMachine Debugger */
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        /* 导入主路由模块 */
        RouterModule.forRoot(rootRouterConfig, {useHash: false}),
        IndexModule,
        UserModule
    ],
    providers: [
        /* 提供语言环境服务，在应用的其他地方通过依赖注入可以随时获取语言环境*/
        {
            provide: LOCALE_ID,
            useFactory: GetLanguage
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // 初始化APP_INJECTOR等全局常量
    constructor(private injector: Injector) {
        InitAppInjector(this.injector);
        InitJQuery(jQuery);
        InitKendo(kendo);
    }
}

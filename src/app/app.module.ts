import {BrowserModule} from '@angular/platform-browser';
import {Injector, LOCALE_ID, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {InitAppInjector} from './app.consts';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {reducer} from './common/redux/reducer/index';
import {IndexModule} from './index/index.module';
import {UserModule} from './user/user.module';

/**
 * AoT requires an exported function for factories.
 * 加载国际化资源文件。当使用AOT模式编译时，编译器需要一个Factory工厂。
 */
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

/**
 * 获取当前系统语言环境。
 * 系统语言环境可以从浏览器获取(ng-translate模块实现了)，但是此处设计为通过ajax从后台获取，以保证和后台语言环境一致。
 */
export function GetLanguage(): string {
    // TODO 此处从localStorage中获取？
    // return 'en-US';
    return 'zh-CN';
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        RouterModule.forRoot(rootRouterConfig, {useHash: false}),
        IndexModule,
        UserModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useFactory: GetLanguage
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        InitAppInjector(this.injector);
    }
}

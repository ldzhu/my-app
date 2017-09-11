import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {IndexModule} from './index/index.module';
import {UserModule} from './user/user.module';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {HttpModule} from '@angular/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

// TODO 此处从localStorage中获取？
export function getLanguage(): string {
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
        RouterModule.forRoot(rootRouterConfig, {useHash: false}),
        IndexModule,
        UserModule
    ],
    providers: [
        AppService,
        {
            provide: LOCALE_ID,
            deps: [AppService],
            useFactory: getLanguage
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

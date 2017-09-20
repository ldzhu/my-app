/**
 * 应用启动主入口
 */
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import getLocale from './locale';

if (environment.production) {
    enableProdMode();
}

// 在获取到语言环境之后启动应用
getLocale().then(response => {
    /*
    // 这种注入方式在AppComponent里面并拿不到LOCALE_ID
    const options = {
        provide: LOCALE_ID, useValue: response.lang
    };

    platformBrowserDynamic().bootstrapModule(AppModule, [options]);
    */

    // 将语言环境写入localStorage
    localStorage.setItem('lang', response.lang);

    // 启动应用
    platformBrowserDynamic().bootstrapModule(AppModule);

}).catch(error => {
    console.error(error);
});

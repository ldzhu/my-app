import {enableProdMode, LOCALE_ID} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import getLocaleFromBackend from './locale';

if (environment.production) {
    enableProdMode();
}

getLocaleFromBackend().then(response => {
    const options = {
        provide: LOCALE_ID, useValue: response.lang
    };

    // TODO 这种注入方式在AppComponent里面并拿不到LOCALE_ID,是否在此处写入localStorage？

    platformBrowserDynamic().bootstrapModule(AppModule, [options]);

}).catch(error => {
    console.error(error);
});

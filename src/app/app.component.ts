import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare const jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(@Inject(LOCALE_ID) localeId, translate: TranslateService) {
        translate.addLangs(['zh-CN', 'en-US']);
        translate.setDefaultLang('zh-CN');
        translate.use(localeId);
    }

    ngOnInit() {
        // console.log(jQuery);
    }
}

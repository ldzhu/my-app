import {LOCALE_ID, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_INJECTOR} from '../../app.consts';

/**
 * 父组件
 */
export class BaseComponent implements OnInit {
    // 当前语言环境
    public locale: string;
    // 国际化服务
    public translate: TranslateService;

    constructor() {
        this.locale = APP_INJECTOR.get(LOCALE_ID);
        this.translate = APP_INJECTOR.get(TranslateService);
    }

    ngOnInit() {
    }

}

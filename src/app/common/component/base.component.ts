import {LOCALE_ID, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_INJECTOR} from '../../app.consts';

/**
 * 父组件，基类，提供其他组件公共的服务、属性、方法等。
 */
export class BaseComponent implements OnInit {
    // 当前语言环境
    public locale: string;
    // 国际化服务
    public translate: TranslateService;
    // 国际化资源对象
    public i18n: any;

    constructor() {
        this.locale = APP_INJECTOR.get(LOCALE_ID);
        this.translate = APP_INJECTOR.get(TranslateService);
        this.i18n = this.translate.instant('i18n');
    }

    ngOnInit() {
    }

}

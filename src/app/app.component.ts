import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {jQuery} from './app.consts';

/**
 *  jQuery等非TS的框架使用方法：
 *  1. 在.angular-cli.json配置文件的scripts中加入jQuery文件路径；
 *  2. 在使用的地方通过declare进行常量声明，常量名和'jQuery'（JS中全局对象名）保持一致；
 *  3. 使用jQuery（如ngOnInit()中输出的是jQuery对象）
 */
// declare const jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(@Inject(LOCALE_ID) localeId, translate: TranslateService) {
        /*
         * 初始化translate服务。由于服务是单例的，在App组件里初始化之后，在其他组件或服务里只需要通过依赖注入即可使用。
         * 语言环境目前仅支持中文和英文，默认使用中文环境。通过内置的LOCALE_ID变量（已在AppModule里初始化）获取当前
         * 语言环境，调用use方法来设置当前语言。
         */
        translate.addLangs(['zh-CN', 'en-US']);
        translate.setDefaultLang('zh-CN');
        translate.use(localeId);
    }

    ngOnInit() {
        console.log(jQuery);
    }
}

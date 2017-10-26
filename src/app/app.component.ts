import {Component, OnInit} from '@angular/core';
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

    constructor() {
    }

    ngOnInit() {
        console.log(jQuery);
    }
}

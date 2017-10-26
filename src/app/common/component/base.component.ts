import {LOCALE_ID} from '@angular/core';
import {APP_INJECTOR} from '../../app.consts';
/**
 * 使用import导入json文件。需要在src/typings.d.ts中定义:
 *   declare module '*.json' {
 *       const value: any;
 *       export default value;
 *   }
 */
import * as zh_CN from '../../../assets/i18n/zh-CN.json';
import * as en_US from '../../../assets/i18n/en-US.json';

/**
 * 父组件，基类，提供其他组件公共的服务、属性、方法等。
 */
export class BaseComponent {
    // 当前语言环境
    public locale: string;
    // 国际化资源对象
    public i18n: any;

    constructor() {
        this.locale = APP_INJECTOR.get(LOCALE_ID);
        this.i18n = this.locale === 'zh-CN' ? zh_CN : en_US;
    }

}

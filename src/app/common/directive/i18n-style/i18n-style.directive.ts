import {Directive, ElementRef, Inject, LOCALE_ID} from '@angular/core';

/**
 * 国际化样式指令：根据当前语言环境，为使用本指令的元素添加中文/英文 class名。
 */
@Directive({
    selector: '[fhI18nStyle]'
})
export class I18nStyleDirective {

    constructor(el: ElementRef, @Inject(LOCALE_ID) locale) {
        let className = el.nativeElement.className;
        if (!className) {
            className = locale;
        } else {
            className = className + ' ' + locale;
        }
        el.nativeElement.className = className;
    }

}

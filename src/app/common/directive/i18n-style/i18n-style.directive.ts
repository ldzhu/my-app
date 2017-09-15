import {Directive, ElementRef, Inject, LOCALE_ID} from '@angular/core';

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

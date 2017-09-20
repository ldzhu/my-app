import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from '../base.component';

/**
 * head导航栏组件
 */
@Component({
    selector: 'pon-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss']
})
export class HeadComponent extends BaseComponent implements OnInit {
    /**
     * 组件输入属性（从父组件传入）
     */
    @Input() options: any;
    @Input() isFocus: boolean;

    constructor() {
        super();
    }

    ngOnInit() {
        this.isFocus = false;
    }

}

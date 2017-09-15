import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from '../base.component';

@Component({
    selector: 'pon-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeadComponent extends BaseComponent implements OnInit {
    @Input() options: any;
    @Input() isFocus: boolean;

    constructor() {
        super();
    }

    ngOnInit() {
        this.isFocus = false;
    }

}

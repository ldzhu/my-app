import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'pon-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeadComponent implements OnInit {
    @Input() options: any;
    @Input() isFocus: boolean;

    constructor() {
    }

    ngOnInit() {
        this.isFocus = false;
    }

}

import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'pon-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    @Input() navigateOptions: any;

    constructor() {
    }

    ngOnInit() {
        this.navigateOptions = {
            mNo: 0,
            mName: '首页',
            isIndex: true,
            isAbsolute : true,
            menu: []
        };
    }

}

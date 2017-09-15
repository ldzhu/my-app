import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/component/base.component';

@Component({
    selector: 'app-index-focus',
    templateUrl: './focus.component.html'
})
export class FocusComponent extends BaseComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
    }

}

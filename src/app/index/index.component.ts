import {Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {BaseComponent} from '../common/component/base.component';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent extends BaseComponent implements OnInit {
    @Input() navigateOptions: any;

    public constructor(private titleService: Title) {
        super();
    }

    ngOnInit() {
        this.setTitle(this.i18n.title);
        this.setOptions();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public setOptions() {
        this.navigateOptions = {
            mNo: 0,
            mName: this.i18n.index.name,
            isIndex: true,
            isAbsolute: true,
            menu: []
        };
    }

}

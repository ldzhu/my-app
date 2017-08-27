import {Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    @Input() navigateOptions: any;

    public constructor(private titleService: Title) {
    }

    ngOnInit() {
        this.setTitle('网络流量与质量分析系统');
        this.setOptions();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public setOptions() {
        this.navigateOptions = {
            mNo: 0,
            mName: '首页',
            isIndex: true,
            isAbsolute: true,
            menu: []
        };
    }

}

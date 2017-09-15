import {Component, OnInit, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {BaseComponent} from '../common/component/base.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit {
    @Input() navigateOptions: any;

    public constructor(private titleService: Title) {
        super();
    }

    ngOnInit() {
        this.setTitle(this.translate.instant('user.userManage'));
        this.setOptions();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public setOptions() {
        this.navigateOptions = {
            mNo: 5,
            mName: this.translate.instant('user.userManage'),
            isAbsolute: true,
            menu: [{
                name: this.translate.instant('user.sysUser'),
                routerLink: 'sys-user'
            }, {
                name: this.translate.instant('user.onlineUser'),
                routerLink: 'online-user'
            }, {
                name: this.translate.instant('user.domainManage'),
                routerLink: 'domain-mgr'
            }]
        };
    }

}

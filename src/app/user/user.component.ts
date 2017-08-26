import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    @Input() navigateOptions: any;

    constructor() { }

    ngOnInit() {
        this.navigateOptions = {
            mNo: 5,
            mName: '用户管理',
            isAbsolute : true,
            menu: [{
                name: '系统用户',
                routerLink: 'sys-user'
            }, {
                name: '在线用户',
                routerLink: 'online-user'
            }, {
                name: '管理域',
                routerLink: 'domain-mgr'
            }]
        };
    }

}

import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '../../common/component/base.component';
import {SysUser} from '../../common/model/sys-user.model';
import {UserService} from '../shared/user.service';

@Component({
    selector: 'app-user-sysuser',
    templateUrl: './sys-user.component.html',
    styleUrls: ['./sys-user.component.scss']
})
export class SysUserComponent extends BaseComponent implements OnInit {
    sysUsers: SysUser[];

    constructor(private userService: UserService) {
        super();
    }

    ngOnInit() {
        this.userService.getSysUsers()
            .subscribe(res => this.sysUsers = res.data);
    }

}

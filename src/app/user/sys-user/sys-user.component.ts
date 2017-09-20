import {Component, OnInit} from '@angular/core';

import {SysUser} from '../../common/model/sys-user.model';
import {UserService} from '../shared/user.service';

@Component({
    selector: 'app-user-sysuser',
    templateUrl: './sys-user.component.html',
    styleUrls: ['./sys-user.component.scss']
})
export class SysUserComponent implements OnInit {
    sysUsers: SysUser[];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getSysUsers()
            .then(res => {
                this.sysUsers = res.data;
            });
    }

}

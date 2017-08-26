import {Component, Input, OnInit} from '@angular/core';

import {SysUser} from './sys-user.model';
import {UserService} from '../shared/user.service';

@Component({
    selector: 'app-user-sysuser',
    templateUrl: './sys-user.component.html',
    styleUrls: ['./sys-user.component.scss']
})
export class SysUserComponent implements OnInit {
    constructor(private userService: UserService) {
    }

    @Input() sysUsers: SysUser[];

    ngOnInit() {
        this.userService.getSysUsers()
            .then(res => {
                this.sysUsers = res.data;
            });
    }

}

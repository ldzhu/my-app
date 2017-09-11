import {Component, Input, OnInit} from '@angular/core';

import {SysUser} from './sys-user.model';
import {UserService} from '../shared/user.service';

@Component({
    selector: 'app-user-sysuser',
    templateUrl: './sys-user.component.html',
    styleUrls: ['./sys-user.component.scss']
})
export class SysUserComponent implements OnInit {
    decimal: number = 42.123;
    int: number = 42;
    stringNumber: string = '42.123';

    date: Date = new Date();
    milliseconds: number = this.date.getTime();
    stringDate: string = '01/02/2011';

    constructor(private userService: UserService) {
    }

    @Input() sysUsers: SysUser[];

    ngOnInit() {
        this.date = new Date();
        this.userService.getSysUsers()
            .then(res => {
                this.sysUsers = res.data;
            });
    }

}

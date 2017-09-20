import {Routes} from '@angular/router';

import {UserComponent} from './user.component';
import {SysUserComponent} from './sys-user/sys-user.component';
import {OnlineUserComponent} from './online-user/online-user.component';
import {DomainMgrComponent} from './domain-mgr/domain-mgr.component';

/**
 * 用户管理模块路由
 */
export const userRouterConfig: Routes = [
    {
        path: 'user',
        component: UserComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'sys-user'
            },
            {
                path: 'sys-user',
                pathMatch: 'full',
                component: SysUserComponent
            },
            {
                path: 'online-user',
                pathMatch: 'full',
                component: OnlineUserComponent
            },
            {
                path: 'domain-mgr',
                pathMatch: 'full',
                component: DomainMgrComponent
            }
        ]
    }
];

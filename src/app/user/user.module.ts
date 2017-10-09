import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {GridModule} from '@progress/kendo-angular-grid';
import {TranslateModule} from '@ngx-translate/core';

import {PonCommonModule} from '../common/common.module';

import {UserComponent} from './user.component';
import {userRouterConfig} from './user.routes';
import {UserService} from './shared/user.service';
import {SysUserComponent} from './sys-user/sys-user.component';
import {DomainMgrComponent} from './domain-mgr/domain-mgr.component';
import {OnlineUserComponent} from './online-user/online-user.component';
import {DomainMgrService} from './domain-mgr/domain-mgr.service';
/* 加载mock数据 */
import './shared/mock.data';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        /* 导入路由模块：子模块使用forChild */
        RouterModule.forChild(userRouterConfig),
        /* 导入翻译模块： 子模块使用forChild */
        TranslateModule.forChild(),
        HttpModule,
        GridModule,
        PonCommonModule
    ],
    exports: [UserComponent],
    declarations: [
        UserComponent,
        SysUserComponent,
        OnlineUserComponent,
        DomainMgrComponent
    ],
    providers: [
        UserService,
        DomainMgrService
    ],
})
export class UserModule {
}

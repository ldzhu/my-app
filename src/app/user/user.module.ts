import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {GridModule} from '@progress/kendo-angular-grid';
import {TranslateModule} from '@ngx-translate/core';

import {PonCommonModule} from '../common/common.module';

import {UserComponent} from './user.component';
import {userRouterConfig} from './user.routes';
import {SysUserComponent} from './sys-user/sys-user.component';
import {DomainMgrComponent} from './domain-mgr/domain-mgr.component';
import {OnlineUserComponent} from './online-user/online-user.component';
import {UserService} from './shared/user.service';

import './shared/mock.data';
import {DomainMgrService} from './domain-mgr/domain-mgr.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(userRouterConfig),
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

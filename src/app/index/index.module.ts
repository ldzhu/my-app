import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {PonCommonModule} from '../common/common.module';

import {rootRouterConfig} from './index.routes';
import {IndexComponent} from './index.component';
import {LoginComponent} from './login/login.component';
import {NavigateComponent} from './navigate/navigate.component';
import {FocusComponent} from './focus/focus.component';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild(rootRouterConfig),
        TranslateModule.forChild(),
        PonCommonModule
    ],
    exports: [IndexComponent],
    declarations: [IndexComponent, LoginComponent, NavigateComponent, FocusComponent],
    providers: [],
})
export class IndexModule {
}

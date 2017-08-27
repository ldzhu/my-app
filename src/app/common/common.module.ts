import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeadComponent} from './component/head/head.component';
import {UrlService} from './service/url.service';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [HeadComponent],
    declarations: [HeadComponent],
    providers: [UrlService],
})
export class PonCommonModule {
}

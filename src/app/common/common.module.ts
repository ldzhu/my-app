import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {HeadComponent} from './component/head/head.component';
import {UrlService} from './service/url.service';
import {KendoFiberhomeChartComponent} from './component/kendo-fiberhome-chart/kendo-fiberhome-chart.component';
import {I18nStyleDirective} from './directive/i18n-style/i18n-style.directive';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [HeadComponent, KendoFiberhomeChartComponent],
    declarations: [HeadComponent, KendoFiberhomeChartComponent, I18nStyleDirective],
    providers: [UrlService],
})
export class PonCommonModule {
}

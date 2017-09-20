import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {HeadComponent} from './component/head/head.component';
import {KendoFiberhomeChartComponent} from './component/kendo-fiberhome-chart/kendo-fiberhome-chart.component';
import {I18nStyleDirective} from './directive/i18n-style/i18n-style.directive';
import {UrlService} from './service/url.service';

/**
 * common模块，定义公共组件、指令、服务、管道、枚举、模型、常量；
 * 以及redux应用状态管理
 */
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

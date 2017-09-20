import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare const $: any;
declare const kendo: any;

/**
 * kendo-fiberhome-chart组件，使用kendo for jQuery控件封装
 */
@Component({
    selector: 'kendo-fiberhome-chart',
    templateUrl: './kendo-fiberhome-chart.component.html',
    styleUrls: ['./kendo-fiberhome-chart.component.scss']
})
export class KendoFiberhomeChartComponent implements OnInit, AfterViewInit {
    /**
     * 组件输入属性：
     * chartId: chart控件唯一标识
     * options: chart控件配置
     */
    @Input() chartId: string;
    @Input() options: any;
    /**
     * 组件输出属性
     * chart: chart对象
     */
    @Output() chart = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const $chart = $('#' + this.chartId);
        $chart.kendoChart(this.options);
        this.chart.emit($chart.data('kendoChart'));
    }

}

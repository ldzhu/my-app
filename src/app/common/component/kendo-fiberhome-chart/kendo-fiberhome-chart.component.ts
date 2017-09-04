import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare const $: any;
declare const kendo: any;

@Component({
    selector: 'kendo-fiberhome-chart',
    templateUrl: './kendo-fiberhome-chart.component.html',
    styleUrls: ['./kendo-fiberhome-chart.component.scss']
})
export class KendoFiberhomeChartComponent implements OnInit, AfterViewInit {
    @Input() chartId: string;
    @Input() options: any;
    @Output() chart = new EventEmitter<boolean>();

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

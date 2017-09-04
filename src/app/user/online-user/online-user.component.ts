import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'pon-user-online-user',
    templateUrl: './online-user.component.html',
    styleUrls: ['./online-user.component.scss']
})
export class OnlineUserComponent implements OnInit {
    onlineUserChartOption: any;
    sysUserChartOption: any;

    onlineUserChart: any;
    sysUserChart: any;

    constructor() {
    }

    ngOnInit() {
        this.initOptions();
    }

    public afterOnlineUserChartInit(chartInstance: any) {
        this.onlineUserChart = chartInstance;
    }

    public afterSysUserChartInit(chartInstance: any) {
        this.sysUserChart = chartInstance;
    }

    public initOptions() {
        this.onlineUserChartOption = {
            title: {
                text: 'Gross domestic product growth \n /GDP annual %/'
            },
            legend: {
                position: 'bottom'
            },
            chartArea: {
                background: ''
            },
            seriesDefaults: {
                type: 'line',
                style: 'smooth'
            },
            series: [{
                name: 'India',
                data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
            }, {
                name: 'World',
                data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
            }, {
                name: 'Russian Federation',
                data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
            }, {
                name: 'Haiti',
                data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
            }],
            valueAxis: {
                labels: {
                    format: '{0}%'
                },
                line: {
                    visible: false
                },
                axisCrossingValue: -10
            },
            categoryAxis: {
                categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
                majorGridLines: {
                    visible: false
                },
                labels: {
                    rotation: 'auto'
                }
            },
            tooltip: {
                visible: true,
                format: '{0}%',
                template: '#= series.name #: #= value #'
            }
        };
        this.sysUserChartOption = {
            title: {
                text: 'A digital signal'
            },
            legend: {
                visible: false
            },
            series: [{
                type: 'line',
                data: [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8],
                style: 'step',
                markers: {
                    visible: false
                }
            }],
            categoryAxis: {
                title: {
                    text: 'time'
                },
                majorGridLines: {
                    visible: false
                },
                majorTicks: {
                    visible: false
                }
            },
            valueAxis: {
                max: 22,
                title: {
                    text: 'voltage'
                },
                majorGridLines: {
                    visible: false
                },
                visible: false
            }
        };
    }

}

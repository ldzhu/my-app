import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BaseComponent} from '../../common/component/base.component';

@Component({
    selector: 'pon-user-online-user',
    templateUrl: './online-user.component.html',
    styleUrls: ['./online-user.component.scss']
})
export class OnlineUserComponent extends BaseComponent implements OnInit {
    /*
     * kendo for jQuery的chart配置
     */
    onlineUserChartOption: any;
    sysUserChartOption: any;

    /*
     * kendo for jQuery的chart对象，通过Angular的子组件向父组件传递消息来实现将kendo-fiberhome-chart
     * 组件里获取的chart对象传递给使用该组件的父组件，以便调用chart对象相关方法。
     */
    onlineUserChart: any;
    sysUserChart: any;

    /*
     * 注册翻译服务，以及获取value的两种方式。（统一在BaseComponent注册翻译服务，无需每个组件都自行注册）
     * @param {TranslateService} translate
     */
    constructor(private translateSrv: TranslateService) {
        super();
        // 同步调用
        console.log(translateSrv.instant('i18n.test.name'));
        // 异步调用
        translateSrv.get('i18n.test.name').subscribe(res => console.log(res));

        console.log(this.i18n);
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

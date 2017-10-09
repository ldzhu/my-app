import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {BaseComponent} from '../common/component/base.component';

/**
 * 用户管理组件
 */
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit {
    // 导航配置
    navigateOptions: any;

    public constructor(private titleService: Title) {
        super();
    }

    /**
     * 生命周期钩子，初始化组件。
     * 参考：https://angular.cn/guide/lifecycle-hooks
     */
    ngOnInit() {
        // 设置用户管理模块title，translate属性继承自BaseComponent基类。
        this.setTitle(this.translate.instant('i18n.user.userManage'));
        // 设置用户管理模块导航配置，在head指令里使用。
        this.setOptions();
    }

    /**
     * Angular程序的根组件是包含在<body>标签里面的元素，而HTML文档的<title>包含在文档的<head>里，
     * 所以Angular的数据绑定无法访问到它。我们可以通过jQuery或者其他方式设置title，但这样并不符合
     * Angular的做法，幸运的是Angular的BrowserModule提供了Title服务来完成get/set title的方法。
     * 参考：https://angular.cn/guide/set-document-title
     */
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public setOptions() {
        this.navigateOptions = {
            mNo: 5,
            mName: this.translate.instant('i18n.user.userManage'),
            isAbsolute: true,
            menu: [{
                name: this.translate.instant('i18n.user.sysUser'),
                routerLink: 'sys-user'
            }, {
                name: this.translate.instant('i18n.user.onlineUser'),
                routerLink: 'online-user'
            }, {
                name: this.translate.instant('i18n.user.domainManage'),
                routerLink: 'domain-mgr'
            }]
        };
    }

}

import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/component/base.component';

@Component({
    selector: 'pon-index-navigate',
    templateUrl: './navigate.component.html',
    styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent extends BaseComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
    }

    go(type: number) {
        this.openModule(type);
    }

    onMouseEnter(e: any, index: number) {
        const ele = e.target;
        ele.src = '../../../assets/img/' + this.locale + '/b' + index + '.png';
    }

    onMouseLeave(e: any, index: number) {
        const ele = e.target;
        ele.src = '../../../assets/img/' + this.locale + '/m' + index + '.png';
    }

    private openModule(mType: number) {
        const tagName = 'tag' + mType;
        if (mType === 1) {
            // window.open("/pon/health/index.html", tagName);
        } else if (mType === 2) {
            // window.open("/pon/opt/index.html", tagName);
        } else if (mType === 3) {
            // window.open("/pon/topo/index.html", tagName);
        } else if (mType === 4) {
            // window.open("/pon/report/index.html", tagName);
        } else if (mType === 5) {
            window.open('/user', tagName);
        } else if (mType === 6) {
            // window.open("/pon/log/index.html", tagName);
        } else if (mType === 7) {
            // 用户主动进入系统设置模块
            // localStorage.setItem('license', 'false');
            // window.open("/pon/setting/index.html", tagName);
        }
    }

}

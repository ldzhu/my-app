import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {UrlService} from '../../common/service/url.service';
import {URL_CONST} from '../../common/const/url.consts';
import {Observable} from 'rxjs/Observable';
import {SysUser} from '../../common/model/sys-user.model';

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    /*getSysUsers(): Promise<any> {
        return this.http.get(UrlService.getURL(URL_CONST.allUsers))
            .toPromise() // 不使用Angular http模块默认的Observable，而是转成promise使用
            .then(response => response.json())
            .catch(error => Promise.reject(error.message || error));
    }*/

    getSysUsers(): Observable<any> {
        return this.http.post(UrlService.getURL(URL_CONST.allUsers), {})
            .map(res => res.json());
    }

}

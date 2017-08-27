import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {UrlService} from '../../common/service/url.service';
import {URL_CONST} from '../../common/const/url.consts';

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    getSysUsers(): Promise<any> {
        return this.http.get(UrlService.getURL(URL_CONST.allUsers))
            .toPromise()
            .then(response => response.json())
            .catch(error => Promise.reject(error.message || error));
    }


}

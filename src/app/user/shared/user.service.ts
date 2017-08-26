import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private sysUserUrl = 'http://10.170.3.1:8080/user-manage/allUsers.do';

    constructor(private http: Http) {
    }

    getSysUsers(): Promise<any> {
        return this.http.get(this.sysUserUrl)
            .toPromise()
            .then(response => response.json())
            .catch(error => Promise.reject(error.message || error));
    }


}

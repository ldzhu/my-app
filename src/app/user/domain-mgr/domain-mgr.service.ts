import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {ADD_DOMAIN, FETCH_FROM_API, REMOVE_DOMAIN} from '../../common/redux/action/domain.action';
import {Domain} from '../../common/model/domain.model';
import {AppState} from '../../common/redux/store/index';
import {UrlService} from '../../common/service/url.service';
import {URL_CONST} from '../../common/const/url.consts';

@Injectable()
export class DomainMgrService {
    constructor(private http: Http, private store$: Store<AppState>) {
    }

    getDomains(): Observable<Domain[]> {
        return this.http.get(UrlService.getURL(URL_CONST.allDomains))
            .map(res => {
                const domains = res.json().data as Domain[];
                this.store$.dispatch({type: FETCH_FROM_API, payload: domains});
                return domains;
            });
    }

    addDomain(domain: Domain): void {
        this.http.put(UrlService.getURL(URL_CONST.domain), domain)
            .map(res => res.json())
            .subscribe(res => {
                return res.success && this.store$.dispatch({type: ADD_DOMAIN, payload: res.data as Domain});
            });
    }

    removeDomain(id: number): void {
        this.http.delete(UrlService.getURL(URL_CONST.domain), id)
            .map(res => res.json())
            .subscribe(res => {
                return res.success && this.store$.dispatch({type: REMOVE_DOMAIN, payload: id});
            });
    }

}

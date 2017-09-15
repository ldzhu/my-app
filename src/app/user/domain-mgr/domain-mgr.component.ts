import {Component, OnInit} from '@angular/core';
import {DomainMgrService} from './domain-mgr.service';
import {Domain} from './domain.model';
import {AppState} from '../../common/redux/store/state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'pon-user-domain-mgr',
    templateUrl: './domain-mgr.component.html',
    styleUrls: ['./domain-mgr.component.scss']
})
export class DomainMgrComponent implements OnInit {
    domains: Observable<Domain[]>;

    constructor(private store$: Store<AppState>, private service: DomainMgrService) {
    }

    ngOnInit() {
        this.domains = this.store$.select('domains');
    }

    addDomain(e) {
        const domain = {
            id: new Date().getMilliseconds(),
            name: e.target.value
        };
        this.service.addDomain(domain);
    }

    removeDomain(domain: Domain) {
        this.service.removeDomain(domain.id);
    }

}

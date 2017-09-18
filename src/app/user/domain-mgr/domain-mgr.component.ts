import {Component, OnInit} from '@angular/core';
import {DomainMgrService} from './domain-mgr.service';
import {Domain} from '../../common/model/domain.model';
import {AppState} from '../../common/redux/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {DomainState} from '../../common/redux/store/domain.state';

@Component({
    selector: 'pon-user-domain-mgr',
    templateUrl: './domain-mgr.component.html',
    styleUrls: ['./domain-mgr.component.scss']
})
export class DomainMgrComponent implements OnInit {
    domains: Observable<Domain[]>;

    constructor(private store$: Store<AppState>, private service: DomainMgrService) {
        this.service.getDomains().subscribe(() => {
            this.domains = this.store$.select('domain').map((domain: DomainState) => domain.domains);
        });
    }

    ngOnInit() {
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

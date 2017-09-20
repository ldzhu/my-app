import {inject, TestBed} from '@angular/core/testing';

import {DomainMgrService} from './domain-mgr.service';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState} from '../../common/redux/store/index';
import {reducer} from '../../common/redux/reducer/index';

describe('管理域服务', () => {
    let service = null;
    let backend: MockBackend = null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.provideStore({reducer}, {initialState: {}})
            ],
            providers: [
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                DomainMgrService
            ]
        });
    });

    beforeEach(inject([DomainMgrService, MockBackend, Store],
        (domainMgrService: DomainMgrService, mockBackend: MockBackend, store: Store<AppState>) => {
            service = domainMgrService;
            backend = mockBackend;
        }));

    it('服务初始化', () => {
        expect(service).toBeTruthy();
    });

    it('获取逻辑域', () => {
        service.getDomains().subscribe((domains) => {
            expect(domains.length).toBeGreaterThan(0);
        });
    });
});

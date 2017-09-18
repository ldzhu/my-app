import {Action} from '@ngrx/store';
import * as DomainAction from '../action/domain.action';
import {DomainState} from '../store/domain.state';

const initDomainState: DomainState = {
    domains: [],
    filter: ''
};

export function domainReducer(state: DomainState = initDomainState, action: Action) {
    switch (action.type) {
        case DomainAction.ADD_DOMAIN:
            return {
                domains: [...state.domains, action.payload],
                filter: ''
            };
        case DomainAction.REMOVE_DOMAIN:
            return {
                domains: state.domains.filter(domain => domain.id !== action.payload),
                filter: ''
            };
        case DomainAction.FETCH_FROM_API:
            return {
                domains: [...action.payload],
                filter: ''
            };
        default:
            return state;
    }
}

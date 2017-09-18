import {Domain} from '../../model/domain.model';

export interface DomainState {
    domains: Domain[];
    filter?: string;
}

import {DomainState} from './domain.state';
import {OtherState} from './other.state';

export interface AppState {
    domain: DomainState;
    other: OtherState;
}

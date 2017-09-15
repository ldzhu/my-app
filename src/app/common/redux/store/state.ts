import {Todo, Auth} from '../domain/entities';
import {Domain} from '../../../user/domain-mgr/domain.model';

export {Todo, Auth};

export interface AppState {
    domains: Domain[];
    auth: Auth;
}

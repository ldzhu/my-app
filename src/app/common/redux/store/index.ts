import {DomainState} from './domain.state';
import {OtherState} from './other.state';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 *
 * 每个reducer应该对应一个子store（可以看做数据库中的一张表），而整个应用中所有的reducer
 * 对应的store组成一个Root store，即AppState接口（可以看做整个数据库）。
 */
export interface AppState {
    domain: DomainState;
    other: OtherState;
}

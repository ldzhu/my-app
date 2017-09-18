import {Action} from '@ngrx/store';
import * as OtherAction from '../action/other.action';
import {OtherState} from '../store/other.state';

const initOtherState: OtherState = {
    other: {}
};

export function otherReducer(state: OtherState = initOtherState, action: Action) {
    switch (action.type) {
        case OtherAction.ADD_OTHER:
        default:
            return state;
    }
}

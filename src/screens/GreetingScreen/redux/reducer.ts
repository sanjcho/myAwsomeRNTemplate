import {AnyAction} from 'redux';
import {ActionTypes} from './actionTypeEnums';
import {IGreetingActionType} from './actionTypes';

type initStateType = {
    someProp: string;
};

export const initState: initStateType = {
    someProp: '',
};

export const greetingScreenReducer = (state: initStateType = initState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.GREETING_SCREEN_SET_SOME_PROP:
            return {
                ...state,
                someProp: (action as IGreetingActionType).someProp,
            };
        default:
            return state;
    }
};

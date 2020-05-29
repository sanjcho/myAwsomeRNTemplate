import {combineReducers} from 'redux';
import {greetingScreenReducer} from '../screens/GreetingScreen/redux/reducer';

const screens = combineReducers({
    greetingScreen: greetingScreenReducer,
});
// const businessLogic = combineReducers({});
// const rawData = combineReducers({});

export const rootReducer = combineReducers({
    screens,
    // businessLogic,
    // rawData,
});

import {GreetingScreen} from '../../screens/GreetingScreen';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

export const RootStack = createStackNavigator();


export const RootScreenMap = () => (
    <RootStack.Screen
        name="Home"
        component={GreetingScreen}
        options={{title: 'Greeting'}}
    />
);


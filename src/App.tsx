/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootScreenMap, RootStack} from './Navigations/RootNavigator/RootNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                {RootScreenMap()}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};


export default App;

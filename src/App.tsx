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
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {RootScreenMap, RootStack} from './Navigations/RootNavigator/RootNavigator';
import {configureAppStore} from './ReduxCore/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
    const {store, persistor} = configureAppStore();

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer>
                    <RootStack.Navigator>{RootScreenMap()}</RootStack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;

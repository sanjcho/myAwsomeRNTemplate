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
import {Button, SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {greetingAction} from './redux/actions';
import {useCallback} from 'react';

// check if using hermes https://reactnative.dev/docs/hermes
declare const global: {HermesInternal: null | {}};

export const GreetingScreen = () => {
    const dispatch = useDispatch();
    const dispatchTestAction = useCallback(() => dispatch(greetingAction('hello')), []);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <Header />
                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <Button title={'dispatch test action'} onPress={dispatchTestAction} />
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Step One</Text>
                            <Text style={styles.sectionDescription}>
                                Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come
                                back to see your edits.
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>See Your Changes</Text>
                            <Text style={styles.sectionDescription}>
                                <ReloadInstructions />
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Debug</Text>
                            <Text style={styles.sectionDescription}>
                                <DebugInstructions />
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Learn More</Text>
                            <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
                        </View>
                        <LearnMoreLinks />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

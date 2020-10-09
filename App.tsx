import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StoreProvider } from './src/features/store/components/store-provider';

const App = () => (
    <StoreProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Hello World</Text>
            </View>
        </SafeAreaView>
    </StoreProvider>
);

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 32,
    },
});

export default App;

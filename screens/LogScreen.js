import React from 'react';
import {
    View,
    Text,
    FlatList,
    Button,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { observer } from 'mobx-react';

import styles from '../styles';
import { ToDoLine } from '../components/ToDoLine';
import logStore from "../stores/LogStore";

export const LogScreen = observer(({ navigation }) => {
    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Логи</Text>
                </View>
                <FlatList
                    data={logStore.logList}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({ item }) => <ToDoLine item={item[0]} color={item[1]} />}
                />

                <View style={styles.buttons}>
                    <Button
                        title="to Home"
                        onPress={() => navigation.navigate('Home')}
                        color="blue"
                    />
                    <Button
                        title="to ToDo"
                        onPress={() => navigation.navigate('ToDo')}
                        color="#5F9EA0"
                    />
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
});
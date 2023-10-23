import React from 'react';
import {View, Text, FlatList, Button, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';

import logStore from '../stores/LogStore';


export const Log= observer(({ navigation }) => {

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}><Text style={styles.headerText}>Логи</Text></View>
                <FlatList
                    data={logStore.logList}
                    keyExtractor={(item, index) => keyExtractor(index)} renderItem={({item}) =>
                    <View style={[styles.todoLine, {backgroundColor: item[1]}]}>
                    <TouchableOpacity style={styles.todoLineTouch}>
                    <Text style={styles.titleText}>{item[0]}</Text>
                    </TouchableOpacity>
                    </View>
                }
                />

                <View
                    style={styles.buttons}
                >
                    <Button
                        title="Вернуться на главный экран"
                        onPress={() => navigation.navigate('Home')}
                        color='blue'
                    />
                    <Button
                        title='Вернуться к списку ToDo'
                        onPress={() => navigation.navigate('ToDo')}
                        color='#5F9EA0'
                    />
                </View>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    todoLine: {
        borderWidth: 1,
        borderBlockColor: 'black',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        borderRadius: 10,
        marginVertical: 2,
    },
    todoLineTouch: {
        padding: 8,
        flexDirection: 'row',
        flex: 3,
    },
    textInput: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
        marginTop: 16,
    },
    titleText: {
        fontSize: 18,
        flex: 3,
    },
    header: {
        backgroundColor: 'rgba(30, 144, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    headerText: {
        fontSize: 24,
        alignSelf: 'center',
        paddingVertical: 5,
    },
    buttons: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
    },
})
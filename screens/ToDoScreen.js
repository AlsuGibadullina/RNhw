import React, { useState } from 'react';
import {
    Button,
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { observer } from 'mobx-react';

import styles from '../styles';
import todoStore from "../stores/ToDoStore";
import logStore from "../stores/LogStore";
import {ToDoItem} from "../components/ToDoItem";

export const ToDoScreen = observer(({ navigation }) => {
    const [text, setText] = useState('');

    const addItem = () => {
        todoStore.addTodo(text);
        setText('');
        logStore.addLog([`Задача '${text}' была добавлена`, '#AFEEEE']);
    };

    const removeItem = (item) => {
        todoStore.deleteTodo(item);
        logStore.addLog([`Задача '${item[0]}' была удалена`, '#FA8072']);
    };

    const completeItem = (item) => {
        todoStore.markAsCompleted(item);
        logStore.addLog([`Задача '${item[0]}' была выполнена`, '#98FB98']);
    };

    const getCompletedToDos = () => {
        return todoStore.todoList.filter((item) => item[1] === true);
    };

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>ToDoList</Text>
                </View>
                <FlatList
                    data={todoStore.todoList}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({ item }) => (
                        <ToDoItem
                            item={item}
                            onRemove={() => removeItem(item)}
                            onCompleted={() => completeItem(item)}
                        ></ToDoItem>
                    )}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(newText) => setText(newText)}
                    value={text}
                ></TextInput>

                <Button title="Добавить" onPress={() => addItem()} />
                <View style={styles.buttons}>
                    <Button
                        title="Вернуться на Главный экран"
                        onPress={() => navigation.navigate('Home')}
                        color="blue"
                    />
                    <Button
                        title="Выполненные задания"
                        onPress={() =>
                            navigation.navigate('CompletedTasks', {
                                completedTodos: getCompletedToDos(),
                            })
                        }
                        color="green"
                    />
                    <Button
                        title="Посмотреть логи"
                        onPress={() => navigation.navigate('Logs')}
                        color="#5F9EA0"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
});
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from 'react';
import ToDoList from "./ToDoList";
import {CompletedScreen} from "./ToDoList";
import Home from "./Home";
import About from "./About";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name={'About'} component={About}/>
            <Stack.Screen name={'ToDoList'} component={ToDoList}/>
            <Stack.Screen name={'CompletedToDo'} component={CompletedScreen}/>
        </Stack.Navigator>
    );
}
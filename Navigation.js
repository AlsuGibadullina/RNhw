import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from 'react';
import ToDoList from "./screens/ToDoScreen";
import {CompletedScreen} from "./screens/ToDoScreen";
import Home from "./screens/HomeScreen";
import About from "./screens/AboutScreen";
import {Log} from "./screens/LogScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name={'About'} component={About}/>
            <Stack.Screen name={'ToDoList'} component={ToDoList}/>
            <Stack.Screen name={'CompletedToDo'} component={CompletedScreen}/>
            <Stack.Screen name={'Log'} component={Log}/>
        </Stack.Navigator>
    );
}
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from 'react';
import ToDoList from "./screens/ToDoList";
import {CompletedScreen} from "./screens/ToDoList";
import Home from "./screens/Home";
import About from "./screens/About";
import {Log} from "./screens/Log";

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
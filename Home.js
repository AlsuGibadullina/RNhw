import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button style={styles.button}
                title="About screen"
                onPress={() => navigation.navigate('About')}
            />
            <Button style={styles.button}
                onPress={() => navigation.navigate('ToDoList')}
                title='ToDo List'
            />
            <Text style={styles.header}>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 20,
    },
});

export default Home;
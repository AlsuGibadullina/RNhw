import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button style={styles.button}
                    onPress={() => navigation.navigate('ToDoList')}
                    title='ToDo List'
            />
            <Text style={styles.header}>About</Text>
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

export default About;
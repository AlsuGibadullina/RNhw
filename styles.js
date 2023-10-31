import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
        padding: 8,
        marginTop: 16,
    },
    titleText: {
        fontSize: 18,
        flex: 3,
    },
    header: {
        backgroundColor: '#5F90A0',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        alignSelf: 'center',
        paddingVertical: 5,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopColor: 'black',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        marginVertical: 30,
    },
});

export default styles;
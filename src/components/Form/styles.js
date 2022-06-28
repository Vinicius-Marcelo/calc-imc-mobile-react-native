import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        marginTop: 20
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        paddingHorizontal: 20
    },
    formLabel: {
        color: '#000',
        fontSize: 20,
        paddingLeft: 20
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 50,
        margin: 12,
        paddingLeft: 15,
        fontSize: 20
    },
    buttonCalculador: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 10
    },
    textButtonCalculador: {
        fontSize: 20,
        color: '#fff'
    },
    erroMessage: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20
    }
});

export default styles;
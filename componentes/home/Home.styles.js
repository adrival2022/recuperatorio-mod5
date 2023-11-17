import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ed7363',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    contentContainer: {
        padding: 20, // Espaciado interno del ScrollView
        alignItems: 'center', // Alinea el contenido al centro horizontalmente
        justifyContent: 'center'
    },
    image: {
        width: 200, // Ancho deseado
        height: 200, // Alto deseado
        marginBottom: 20,
        marginTop: 20
    },
    text: {
        fontSize: 25,
        marginBottom: 10, // Espaciado inferior entre los elementos de texto
        color: '#fff'
    },
    button: {
        borderRadius: 30,
        backgroundColor: 'white',
        padding: 10,
        width: 200
    },
    buttonText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    }
})
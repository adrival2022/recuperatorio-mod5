import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from './../utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: StatusBar.currentHeight,
        padding: 0,
    },
    imageContainer: {
        width: '300',
        height: 300,
        position: 'relative',
        top: 0,
        bottom: 0,
        right: 0,
    },
    image: {
        width: Dimensions.get('screen').width,
        height: 450,
        position: 'absolute',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 70,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: COLORS.white, // Fondo blanco
        borderRadius: 10, // Bordes redondeados
        padding: 10, // Espaciado interno
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, // Opacidad de la sombra
        shadowRadius: 4, // Radio de la sombra
        elevation: 3,
        paddingHorizontal: 30,
    },
    column: {
        paddingHorizontal: 0,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        marginTop: 25,
        marginBottom: 25,
        justifyContent: 'center'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
    }
})
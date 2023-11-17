import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './Home.styles';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.text}>Recetas de cocina de Jujuy</Text>
            <Image source={require('./../../assets/images/jujuy.png')} style={styles.image}></Image>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.buttonText}>Empezar!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;
import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./DetailRecipe.styles";

const DetailRecipe = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.imagen }} style={styles.image}></Image>
            </View>
            <View style={styles.card}>
                <View style={styles.column}>
                    <Text style={styles.title}>Nombre: {item.nombre}</Text>
                    <Text style={styles.title}>Descripcion: {item.descripcion}</Text>
                    <Text style={styles.title}>Ingredientes: {item.ingredientes}</Text>
                    <Text style={styles.title}>Preparacion: {item.preparacion}</Text>
                    <Text style={styles.title}>Tiempo: {item.tiempo_preparacion}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Modificar", { item })}>
                    {/* <Image source={require('./../../../assets/images/pet.png')} style={styles.buttonIcon} /> */}
                    <Text style={styles.buttonText}>Modificar receta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
};

export default DetailRecipe;
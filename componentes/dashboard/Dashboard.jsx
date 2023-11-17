import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from "./Dashboard.styles.js";
import { SearchBar } from "./../../componentes/SearchBar/SearchBar.jsx";

const Dashboard = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")

    const handlerSearch = (query) => {
        setSearchQuery(query)
    }

    const filteredObjects = recipes.filter(object => (
        object.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    ))

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://6556670784b36e3a431fb4b0.mockapi.io/api/v1/recipes');
                const data = await response.json();
                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipes', error);
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    /* Cards */
    const renderData = ({ item }) => (
        <Pressable onPress={() => navigation.navigate("Detail", { item })} key={item.id}>
            <View style={styles.itemContainer} >
                <Image style={styles.itemImage} source={{ uri: item.imagen }} />
                <View style={styles.itemInfo}>
                    <Text style={styles.itemInfo}>Nombre: {item.nombre}</Text>
                    <Text style={styles.itemInfo}>Descripcion: {item.descripcion}</Text>
                </View>
            </View>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar handlerSearch={handlerSearch} searchQuery={searchQuery} />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Crear")}>
                    <Text style={styles.buttonText}>Agregar receta</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredObjects}
                renderItem={renderData}
                keyExtractor={item => item.id.toString()}
                style={styles.itemList}
            />
        </SafeAreaView>
    );
};

export default Dashboard;
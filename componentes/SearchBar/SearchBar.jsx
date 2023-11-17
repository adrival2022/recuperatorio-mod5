import React from "react";
import { TextInput, View, Image } from "react-native";
import { styles } from "./SearchBar.styles";

export const SearchBar = ({ handlerSearch, searchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput placeholder=" Buscar receta"
        style={styles.searchInput}
        onChangeText={handlerSearch}
        value={searchQuery} />
    </View>

  )

}
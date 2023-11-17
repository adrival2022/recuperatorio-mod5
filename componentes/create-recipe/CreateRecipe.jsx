import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './CreateRecipe.style';

const CreateRecipeForm = ({ navigation }) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch(`https://6556670784b36e3a431fb4b0.mockapi.io/api/v1/recipes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => {
            navigation.navigate('Dashboard')
          })
          .catch(error => {
            
          });
    };

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="imagen"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="imagen"
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="nombre"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="nombre"
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="descripcion"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="descripcion"
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="ingredientes"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="ingredientes"
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="preparacion"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="preparacion"
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="tiempo_preparacion"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="tiempo"
                        onChangeText={value => onChange(value)}
                        keyboardType="numeric"
                        value={value}
                    />
                )}
            />
            <Button title="Crear Receta" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

export default CreateRecipeForm;

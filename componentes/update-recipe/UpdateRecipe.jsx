import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './UpdateRecipe.style';

const UpdateRecipeForm = ({ route, navigation }) => {
    const { item } = route.params;
    const { control, handleSubmit, setValue } = useForm();

    // Simula datos del usuario a editar
    const userData = {
        imagen: 'dasdasdasdasda',
        nombre: 'Nombre Actual',
        descripcion: 'email@example.com',
        ingredientes: 'dadasdadasdasdsa',
        preaparacion: 'dasdfasdadsadasda',
        tiempo_preparacion: 3
    };

    // Establecer los valores iniciales del formulario
    React.useEffect(() => {
        setValue('imagen', item.imagen);
        setValue('nombre', item.nombre);
        setValue('descripcion', item.descripcion);
        setValue('ingredientes', item.ingredientes);
        setValue('preparacion', item.preparacion);
        setValue('tiempo_preparacion', item.tiempo_preparacion.toString());
    }, [setValue, userData]);

    const onUpdate = data => {
        // Aquí puedes enviar la solicitud PUT a tu API con los datos actualizados (data)
        console.log(data);
        // Ejemplo de solicitud PUT simulada
        fetch(`https://6556670784b36e3a431fb4b0.mockapi.io/api/v1/recipes/${item.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => {
            navigation.navigate("Dashboard");
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
            {/* Otros campos del formulario... */}
            <Button title="Actualizar" onPress={handleSubmit(onUpdate)} />
        </View>
    );
};

export default UpdateRecipeForm;

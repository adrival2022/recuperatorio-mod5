import { StyleSheet } from 'react-native';
import Dashboard from './componentes/dashboard/Dashboard';
import Home from './componentes/home/Home';
import DetailRecipe from './componentes/detail-recipe/DetailRecipe';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpdateRecipeForm from './componentes/update-recipe/UpdateRecipe';
import CreateRecipeForm from './componentes/create-recipe/CreateRecipe';

const Stack = createStackNavigator();

// API de perros https://api.api-ninjas.com/v1/animals?name=dog

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailRecipe} />
        <Stack.Screen name="Modificar" component={UpdateRecipeForm} />
        <Stack.Screen name="Crear" component={CreateRecipeForm} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

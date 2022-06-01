import React from 'react';
import Login from './views/Login'
import Cadastro from './views/Cadastro';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App (){
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}  />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
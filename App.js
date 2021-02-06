import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DetallePlatillo from './src/screens/DetallePlatillo';
import FormularioPlatillo from './src/screens/FormularioPlatillo';
import Menu from './src/screens/Menu';
import NuevaOrden from './src/screens/NuevaOrden';
import ProgresoPedido from './src/screens/ProgresoPedido';
import ResumenPedido from './src/screens/ResumenPedido';

// import state del context
import FirebaseState from './src/context/firebase/firebaseState';
import PedidoState from './src/context/pedidos/pedidosState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#7CC047',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  alignSelf: 'center',
                },
                headerBackTitleVisible: true, //muestra nombre de boton back
              }}>
              <Stack.Screen
                name="NuevaOrden"
                component={NuevaOrden}
                options={{title: 'Nuevo Pedido'}}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{title: 'Menu'}}
              />
              <Stack.Screen
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{title: 'Detalle Platillo'}}
              />
              <Stack.Screen
                name="FormularioPlatillo"
                component={FormularioPlatillo}
                options={{title: 'Ordenar Platillo'}}
              />
              <Stack.Screen
                name="ResumenPedido"
                component={ResumenPedido}
                options={{title: 'Resumen Pedido'}}
              />
              <Stack.Screen
                name="ProgresoPedido"
                component={ProgresoPedido}
                options={{title: 'Progreso de Pedido'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </>
  );
};

export default App;

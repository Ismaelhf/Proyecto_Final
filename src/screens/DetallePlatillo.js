import React, {useContext, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidoContext from '../context/pedidos/pedidosContext';

const DetallePlatillo = () => {
  // Pedido context
  const {platillo} = useContext(PedidoContext);
  const {nombre, imagen, descripcion, precio} = platillo;

  // Redireccionar
  const navigation = useNavigation();

  return (
    <View style={globalStyles.contenedor}>
      <ImageBackground
        source={{
          uri:
            'https://image.freepik.com/foto-gratis/desenfoque-color-cafe-claro-restaurante-fondo-mesa-madera-marron-vintage_42708-394.jpg',
        }}
        style={styles.imgFondo}>
        <View style={globalStyles.contenido}>
          <Text style={globalStyles.titulo}>{nombre}</Text>

          <View>
            <View>
              <View>
                <Image style={globalStyles.imagen} source={{uri: imagen}} />

                <Text style={{marginTop: 20}}>{descripcion} </Text>
                <Text style={globalStyles.cantidad}>Precio: $ {precio}</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View>
            <TouchableOpacity
              style={styles.botonOrdenar}
              onPress={() => navigation.navigate('FormularioPlatillo')}>
              <Text style={globalStyles.botonTexto}>Ordenar Platillo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  botonOrdenar: {
    backgroundColor: '#7CC047',
    padding: 10,
  },
  imgFondo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
export default DetallePlatillo;

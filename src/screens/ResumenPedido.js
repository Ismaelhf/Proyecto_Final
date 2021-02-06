import React, {useContext, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Fragment,
  ImageBackground,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';
import firebase from '../firebase';

import PedidoContext from '../context/pedidos/pedidosContext';

const ResumenPedido = () => {
  const navigation = useNavigation();

  // context de pedido
  const {pedido, total, mostrarResumen} = useContext(PedidoContext);

  console.log(pedido);
  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce(
      (nuevoTotal, articulo) => nuevoTotal + articulo.total,
      0,
    );

    mostrarResumen(nuevoTotal);
  };

  return (
    <View style={globalStyles.contenedor}>
      <ImageBackground
        source={{
          uri:
            'https://image.freepik.com/foto-gratis/desenfoque-color-cafe-claro-restaurante-fondo-mesa-madera-marron-vintage_42708-394.jpg',
        }}
        style={styles.imgFondo}>
        <View style={globalStyles.contenido}>
          <Text style={globalStyles.titulo}>Resumen Pediddo</Text>
          {pedido &&
            pedido.map((platillo, i) => {
              const {cantidad, nombre, imagen, id, precio} = platillo;
              return (
                <View key={id + i}>
                  {/* list */}
                  <View>
                    <View>
                      <Image
                        style={styles.img}
                        source={{
                          uri: imagen,
                        }}
                      />
                    </View>

                    <View>
                      <Text>{nombre} </Text>
                      <Text>Cantidad: {cantidad} </Text>
                      <Text>Precio: $ {precio} </Text>
                    </View>
                  </View>
                </View>
              );
            })}

          <Text style={globalStyles.cantidad}>Total a Pagar: $ {total}</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            style={styles.btnSeguirPidiendo}>
            <Text style={[globalStyles.botonTexto, {color: '#FFF'}]}>
              Seguir Pidiendo
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <TouchableOpacity
              onPress={() => progresoPedido()}
              style={[styles.botonOrdenarPedido]}>
              <Text style={globalStyles.botonTexto}>Ordenar Pedido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
  botonOrdenarPedido: {
    backgroundColor: '#7CC047',
    padding: 10,
  },
  btnSeguirPidiendo: {
    marginTop: 30,
    backgroundColor: '#000',
    height: 35,
  },
  imgFondo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
export default ResumenPedido;

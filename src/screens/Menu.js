import React, {useContext, useEffect, Fragment} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidosContext';

const Menu = () => {
  //context de firebase
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  // Context de pedido
  const {seleccionarPlatillo} = useContext(PedidoContext);

  // Hook para redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();

    console.log(menu);
  }, []);

  const mostrarHeading = (categoria, i) => {
    //inicia en posicion 0
    if (i > 0) {
      const categoriaAnterior = menu[i - 1].categoria;
      if (categoriaAnterior !== categoria) {
        return (
          <View style={styles.separador}>
            <Text style={styles.separadorTexto}> {categoria} </Text>
          </View>
        );
      }
    } else {
      return (
        <View style={styles.separador}>
          <Text style={styles.separadorTexto}> {categoria} </Text>
        </View>
      );
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.contenedor}>
          {/* <Text>Menu</Text> */}
          {menu &&
            menu.map((platillo, i) => {
              const {
                imagen,
                nombre,
                descripcion,
                categoria,
                precio,
                id,
              } = platillo;

              return (
                <Fragment key={id}>
                  {mostrarHeading(categoria, i)}
                  <TouchableOpacity
                    style={styles.bodyMenu}
                    onPress={() => {
                      // Eliminar algunas propiedades del platillo, existencia de extrae y se copia platillo a platillo2
                      const {existencia, ...platillo2} = platillo;

                      seleccionarPlatillo(platillo2);
                      navigation.navigate('DetallePlatillo');
                    }}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: imagen,
                      }}
                    />
                    <View style={styles.text}>
                      <Text style={styles.textMenu}>{nombre}</Text>
                      <Text style={styles.textMenuDesp}>{descripcion}</Text>
                      <Text style={styles.textMenuPrecio}>
                        Precio: ${precio}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Fragment>
              );
            })}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyMenu: {
    borderColor: '#93928E',
    marginHorizontal: 15,
    borderBottomWidth: 1,
    paddingVertical: 13,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
  },
  textMenu: {
    fontWeight: 'bold',
  },
  textMenuDesp: {
    color: '#93928E',
  },
  textMenuPrecio: {
    fontWeight: 'bold',
  },
  img: {
    width: 50,
    height: 50,
  },

  separador: {
    backgroundColor: '#000',
  },
  separadorTexto: {
    color: '#F1F3F4',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default Menu;

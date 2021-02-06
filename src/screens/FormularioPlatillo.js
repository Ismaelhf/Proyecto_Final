import React, {useState, useContext, useEffect} from 'react';
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidoContext from '../context/pedidos/pedidosContext';

const FormularioPlantillo = () => {
  // state para cantidades
  const [cantidad, guardarCantidad] = useState(1);
  const [total, guardarTotal] = useState(0);

  // context
  const {platillo, guardarPedido} = useContext(PedidoContext);
  const {precio} = platillo;

  // redireccionar
  const navigation = useNavigation();

  // En cuanto el componente carga, calcular la cantidad a pagar
  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  // Calcula el total del platillo por su cantidad
  const calcularTotal = () => {
    const totalPagar = precio * cantidad;
    guardarTotal(totalPagar);
  };

  // Decrementa en uno
  const decrementarUno = () => {
    if (cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1;
      guardarCantidad(nuevaCantidad);
    }
  };

  // incrementa en uno la cantidad
  const incrementarUno = () => {
    const nuevaCantidad = parseInt(cantidad) + 1;
    guardarCantidad(nuevaCantidad);
  };

  // Confirma si la orden es correcta
  const confirmarOrden = () => {
    Alert.alert(
      '¿Deseas confirmar el pedido?',
      'despues de confirma no se podrá modificar el pedido',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            // Almacenar el pedido al pedido principal
            const pedido = {
              ...platillo,
              cantidad,
              total,
            };

            // console.log(pedido);
            guardarPedido(pedido);

            // Navegar hacia el Resumen
            navigation.navigate('ResumenPedido');
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <View>
      <View>
        <View>
          <Text style={globalStyles.titulo}>Cantidad</Text>
          <View style={styles.container}>
            <TouchableOpacity
              style={[
                {height: 80, justifyContent: 'center'},
                styles.btns,
                styles.btns2,
              ]}
              onPress={() => decrementarUno()}>
              <View>
                <Text style={{fontSize: 40, color: '#fff'}}> -</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.btns}>
              <TextInput
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  width: 70,
                }}
                value={cantidad.toString()}
                keyboardType="numeric"
                onChangeText={(cantidad) => guardarCantidad(cantidad)}
              />
            </View>
            <TouchableOpacity
              style={[
                {height: 80, justifyContent: 'center'},
                styles.btns,
                styles.btns2,
              ]}
              onPress={() => incrementarUno()}>
              <View>
                <Text style={{fontSize: 40, color: '#fff'}}> +</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={globalStyles.cantidad}>Subtotal: $ {total} </Text>
        </View>
      </View>

      <View>
        <View>
          <TouchableOpacity
            style={globalStyles.boton}
            onPress={() => confirmarOrden()}>
            <Text style={globalStyles.botonTexto}>Agregar al Pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  btns: {
    // borderWidth: 1,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  btns2: {
    backgroundColor: '#000',
    borderRadius: 5,
  },
});
export default FormularioPlantillo;

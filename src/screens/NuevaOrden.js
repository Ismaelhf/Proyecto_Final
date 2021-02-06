import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const NuevaOrden = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.contenedor}>
      <View style={[globalStyles.contenido, styles.contenido]}>
        <TouchableOpacity
          style={globalStyles.boton}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={globalStyles.botonTexto}>Nuevo Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
export default NuevaOrden;

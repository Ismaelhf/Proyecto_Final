import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const NuevaOrden = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.contenedor}>
      <ImageBackground
        source={{
          uri:
            'https://www.enter.co/wp-content/uploads/2017/02/menu-restaurant-vintage-tableFINAL-768x432.jpg',
        }}
        style={styles.img}>
        <View style={[globalStyles.contenido, styles.contenido]}>
          <TouchableOpacity
            style={globalStyles.boton}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={globalStyles.botonTexto}>Pedido en Salon</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  img: {
    // width: '100%',
    // height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
export default NuevaOrden;

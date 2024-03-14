import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {StackParamList} from '../types';
import {AirbnbRating} from '@rneui/themed';

type NavigationProps = NativeStackScreenProps<StackParamList, 'ProductsPage'>;

type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type props = NavigationProps & ProductProps;

const Product = (props: props) => {
  const {navigation} = props as NavigationProps;
  const {id, title, price, description, image} = props as ProductProps;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetails', {productId: id});
      }}
      style={styles.product}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <Image
          src={image}
          style={{
            borderRadius: 10,
            height: 145,
            width: 125,
            resizeMode: 'stretch',
          }}
        />
        <View style={{width: 250, flexShrink: 1}}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: 'black',
              fontSize: 18,
              flex: 1,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 10,
            }}>
            {description}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: 'black',
              fontSize: 16,
            }}>{`$${price}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 150,
    width: '95%',
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Product;

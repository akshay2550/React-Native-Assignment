import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ToastAndroid, Dimensions} from 'react-native';
import Product from '../components/Product';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductResponse, StackParamList} from '../types';
import apiUrl from '../services/api';
import CustomProductsSkeleton from '../components/CustomProductsSkeleton';

type Props = NativeStackScreenProps<StackParamList, 'ProductsPage'>;

const ProductsPageScreen = ({navigation, route}: Props) => {
  const [products, setProducts] = useState<ProductResponse[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await apiUrl.get('/products');

      if (res.data) {
        const products = res.data.products;
        setLoading(false);
        setProducts(products);
      } else {
        ToastAndroid.show(
          'Something Went Wrong, Please Try Again',
          ToastAndroid.LONG,
        );
      }
    } catch (err) {
      ToastAndroid.show(getErrorMessage(err), ToastAndroid.LONG);
    }
  };

  return (
    <View style={{padding: 5}}>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 24,
          color: 'black',
        }}>
        Products Page
      </Text>
      {loading ? (
        <View>
          {[1, 2, 3, 4].map(item => (
            <CustomProductsSkeleton key={item} />
          ))}
        </View>
      ) : (
        <View style={{paddingTop: 20}}>
          <FlatList
            data={products}
            contentContainerStyle={{
              paddingBottom: 70,
            }}
            renderItem={({item}) => (
              <Product
                navigation={navigation}
                route={route}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.thumbnail}
                price={item.price}
              />
            )}
            keyExtractor={item => String(item.id)}
          />
        </View>
      )}
    </View>
  );
};

export default ProductsPageScreen;

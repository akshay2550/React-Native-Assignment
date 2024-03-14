import {
  Dimensions,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductResponse, StackParamList} from '../types';
import CustomSingleProductsSkeleton from '../components/CustomSingleProductSkeleton';
import Icon from 'react-native-vector-icons/Feather';
import {useEffect, useState} from 'react';
import apiUrl from '../services/api';

type Props = NativeStackScreenProps<StackParamList, 'ProductDetails'>;

const ProductDetailsScreen = ({navigation, route}: Props) => {
  const productId = route.params.productId;

  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductResponse>();

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  useEffect(() => {
    singleProduct();
  }, [productId]);

  const singleProduct = async () => {
    setLoading(true);
    try {
      const res = await apiUrl.get(`/products/${productId}`);

      if (res.data) {
        const product = res.data;
        console.log(product);
        setLoading(false);
        setProduct(product);
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
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" size={35} />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 24,
            color: 'black',
          }}>
          Product Details
        </Text>
      </View>
      {loading ? (
        <CustomSingleProductsSkeleton />
      ) : (
        <View style={{width: '90%', alignSelf: 'center', paddingVertical: 50}}>
          <Image
            source={{uri: product?.thumbnail}}
            style={{
              height: 200,
              width: '100%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 32,
              color: 'black',
            }}>
            {product?.title}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: 'black',
            }}>
            {product?.description}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 24,
              color: 'black',
            }}>{`Price: $${product?.price}`}</Text>
        </View>
      )}
    </View>
  );
};

export default ProductDetailsScreen;

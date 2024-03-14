import {Skeleton} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';

const CustomSingleProductsSkeleton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 50,
        width: '100%',
      }}>
      <Skeleton circle width={100} height={100} />
      <View style={{gap: 20, marginTop: 50}}>
        <Skeleton width={300} height={20} />
        <Skeleton width={300} height={20} />
        <Skeleton width={300} height={20} />
        <Skeleton width={300} height={20} />
      </View>
    </View>
  );
};

export default CustomSingleProductsSkeleton;

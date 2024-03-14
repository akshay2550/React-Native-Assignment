import {Skeleton} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';

const CustomProductsSkeleton = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 30,
        paddingTop: 20,
      }}>
      <Skeleton circle width={100} height={100} />
      <View style={{gap: 5}}>
        <Skeleton width={200} height={20} />
        <Skeleton width={200} height={20} />
        <Skeleton width={200} height={20} />
        <Skeleton width={200} height={20} />
      </View>
    </View>
  );
};

export default CustomProductsSkeleton;

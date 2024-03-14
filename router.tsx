import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsPageScreen from './screens/ProductsPageScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import {StackParamList} from './types';

const Stack = createNativeStackNavigator<StackParamList>();

let StackNav = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ProductsPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductsPage" component={ProductsPageScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNav;

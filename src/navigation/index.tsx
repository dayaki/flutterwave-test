import React, { useContext } from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import NewList from '../screens/NewList';
import { AppContext } from '../store';
import { ProductProps } from '../common';

type RootStackParamList = {
  login: undefined;
  dashboard: undefined;
  new_product: { product: ProductProps } | undefined;
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'new_product'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  const {
    state: { user },
  } = useContext(AppContext);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="dashboard" component={Dashboard} />
          <Stack.Screen name="new_product" component={NewList} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;

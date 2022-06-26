import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AppStateProps,
  ContextActionProps,
  ContextModelProps,
  ProductProps,
  UserProps,
} from '../common';

const initialState: AppStateProps = {
  products: [],
  user: undefined,
};

type CountProviderProps = { children: React.ReactNode };

export const saveUser = (user: UserProps): ContextActionProps => ({
  type: 'save_user',
  payload: user,
});

export const addProduct = (product: ProductProps): ContextActionProps => ({
  type: 'add_product',
  payload: product,
});

export const updateProduct = (product: ProductProps): ContextActionProps => ({
  type: 'update_product',
  payload: product,
});

export const deleteProduct = (product: ProductProps): ContextActionProps => ({
  type: 'delete_product',
  payload: product,
});

export const userLogout = (): ContextActionProps => ({
  type: 'logout',
});

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@store');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // handle error
  }
};

const storeReducer = (
  state: AppStateProps,
  action: ContextActionProps,
): AppStateProps => {
  switch (action.type) {
    case 'hydrate':
      return action.payload;
    case 'save_user':
      return {
        ...state,
        user: action.payload,
      };
    case 'add_product':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'update_product': {
      const tempProduct = [...state.products];
      const tempIndex = tempProduct.findIndex(
        elem => elem.slug === action.payload.slug,
      );
      console.log('tempProduct[tempIndex]', tempProduct[tempIndex]);
      tempProduct[tempIndex] = action.payload;
      return {
        ...state,
        products: tempProduct,
      };
    }
    case 'delete_product':
      return {
        ...state,
        products: state.products.filter(
          item => item.slug !== action.payload.slug,
        ),
      };
    case 'logout':
      return initialState;
    default:
      return state;
  }
};

export const AppContext = createContext({} as ContextModelProps);

export const Provider = ({ children }: CountProviderProps) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Load initial state
  useEffect(() => {
    async function rehydrate() {
      const storedState = await getData();
      if (storedState) {
        dispatch({ type: 'hydrate', payload: storedState });
      }
    }

    rehydrate();
  }, []);

  useEffect(() => {
    if (state) {
      AsyncStorage.setItem('@store', JSON.stringify(state));
    }
  }, [state]);

  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

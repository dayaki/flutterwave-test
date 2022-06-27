import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from 'react-hook-form';
import {
  BackButton,
  Button,
  FormInput,
  PageTitleText,
  ProductProps,
} from '../common';
import { loginStyles as styles } from './styles';
import { addProduct, AppContext, deleteProduct, updateProduct } from '../store';
import { NavigationProps } from '../navigation';

const NewList = ({ navigation, route }: NavigationProps) => {
  const product = route.params?.product;
  const { dispatch } = useContext(AppContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product ? product.name : '',
      stock: product ? product.stock : '',
      price: product ? product.price : '',
      desc: product ? product.desc : '',
    },
  });

  const onDelete = () => {
    Alert.alert('Delete Product?', 'Sure you want to delete this product.', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          dispatch(deleteProduct(product));
          navigation.goBack();
        },
      },
    ]);
  };

  const onSubmit = ({ name, price, stock, desc }: ProductProps) => {
    const payload = {
      name,
      price,
      stock,
      desc,
      slug: product
        ? product.slug
        : name.toLocaleLowerCase().split(' ').join('-'),
    };
    dispatch(product ? updateProduct(payload) : addProduct(payload));
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView
      style={[styles.container, styles.paddedContainer]}
      contentContainerStyle={styles.wrapper}>
      <BackButton onPress={() => navigation.goBack()} />
      <PageTitleText text="Add New Product" />
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              placeholder="Product name"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              hasError={errors.name ? true : false}
              errorMessage="Product name is required"
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: 'Total stock is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              placeholder="Total stock"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              keyboardType="phone-pad"
              hasError={errors.stock ? true : false}
              errorMessage={errors.stock?.message}
            />
          )}
          name="stock"
        />
        <Controller
          control={control}
          rules={{
            required: 'Price is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              placeholder="Price"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              keyboardType="phone-pad"
              hasError={errors.price ? true : false}
              errorMessage={errors.price?.message}
            />
          )}
          name="price"
        />
        <Controller
          control={control}
          rules={{
            required: 'Description is required',
            minLength: {
              value: 3,
              message: 'Product description should be at least 3 digits',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              textarea
              placeholder="Description"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              hasError={errors.desc ? true : false}
              errorMessage={errors.desc?.message}
            />
          )}
          name="desc"
        />
        {product ? (
          <View style={styles.buttons}>
            <Button
              text="Update Product"
              buttonStyle={styles.btn}
              onPress={handleSubmit(onSubmit)}
            />
            <Button
              transparent
              text="Delete Product"
              buttonStyle={styles.btn}
              onPress={onDelete}
              testID="delete-btn"
            />
          </View>
        ) : (
          <Button
            text="Add New Product"
            buttonStyle={styles.button}
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default NewList;

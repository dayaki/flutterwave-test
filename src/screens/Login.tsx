import React, { useState, useContext } from 'react';
import { Alert, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, FormInput, PageTitleText } from '../common';
import { AppContext, saveUser } from '../store';
import { loginStyles as styles } from './styles';

const Login = () => {
  const { dispatch } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const regTest = /\S+@\S+\.\S+/;
    if (!regTest.test(email)) {
      Alert.alert('Please enter a valid email.');
      return;
    }

    if (!password) {
      Alert.alert('Password is required.');
      return;
    }
    const payload = {
      email,
      password,
    };
    dispatch(saveUser(payload));
  };

  return (
    <>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.wrapper}>
        <PageTitleText text="Hi Dayo," />
        <PageTitleText text="Welcome back" />
        <View style={[styles.form, { marginTop: 50 }]}>
          <FormInput
            placeholder="Email address"
            value={email}
            onChange={(val: string) => setEmail(val.toLowerCase())}
            keyboardType="email-address"
          />
          <FormInput
            placeholder="Password"
            value={password}
            onChange={(val: string) => setPassword(val)}
            isPassword
          />
          <Button
            text="Log in"
            buttonStyle={styles.button}
            onPress={handleLogin}
          />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Login;

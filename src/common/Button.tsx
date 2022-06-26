import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { BackArrow } from '../../assets/icons';
import { Black, Brand } from './Colors';
import { useNavigation } from '@react-navigation/native';

interface ButtonProps {
  text: string;
  buttonStyle?: object;
  textStyle?: object;
  transparent?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.backBtn}
      onPress={() => navigation.goBack()}>
      <BackArrow />
    </TouchableOpacity>
  );
};

export const Button = ({
  text,
  buttonStyle,
  textStyle,
  transparent,
  isLoading,
  onPress,
}: ButtonProps) => (
  <TouchableOpacity
    activeOpacity={isLoading ? 1 : 0.7}
    onPress={isLoading ? undefined : onPress}
    style={[
      styles.button,
      transparent && styles.transparentButton,
      buttonStyle,
    ]}>
    {isLoading ? (
      <ActivityIndicator size="small" color={Black} />
    ) : (
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backBtn: {
    paddingHorizontal: 5,
    paddingVertical: 6,
    marginBottom: 30,
    alignSelf: 'flex-start',
    marginLeft: -10,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: Brand,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderColor: Black,
    borderWidth: 0.5,
  },
  buttonText: {
    color: Black,
    fontFamily: 'NotoSans-Medium',
    // fontSize: 16,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
});

import React, { useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ErrorIcon, EyeCloseIcon, EyeIcon } from '../../assets/icons';
import {
  Black,
  InputBackground,
  InputErrorBackground,
  InputText,
  Red,
} from './Colors';
import { MediumText } from './Text';

interface InputProps {
  placeholder: string;
  value: string;
  isPassword?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  keyboardType?: KeyboardTypeOptions;
  inputStyle?: object;
  textarea?: boolean;
  onChange: (val: string) => void;
  onBlur?: (val: string) => void;
}

export const FormInput = ({
  placeholder,
  value,
  onChange,
  onBlur,
  isPassword,
  keyboardType,
  inputStyle,
  hasError,
  errorMessage,
  textarea,
}: InputProps) => {
  const [password, setPassword] = useState(isPassword);
  return (
    <>
      <View
        style={[
          styles.inputWrapper,
          inputStyle,
          hasError && styles.errorWrapper,
          textarea && { height: 152 },
        ]}>
        <TextInput
          style={[styles.textInput, textarea && { height: 152, width: '94%' }]}
          placeholder={placeholder}
          value={value}
          multiline={textarea}
          textAlignVertical="top"
          numberOfLines={10}
          keyboardType={keyboardType || 'default'}
          onChangeText={onChange}
          onBlur={onBlur || undefined}
          secureTextEntry={password}
          placeholderTextColor={InputText}
        />
        {isPassword && !hasError && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.inputBtn}
            onPress={() => setPassword(!password)}>
            {password ? <EyeIcon /> : <EyeCloseIcon />}
          </TouchableOpacity>
        )}
        {hasError && (
          <View style={styles.errorIcon}>
            <ErrorIcon />
          </View>
        )}
      </View>
      {hasError && <MediumText text={errorMessage} style={styles.errorText} />}
    </>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    height: 72,
    backgroundColor: InputBackground,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  errorWrapper: {
    borderColor: Red,
    borderWidth: 1,
    backgroundColor: InputErrorBackground,
  },
  textInput: {
    width: '100%',
    height: 72,
    paddingLeft: 30,
    fontFamily: 'NotoSans-Regular',
    fontSize: 16,
    lineHeight: 21,
    color: Black,
  },
  errorText: {
    color: Red,
    marginBottom: 30,
  },
  inputBtn: {
    position: 'absolute',
    right: 30,
    top: 24,
  },
  errorIcon: {
    position: 'absolute',
    right: 30,
    top: 20,
  },
});

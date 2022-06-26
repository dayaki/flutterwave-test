import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { LogoutIcon } from '../../assets/icons';
import { Gray } from './Colors';
import { SectionText } from './Text';
import { AppContext, userLogout } from '../store';

export const Header = ({ title }: { title: string }) => {
  const { dispatch } = useContext(AppContext);

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <View style={styles.header}>
      <SectionText text={title} />
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.iconBtn}
          onPress={logout}>
          <LogoutIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 56,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 30,
    borderBottomColor: Gray,
    borderBottomWidth: 0.4,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

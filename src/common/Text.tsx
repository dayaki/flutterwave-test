import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Black } from './Colors';

interface TextProps {
  text: string;
  style?: object;
}

export const PageTitleText = ({ text, style }: TextProps) => (
  <Text style={[styles.pageTitle, style]}>{text}</Text>
);

export const RegularText = ({ text, style }: TextProps) => (
  <Text style={[styles.regularText, style]}>{text}</Text>
);

export const MediumText = ({ text, style }: TextProps) => (
  <Text style={[styles.mediumText, style]}>{text}</Text>
);

export const SectionText = ({ text, style }: TextProps) => (
  <Text style={[styles.sectionText, style]}>{text}</Text>
);

const styles = StyleSheet.create({
  pageTitle: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 24,
    lineHeight: 31,
    color: Black,
  },
  regularText: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: Black,
    flexWrap: 'wrap',
  },
  mediumText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 12,
    lineHeight: 18,
  },
  sectionText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 18,
    lineHeight: 23.4,
  },
});

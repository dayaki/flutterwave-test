import { StyleSheet } from 'react-native';
import {
  Black,
  Gray,
  InputBackground,
  InputText,
  PageBackground,
} from '../common';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 30,
    backgroundColor: PageBackground,
  },
  paddedContainer: {
    paddingTop: 50,
  },
  wrapper: {
    flex: 1,
  },
  form: {
    marginTop: 30,
    flex: 1,
  },
  transparentBtn: {
    backgroundColor: 'transparent',
    borderColor: Black,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  google: {
    width: 24,
    height: 24,
    marginRight: 22,
  },
  transparentBtnText: {
    fontSize: 16,
  },
  button: {
    marginTop: 40,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  btn: {
    width: '48%',
  },
});

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PageBackground,
  },
  wrapper: {
    flex: 1,
    backgroundColor: PageBackground,
    paddingHorizontal: 30,
  },
  padding: {
    paddingHorizontal: 30,
  },
  nothing: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  content: {
    paddingTop: 25,
    marginTop: 5,
  },
  messageGroup: {},
  messageTime: {
    paddingVertical: 13,
    paddingHorizontal: 21,
    borderColor: Gray,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 30,
  },
  footer: {
    width: '100%',
    height: 100,
    paddingHorizontal: 30,
    marginBottom: 36,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: InputBackground,
    width: '70%',
    height: 93,
    borderRadius: 20,
    marginRight: 10,
  },
  textInput: {
    width: '100%',
    height: 93,
    paddingLeft: 20,
    color: InputText,
    fontFamily: 'NotoSans-Regular',
    fontSize: 14,
  },
  sendBtn: {
    position: 'absolute',
    right: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 20,
    marginLeft: 0,
  },
  listTitle: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: Black,
    marginBottom: 5,
  },
  list: {
    borderColor: Gray,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  addBtn: {
    width: '40%',
    height: 40,
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});

import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';

test('Login screen show render as expected', () => {
  const login = renderer.create(<Login />).toJSON();
  expect(login).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import NewList from '../NewList';

test('that new product screen renders correctly', () => {
  const newList = renderer
    .create(<NewList route={{ key: 'new_product', name: 'new_product' }} />)
    .toJSON();
  expect(newList).toMatchSnapshot();
});

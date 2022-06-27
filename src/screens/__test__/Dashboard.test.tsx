import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../Dashboard';

test('that dashboard renders correctly', () => {
  const dashboard = renderer
    .create(<Dashboard route={{ key: 'new_product', name: 'new_product' }} />)
    .toJSON();
  expect(dashboard).toMatchSnapshot();
});

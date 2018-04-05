import renderer from 'react-test-renderer';
import React from 'react';
import Dropdown from '../src/App/Dropdown';

test('element Dropdown renders correctly', () => {
  const tree = renderer.create(<Dropdown />).toJSON();
  expect(tree).toMatchSnapshot();
});

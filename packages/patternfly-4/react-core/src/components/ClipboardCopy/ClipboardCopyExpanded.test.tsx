import React from 'react';
import { shallow } from 'enzyme';
import { ClipboardCopyExpanded } from './ClipboardCopyExpanded';

const props = {
  className: 'class-1',
  id: 'id-1'
};

test('expanded content render', () => {
  const view = shallow(<ClipboardCopyExpanded {...props}>This is my text</ClipboardCopyExpanded>);
  expect(view).toMatchSnapshot();
});

import * as React from 'react';
import { NavigationBar } from '../NavigationBar';
import { mount } from 'enzyme';

describe('NavigationBar', () => {
  it('should render component', () => {
    const MountedNavigationBar = mount(
      <NavigationBar />,
    );
    const expected = MountedNavigationBar.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});

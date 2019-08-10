import * as React from 'react';
import { DashboardPage } from '../DashboardPage';
import { mount } from 'enzyme';

describe('DashboardPage', () => {
  it('should render component', () => {
    const MountedDashboardPage = mount(
      <DashboardPage />,
    );
    const expected = MountedDashboardPage.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});

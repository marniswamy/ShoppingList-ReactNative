import * as React from 'react';
import { MarketsList } from '../MarketsList';
import { mount } from 'enzyme';

describe('MarketsList', () => {
  it('should render component', () => {
    const MountedMarketsList = mount(
      <MarketsList />,
    );
    const expected = MountedMarketsList.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});

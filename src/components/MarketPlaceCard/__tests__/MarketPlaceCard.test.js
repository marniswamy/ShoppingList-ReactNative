import * as React from 'react';
import { MarketPlaceCard } from '../MarketPlaceCard';
import { mount } from 'enzyme';

describe('MarketPlaceCard', () => {
  it('should render component', () => {
    const MountedMarketPlaceCard = mount(
      <MarketPlaceCard />,
    );
    const expected = MountedMarketPlaceCard.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});

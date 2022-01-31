import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App';

describe("App Component Test", () => {
  let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    component = shallow(<App />)
  })
  it('should renders App component', () => {
    expect(component.find('.App').length).toBe(1);
  });
  it('should renders learn react link', () => {
    expect(component.find('Timer').length).toBe(1);
  });
  it('should renders bg_div class', () => {
    expect(component.find('.bg_div').length).toBe(1);
  });

})


import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import TimerClock from "./timerclock";


describe("Testing Timer Clock Component", () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        component = shallow(<TimerClock second={0} minute={25} selectMin={0} selectSec={0} isReset={true} />)
    })

    it('Should render Timer Clock element', () => {
        expect(component.find('.timer_clock').length).toBe(1)
    })

    it('Should render Clock Time h1 tag', () => {
        expect(component.find('.clock_time').length).toBe(1)
    })
    it('Should render Clock Time h1 text', () => {
        expect(component.find('.clock_time').text()).toBe('25 : 00')
    })

    it('Should render CircularProgressbarWithChildren Element', () => {
        expect(component.find('CircularProgressbarWithChildren').length).toBe(1)
    })


})
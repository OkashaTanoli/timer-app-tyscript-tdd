import React, { useState } from "react";
import { shallow, mount, ShallowWrapper } from "enzyme";
import Timer from "./timer";



describe('Testing Timer Component', () => {
    let component: any;
    const minMock = jest.fn()
    const secMock = jest.fn()
    beforeEach(() => {
        component = mount(<Timer minChanger={minMock} secChanger={secMock} selectMin={0} selectSec={0} />)
    })

    it('Should render main div', () => {
        expect(component.find('.main_timer')).toHaveLength(1)
    })

    it('Should render h1 tag', () => {
        expect(component.find('.timer_app_head')).toHaveLength(1)
    })

    it('Should render h1 text', () => {
        expect(component.find('.timer_app_head').text()).toBe('Timer App')
    })

    it('Should render extra div text', () => {
        expect(component.find('.extra_div').length).toBe(1)
    })

    it("Should render Timer Clock Component", () => {
        expect(component.find('TimerClock')).toHaveLength(1)
    })

    it("Should render Three Timer Buttons", () => {
        expect(component.find('TimerButton').length).toBe(3)
    })

    it("Should render Ul", () => {
        expect(component.find('.unordered_list').length).toBe(1)
    })

    it("Should render li", () => {
        expect(component.find('.unordered_list').children().length).toBe(7)
    })

    it("Should render instructions div", () => {
        expect(component.find('.instructions_div').length).toBe(1)
    })

    it("Should render timer_app_head_section", () => {
        expect(component.find('.timer_app_head_section').length).toBe(1)
    })

    it("Should render instructions", () => {
        expect(component.find('.instructions').length).toBe(1)
    })

    it("Should Call minChanger Function", () => {
        expect(minMock).toHaveBeenCalledTimes(0)
        component.find('.input1').simulate('change', { target: { value: 0 } })
        expect(minMock).toHaveBeenCalledTimes(1)
        expect(minMock).toHaveBeenCalledWith(0)
    })

    it("Should Call secChanger Function", () => {
        expect(secMock).toHaveBeenCalledTimes(0)
        component.find('.input2').simulate('change', { target: { value: 0 } })
        expect(secMock).toHaveBeenCalledTimes(1)
        expect(secMock).toHaveBeenCalledWith(0)
    })

    it('Should Test use_State Hook of Instruction ', () => {
        component.find('.instructions').simulate('click')
        expect(component.find('#show_instructions_div')).toHaveLength(1)
        component.find('ImCancelCircle').simulate('click')
        expect(component.find('#hide_instructions_div')).toHaveLength(1)
    })

    it("Should Test Set Timer Function", () => {
        component.find('.set_timer_btn').simulate('click')
        expect(component.find('.input1').props().value).toBe(0)
        expect(component.find('.input2').props().value).toBe(0)
    })

    it('Should Test IsReset useState', () => {
        component.find('.timer_btns_div').childAt(0).simulate('click')
        expect(component.find('.input1').props().disabled).toEqual(true)
        expect(component.find('.input2').props().disabled).toEqual(true)
    })

})

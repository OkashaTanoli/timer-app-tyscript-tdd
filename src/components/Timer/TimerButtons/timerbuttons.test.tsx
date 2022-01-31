import { shallow, ShallowWrapper } from "enzyme";
import TimerButton from './timerbuttons'

describe('TimerButton Test ', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    let mockFunc = jest.fn()
    beforeEach(() => {
        component = shallow(<TimerButton text='start' func={mockFunc} />)
    })

    it('Should render Timer Button ', () => {
        expect(component.find('.timer_button')).toHaveLength(1)
    })

    it('Should Run function on onclick event ', () => {
        expect(mockFunc).toHaveBeenCalledTimes(0)
        component.find('.timer_button').simulate('click')
        expect(mockFunc).toHaveBeenCalledTimes(1)
        component.find('.timer_button').simulate('click')
        expect(mockFunc).toHaveBeenCalledTimes(2)
    })
    it('Should test play button icon', () => {
        expect(component.find('BsPlayFill')).toHaveLength(1)
    })

})
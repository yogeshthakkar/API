import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { cleanup } from '@testing-library/react';
import 'jest-extended';

import UserInsert from './UserInsert';

configure({ adapter: new Adapter() });

describe('User Insert', () => {
    beforeEach(cleanup);
    //test case 1
    test('Check that it loads or not', () => {
        const wrapper = shallow(<UserInsert />)
        expect(wrapper.exists()).toBe(true);
    });
    //test case 2
    test('for checking user input(firstname)', () => {
        const wrapper = mount(<UserInsert />)
        wrapper.find('input[type="text"]').at(0).simulate("change", {
            target: {
                name: 'firstname',
                value: 'firstname'
            }
        });
        expect(wrapper.find('input[type="text"]').at(0).prop('value')).toStrictEqual('firstname');
    });
    //test case 3
    test('for checking user input(firstname) should be character', () => {
        const wrapper = mount(<UserInsert />)
        wrapper.find('input[type="text"]').at(0).simulate("change", {
            target: {
                name: 'firstname',
                value: 12345676543
            }
        });
        expect(wrapper.find('input[type="text"]').at(0).prop('value')).toBeString();
    });
    //test case 4
    test('for checking user input(lastname)', () => {
        const wrapper = mount(<UserInsert />)
        wrapper.find('input[type="text"]').at(2).simulate("change", {
            target: {
                name: 'lastname',
                value: 'lastname'
            }
        });
        expect(wrapper.find('input[type="text"]').at(2).prop('value')).toStrictEqual('lastname');
    });
    //test case 5
    test('for checking user input(email)', () => {
        const wrapper = mount(<UserInsert />)
        wrapper.find('input[type="text"]').at(3).simulate("change", {
            target: {
                name: "email",
                value: 'test@gmail.com'
            }
        });
        expect(wrapper.find('input[type="text"]').at(3).prop('value'))
            .toStrictEqual('test@gmail.com');
    });
    //test case 6
    test('for checking user input(mobile)', () => {
        const wrapper = mount(<UserInsert />)
        wrapper.find('input[type="text"]').at(4).simulate("change", {
            target: {
                name: "mobile",
                value: 1234567890
            }
        });
        expect(wrapper.find('input[type="text"]').at(4).prop('value'))
            .toStrictEqual(1234567890);
    });
    //test case 7
    test('for checking user input(mobile) should be number', () => {
        const wrapper = mount(<UserInsert />)
        wrapper.find('input[type="text"]').at(4).simulate("change", {
            target: {
                name: "mobile",
                value: '1234567890'
            }
        });
        expect(wrapper.find('input[type="text"]').at(4).prop('value')).toBeNumber();
    });
    //test case 8
    test('for checking user input(postalCode)', () => {
        const wrapper = mount(<UserInsert />)
        wrapper.find('input[type="text"]').at(8).simulate("change", {
            target: {
                name: "postalcode",
                value: 123456
            }
        });
        expect(wrapper.find('input[type="text"]').at(8).prop('value'))
            .toEqual(123456);
    });
    //test case 9
    test('for checking user input(postalCode) sholud be number', () => {
        const wrapper = mount(<UserInsert />)
        wrapper.find('input[type="text"]').at(8).simulate("change", {
            target: {
                name: "postalcode",
                value: '123456'
            }
        });
        expect(wrapper.find('input[type="text"]').at(8).prop('value')).toBeNumber();
    });

});

describe('Test Button component', () => {
    it('Test click event', () => {
        const btnCallBack = jest.fn();
        const button = shallow((<button name='submit' onClick={btnCallBack}>Insert User</button>));
        button.find('button').simulate('click');
        expect(btnCallBack.mock.calls.length).toEqual(1);
    });
});
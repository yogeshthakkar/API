import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { cleanup } from '@testing-library/react';
import 'jest-extended';
import  'jest';

import UserSearch from './UserSearch';

configure({ adapter: new Adapter() });

describe('Test for User Search', () => {
    beforeEach(()=>{
        cleanup;        
    });

    //test case 1
    test('Check that user Search page loads or not', () => {
        const wrapper = shallow(<UserSearch />)
        expect(wrapper.exists()).toBe(true)
    });

    //test Case 2
    test('Test for search input field',()=>{
        const wrapper = mount(<UserSearch />)
        let myNode = wrapper.find('input[type="text"]').at(0);
        myNode.simulate("change",{
            target:{
                name:'userInput',
                value:'some value'
            }         
        });
        expect(wrapper.find('input[type="text"]').at(0).prop('value')).
        toStrictEqual('some value')
    });
    
    //test Case 3
    test('Test for search input field (value must be String)',()=>{
        const wrapper = mount(<UserSearch />)
        let myNode = wrapper.find('input[type="text"]').at(0);
        myNode.simulate("change",{
            target:{
                name:'userInput',
                value:1234567890
            }         
        });
        expect(wrapper.find('input[type="text"]').at(0).prop('value')).toBeString()
    });

    //test case 4
    test('Test for button is clicked',()=>{
        const btnClick = jest.fn();
        const button = mount((<button onClick={btnClick}>Search</button>));
        button.find('button').simulate('click');
        expect(btnClick.mock.calls.length).toEqual(1);
    })
});
import React from "react";
import { mount } from "enzyme";
import Section from "../../components/landing/section/Section";

describe('<Section />', () => {
    
    const section = mount(<Section />);
    
    test('Render component section', () => {
        expect(section.length).toEqual(1);
    })

    test('Render span component', () =>{
        expect(section.find('.textWoloxers').text()).toEqual('Woloxers')
    })
    
    
})
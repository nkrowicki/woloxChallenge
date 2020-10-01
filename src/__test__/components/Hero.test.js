import React from "react";
import { mount } from "enzyme";
import Hero from "../../components/landing/hero/Hero";

describe('<Hero />', () => {
    
    const hero = mount(<Hero />);
    
    test('Render component hero', () => {
        expect(hero.length).toEqual(1);
    })

    test('Render h1 component', () =>{
        expect(hero.find('.spanText').text()).toEqual('Wolox')
    })
    
    
})
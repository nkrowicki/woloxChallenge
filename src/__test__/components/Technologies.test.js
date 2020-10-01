import React from "react";
import { mount } from "enzyme";
import Technologies from "../../components/landing/technologies/Technologies";

describe('<Technologies />', () => {
    
    jest.mock('react-i18next', () => ({
        useTranslation: () => ({t: key => key})
      })); //To getting rid of jest warning
      
    const technologies = mount(<Technologies />);
    
    test('Render component technologies', () => {
        expect(technologies.length).toEqual(1);
    })

    test('Render h2 component', () =>{
        expect(technologies.find('h2').text()).toEqual('technologies.title')
    })
    
    
})
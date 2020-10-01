import React from "react";
import { mount } from "enzyme";
import Requeriments from "../../components/landing/requeriments/Requeriments";

describe('<Requeriments />', () => {
    
    const requeriments = mount(<Requeriments />);
    
    test('Render component requeriments', () => {
        expect(requeriments.length).toEqual(1);
    })

    test('Render h1 component', () =>{
        expect(requeriments.find('.requerimentsText').text()).toEqual('Requerimientos')
    })
    
    
})
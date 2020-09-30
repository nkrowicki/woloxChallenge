import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/landing/footer/Footer";

describe('<Footer />', () => {
    
    const footer = mount(<Footer />);

    test('Render component footer', () => {
        expect(footer.length).toEqual(1);
    })

    test('Render title component', () =>{
        expect(footer.find('#buttonFooter').text()).toEqual('Conocer más')
    })
    
})
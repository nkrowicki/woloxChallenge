import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/landing/footer/Footer";

describe('<Footer />', () => {
    
    jest.mock('react-i18next', () => ({
        useTranslation: () => ({t: key => key})
      })); //To getting rid of jest warning
      
    const footer = mount(<Footer />);

    test('Render component footer', () => {
        expect(footer.length).toEqual(1);
    })

    test('Render title component', () =>{
        expect(footer.find('#buttonFooter').text()).toEqual('footer.footerButton')
    })
    
})
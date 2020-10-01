import React from "react";
import { mount } from "enzyme";
import Benefit from "../../components/landing/benefits/Benefit";

describe('<Benefit />', () => {
    
    const benefit = mount(<Benefit img={{}} text={'Hi!'} />);

    test('Render component benefit', () => {
        expect(benefit.length).toEqual(1);
    })
    
})
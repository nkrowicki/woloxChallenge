import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock";
import Navbar from "../../components/landing/navbar/Navbar";

describe("<Navbar />", () => {

  jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  })); //To getting rid of jest warning

  const navbar = shallow(
    <ProviderMock>
      <Navbar />
    </ProviderMock>
  );


  test("Render component Navbar", () => {
    expect(navbar.length).toEqual(1);
  });

});

import React from "react";
import { mount } from "enzyme";
import Benefits from "../../components/landing/benefits/Benefits";

describe("<Benefits />", () => {
  jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key) => key }),
  })); //To getting rid of jest warning

  const benefits = mount(<Benefits />);

  test("Render component benefits", () => {
    expect(benefits.length).toEqual(1);
  });

  test("Render h1 component", () => {
    expect(benefits.find(".titleBenefits").text()).toEqual(
      "benefits.titlebenefits.title2"
    );
  });
});

import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  //   test('debe de mostrar el mensaje "hola, Soy Goku"', () => {
  //     const saludo = "hola, soy Goku";
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    const saludo = "hola, soy Goku";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitulo);
  });
});

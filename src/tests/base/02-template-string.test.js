import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe de retornar hola felipe", () => {
    const nombre = "Felipe";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  //   getSaludo debe de retornar Hola Fernando si no hay argumento en el nombre
  test("getSaludo debe retornar Hola Fernando", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Fernando");
  });
});

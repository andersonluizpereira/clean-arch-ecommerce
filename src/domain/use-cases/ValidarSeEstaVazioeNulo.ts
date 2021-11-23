export const ValidarSeEstaVazioeNulo = (cpf: string): boolean => {
  let POSITION = 0;
  return !cpf.split("").every((c) => c === cpf[POSITION]);
}


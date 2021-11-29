export const ValidarSeEstaVazioeNulo = (cpf: string): boolean => {
  return cpf.trim() !== '' && cpf !== null && cpf !== undefined;
}


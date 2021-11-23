export const ValidarPrimeiroDigitoContador = (data: any): number => {
  return data.restoDiviSaoCpf < 2 ? (data.primeirosDigitosDoCpf = 0) : data.NUMERO_CALCULO_CPF - data.restoDiviSaoCpf
}


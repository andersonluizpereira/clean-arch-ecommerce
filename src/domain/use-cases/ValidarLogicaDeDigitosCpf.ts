type DigitosModel = {
    primeiroDigitoCpf: number,
    segundoDigitoCpf: number,
    restoDiviSaoCpf: number
  }
  

export const ValidarLogicaDeDigitosCpf = (cpf: string): DigitosModel => {
    let NUMBER_COUNT = 1;

    let primeiroDigitoCpf = 0, segundoDigitoCpf = 0;
    let restoDiviSaoCpf = 0;
    let digitosCpf;

    for (let tamanhoCpf = NUMBER_COUNT; tamanhoCpf < cpf.length - NUMBER_COUNT; tamanhoCpf++) {
      digitosCpf = parseInt(cpf.substring(tamanhoCpf - NUMBER_COUNT, tamanhoCpf));
      primeiroDigitoCpf = primeiroDigitoCpf + (11 - tamanhoCpf) * digitosCpf;
      segundoDigitoCpf = segundoDigitoCpf + (12 - tamanhoCpf) * digitosCpf;
    }
    return {
      primeiroDigitoCpf,
      segundoDigitoCpf,
      restoDiviSaoCpf
    }
  }
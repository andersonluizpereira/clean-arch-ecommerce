import { ValidarSeEstaVazioeNulo, ValidarTamanhoDaString, 
         RemoverCaracterEspecial, ValidarFormatoCpf, 
         ValidarLogicaDeDigitosCpf, ValidarPrimeiroDigitoContador, 
         ValidarSegundoDigitoContador, CalcularRestoDivisaoSaoCpf } from '@/domain/use-cases'

export default class CPF {
  validarCpf(cpf: string): boolean {
    if (!ValidarSeEstaVazioeNulo(cpf)) return false
    if (!ValidarTamanhoDaString(cpf)) return false
    cpf = RemoverCaracterEspecial(cpf);

    if (!ValidarFormatoCpf(cpf)) return false
      try {
        let NUMERO_CALCULO_CPF = 11;
        let primeirosDigitosDoCpf = 0, segundoDigitosDoCpf = 0;
        let numeroDoDigitoResultoDoCpf;
        let { primeiroDigitoCpf, segundoDigitoCpf, restoDiviSaoCpf } = ValidarLogicaDeDigitosCpf(cpf);

        restoDiviSaoCpf = CalcularRestoDivisaoSaoCpf(primeiroDigitoCpf,NUMERO_CALCULO_CPF);
       
        primeirosDigitosDoCpf = ValidarPrimeiroDigitoContador({
          restoDiviSaoCpf,
          primeirosDigitosDoCpf,
          NUMERO_CALCULO_CPF
        });
        segundoDigitoCpf = ValidarSegundoDigitoContador(primeirosDigitosDoCpf, segundoDigitoCpf)
        restoDiviSaoCpf = CalcularRestoDivisaoSaoCpf(segundoDigitoCpf, NUMERO_CALCULO_CPF);
        if (restoDiviSaoCpf < 2) segundoDigitosDoCpf = 0;
        else segundoDigitosDoCpf = NUMERO_CALCULO_CPF - restoDiviSaoCpf;

        let numeroDigitoVerificador = cpf.substring(cpf.length - 2, cpf.length);
        numeroDoDigitoResultoDoCpf = "" + primeirosDigitosDoCpf + "" + segundoDigitosDoCpf;
        return numeroDigitoVerificador == numeroDoDigitoResultoDoCpf;
      } catch (e) {
        return false;
      }
  }
}
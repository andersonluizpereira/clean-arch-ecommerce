export const ValidarTamanhoDaString = (cpf: string): boolean => {
        let MIN_LENGTH = 11;
        let MAX_LENGTH = 14;
        return cpf.length >= MIN_LENGTH || cpf.length <= MAX_LENGTH
      }


import Validacoes from "@/domain/use-cases/CPF";

describe("ValidarCpf", () => {
    let validacoes: Validacoes;
    beforeEach(() => {
        validacoes = new Validacoes();
    })
    it("Dado um cpf validar se ele está vazio", () => {
      const valido = validacoes.validarCpf('');
      expect(false).toBe(valido);
    });

    it("Dado um cpf verificar se ele é inválido", () => {
      const valido = validacoes.validarCpf("111.111.111-11");
      expect(false).toBe(valido);
    });
    it("Dado um cpf verificar se ele é inválido", () => {
      const valido = validacoes.validarCpf("000.000.000-00");
      expect(false).toBe(valido);
    });

    it("Dado um cpf verificar se ele é inválido", () => {
      const valido = validacoes.validarCpf("123.456.789-99");
      expect(false).toBe(valido);
    });

    it("Dado um cpf verificar se ele é válido", () => {
      const valido = validacoes.validarCpf("935.411.347-80");
      expect(true).toBe(valido);
    });


  });

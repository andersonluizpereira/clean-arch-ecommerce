export const RemoverCaracterEspecial = (cpf: string): string => {
  return cpf.replace(".", "").replace(".", "").replace("-", "").replace(" ", "");
}


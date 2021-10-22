class Masks {
  static nameMask(name) {
    return name.replace(/\b[^\W]{2}([^\W]{2,})[^\W]\b/g, "**$1*");
  }

  static cpfMask(cpf) {
    return cpf
      .replace(/\D+/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  static birthDateMask(birthDate) {
    return birthDate
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\/\d{2})(\d)/, "$1/$2")
      .replace(/(\/\d{4})\d+?$/, "$1");
  }

  static phoneMask(phone) {
    return phone
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  }

  static cepMask(cep) {
    return cep
      .replace(/\D+/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  }
}

export { Masks };

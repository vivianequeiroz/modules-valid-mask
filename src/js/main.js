import { Masks } from "./modules/Masks.js";

const masks = {
  name: Masks.nameMask,
  cpf: Masks.cpfMask,
  birthDate: Masks.birthDateMask,
  phone: Masks.phoneMask,
  cep: Masks.cepMask,
};

document.querySelectorAll("input").forEach(($input) => {
  const fieldToMask = masks[$input.id];

  $input.addEventListener(
    "input",
    (e) => {
      e.target.value = fieldToMask(e.target.value);
    },
    false
  );
});

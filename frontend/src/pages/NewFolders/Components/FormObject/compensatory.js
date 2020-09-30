export const compensatory = {
  part: { label: "Préstation compensatoire", name: "compensatory" },

  fields: [
    {
      label:
        "L'un des deux époux demande-t-il le versement d'une prestation compensatoire ? (la prestation compensatoire a pour objet de compenser l’éventuelle disparité de niveau de vie de l’un des époux à la suite du divorce – les revenus pris en compte pour son calcul sont ceux des époux au jour du divorce)",
      name: "isCompensatory",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
        { label: "ne sait pas", value: "unknow" },
      ],
      fullWidth: true,
    },
    {
      type: "break",
    },
    {
      label: "Si oui pour quel montant (chiffre)",
      type: "textfield",
      name: "compensatoryMountantNumber",
      if: 2,
    },
    {
      label: "Si oui pour quel montant (en toute lettre)",
      type: "textfield",
      name: "compensatoryMountantString",
      if: 3,
    },
    {
      label: "Si oui quel époux en fait la demande ?",
      type: "radioParticipant",
      name: "compensatoryParticipantAsk",
      if: 4,
    },
    {
      label: "Si oui de quel type est elle ?",
      name: "isCompensatoryRente",
      type: "radio",
      radioFields: [
        { label: "Rente", value: "true" },
        { label: "Capital", value: "false" },
      ],
      if: 5,
    },
    {
      label: "Si il s'agit d'une rente pour combien d'année",
      type: "textfield",
      name: "renteDuration",
      if: 1,
    },
    {
      label: "Si il s'agit d'une rente, quel est le montant de la mensualité",
      type: "textfield",
      name: "renteAmount",
      if: 2,
    },
  ],
};

export const debt = {
  part: {
    label: "Dettes ou crédits en cours",
    name: "debt",
  },

  fields: [
    {
      label:
        "Avez-vous des dettes ou crédits en cours ? (Les mentionner même s’ils ont été pris au nom seul de l’un des époux – Ils sont en effet communs par principe si vous êtes mariés sous le régime de la communauté de biens)",
      name: "isDebtsOrCredits",
      type: "radio",
      radioFields: [
        { label: "Oui", value: "true" },
        { label: "Non", value: "false" },
      ],
      fullWidth: true,
    },
    {
      type: "break",
    },
    {
      label:
        "Si oui, auprès de quelle société ou organisme (Etablissement de crédit, banque, particulier, caisse d’allocation) ?",
      type: "text",
      if: 2,
    },
    {
      type: "break",
      if: 3,
    },

    {
      label: "1 )",
      name: "firstSocietyDebts",
      type: "textfield",
      if: 4,
    },

    {
      label: "2 )",
      name: "secondSocietyDebts",
      type: "textfield",
      if: 5,
    },

    {
      label: "3 )",
      name: "thirdSocietyDebts",
      type: "textfield",
      if: 6,
    },

    {
      label: "4 )",
      name: "fourthSocietyDebts",
      type: "textfield",
      if: 7,
    },

    {
      label: "5 )",
      name: "fifthSocietyDebts",
      type: "textfield",
      if: 8,
    },
    {
      type: "break",
      if: 9,
    },

    {
      label: "Quelle est la date de souscription du contrat ?",
      name: "dateStartContract",
      type: "text",
      fullWidth: true,
      if: 10,
    },
    {
      type: "break",
      if: 11,
    },
    {
      label: "1 )",
      name: "firstDateStartContract",
      type: "date",
      if: 12,
    },

    {
      label: "2 )",
      name: "secondDateStartContract",
      type: "date",
      if: 13,
    },

    {
      label: "3 )",
      name: "thirdDateStartContract",
      type: "date",
      if: 14,
    },

    {
      label: "4 )",
      name: "fourthDateStartContract",
      type: "date",
      if: 15,
    },

    {
      label: "5 )",
      name: "fifthDateStartContract",
      type: "date",
      if: 16,
    },
    {
      type: "break",
      if: 17,
    },
    {
      label: "En cas de credit, quel est le montant emprunté ?",

      type: "text",
      if: 18,
    },
    {
      type: "break",
      if: 19,
    },
    {
      label: "1 )",
      name: "firstAmountCredit",
      type: "textfield",
      if: 20,
    },

    {
      label: "2 )",
      name: "secondAmountCredit",
      type: "textfield",
      if: 21,
    },

    {
      label: "3 )",
      name: "thirdAmountCredit",
      type: "textfield",
      if: 22,
    },

    {
      label: "4 )",
      name: "fourthAmountCredit",
      type: "textfield",
      if: 23,
    },

    {
      label: "5 )",
      name: "fifthAmountCredit",
      type: "textfield",
      if: 24,
    },
    {
      type: "break",
      if: 25,
    },
    {
      label: "Quelle est la durée du crédit ?",
      type: "text",
      if: 26,
    },
    {
      type: "break",
      if: 27,
    },
    {
      label: "1 )",
      name: "firstCreditPeriod",
      type: "textfield",
      if: 28,
    },

    {
      label: "2 )",
      name: "secondCreditPeriod",
      type: "textfield",
      if: 29,
    },

    {
      label: "3 )",
      name: "thirdCreditPeriod",
      type: "textfield",
      if: 30,
    },

    {
      label: "4 )",
      name: "fourthCreditPeriod",
      type: "textfield",
      if: 31,
    },

    {
      label: "5 )",
      name: "fifthCreditPeriod",
      type: "textfield",
      if: 32,
    },
    {
      type: "break",
      if: 33,
    },
    {
      label: "Quel est le montant restant à rembourser ?",

      type: "text",
      if: 34,
    },
    {
      type: "break",
      if: 35,
    },
    {
      label: "1 )",
      name: "firstAmountRepaid",
      type: "textfield",
      if: 36,
    },

    {
      label: "2 )",
      name: "secondAmountRepaid",
      type: "textfield",
      if: 37,
    },

    {
      label: "3 )",
      name: "thirdAmountRepaid",
      type: "textfield",
      if: 38,
    },

    {
      label: "4 )",
      name: "fourthAmountRepaid",
      type: "textfield",
      if: 39,
    },

    {
      label: "5 )",
      name: "fifthAmountRepaid",
      type: "textfield",
      if: 40,
    },
    {
      type: "break",
      if: 41,
    },

    {
      label:
        "Avez vous un accord s'agissant de l'époux qui procédera au remboursement du ou des crédits en cours ?",
      name: "isAgreementBetweenAboutCredits",
      type: "radio",
      radioFields: [
        { label: "Oui", value: "true" },
        { label: "Non", value: "false" },
      ],
      fullWidth: true,
      if: 42,
    },
    {
      type: "break",
      if: 43,
    },
    {
      label:
        "Pour chaque crédit (Numeroté de 1 à 5), indiquez quel époux procédera au remboursement",
      type: "text",
      if: 44,
    },
    {
      type: "break",
      if: 45,
    },
    {
      label: "1 )",
      name: "firstCreditParticipantRepaid",
      type: "radio",
      radioFields: [
        { label: "Madame", value: "Madame" },
        { label: "Monsieur", value: "Monsieur" },
        { label: "Les deux", value: "les deux" },
      ],
      if: 46,
    },

    {
      label: "2 )",
      name: "secondCreditParticipantRepaid",
      type: "radio",
      radioFields: [
        { label: "Madame", value: "Madame" },
        { label: "Monsieur", value: "Monsieur" },
        { label: "Les deux", value: "les deux" },
      ],
      if: 47,
    },

    {
      label: "3 )",
      name: "thirdCreditParticipantRepaid",
      type: "radio",
      radioFields: [
        { label: "Madame", value: "madam" },
        { label: "Monsieur", value: "sir" },
        { label: "Les deux", value: "both" },
      ],
      if: 48,
    },

    {
      label: "4 )",
      name: "fourthCreditParticipantRepaid",
      type: "radio",
      radioFields: [
        { label: "Madame", value: "madam" },
        { label: "Monsieur", value: "sir" },
        { label: "Les deux", value: "both" },
      ],
      if: 49,
    },

    {
      label: "5 )",
      name: "fifthCreditParticipantRepaid",
      type: "radio",
      radioFields: [
        { label: "Madame", value: "madam" },
        { label: "Monsieur", value: "sir" },
        { label: "Les deux", value: "both" },
      ],
      if: 50,
    },
    {
      type: "break",
      if: 51,
    },
    {
      label: "Quel est le montant mensuel du remboursement",
      type: "text",
      if: 52,
    },
    {
      type: "break",
      if: 53,
    },

    {
      label: "1 )",
      name: "firstMensualityDebts",
      type: "textfield",
      if: 54,
    },

    {
      label: "2 )",
      name: "secondMensualityDebts",
      type: "textfield",
      if: 55,
    },

    {
      label: "3 )",
      name: "thirdMensualityDebts",
      type: "textfield",
      if: 56,
    },

    {
      label: "4 )",
      name: "fourthMensualityDebts",
      type: "textfield",
      if: 57,
    },

    {
      label: "5 )",
      name: "fifthMensualityDebts",
      type: "textfield",
      if: 58,
    },
    {
      type: "break",
      if: 59,
    },
    {
      label: "Avez-vous des dettes l'un envers l'autre ?",
      name: "debtsBetween",
      type: "radio",
      radioFields: [
        { label: "Oui", value: "true" },
        { label: "Non", value: "false" },
      ],
    },

    {
      label: "Si oui, précisez-en la nature",
      name: "preciseNatureDebtsBetween",
      type: "textfield",
      if: 1,
      ifBreak: true,
    },
    {
      label:
        "NB : en cas de  mariage sous le régime de la communauté – donc en l’absence de contrat de mariage –, les dettes sont communes. Le créancier peut ainsi demander à l’un quelconque des époux le remboursement des sommes impayées.",
      type: "text",
    },
  ],
};

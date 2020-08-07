export const bankAccount = {
  part: {
    label: "Comptes Bancaires",
    name: "bankAccount",
  },

  fields: [
    {
      label: "Avez-vous un compte commun ?",
      name: "isSharedAccount",
      type: "radio",
      radioFields: [
        { label: "Oui", value: "true" },
        { label: "Non", value: "false" },
      ],
    },
    {
      type: "break",
    },
    {
      label: "Si oui, il convient de le cloturer des que possible",
      type: "text",
      if: 2,
    },
    {
      type: "break",
    },
    {
      label:
        "Précisez pour chacun des époux, la liste de vos compte bancaires et autres produits financiers ( Assurance vie, PEL, PEA, livret A etc) :",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: "Epoux 1:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: "Compte n°1:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: " > Désignation de la Banque :",
      name: "bankDesignationFirstParticipantFirstAccount",
      type: "textfield",
    },

    {
      label: " > Type de compte :",
      name: "typeAccountFirstParticipantFirstAccount",
      type: "textfield",
    },

    {
      label: " > N° de compte :",
      name: "accountNumberFirstParticipantFirstAccount",
      type: "textfield",
    },

    {
      label: " Solde présent sur le compte :",
      name: "budgetOnAccountFirstParticipantFirstAccount",
      type: "textfield",
    },

    {
      label: "Compte n°2:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: " > Désignation de la Banque :",
      name: "bankDesignationFirstParticipantSecondAccount",
      type: "textfield",
    },

    {
      label: " > Type de compte :",
      name: "typeAccountFirstParticipantSecondAccount",
      type: "textfield",
    },

    {
      label: " > N° de compte :",
      name: "accountNumberFirstParticipantSecondAccount",
      type: "textfield",
    },

    {
      label: " Solde présent sur le compte :",
      name: "budgetOnAccountFirstParticipantSecondAccount",
      type: "textfield",
    },

    {
      label: "Compte n°3:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: " > Désignation de la Banque :",
      name: "bankDesignationFirstParticipantThirdAccount",
      type: "textfield",
    },

    {
      label: " > Type de compte :",
      name: "typeAccountFirstParticipantThirdAccount",
      type: "textfield",
    },

    {
      label: " > N° de compte :",
      name: "accountNumberFirstParticipantThirdAccount",
      type: "textfield",
    },

    {
      label: " Solde présent sur le compte :",
      name: "budgetOnAccountFirstParticipantThirdAccount",
      type: "textfield",
    },

    {
      label: "Compte n°4:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: " > Désignation de la Banque :",
      name: "bankDesignationFirstParticipantFourthAccount",
      type: "textfield",
    },

    {
      label: " > Type de compte :",
      name: "typeAccountFirstParticipantFourthAccount",
      type: "textfield",
    },

    {
      label: " > N° de compte :",
      name: "accountNumberFirstParticipantFourthAccount",
      type: "textfield",
    },

    {
      label: " Solde présent sur le compte :",
      name: "budgetOnAccountFirstParticipantFourthAccount",
      type: "textfield",
    },

    {
      label: "Epoux 2:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: "Compte n°1:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: " > Désignation de la Banque :",
      name: "bankDesignationSecondParticipantFirstAccount",
      type: "textfield",
    },

    {
      label: " > Type de compte :",
      name: "typeAccountSecondParticipantFirstAccount",
      type: "textfield",
    },

    {
      label: " > N° de compte :",
      name: "accountNumberSecondParticipantFirstAccount",
      type: "textfield",
    },

    {
      label: " Solde présent sur le compte :",
      name: "budgetOnAccountSecondParticipantFirstAccount",
      type: "textfield",
    },

    {
      label: "Compte n°2:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: " > Désignation de la Banque :",
      name: "bankDesignationSecondParticipantSecondAccount",
      type: "textfield",
    },

    {
      label: " > Type de compte :",
      name: "typeAccountSecondParticipantSecondAccount",
      type: "textfield",
    },

    {
      label: " > N° de compte :",
      name: "accountNumberSecondParticipantSecondAccount",
      type: "textfield",
    },

    {
      label: " Solde présent sur le compte :",
      name: "budgetOnAccountSecondParticipantSecondAccount",
      type: "textfield",
    },

    {
      label: "Compte n°3:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: " > Désignation de la Banque :",
      name: "bankDesignationSecondParticipantThirdAccount",
      type: "textfield",
    },

    {
      label: " > Type de compte :",
      name: "typeAccountSecondParticipantThirdAccount",
      type: "textfield",
    },

    {
      label: " > N° de compte :",
      name: "accountNumberSecondParticipantThirdAccount",
      type: "textfield",
    },

    {
      label: " Solde présent sur le compte :",
      name: "budgetOnAccountSecondParticipantThirdAccount",
      type: "textfield",
    },

    {
      label: "Compte n°4:",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: " > Désignation de la Banque :",
      name: "bankDesignationSecondParticipantFourthAccount",
      type: "textfield",
    },

    {
      label: " > Type de compte :",
      name: "typeAccountSecondParticipantFourthAccount",
      type: "textfield",
    },

    {
      label: " > N° de compte :",
      name: "accountNumberSecondParticipantFourthAccount",
      type: "textfield",
    },

    {
      label: " Solde présent sur le compte :",
      name: "budgetOnAccountSecondParticipantFourthAccount",
      type: "textfield",
    },

    {
      label:
        "L'un des époux demande-t-il le partage des comptes personnels de chacun des époux ? (Valable uniquement si absence de mariage)",
      name: "isParticipantAskingPersonnalAcountShare",
      type: "radio",
      radioFields: [
        { label: "Oui", value: "true" },
        { label: "Non", value: "false" },
      ],
      fullWidth: true,
    },
  ],
};

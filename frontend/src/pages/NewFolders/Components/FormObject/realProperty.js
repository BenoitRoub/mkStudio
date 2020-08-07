export const realProperty = {
  part: {
    label: "Biens immobiliers",
    name: "realProperty",
  },

  fields: [
    {
      label: "L'un des époux possède-t-il un ou des biens immobiliers ?",
      name: "isRealProperty",
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
      label: "Epoux 1 :",
      type: "text",
      if: 2,
    },
    {
      type: "break",
      if: 3,
    },
    {
      label:
        "Si oui précisez imperativement leur nature (appartement, maison, parking, commerce, autre), leur adresse, leur date d'acquisition, leur valeur, et leur mode d'acquisition (Achat, donation, héritage etc):",
      type: "text",
      if: 4,
    },
    {
      type: "break",
      if: 5,
    },
    {
      label: "Bien 1 :",
      type: "text",
      if: 6,
    },
    {
      type: "break",
      if: 7,
    },
    {
      label: "Nature",
      name: "natureFirstProprety",
      type: "textfield",
      if: 8,
    },

    {
      label: "Adresse",
      name: "adressFirstProprety",
      type: "textfield",
      if: 9,
    },

    {
      label: "Date d'acquisition",
      name: "dateAcquisitionFirstProprety",
      type: "date",
      if: 10,
    },

    {
      label: "Valeur actuelle",
      name: "valueFirstProprety",
      type: "textfield",
      if: 11,
    },

    {
      label: "Mode d'acquisition",
      name: "acquiringModeFirstProprety",
      type: "textfield",
      if: 12,
    },
    {
      type: "break",
      if: 13,
    },
    {
      label: "Bien 2 :",
      type: "text",
      if: 14,
    },
    {
      type: "break",
      if: 15,
    },
    {
      label: "Nature",
      name: "natureSecondProprety",
      type: "textfield",
      if: 16,
    },

    {
      label: "Adresse",
      name: "adressSecondProprety",
      type: "textfield",
      if: 17,
    },

    {
      label: "Date d'acquisition",
      name: "dateAcquisitionSecondProprety",
      type: "date",
      if: 18,
    },

    {
      label: "Valeur actuelle",
      name: "valueSecondProprety",
      type: "textfield",
      if: 19,
    },

    {
      label: "Mode d'acquisition",
      name: "acquiringModeSecondProprety",
      type: "textfield",
      if: 20,
    },
    {
      type: "break",
      if: 21,
    },
    {
      label: "Bien 3 :",
      type: "text",
      if: 22,
    },
    {
      type: "break",
      if: 23,
    },
    {
      label: "Nature",
      name: "natureThirdProprety",
      type: "textfield",
      if: 24,
    },

    {
      label: "Adresse",
      name: "adressThirdProprety",
      type: "textfield",
      if: 25,
    },

    {
      label: "Date d'acquisition",
      name: "dateAcquisitionThirdProprety",
      type: "date",
      if: 26,
    },

    {
      label: "Valeur actuelle",
      name: "valueThirdProprety",
      type: "textfield",
      if: 27,
    },

    {
      label: "Mode d'acquisition",
      name: "acquiringModeThirdProprety",
      type: "textfield",
      if: 28,
    },
    {
      type: "break",
      if: 29,
    },
    {
      label: "Bien 4 :",
      type: "text",
      if: 30,
    },
    {
      type: "break",
      if: 31,
    },
    {
      label: "Nature",
      name: "natureFourthProprety",
      type: "textfield",
      if: 32,
    },

    {
      label: "Adresse",
      name: "adressFourthProprety",
      type: "textfield",
      if: 33,
    },

    {
      label: "Date d'acquisition",
      name: "dateAcquisitionFourthProprety",
      type: "date",
      if: 34,
    },

    {
      label: "Valeur actuelle",
      name: "valuefourthProprety",
      type: "textfield",
      if: 35,
    },

    {
      label: "Mode d'acquisition",
      name: "acquiringModeFourthProprety",
      type: "textfield",
      if: 36,
    },
    {
      type: "break",
      if: 37,
    },
    {
      label:
        "Si un crédit immobilier a été souscrit pour ces acquisitions avant le mariage, celui-ci était il intégralement remboursé à la date du mariage ?",
      name: "isEstateCreditFromeBeforeWeddingWasRefundBeforeWeddingDate",
      type: "radio",
      radioFields: [
        { label: "Oui", value: "true" },
        { label: "Non", value: "false" },
      ],
      fullWidth: true,
      if: 38,
    },
    {
      type: "break",
      if: 39,
    },
    {
      label: "Epoux 2 :",
      type: "text",
      if: 40,
    },
    {
      type: "break",
      if: 41,
    },
    {
      label:
        "Si oui précisez imperativement leur nature (appartement, maison, parking, commerce, autre), leur adresse, leur date d'acquisition, leur valeur, et leur mode d'acquisition (Achat, donation, héritage etc):",
      type: "text",
      if: 42,
    },
    {
      type: "break",
      if: 43,
    },
    {
      label: "Bien 1 :",
      type: "text",
      if: 44,
    },
    {
      type: "break",
      if: 45,
    },
    {
      label: "Nature",
      name: "natureFirstPropretyParticipant2",
      type: "textfield",
      if: 46,
    },

    {
      label: "Adresse",
      name: "adressFirstPropretyParticipant2",
      type: "textfield",
      if: 47,
    },

    {
      label: "Date d'acquisition",
      name: "dateAcquisitionFirstPropretyParticipant2",
      type: "date",
      if: 48,
    },

    {
      label: "Valeur actuelle",
      name: "valueFirstPropretyParticipant2",
      type: "textfield",
      if: 49,
    },

    {
      label: "Mode d'acquisition",
      name: "acquiringModeFirstPropretyParticipant2",
      type: "textfield",
      if: 50,
    },
    {
      type: "break",
      if: 51,
    },
    {
      label: "Bien 2 :",
      type: "text",
      if: 52,
    },
    {
      type: "break",
      if: 53,
    },
    {
      label: "Nature",
      name: "natureSecondPropretyParticipant2",
      type: "textfield",
      if: 54,
    },

    {
      label: "Adresse",
      name: "adressSecondPropretyParticipant2",
      type: "textfield",
      if: 55,
    },

    {
      label: "Date d'acquisition",
      name: "dateAcquisitionSecondPropretyParticipant2",
      type: "date",
      if: 56,
    },

    {
      label: "Valeur actuelle",
      name: "valueSecondPropretyParticipant2",
      type: "textfield",
      if: 57,
    },

    {
      label: "Mode d'acquisition",
      name: "acquiringModeSecondPropretyParticipant2",
      type: "textfield",
      if: 58,
    },
    {
      type: "break",
      if: 59,
    },
    {
      label: "Bien 3 :",
      type: "text",
      if: 60,
    },
    {
      type: "break",
      if: 61,
    },
    {
      label: "Nature",
      name: "natureThirdPropretyParticipant2",
      type: "textfield",
      if: 62,
    },

    {
      label: "Adresse",
      name: "adressThirdPropretyParticipant2",
      type: "textfield",
      if: 63,
    },

    {
      label: "Date d'acquisition",
      name: "dateAcquisitionThirdPropretyParticipant2",
      type: "date",
      if: 64,
    },

    {
      label: "Valeur actuelle",
      name: "valueThirdPropretyParticipant2",
      type: "textfield",
      if: 65,
    },

    {
      label: "Mode d'acquisition",
      name: "acquiringModeThirdPropretyParticipant2",
      type: "textfield",
      if: 66,
    },
    {
      type: "break",
      if: 67,
    },
    {
      label: "Bien 4 :",
      type: "text",
      if: 68,
    },
    {
      type: "break",
      if: 69,
    },
    {
      label: "Nature",
      name: "natureFourthPropretyParticipant2",
      type: "textfield",
      if: 70,
    },

    {
      label: "Adresse",
      name: "adressFourthPropretyParticipant2",
      type: "textfield",
      if: 71,
    },

    {
      label: "Date d'acquisition",
      name: "dateAcquisitionFourthPropretyParticipant2",
      type: "date",
      if: 72,
    },

    {
      label: "Valeur actuelle",
      name: "valueFourthPropretyParticipant2",
      type: "textfield",
      if: 73,
    },

    {
      label: "Mode d'acquisition",
      name: "acquiringModeFourthPropretyParticipant2",
      type: "textfield",
      if: 74,
    },
    {
      type: "break",
      if: 75,
    },
    {
      label:
        "Si un crédit immobilier a été souscrit pour ces acquisitions avant le mariage, celui-ci était il intégralement remboursé à la date du mariage ?",
      name: "isEstateCreditFromeBeforeWeddingWasRefundBeforeWeddingDate",
      type: "radio",
      radioFields: [
        { label: "Oui", value: "true" },
        { label: "Non", value: "false" },
      ],
      fullWidth: true,
      if: 76,
    },
    {
      type: "break",
      if: 77,
    },
    {
      label:
        "Précisez pour chacun de ces biens s'ils ont été acquis avant ou pendant le mariage",
      type: "text",
      if: 78,
    },
    {
      type: "break",
      if: 79,
    },
    {
      label: "Avant (Reportez le numéro ci-dessus des biens concernés) :",
      name: "propertyAquiredBeforeWedding",
      type: "textfield",
      if: 80,
    },

    {
      label: "Après (Reportez le numéro ci-dessus des biens concernés) :",
      name: "propertyAquiredAfterWedding",
      type: "textfield",
      if: 81,
    },

    {
      label:
        "Si un bien immobilier a été vendu, précisez la date de la vente et les modalités de répartition du prix de vente",
      name: "ifPropretySoldPreciseDateAndMethodeOfRepartitionOfPrice",
      type: "textfield",
      fullWidth: true,
      if: 82,
    },
  ],
};

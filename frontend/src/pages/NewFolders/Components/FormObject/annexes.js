export const annexes = {
  part: {
    label: "Annexes",
    name: "annexes",
  },

  fields: [
    {
      label:
        "Quel est le nom complet du notaire à qui adressé la convention de divorce ?",
      name: "notaryConventionName",
      type: "textfield",
    },
    {
      label: "Si il y a eu liquidation, à quel date à t-elle été régularisé ?",
      type: "date",
      name: "liquidationDate",
    },
    {
      type: "text",
      label: "Annexes",
    },
    {
      type: "break",
    },
    {
      label: "Copie de la carte d'identité de l'époux 1",
      type: "checkbox",
      name: "copyIdentityFirstConsort",
    },
    {
      label: "Copie de la carte d'identité de l'époux 2",
      type: "checkbox",
      name: "copyIdentitySecondConsort",
    },
    {
      label: "Copie du livret de famille",
      type: "checkbox",
      name: "copyFamilyBook",
    },
    {
      label: "Original de l'extrait d'acte de mariage",
      type: "checkbox",
      name: "orignalWeddingExtract",
    },
    {
      label: "Original de l'extrait d'acte de naissance époux 1",
      type: "checkbox",
      name: "orignalBirthExtractFirstConsort",
    },
    {
      label: "Original de l'extrait d'acte de naissance époux 2",
      type: "checkbox",
      name: "orignalBirthExtractSecondConsort",
    },
    {
      label: "Original de l'extrait d'acte de naissance des enfants",
      type: "checkbox",
      name: "orignalBirthExtractChildren",
    },
    {
      label:
        "Preuve de dépôt et de réception de l'envoi du projet de convention de divorce par l'Avocat de l'époux 1",
      type: "checkbox",
      name: "proofOfDepositeDivorceConventionFirstConsort",
    },
    {
      label:
        "Preuve de dépôt et de réception de l'envoi du projet de convention de divorce par l'Avocat de l'époux 2",
      type: "checkbox",
      name: "proofOfDepositeDivorceConventionSecondConsort",
    },
    {
      label:
        "Preuve du consentement de chacun des époux à l'envoi de la notifiaction de convention de divorce par recommandé électronique",
      type: "checkbox",
      name: "proofOfConsentementAR",
    },
    {
      label: "Formulaire d'information de l'enfant doué de discernement",
      type: "checkbox",
      name: "formDiscernementChildren",
    },
    {
      label: "Attestation art. 272 du Code civil",
      type: "checkbox",
      name: "art272",
    },
    {
      label: "Etat liquidatif",
      type: "checkbox",
      name: "stateLiquidatif",
    },
    {
      label: "Copie du contrat de mariage",
      type: "checkbox",
      name: "copyWeddingContrat",
    },
  ],
};

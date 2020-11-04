export const wedding = {
  part: { label: "Mariage", name: "wedding" },

  fields: [
    { label: "Date du mariage", name: "weddingDate", type: "date" },
    {
      label: "Lieu du mariage (Ville/Pays)",
      name: "weddingLocation",
      type: "textfield",
    },
    {
      label:
        "L'un des époux est t-il étranger ?",
      name: "isConsortForeign",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
    },
    {
      label:
        "Si l'un des époux est de nationalité étrangère, précisez si le mariage en france à été transcrit dans son pays d'origine (Pour le savoir, regardez sur votre acte de naissance étranger si le mariage apparait) :",
      name: "consortForeignWeddingValidInFrance",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
    },
    {
      label: "Un contrat de mariage à-t-il été fait ?",
      name: "isWeddingContrat",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
    },
    {
      label:
        "Si oui, précisez le nom du notaire qui à établi le contrat de mariage",
      name: "weddingContratNotary",
      type: "textfield",
      if: 1,
    },
    {
      label:
        "Si oui, précisez le nom de l'étude du notaire qui à établi le contrat de mariage",
      name: "weddingContratNotaryCompanyName",
      type: "textfield",
      if: 2,
    },
    {
      label:
        "Si oui, précisez l'adresse de l'étude du notaire qui à établi le contrat de mariage",
      name: "weddingContratNotaryAdress",
      type: "textfield",
      if: 3,
    },
    {
      label: "Si oui, précisez la date de réception du contrat de mariage",
      name: "weddingContratDate",
      type: "date",
      if: 4,
    },
    {
      label:
        "Si un contrat de mariage à été fait, quel à été le régime choisi ?",
      name: "weddingRegime",
      type: "radio",
      radioFields: [
        { label: "Séparation de biens", value: "separationOfGood" },
        { label: "Communauté universelle", value: "universalCommunity" },
        { label: "Autres (préciser)", value: "other", information: true },
      ],
      if: 4,
    },

    {
      label:
        "La première résidence commune des époux après le mariage a t-elle été fixé en france ?",
      name: "firstCommonResidenceIsFrance",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
    },
    {
      label:
        "Si non merci de préciser le pays d'implantation de cette première résidence",
      name: "firstCommonResidenceCountry",
      type: "textfield",
    },
    {
      label:
        "Si vous êtes déjà séparé, merci de préciser la date de la séparation éffective",
      name: "separationDate",
      type: "date",
    },
    {
      label:
        "Si vous avez choisi une date de fin du mariage, merci de le préciser",
      name: "dateEndWedding",
      type: "date",
    },
    {
      type: "break",
    },
    {
      label: `TRES IMPORTANT : Si l’un des époux est de nationalité étrangère, son attention est attirée sur le fait que le divorce par consentement mutuel de droit français, enregistré par un Notaire, et non par un juge, n’est pas reconnu à l’heure actuelle par certains systèmes juridiques étrangers (Algérie, Tunisie, Maroc, Mali, Sénégal entre autres).

    Il peut être nécessaire, pour que le divorce soit transcrit dans ces pays, de mener sur place une procédure de divorce distincte.
    `,
      type: "text",
    },
  ],
};

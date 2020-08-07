export const maritalName = {
  part: { label: "Sur le nom marital", name: "maritalName" },

  fields: [
    {
      label:
        "L'un des deux époux a-t-il pris le nom de l'autre ? (sur les documents officiels, passeport, CNI etc)",
      name: "isUsingParticipantName",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
      fullWidth: true,
    },
    {
      type: "break",
    },
    {
      label:
        "Si oui, l'époux ayant emprunté le nom de l'autre souhaite-t-il pouvoir en conserver l'usage suite au divorce ?",
      name: "wantToKeepParticipantName",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
      if: 2,
    },
    {
      label:
        "Si oui l'époux dont le nom a été emprunté est-il d'accord pour que l'autre époux en conserve l'usage ?",
      name: "isAgreeToGiveHisName",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
      if: 1,
    },
  ],
};

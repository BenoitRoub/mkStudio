export const maritalHome = {
  part: { label: "Le domicile conjugal", name: "maritalHome" },

  fields: [
    {
      label:
        "Au moment d'entamer la présente procédure de divorce, residez-vous toujours ensemble à la même adresse ?",
      name: "isLeavingTogether",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
    },
    {
      label:
        "Si non, l'un des deux époux conserve-t-il l'adresse qui constituait le domicile conjugal ?",
      name: "isParticipantKeepAdress",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
    },
    {
      label: "Précisez l'époux qui conserve le domicile conjugal",
      name: "participantKeepingAdress",
      type: "radioParticipant",
    },
    {
      label:
        "Précisez le délai dans lequel l'époux qui quitte le domicile conjugal s'engage à déménager (approximativement)",
      name: "participantLeavingAdressDate",
      type: "textfield",
    },
    {
      label:
        "Le domicile conjugal est-il une location (A), un bien appartenant a l'un des époux (B), ou aux deux (C) ?",
      name: "maritalHomeStatus",
      type: "radio",
      radioFields: [
        { label: "A", value: "A" },
        { label: "B", value: "B" },
        { label: "C", value: "C" },
      ],
      fullWidth: true,
    },
    {
      type: "break",
    },
    {
      label: "Si B indiqué le nom de l'époux propriétaire",
      name: "maritalHomeOwner",
      type: "textfield",
      fullWidth: true,
    },
  ],
};

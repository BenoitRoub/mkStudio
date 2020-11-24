export const propertyDistribution = {
  part: { label: "La répartition des biens", name: "propertyDistribution" },

  fields: [
    {
      label:
        "Les époux ont-ils repris possession de leurs vêtements et effets personnels ?",
      name: "isPersonnalGoodTaken",
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
        "Avez-vous acquis un ou des véhicule(s) pendant la durée du mariage ?",
      name: "isSharedVehicles",
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
      label: "Si oui précisez le modèle de véhicule",
      type: "text",
      fullWidth: true,
      if: 2,
    },
    {
      type: "break",
      if: 3,
    },
    {
      label: "1 )",
      name: "firstVehicle",
      type: "textfield",
      if: 4,
    },
    {
      label: "2 )",
      name: "secondVehicle",
      type: "textfield",
      if: 5,
    },
    {
      label: "3 )",
      name: "thirdVehicle",
      type: "textfield",
      if: 6,
    },
    {
      type: "break",
      if: 7,
    },
    {
      label: "Pécisez l'époux qui conservera l'usage de ce(s) véhicule(s)",
      type: "text",
      fullWidth: true,
      if: 8,
    },
    {
      type: "break",
      if: 9,
    },
    {
      label: "1 )",
      name: "firstVehicleParticipantKeeper",
      type: "radioParticipant",
      if: 10,
    },
    {
      label: "2 )",
      name: "secondVehicleParticipantKeeper",
      type: "radioParticipant",
      if: 11,
    },
    {
      label: "3 )",
      name: "thirdVehicleParticipantKeeper",
      type: "radioParticipant",
      if: 12,
    },
    {
      type: "break",
      if: 13,
    },
    {
      label:
        "Éxiste-t-il des difficultés liées à la répartition des biens communs ? (objet de valeur etc)",
      name: "difficultiesSharedGoods",
      type: "textfield",
      fullWidth: true,
    },
  ],
};

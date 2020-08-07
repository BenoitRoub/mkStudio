export const secondConsort = {
  part: { label: "Époux 2 (Madame)", name: "second" },

  fields: [
    { label: "Nom", name: "lastname", type: "textfield" },
    { label: "Nom de naissance", name: "birthname", type: "textfield" },
    { label: "Prénom", name: "firstname", type: "textfield" },
    { label: "Date de naissance", name: "birthdate", type: "date" },
    {
      label: "Lieu de naissance (Ville/Pays)",
      name: "birthplace",
      type: "textfield",
    },
    { label: "Nationalité", name: "nationality", type: "textfield" },
    { label: "Adresse", name: "adress", type: "textfield" },
    { label: "Profession", name: "profession", type: "textfield" },
    {
      label: "Revenu mensuel moyen (net avant impôt)",
      name: "income",
      type: "textfield",
    },
    {
      label: "Revenu total déclaré en 2019 (voir dernier avis d'imposition)",
      name: "totalIncome",
      type: "textfield",
    },
    {
      label: "Numéro de sécurité sociale",
      name: "socialSecurityNumber",
      type: "textfield",
    },
    { label: "Adresse mail", name: "email", type: "textfield" },
    { label: "Numéro de téléphone", name: "phoneNumber", type: "textfield" },
    {
      label: "Nom de l'avocat représentant",
      name: "selfLawyer",
      type: "textfield",
      customLabel: true,
    },
  ],
};

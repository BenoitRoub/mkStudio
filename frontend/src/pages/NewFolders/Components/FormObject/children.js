export const children = {
  part: { label: "Enfants", name: "children" },

  fields: [
    {
      label: "Des enfants sont-ils nés de cette union ?",
      name: "isChildren",
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
        "Si oui précisez leurs noms, prénoms, date, lieu de naissance et 'Statut' (à la crêche, écolier, collégien, lycéen, etc)",
      type: "text",
      if: 2,
    },
    {
      type: "break",
      if: 3,
    },
    {
      label: "Enfant 1 :",
      type: "text",
      if: 4,
    },
    {
      type: "break",
      if: 5,
    },
    {
      label: "Nom",
      name: "children1Lastname",
      type: "textfield",
      if: 6,
    },
    {
      label: "Prénom",
      name: "children1Firstname",
      type: "textfield",
      if: 7,
    },
    {
      label: "Date de naissance",
      name: "children1BirthDate",
      type: "date",

      if: 8,
    },
    {
      label: "Lieu de naissance",
      name: "children1BirthLocation",
      type: "textfield",
      if: 9,
    },
    {
      label: "Statut",
      name: "children1Status",
      type: "textfield",
      if: 10,
    },
    {
      type: "break",
      if: 11,
    },
    {
      label: "Enfant 2 :",
      type: "text",
      if: 12,
    },
    {
      type: "break",
      if: 13,
    },
    {
      label: "Nom",
      name: "children2Lastname",
      type: "textfield",
      if: 14,
    },
    {
      label: "Prénom",
      name: "children2Firstname",
      type: "textfield",
      if: 15,
    },
    {
      label: "Date de naissance",
      name: "children2BirthDate",
      type: "date",
      if: 16,
    },
    {
      label: "Lieu de naissance",
      name: "children2BirthLocation",
      type: "textfield",
      if: 17,
    },
    {
      label: "Statut",
      name: "children2Status",
      type: "textfield",
      if: 18,
    },
    {
      type: "break",
      if: 19,
    },
    {
      label: "Enfant 3 :",
      type: "text",
      if: 20,
    },
    {
      type: "break",
      if: 21,
    },
    {
      label: "Nom",
      name: "children3Lastname",
      type: "textfield",
      if: 22,
    },
    {
      label: "Prénom",
      name: "children3Firstname",
      type: "textfield",
      if: 23,
    },
    {
      label: "Date de naissance",
      name: "children3BirthDate",
      type: "date",
      if: 24,
    },
    {
      label: "Lieu de naissance",
      name: "children3BirthLocation",
      type: "textfield",
      if: 25,
    },
    {
      label: "Statut",
      name: "children3Status",
      type: "textfield",
      if: 26,
    },
    {
      type: "break",
      if: 27,
    },
    {
      label: "Enfant 4 :",
      type: "text",
      if: 28,
    },
    {
      type: "break",
      if: 29,
    },
    {
      label: "Nom",
      name: "children4Lastname",
      type: "textfield",
      if: 30,
    },
    {
      label: "Prénom",
      name: "children4Firstname",
      type: "textfield",
      if: 31,
    },
    {
      label: "Date de naissance",
      name: "children4BirthDate",
      type: "date",
      if: 32,
    },
    {
      label: "Lieu de naissance",
      name: "children4BirthLocation",
      type: "textfield",
      if: 33,
    },
    {
      label: "Statut",
      name: "children4Status",
      type: "textfield",
      if: 34,
    },
    {
      type: "break",
      if: 35,
    },
    {
      label: "Enfant 5 :",
      type: "text",
      if: 36,
    },
    {
      type: "break",
      if: 37,
    },
    {
      label: "Nom",
      name: "children5Lastname",
      type: "textfield",
      if: 38,
    },
    {
      label: "Prénom",
      name: "children5Firstname",
      type: "textfield",
      if: 39,
    },
    {
      label: "Date de naissance",
      name: "children5BirthDate",
      type: "date",
      if: 40,
    },
    {
      label: "Lieu de naissance",
      name: "children5BirthLocation",
      type: "textfield",
      if: 41,
    },
    {
      label: "Statut",
      name: "children5Status",
      type: "textfield",
      if: 42,
    },
    {
      type: "break",
      if: 43,
    },
    {
      label: "L'un des époux a-t-il des enfants issus d'une précedente union ?",
      name: "isPreviousChildren",
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
        "Si oui précisez leurs noms, prénoms, date, lieu de naissance et 'Statut' (à la crêche, écolier, collégien, lycéen, etc)",
      type: "text",
      if: 2,
    },
    {
      type: "break",
      if: 3,
    },
    {
      label: "Époux 1 :",
      type: "outlineText",
      if: 4,
    },
    {
      type: "break",
      if: 5,
    },
    {
      label: "Enfant 1 :",
      type: "text",
      if: 6,
    },
    {
      type: "break",
      if: 7,
    },
    {
      label: "Nom",
      name: "participant1children1Lastname",
      type: "textfield",
      if: 8,
    },
    {
      label: "Prénom",
      name: "participant1children1Firstname",
      type: "textfield",
      if: 9,
    },
    {
      label: "Date de naissance",
      name: "participant1children1BirthDate",
      type: "date",
      if: 10,
    },
    {
      label: "Lieu de naissance",
      name: "participant1children1BirthLocation",
      type: "textfield",
      if: 11,
    },
    {
      label: "Statut",
      name: "participant1children1Status",
      type: "textfield",
      if: 12,
    },
    {
      type: "break",
      if: 13,
    },
    {
      label: "Enfant 2 :",
      type: "text",
      if: 14,
    },
    {
      type: "break",
      if: 15,
    },
    {
      label: "Nom",
      name: "participant1children2Lastname",
      type: "textfield",
      if: 16,
    },
    {
      label: "Prénom",
      name: "participant1children2Firstname",
      type: "textfield",
      if: 17,
    },
    {
      label: "Date de naissance",
      name: "participant1children2BirthDate",
      type: "date",
      if: 18,
    },
    {
      label: "Lieu de naissance",
      name: "participant1children2BirthLocation",
      type: "textfield",
      if: 19,
    },
    {
      label: "Statut",
      name: "participant1children2Status",
      type: "textfield",
      if: 20,
    },
    {
      type: "break",
      if: 21,
    },
    {
      label: "Enfant 3 :",
      type: "text",
      if: 22,
    },
    {
      type: "break",
      if: 23,
    },
    {
      label: "Nom",
      name: "participant1children3Lastname",
      type: "textfield",
      if: 24,
    },
    {
      label: "Prénom",
      name: "participant1children3Firstname",
      type: "textfield",
      if: 25,
    },
    {
      label: "Date de naissance",
      name: "participant1children3BirthDate",
      type: "date",
      if: 26,
    },
    {
      label: "Lieu de naissance",
      name: "participant1children3BirthLocation",
      type: "textfield",
      if: 27,
    },
    {
      label: "Statut",
      name: "participant1children3Status",
      type: "textfield",
      if: 28,
    },
    {
      type: "break",
      if: 29,
    },
    {
      label: "Époux 2 :",
      type: "outlineText",
      if: 30,
    },
    {
      type: "break",
      if: 31,
    },
    {
      label: "Enfant 1 :",
      type: "text",
      if: 32,
    },
    {
      type: "break",
      if: 33,
    },
    {
      label: "Nom",
      name: "participant2children1Lastname",
      type: "textfield",
      if: 34,
    },
    {
      label: "Prénom",
      name: "participant2children1Firstname",
      type: "textfield",
      if: 35,
    },
    {
      label: "Date de naissance",
      name: "participant2children1BirthDate",
      type: "date",
      if: 36,
    },
    {
      label: "Lieu de naissance",
      name: "participant2children1BirthLocation",
      type: "textfield",
      if: 37,
    },
    {
      label: "Statut",
      name: "participant2children1Status",
      type: "textfield",
      if: 38,
    },
    {
      type: "break",
      if: 39,
    },
    {
      label: "Enfant 2 :",
      type: "text",
      if: 40,
    },
    {
      type: "break",
      if: 41,
    },
    {
      label: "Nom",
      name: "participant1children2Lastname",
      type: "textfield",
      if: 42,
    },
    {
      label: "Prénom",
      name: "participant2children2Firstname",
      type: "textfield",
      if: 43,
    },
    {
      label: "Date de naissance",
      name: "participant2children2BirthDate",
      type: "date",
      if: 44,
    },
    {
      label: "Lieu de naissance",
      name: "participant2children2BirthLocation",
      type: "textfield",
      if: 45,
    },
    {
      label: "Statut",
      name: "participant2children2Status",
      type: "textfield",
      if: 46,
    },
    {
      type: "break",
      if: 47,
    },
    {
      label: "Enfant 3 :",
      type: "text",
      if: 48,
    },
    {
      type: "break",
      if: 49,
    },
    {
      label: "Nom",
      name: "participant1children3Lastname",
      type: "textfield",
      if: 50,
    },
    {
      label: "Prénom",
      name: "participant2children3Firstname",
      type: "textfield",
      if: 51,
    },
    {
      label: "Date de naissance",
      name: "participant2children3BirthDate",
      type: "date",
      if: 52,
    },
    {
      label: "Lieu de naissance",
      name: "participant2children3BirthLocation",
      type: "textfield",
      if: 53,
    },
    {
      label: "Statut",
      name: "participant2children3Status",
      type: "textfield",
      if: 54,
    },
    {
      type: "break",
      if: 55,
    },
    {
      label:
        "Si vous avez des enfants en commun, existe-t-il un accord sur les modalités de garde ?",
      name: "sharedChildrenGuardAgreement",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
      ],
    },
    {
      label:
        "Si oui précisez le parent chez lequel le ou les enfants auront leur résidence habituelle",
      name: "participantChildrenHabitualResidence",
      type: "radioParticipant",
    },
    {
      label:
        "Précisez le rythme de garde des enfants (garde alternée, droit de visite et d'hébergement les week-ends et vacances scolaires etc)",
      name: "childrenGuard",
      type: "textfield",
      fullWidth: true,
    },
    {
      type: "break",
    },
    {
      label:
        "L'un des époux demande-t-il le versement d'une contribution à l'entretien et à l'éducation des enfants ? ? (Anciennement « pension alimentaire » - Somme destinée à apporter une aide financière à celui des parents chez qui la résidence habituelle de l’enfant est fixée)",
      name: "isAlimony",
      type: "radio",
      radioFields: [
        { label: "oui", value: "true" },
        { label: "non", value: "false" },
        { label: "ne sait pas", value: "unknown" },
      ],
      fullWidth: true,
    },
    {
      type: "break",
    },
    {
      label: "Si oui précisez le montant par mois par enfant (chiffre)",
      name: "alimony",
      type: "textfield",
      if: 2,
    },
    {
      label: "Précisez la date du versement de cette somme chaque mois",
      name: "alimonyDate",
      type: "textfield",
      if: 3,
    },
    {
      label: "Précisez l'époux demandeur",
      name: "alimonyParticipantAsk",
      type: "radioParticipant",
      if: 4,
    },
  ],
};

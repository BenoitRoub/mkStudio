export const aboutTaxes = {
  part: {
    label: "Sur les Impôts",
    name: "aboutTaxes",
  },

  fields: [
    {
      label:
        "Avez vous effectué pour l'année fiscale précédente une déclaration d'impôts commune ou séparée ?",
      name: "isThePastTaxReturnSharedOrSplit",
      type: "radio",
      radioFields: [
        { label: "Commune", value: "shared" },
        { label: "Séparée", value: "split" },
      ],
      fullWidth: true,
    },
    {
      type: "break",
    },
    {
      label:
        "Merci de reporter dans le tableau ci-dessous le montant de vos chagres mensuelles",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: "Époux 1",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: "Loyer :",
      name: "firstParticipantRent",
      type: "textfield",
    },

    {
      label: "Charges locatives :",
      name: "firstParticipantRentalCharges",
      type: "textfield",
    },

    {
      label: "Gaz :",
      name: "firstParticipantGas",
      type: "textfield",
    },

    {
      label: "Eau :",
      name: "firstParticipantWater",
      type: "textfield",
    },

    {
      label: "Électricité :",
      name: "firstParticipantElectricity",
      type: "textfield",
    },

    {
      label: "Téléphone/Internet :",
      name: "firstParticipantMobileInternet",
      type: "textfield",
    },

    {
      label: "Crédit Immobilier :",
      name: "firstParticipantRealEstateCredit",
      type: "textfield",
    },

    {
      label: "Crédit à la consommation (cumul si plusieurs crédits) :",
      name: "firstParticipantConsumptionCredit",
      type: "textfield",
    },

    {
      label: "Impôt sur le revenu :",
      name: "firstParticipantIncomeTax",
      type: "textfield",
    },

    {
      label: "Taxe foncière :",
      name: "firstParticipantPropretyTax",
      type: "textfield",
    },

    {
      label: "Taxe d'habitation :",
      name: "firstParticipantCouncilTax",
      type: "textfield",
    },

    {
      label: "Assurance véhicule :",
      name: "firstParticipantAutomobileInsurance",
      type: "textfield",
    },

    {
      label: "Assurance habitation :",
      name: "firstParticipantHomeInsurance",
      type: "textfield",
    },

    {
      label: "Mutuelle :",
      name: "firstParticipantHealthPlan",
      type: "textfield",
    },

    {
      label: "Frais de scolarité :",
      name: "firstParticipantTuitionFees",
      type: "textfield",
    },

    {
      label: "Entretien véhicule et carburant :",
      name: "firstParticipantMaintenanceCarAndFuel",
      type: "textfield",
    },

    {
      label:
        "Pension alimentaire (que vous versez déjà au jour de la présente procédure) :",
      name: "firstParticipantChildSupport",
      type: "textfield",
    },

    {
      label: "Total",
      name: "total",
      type: "textfield",
    },

    {
      label: "Époux 2",
      type: "text",
    },
    {
      type: "break",
    },
    {
      label: "Loyer :",
      name: "secondParticipantRent",
      type: "textfield",
    },

    {
      label: "Charges locatives :",
      name: "secondParticipantRentalCharges",
      type: "textfield",
    },

    {
      label: "Gaz :",
      name: "secondParticipantGas",
      type: "textfield",
    },

    {
      label: "Eau :",
      name: "secondParticipantWater",
      type: "textfield",
    },

    {
      label: "Électricité :",
      name: "secondParticipantElectricity",
      type: "textfield",
    },

    {
      label: "Téléphone/Internet :",
      name: "secondParticipantMobileInternet",
      type: "textfield",
    },

    {
      label: "Crédit Immobilier :",
      name: "secondParticipantRealEstateCredit",
      type: "textfield",
    },

    {
      label: "Crédit à la consommation (cumul si plusieurs crédits) :",
      name: "secondParticipantConsumptionCredit",
      type: "textfield",
    },

    {
      label: "Impôt sur le revenu :",
      name: "secondParticipantIncomeTax",
      type: "textfield",
    },

    {
      label: "Taxe foncière :",
      name: "secondParticipantPropretyTax",
      type: "textfield",
    },

    {
      label: "Taxe d'habitation :",
      name: "secondParticipantCouncilTax",
      type: "textfield",
    },

    {
      label: "Assurance véhicule :",
      name: "secondParticipantAutomobileInsurance",
      type: "textfield",
    },

    {
      label: "Assurance habitation :",
      name: "secondParticipantHomeInsurance",
      type: "textfield",
    },

    {
      label: "Mutuelle :",
      name: "secondParticipantHealthPlan",
      type: "textfield",
    },

    {
      label: "Frais de scolarité :",
      name: "secondParticipantTuitionFees",
      type: "textfield",
    },

    {
      label: "Entretien véhicule et carburant :",
      name: "secondParticipantMaintenanceCarAndFuel",
      type: "textfield",
    },

    {
      label:
        "Pension alimentaire (que vous versez déjà au jour de la présente procédure) :",
      name: "secondParticipantChildSupport",
      type: "textfield",
    },

    {
      label: "Total",
      name: "total",
      type: "textfield",
    },
  ],
};

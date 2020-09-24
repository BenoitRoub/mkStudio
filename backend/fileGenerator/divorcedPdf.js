const PDFDocument = require("pdfkit");
var User = require(".././models/userModel");
var Folder = require(".././models/folderModel");
var moment = require("moment");
require("moment/locale/fr");
moment.locale("fr");
// Create a document

async function generatePdf({ form }) {
  //   const user = await User.findOne();
  //   const folder = await Folder.findById(user.folders[0]);
  //   const form = folder.form;

  const épouseNom = `${form.second.birthname} épouse ${form.second.lastname}`;

  const husbandName = `${form.first.birthname} ${form.first.lastname}`;

  const doc = new PDFDocument();
  const fs = require("fs");
  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  const random = Math.floor(Math.random() * (100000000 - 0)) + 1;
  const stream = doc.pipe(
    fs.createWriteStream("doc/pdf/" + random + "output.pdf")
  );

  // Embed a font, set the font size, and render some text
  const path = require("path");

  doc.image(path.join() + "/pictures/ActeDAvocat.png", 245, 75, { width: 125 });
  doc.text("", null, 250);

  doc
    .fontSize(20)
    .font("Times-Bold")
    .text("CONVENTION DE DIVORCE PAR CONSENTEMENT MUTUEL", {
      align: "center",
    })
    .moveDown(2);

  doc.fontSize(12);

  renderItallicBoldText(doc, "Articles 229 et suivants du Code civil");
  doc.moveDown(1);

  renderText(
    doc,
    `Monsieur ${form.first.firstname} ${form.first.lastname}, né le ${moment(
      form.first.birthdate
    ).format("DD/MM/YYYY")} à ${form.first.birthplace}, de nationalité ${
      form.first.nationality
    }, exerçant la profession  ${form.first.profession}, domicilié ${
      form.first.adress
    }, immatriculé à la CPAM sous le numéro ${form.first.socialSecurityNumber}.
`
  );
  doc.moveDown(1);

  renderText(
    doc,
    `Déclarant ne pas être soumis à un régime de protection des majeurs.`
  );
  doc.moveDown(1);

  renderBoldOutlineText(doc, `Ayant pour Avocat :`);

  renderText(doc, ` ${form.first.selfLawyer}`);
  renderText(doc, `Avocat au barreau de Paris`);
  doc.moveDown(1);

  renderBoldOutlineText(doc, `ET`);

  renderText(
    doc,
    `Madame ${form.second.firstname} ${form.second.birthname}, né le ${moment(
      form.second.birthdate
    ).format("DD/MM/YYYY")} à ${form.second.birthplace}, de nationalité ${
      form.second.nationality
    }, exerçant la profession  ${form.second.profession}, domicilié ${
      form.second.adress
    }, immatriculé à la CPAM sous le numéro ${form.second.socialSecurityNumber}.
`
  );
  doc.moveDown(1);

  renderText(
    doc,
    `Déclarant ne pas être soumis à un régime de protection des majeurs.`
  );
  doc.moveDown(1);

  renderBoldOutlineText(doc, `Ayant pour Avocat :`);

  renderBoldText(doc, ` ${form.second.selfLawyer}`);
  renderText(doc, `Avocat au barreau de Paris`);

  doc.addPage();

  renderBlueTitle(doc, `PREAMBULE`);

  renderItallicOutlineText(
    doc,
    `Se sont entendus sur la rupture de leur mariage et ses effets, et ont souhaité voir constater leur accord dans le cadre de la présente convention sous forme d’acte sous seing privé contresigné par avocats conformément à l’article 1374 du Code Civil qui dispose :`
  );

  renderItallicText(
    doc,
    `« L'acte sous signature privée contresigné par les avocats de chacune des parties ou par l'avocat de toutes les parties fait foi de l'écriture et de la signature des parties, tant à leur égard qu'à celui de leurs héritiers ou ayants cause.
      La procédure de faux prévue par le code de procédure civile lui est applicable.Cet acte est dispensé de toute mention manuscrite exigée par la loi ». 
      `
  );

  renderText(
    doc,
    `Il est rappelé que s’appliquent les dispositions suivantes du code civil :`
  );

  renderArticle(doc, `Article 1112-1`, [
    "Celle des parties qui connaît une information dont l'importance est déterminante pour le consentement de l'autre doit l'en informer dès lors que, légitimement, cette dernière ignore cette information ou fait confiance à son cocontractant.",
    "Néanmoins, ce devoir d'information ne porte pas sur l'estimation de la valeur de la prestation. ",
    "Ont une importance déterminante les informations qui ont un lien direct et nécessaire avec le contenu du contrat ou la qualité des parties.",
    "Il incombe à celui qui prétend qu'une information lui était due de prouver que l'autre partie la lui devait, à charge pour cette autre partie de prouver qu’elle a fournie.",
    "Outre la responsabilité de celui qui en était tenu, le manquement à ce devoir d'information peut entraîner l'annulation du contrat dans les conditions prévues aux articles 1130 et suivants.",
  ]);

  renderArticle(doc, "Article 1130", [
    "L'erreur, le dol et la violence vicient le consentement lorsqu'ils sont de telle nature que, sans eux, l'une des parties n'aurait pas contractée ou aurait contractée à des conditions substantiellement différentes.",
    "Leur caractère déterminant s'apprécie eu égard aux personnes et aux circonstances dans lesquelles le consentement a été donné.",
  ]);

  renderArticle(doc, "Article 1131", [
    "Les vices du consentement sont une cause de nullité relative du contrat.",
  ]);

  renderArticle(doc, "Article 1132", [
    "L'erreur de droit ou de fait, à moins qu'elle ne soit inexcusable, est une cause de nullité du contrat lorsqu'elle porte sur les qualités essentielles de la prestation due ou sur celles du cocontractant.",
  ]);

  renderArticle(doc, "Article 1133", [
    "Les qualités essentielles de la prestation sont celles qui ont été expressément ou tacitement convenues et en considération desquelles les parties ont contracté.",
    "L'erreur est une cause de nullité qu'elle porte sur la prestation de l'une ou de l'autre partie.",
    "L'acceptation d'un aléa sur une qualité de la prestation exclut l'erreur relative à cette qualité.",
  ]);

  renderArticle(doc, "Article 1134", [
    "L'erreur sur les qualités essentielles du cocontractant n'est une cause de nullité que dans les contrats conclus en considération de la personne.",
  ]);

  renderArticle(doc, "Article 1135", [
    "L'erreur sur un simple motif, étranger aux qualités essentielles de la prestation due ou du cocontractant, n'est pas une cause de nullité, à moins que les parties n'en aient fait expressément un élément déterminant de leur consentement.",
    "Néanmoins l'erreur sur le motif d'une libéralité, en l'absence duquel son auteur n'aurait pas disposé, est une cause de nullité.",
  ]);

  renderArticle(doc, "Article 1136", [
    "L'erreur sur la valeur par laquelle, sans se tromper sur les qualités essentielles de la prestation, un contractant fait seulement de celle-ci une appréciation économique inexacte, n'est pas une cause de nullité.",
  ]);

  renderArticle(doc, "Article 1137", [
    "Le dol est le fait pour un contractant d'obtenir le consentement de l'autre par des manœuvres ou des mensonges.",
    "Constitue également un dol la dissimulation intentionnelle par l'un des contractants d'une information dont il sait le caractère déterminant pour l'autre partie.",
  ]);

  renderArticle(doc, "Article 1138", [
    "Le dol est également constitué s'il émane du représentant, gérant d'affaires, préposé ou porte fort du contractant.",
    "Il l'est encore lorsqu'il émane d'un tiers de connivence.",
  ]);

  renderArticle(doc, "Article 1139", [
    "L'erreur qui résulte d'un dol est toujours excusable ; elle est une cause de nullité alors même qu'elle porterait sur la valeur de la prestation ou sur un simple motif du contrat.",
  ]);

  renderArticle(doc, "Article 1140", [
    "Il y a violence lorsqu'une partie s'engage sous la pression d'une contrainte qui lui inspire la crainte d'exposer sa personne, sa fortune ou celles de ses proches à un mal considérable.",
  ]);

  renderArticle(doc, "Article 1141", [
    "La menace d'une voie de droit ne constitue pas une violence. Il en va autrement lorsque la voie de droit est détournée de son but ou lorsqu'elle est invoquée ou exercée pour obtenir un avantage manifestement excessif.",
  ]);

  renderArticle(doc, "Article 1142", [
    "La violence est une cause de nullité qu'elle ait été exercée par une partie ou par un tiers.",
  ]);

  renderArticle(doc, "Article 1143", [
    "Il y a également violence lorsqu'une partie, abusant de l'état de dépendance dans lequel se trouve son cocontractant, obtient de lui un engagement qu'il n'aurait pas souscrit en l'absence d'une telle contrainte et en tire un avantage manifestement excessif.",
  ]);

  renderArticle(doc, "Article 1144", [
    "Le délai de l'action en nullité ne court, en cas d'erreur ou de dol, que du jour où ils ont été découverts et, en cas de violence, que du jour où elle a cessé.",
  ]);

  doc.addPage();

  if (form.wedding.consortForeignWeddingValidInFrance) {
    renderBlueTitle(doc, "COMPETENCE INTERNATIONALE ET LOI APPLICABLE");

    renderText(
      doc,
      "Il existe en l’espèce des éléments d’extranéité en raison de :"
    );

    renderTextTiret(
      doc,
      `la nationalité étrangère de ${"hello"}, en l’espèce de nationalité «Homme_nationalité»«Femme_nationalité».`
    );

    renderText(
      doc,
      "De sorte qu’il est nécessaire de justifier la compétence internationale des autorités françaises et de déterminer la loi applicable."
    );

    renderIndentTitle(doc, "1) COMPETENCE INTERNATIONALE DES AUTORITES ");

    renderText(
      doc,
      "L’article 3 du Règlement CE n°2201/2003 du 27 novembre 2003 régissant la compétence, la reconnaissance et l’exécution des décisions en matière matrimoniale et de responsabilité parentale (ci-après, Règlement Bruxelles II bis) dispose que :"
    );

    renderIndentText(
      doc,
      "« sont compétentes pour statuer sur les questions relatives au divorce, à la séparation de corps et à l'annulation du mariage des époux, les juridictions de l'Etat membre :"
    );

    renderText(doc, "a)   sur le territoire duquel se trouve :");

    renderTextTiret(doc, "la résidence habituelle des époux");
    renderTextTiret(
      doc,
      "la dernière résidence habituelle des époux dans la mesure où l'un d'eux y réside encore"
    );
    renderTextTiret(doc, "ou la résidence habituelle du défendeur");
    renderTextTiret(
      doc,
      "ou, en cas de demande conjointe, la résidence habituelle de l'un ou l'autre époux ou la résidence habituelle du demandeur s'il y a résidé depuis au moins une année immédiatement avant l'introduction de la demande"
    );
    renderTextTiret(
      doc,
      "ou la résidence habituelle du demandeur s'il y a résidé depuis au moins six mois immédiatement avant l'introduction de la demande et s'il est soit ressortissant de l'Etat membre en question, soit, dans le cas du Royaume-Uni et de l'Irlande, s'il y a son «domicile»"
    );
    doc.moveDown(1);

    renderText(
      doc,
      "b)   de la nationalité des deux époux ou, dans le cas du Royaume-Uni et de l’Irlande, du « domicile commun »."
    );

    renderText(
      doc,
      "Par conséquent, les autorités françaises sont compétentes dans la mesure où il s’agit de la résidence habituelle commune des époux «Homme_Nom_de_Famille»-«Femme_Nom_de_jeune_fille»."
    );

    renderIndentTitle(doc, "2) LOI APPLICABLE ");

    renderText(
      doc,
      "Texte applicable : Il s’agit du Règlement n°1259/2010 du 20 décembre 2010 mettant en œuvre une coopération renforcée en matière de loi applicable au divorce (ci-après « Règlement Rome III »)."
    );

    renderOutlineText(doc, "Détermination de la loi applicable : ");

    renderText(
      doc,
      "Les époux «Homme_Nom_de_Famille»-«Femme_Nom_de_jeune_fille» n’ayant pas choisi préalablement à la rédaction de la présente convention la loi applicable à leur divorce, l’article 8 prévoit que la loi applicable est: "
    );

    renderTextTiret(doc, "la loi de la résidence habituelle commune des époux");
    renderTextTiret(
      doc,
      "à défaut, la loi de la dernière résidence habituelle commune, à condition qu’elle ait pris fin moins d’un an avant la demande de divorce et que l’un d’eux y réside encore"
    );
    renderTextTiret(doc, "à défaut, la loi nationale commune des époux");
    renderTextTiret(doc, "à défaut, la loi du for");

    doc.moveDown(1);

    renderText(
      doc,
      `En l’espèce, la loi française est applicable au prononcé du divorce, dans la mesure où il s’agit de la loi de la résidence habituelle commune des époux «Homme_Nom_de_Famille»-«Femme_Nom_de_jeune_fille»`
    );
  }

  renderBlueTitle(doc, "DÉCLARATION DES ÉPOUX");

  renderText(
    doc,
    `Madame ${épouseNom} et Monsieur ${
      form.first.lastname
    } ont contracté mariage le ${moment(form.wedding.weddingDate).format(
      "DD MMMM YYYY"
    )} par devant l’Officier d’Etat Civil de la mairie de ${
      form.wedding.weddingLocation
    }. `
  );

  if (!form.wedding.isWeddingContrat) {
    renderText(
      doc,
      "Ils n’ont pas fait précéder leur union d’un contrat de mariage."
    );
  }

  if (form.wedding.isConsortForeign) {
    renderText(
      doc,
      "Le régime matrimonial applicable aux époux est déterminé par la Convention de La Haye du 14 mars 1978."
    );

    renderText(doc, "L’article 4 de ladite convention dispose que :");

    renderIndentText(
      doc,
      "« Si les époux n'ont pas, avant le mariage, désigné la loi applicable à leur régime matrimonial, celui-ci est soumis à la loi interne de l'Etat sur le territoire duquel ils établissent leur première résidence habituelle après le mariage."
    );

    renderIndentText(
      doc,
      "Toutefois,  dans  les  cas  suivants,  le  régime  matrimonial  est  soumis  à  la  loi  interne  de  l'Etat  de  la nationalité commune des époux :"
    );

    renderIndentText(
      doc,
      "1.  lorsque la déclaration prévue par l'article 5 a été faite par cet Etat et que son effet n'est pas exclu par l'alinéa 2 de cet article ;"
    );
    renderIndentText(
      doc,
      "2.  lorsque  cet  Etat  n'est  pas  Partie  à  la  Convention,  que  sa  loi  interne  est  applicable  selon  son  droit international privé, et que les époux établissent leur première résidence habituelle après le mariage :"
    );
    renderIndentText(
      doc,
      "a)  dans un Etat ayant fait la déclaration prévue par l'article 5, ou ;"
    );
    renderIndentText(
      doc,
      "b)  dans un Etat qui n'est pas Partie à la Convention et dont le droit international privé prescrit également l'application de leur loi nationale;"
    );
    renderIndentText(
      doc,
      "3.  lorsque les époux n'établissent pas sur le territoire du même Etat leur première résidence habituelle après le mariage."
    );

    renderIndentText(
      doc,
      "A  défaut  de  résidence  habituelle  des  époux  sur  le  territoire  du  même  Etat  et  à  défaut  de  nationalité commune,  leur  régime  matrimonial  est  soumis  à  la  loi  interne  de  l'Etat  avec  lequel,  compte  tenu  de toutes les circonstances, il présente les liens les plus étroits. »"
    );

    if (moment(form.wedding.weddingDate).isBefore(new Date("1992-09-01"))) {
      renderText(
        doc,
        "Or, la convention de La Haye du 14 mars 1978 est entrée en vigueur en France le 1er septembre 1992."
      );

      renderText(
        doc,
        `Les règles édictées ci-dessus ne s’appliquent donc pas aux époux ${form.first.lastname}-${form.first.lastname}, qui se sont mariés en France le 21 mai 1992.`
      );

      renderText(
        doc,
        "La règle trouvant à s’appliquer est donc celle en vigueur antérieurement à la convention de La Haye, c’est-à-dire la fixation, pour une durée de deux ans minimum, de la première résidence des époux sur le sol français."
      );

      renderText(
        doc,
        `C’est précisément le cas des époux ${form.first.lastname}-${form.second.birthname}.`
      );
    } else {
      renderText(
        doc,
        `Or, les époux ${form.first.lastname}-${form.second.birthname} ont installé leur première résidence commune sur le sol Français.`
      );

      renderText(
        doc,
        "Le régime applicable est donc le régime légal français."
      );
    }
  }

  if (!form.wedding.isWeddingContrat) {
    renderText(
      doc,
      "Dès lors, les époux sont soumis au régime de la communauté de biens réduite aux acquêts."
    );
  } else {
    renderText(
      doc,
      `Les époux ont opté pour le régime de la séparation de biens, selon contrat reçu le ${moment(
        form.wedding.weddingDate
      ).format("DD MMMM YYYY")} par Maître ${
        form.wedding.weddingContratNotary
      }${
        !form.wedding.weddingContratNotaryCompanyName ||
        form.wedding.weddingContratNotaryCompanyName !== ""
          ? `, Notaire associé au sein de la ${form.wedding.weddingContratNotaryCompanyName}`
          : ""
      }, étude notariale située ${form.wedding.weddingContratNotaryAdress}.`
    );
  }

  renderText(
    doc,
    "Ils n’ont procédé à aucune modification de leur régime matrimonial."
  );

  let sharedChildrenNumber = 0;
  for (let count = 1; count < 6; count++) {
    if (form.children[`children${count}Lastname`]) {
      sharedChildrenNumber++;
    }
  }

  if (!form.children.isChildren) {
    renderText(
      doc,
      "Aucun enfant n’est né de cette union, ni d’une union précédente."
    );
  } else {
    renderText(
      doc,
      `${sharedChildrenNumber} enfant${sharedChildrenNumber > 1 ? "s" : ""} ${
        sharedChildrenNumber > 1 ? "sont" : "est"
      } issus de cette union :`
    );

    let tableSharedChildren = [];
    for (let count = 1; count < sharedChildrenNumber + 1; count++) {
      tableSharedChildren.push(
        `${form.children[`children${count}Lastname`]} ${
          form.children[`children${count}Firstname`]
        }, né le ${moment(form.children[`children${count}BirthDate`]).format(
          "DD MMMM YYYY"
        )}, à ${form.children[`children${count}BirthLocation`]}`
      );
    }

    renderBulletPoint(doc, tableSharedChildren);
  }

  if (form.children.participant2children1Lastname) {
    let secondChildrenNumber = 0;
    for (let count = 1; count < 4; count++) {
      if (form.children[`participant2children${count}Lastname`]) {
        secondChildrenNumber++;
      }
    }

    renderText(
      doc,
      `Par ailleurs ${épouseNom} a eu ${secondChildrenNumber} enfant${
        secondChildrenNumber > 1 ? "s" : ""
      } d'une union précédente :`
    );

    let tableSecondChildren = [];
    for (let count = 1; count < secondChildrenNumber + 1; count++) {
      tableSecondChildren.push(
        `${form.children[`participant2children${count}Lastname`]} ${
          form.children[`participant2children${count}Firstname`]
        }, né le ${moment(
          form.children[`participant2children${count}BirthDate`]
        ).format("DD MMMM YYYY")}, à ${
          form.children[`participant2children${count}BirthLocation`]
        }`
      );
    }

    renderBulletPoint(doc, tableSecondChildren);
  }

  if (form.children.participant1children1Lastname) {
    let firstChildrenNumber = 0;
    for (let count = 1; count < 4; count++) {
      if (form.children[`participant1children${count}Lastname`]) {
        firstChildrenNumber++;
      }
    }

    renderText(
      doc,
      `Par ailleurs ${fomr.first.lastname} a eu ${firstChildrenNumber} enfant${
        firstChildrenNumber > 1 ? "s" : ""
      } d'une union précédente :`
    );

    let tableFirstChildren = [];
    for (let count = 1; count < firstChildrenNumber + 1; count++) {
      tableFirstChildren.push(
        `${form.children[`participant1children${count}Lastname`]} ${
          form.children[`participant1children${count}Firstname`]
        }, né le ${moment(
          form.children[`participant1children${count}BirthDate`]
        ).format("DD MMMM YYYY")}, à ${
          form.children[`participant1children${count}BirthLocation`]
        }`
      );
    }
    renderBulletPoint(doc, tableFirstChildren);
  }

  renderText(
    doc,
    `Madame ${épouseNom} exerce la profession d${
      isVoyelle(form.second.profession) ? "'" : "e"
    } ${
      form.second.profession
    }. Elle déclare percevoir à ce titre un revenu mensuel moyen de ${
      form.second.income
    }€.`
  );

  if (!form.realProperty.natureFirstPropretyParticipant2) {
    renderText(doc, "Elle déclare n’être propriétaire d’aucun bien propre.");
  } else {
    let tableSecondOwnProperty = [];
    const labelOwnProperty = ["First", "Second", "Third", "Fourth"];
    for (let label of labelOwnProperty) {
      if (form.realProperty[`nature${label}PropretyParticipant2`])
        tableSecondOwnProperty.push(
          `${form.realProperty[`nature${label}PropretyParticipant2`]}, ${
            form.realProperty[`adress${label}PropretyParticipant2`]
          }.`
        );
    }

    renderText(
      doc,
      `Elle est propriétaire de${tableSecondOwnProperty > 1 ? "s" : ""} bien${
        tableSecondOwnProperty > 1 ? "s" : ""
      } propre${tableSecondOwnProperty > 1 ? "s" : ""} suivant${
        tableSecondOwnProperty > 1 ? "s" : ""
      } :`
    );

    renderBulletPoint(doc, tableSecondOwnProperty);
  }

  renderText(
    doc,
    `Monsieur ${form.first.lastname} exerce la profession d${
      isVoyelle(form.first.profession) ? "'" : "e"
    } ${
      form.first.profession
    }. Il déclare percevoir à ce titre un revenu mensuel moyen de ${
      form.first.income
    }€.`
  );

  if (!form.realProperty.natureFirstProprety) {
    renderText(doc, "Il déclare n’être propriétaire d’aucun bien propre.");
  } else {
    let tableFirstOwnProperty = [];
    const labelOwnProperty = ["First", "Second", "Third", "Fourth"];
    for (let label of labelOwnProperty) {
      if (form.realProperty[`nature${label}Proprety`])
        tableFirstOwnProperty.push(
          `${form.realProperty[`nature${label}Proprety`]}, ${
            form.realProperty[`adress${label}Proprety`]
          }.`
        );
    }
    renderText(
      doc,
      `Il est propriétaire de${tableFirstOwnProperty > 1 ? "s" : ""} bien${
        tableFirstOwnProperty > 1 ? "s" : ""
      } propre${tableFirstOwnProperty > 1 ? "s" : ""} suivant${
        tableFirstOwnProperty > 1 ? "s" : ""
      } :`
    );

    renderBulletPoint(doc, tableFirstOwnProperty);
  }

  renderText(
    doc,
    "Les époux confirment la réalité de leur situation financière et patrimoniale et sont avisés des dispositions de l’article 1477 du code civil qui prévoit : "
  );

  renderItallicIndentText(
    doc,
    "« Celui des époux qui aurait diverti ou recelé quelques effets de la communauté est privé de sa portion dans lesdits effets. De même, celui qui aurait dissimulé sciemment l'existence d'une dette commune doit l'assumer définitivement. »"
  );

  renderBlueTitle(doc, "CONSENTEMENT DES ÉPOUX");

  renderText(
    doc,
    "En application des dispositions des articles 229, 229-1 et 229-3 du Code Civil, les époux déclarent expressément qu’ils ont consenti mutuellement à leur divorce, et qu’ils se sont entendus sur la rupture de leur mariage et de ses effets dans les termes de la présente convention prenant forme d’un acte sous signature privée contresigné par avocats et déposé au rang des minutes d’un notaire."
  );

  renderText(
    doc,
    "Chacun des avocats signataires s’est assuré du consentement de son client."
  );

  renderBlueTitle(doc, "CONVENTION RELATIVE AUX EPOUX");

  renderIndentTitle(doc, "Sur le nom marital");

  if (!form.maritalName.isUsingParticipantName) {
    renderText(
      doc,
      `Madame ${form.second.birthname} n’a jamais pris le nom de son époux. `
    );
  } else if (!form.maritalName.isAgreeToGiveHisName) {
    renderText(
      doc,
      `A la suite du divorce, les époux ont convenu que Madame ${form.second.lastname} ${form.second.birthname} reprendra l’usage de son nom de jeune fille.`
    );
    renderText(
      doc,
      "Elle s’engage à ce titre à ne plus faire usage, en quelque circonstance que ce soit, du nom patronymique de son époux."
    );
  } else {
    renderText(
      doc,
      `En accord avec Monsieur ${form.first.lastname}, il est convenu que Madame ${form.second.lastname} ${form.second.birthname} conservera l’usage de son nom marital après le prononcé du divorce.`
    );
  }

  renderIndentTitle(doc, "Sur la résidence");

  if (!form.maritalHome.isLeavingTogether) {
    renderText(
      doc,
      "Les époux conviennent de fixer leurs domiciles respectifs aux adresses suivantes : "
    );

    renderBulletPoint(doc, [
      `Madame ${form.second.lastname} ${form.second.birthname} est domiciliée ${form.second.adress}`,
      `Monsieur ${form.first.lastname} est domicilié ${form.first.adress}`,
    ]);
  } else {
    renderText(
      doc,
      `Les époux sont encore domiciliés au domicile conjugal, en location, à la date de la signature des présentes, sis ${form.first.adress}.`
    );

    renderText(
      doc,
      `Les époux conviennent que ${
        form.maritalHome.participantKeepingAdress === "first"
          ? `Monsieur ${form.first.lastname}`
          : `Madame ${épouseNom}`
      } conservera le domicile conjugal, en location, sis à cette même adresse.`
    );

    renderText(
      doc,
      `${
        form.maritalHome.participantKeepingAdress === "first"
          ? `Madame ${épouseNom}`
          : `Monsieur ${form.first.lastname}`
      } s’engage à quitter le domicile conjugal dans un délai de ${
        form.maritalHome.participantLeavingAdressDate
      } suivant la date de dépôt de la présente convention de divorce.`
    );
  }

  renderIndentTitle(doc, "Sur les effets et vêtements personnels");

  if (form.propertyDistribution.isPersonnalGoodTaken) {
    renderText(
      doc,
      "Les époux déclarent qu’ils ont repris possession de leurs vêtements et effets personnels et de ce chef, être remplis de leurs droits. "
    );
  }

  if (form.propertyDistribution.isSharedVehicles) {
    const vehiclesArray = [];
    const vehicleLabelArray = ["first", "second", "third"];
    for (let label of vehicleLabelArray) {
      if (form.propertyDistribution[`${label}Vehicle`]) {
        vehiclesArray.push(
          `D’un véhicule ${
            form.propertyDistribution[`${label}Vehicle`]
          }, qui sera conservé par ${
            form.propertyDistribution[`${label}VehicleParticipantKeeper`]
          }`
        );
      }
    }

    if (vehiclesArray.length) {
      renderText(doc, "Par ailleurs, les époux sont propriétaires :");

      renderBulletPoint(doc, vehiclesArray);
    }
  }

  renderIndentTitle(doc, "Sur la date des effets du divorce");

  renderText(doc, "L’article 262-1 du Code civil prévoit que :");

  renderItallicIndentText(
    doc,
    "« La convention ou le jugement de divorce prend effet dans les rapports entre les époux, en ce qui concerne leurs biens :"
  );
  renderItallicIndentText(
    doc,
    "- lorsqu'il est constaté par consentement mutuel par acte sous signature privée contresigné par avocats déposé au rang des minutes d'un notaire, à la date à laquelle la convention réglant l'ensemble des conséquences du divorce acquiert force exécutoire, à moins que cette convention n'en stipule autrement »"
  );

  if (!form.wedding.dateEndWedding) {
    renderText(
      doc,
      "Les époux ont convenu que leur divorce prendra effet, en ce qui concerne leurs biens, à la date de dépôt de la présente convention au rang des minutes du Notaire désigné ci-après. "
    );
  } else {
    renderText(
      doc,
      `Les époux ont convenu que leur divorce prendra effet, en ce qui concerne leurs biens, à la date à laquelle ils sont cessé de cohabiter et de collaborer, soit le ${moment(
        form.wedding.dateEndWedding
      ).format("DD/MM/YYYY")}.`
    );
  }

  renderIndentTitle(doc, "Sur la prestation compensatoire");

  renderText(
    doc,
    "Les époux ont pris connaissance des dispositions des articles 270 et 271 du Code Civil :"
  );

  renderItallicIndentText(
    doc,
    "« Le divorce met fin au devoir de secours entre époux."
  );
  renderItallicIndentText(
    doc,
    "L'un des époux peut être tenu de verser à l'autre une prestation destinée à compenser, autant qu'il est possible, la disparité que la rupture du mariage crée dans les conditions de vie respectives. Cette prestation a un caractère forfaitaire. Elle prend la forme d'un capital dont le montant est fixé par le juge […]». "
  );

  renderText(doc, "et");

  renderItallicIndentText(
    doc,
    "« La prestation compensatoire est fixée selon les besoins de l'époux à qui elle est versée et les ressources de l'autre en tenant compte de la situation au moment du divorce et de l'évolution de celle-ci dans un avenir prévisible."
  );
  renderItallicIndentText(
    doc,
    "A cet effet, le juge prend en considération notamment :"
  );
  renderItallicIndentText(doc, "- la durée du mariage ;");
  renderItallicIndentText(doc, "- l'âge et l'état de santé des époux ;");
  renderItallicIndentText(
    doc,
    "- leur qualification et leur situation professionnelles ;"
  );
  renderItallicIndentText(
    doc,
    "- les conséquences des choix professionnels faits par l'un des époux pendant la vie commune pour l'éducation des enfants et du temps qu'il faudra encore y consacrer ou pour favoriser la carrière de son conjoint au détriment de la sienne ;"
  );
  renderItallicIndentText(
    doc,
    "- le patrimoine estimé ou prévisible des époux, tant en capital qu'en revenu, après la liquidation du régime matrimonial ;"
  );
  renderItallicIndentText(doc, "- leurs droits existants et prévisibles ;");
  renderItallicIndentText(
    doc,
    "- leur situation respective en matière de pensions de retraite en ayant estimé, autant qu'il est possible, la diminution des droits à retraite qui aura pu être causée, pour l'époux créancier de la prestation compensatoire, par les circonstances visées au sixième alinéa ». "
  );

  renderText(
    doc,
    `Compte tenu des dispositions des articles 270 et suivants du Code civil et eu égard aux éléments d’appréciation exprimés aux termes de l’article 271 dudit Code, il a été convenu entre les époux ${
      !form.compensatory.isCompensatory ? "qu'aucune" : "qu'une"
    } prestation compensatoire${
      !form.compensatory.isCompensatory ? " ne" : ""
    }  sera versée. `
  );

  if (form.compensatory.isCompensatory) {
    renderItallicBoldText(doc, "Rappel des éléments d’appréciation");

    renderText(
      doc,
      "Les parties, assistées de leurs avocats, ont pris connaissance des articles 270 et 271 du Code civil : "
    );

    renderItallicIndentText(
      doc,
      "« Le divorce met fin au devoir de secours entre époux."
    );
    renderItallicIndentText(
      doc,
      "L’un des époux peut être tenu de verser à l’autre une prestation destinée à compenser, autant qu’il est possible, la disparité que la rupture du mariage crée dans les conditions de vie respectives. Cette prestation a un caractère forfaitaire. Elle prend la forme d’un capital dont le montant est fixé par le juge."
    );
    renderItallicIndentText(
      doc,
      "Toutefois, le juge peut refuser d’accorder une telle prestation si l’équité le commande, soit en considération des critères prévus à l’article 271, soit lorsque le divorce est prononcé aux torts exclusifs de l’époux qui demande le bénéfice de cette prestation, au regard des circonstances particulières de la rupture. »"
    );
    renderItallicIndentText(
      doc,
      "« La prestation compensatoire est fixée selon les besoins de l’époux à qui elle est versée et les ressources de l’autre en tenant compte de la situation au moment du divorce et de l’évolution de celle-ci dans un avenir prévisible."
    );
    renderItallicIndentText(
      doc,
      "A cet effet, le juge prend en considération notamment : "
    );

    renderBulletPoint(doc, [
      "La durée du mariage ;",
      "L’âge et l’état de santé des époux ;",
      "Leur qualification et leur situation professionnelles ;",
      "Les conséquences des choix professionnels faits par l’un des époux pendant la vie commune pour l’éducation des enfants et du temps qu’il faudra encore y consacrer ou pour favoriser la carrière de son conjoint au détriment de la sienne ;",
      "Le patrimoine estimé ou prévisible des époux, tant en capital qu’en revenu, après la liquidation du régime matrimonial ;",
      "Leurs droits existants et prévisibles ;",
      "Leur situation respective en matière de pensions de retraite en ayant estimé, autant qu’il est possible, la diminution des droits à retraite qui aura pu être causée, pour l’époux créancier de la prestation compensatoire, par les circonstances visées au sixième alinéa. »",
    ]);

    renderBoldText(doc, "A / Analyse des critères");

    renderItallicBoldOutlineText(
      doc,
      `Situation de Monsieur ${form.first.firstname} ${form.first.lastname} `
    );

    renderItallicBoldText(doc, "Durée du mariage, âge et état de santé :");

    renderText(
      doc,
      `Le mariage des époux ${form.first.lastname} a duré ${calcDate(
        new Date(),
        new Date(form.wedding.weddingDate)
      )} 
    Monsieur ${form.first.lastname} est âgé de  ${calcDate(
        new Date(),
        new Date(form.first.birthdate)
      )}
    Il se déclare en bonne santé.`
    );

    renderItallicBoldText(
      doc,
      "Leur qualification et leur situation professionnelles "
    );

    renderText(
      doc,
      `Monsieur ${form.first.lastname} exerce la profession de ${form.first.profession}`
    );

    renderText(doc, `N° Sécurité sociale : ${form.first.socialSecurityNumber}`);

    renderItallicBoldText(doc, `Revenus :`);

    renderItallicText(
      doc,
      `Revenus professionnels :
      ${moment().subtract(1, "year").format("YYYY")} : ${
        form.first.totalIncome
      }€ annuels`
    );

    renderItallicText(
      doc,
      `Total des revenus professionnels :
      ${form.first.income}€/mois `
    );

    renderCenterBoldText(doc, "****");

    renderItallicBoldOutlineText(
      doc,
      `Situation de Madame ${form.second.firstname} ${épouseNom}`
    );

    renderItallicBoldText(doc, "Durée du mariage, âge et état de santé.- ");

    renderText(
      doc,
      `Le mariage des époux ${form.first.lastname} a duré ${calcDate(
        new Date(),
        new Date(form.wedding.weddingDate)
      )} 
    Madame ${form.second.lastname} est âgé de  ${calcDate(
        new Date(),
        new Date(form.second.birthdate)
      )}
    Elle se déclare en bonne santé.`
    );

    renderItallicBoldText(
      doc,
      "Qualification et leur situation professionnelles :"
    );

    renderText(
      doc,
      `Madame ${épouseNom} exerce la profession de ${form.second.profession}.`
    );

    renderBoldText(doc, "Revenus :");

    renderItallicText(
      doc,
      `Revenus professionnels :
        ${moment().subtract(1, "year").format("YYYY")} : ${
        form.second.totalIncome
      }€ annuels`
    );

    renderItallicText(
      doc,
      `Total des revenus professionnels :
        ${form.second.income}€/mois `
    );

    renderBoldText(
      doc,
      "B / Montant et modalités de versement de la prestation compensatoire"
    );

    renderText(
      doc,
      `Compte tenu des éléments d’appréciations définis par les articles 270 et 271 du Code civil et de leurs droits issus de la liquidation du régime matrimonial, les parties constatent qu’il existe une disparité de niveau de vie résultant du divorce et conviennent qu’il y a lieu au versement d’une prestation compensatoire au bénéfice de ${
        form.compensatory.compensatoryParticipantAsk === "first"
          ? `Monsieur ${form.first.lastname}`
          : `Madame ${épouseNom}`
      }.
  Les parties reconnaissent expressément avoir été informées qu’ils ne pourront formuler de demande ultérieure à ce titre, sauf les cas de révision prévus aux articles 275, 276, 276-3, 276-4 et 279 du Code civil. `
    );

    renderBoldText(
      doc,
      "Montant de la prestation compensatoire et modalités de règlement"
    );

    renderText(
      doc,
      `Il est convenu entre les parties d'un commun accord que ${
        form.compensatory.compensatoryParticipantAsk === "first"
          ? `Madame ${épouseNom}`
          : `Monsieur ${form.first.lastname}`
      } versera au profit de ${
        form.compensatory.compensatoryParticipantAsk === "first"
          ? `Monsieur ${form.first.lastname}`
          : `Madame ${épouseNom}`
      }, à titre de prestation compensatoire, la somme de ${
        form.compensatory.compensatoryMountantString
      } (${
        form.compensatory.compensatoryMountantNumber
      }€), correspondant à un abandon en capital par  ${
        form.compensatory.compensatoryParticipantAsk === "first"
          ? `Madame ${épouseNom}`
          : `Monsieur ${form.first.lastname}`
      } au profit de ${
        form.compensatory.compensatoryParticipantAsk === "first"
          ? `Monsieur ${form.first.lastname}`
          : `Madame ${épouseNom}`
      }.`
    );

    renderItallicBoldOutlineText(
      doc,
      "Les modalités de recouvrement de la prestation compensatoire sous forme de rente ou de rente viagère. -"
    );

    renderText(
      doc,
      "En cas de non-paiement de la prestation compensatoire sous forme de rente, le créancier dispose de plusieurs possibilités pour recouvrer les sommes dues : "
    );

    renderBulletPoint(doc, [
      "La procédure de paiement direct des pensions alimentaires des articles L. 213-1 et suivants du Code des procédures civiles d’exécution Les frais de procédures sont à la charge du débiteur.",
      "La procédure de saisine des rémunérations des articles R3252-11 et suivants du Code du travail si le débiteur est salarié.",
      "Le débiteur peut aussi recourir à la procédure de recouvrement du Trésor public prévue par la loi n°75-618 du 11 juillet 1975 relative au recouvrement public des pensions alimentaires.",
    ]),
      renderItallicBoldOutlineText(
        doc,
        "La révision de la prestation compensatoire sous forme de rente ou de rente viagère. -"
      );

    renderText(
      doc,
      "La révision de la prestation compensatoire sous forme de rente est fixée aux articles suivants :"
    );

    renderItallicIndentOutlineText(doc, "Article 276-3 du Code civil :");

    renderItallicText(
      doc,
      "« La prestation compensatoire fixée sous forme de rente peut être révisée, suspendue ou supprimée en cas de changement important dans les ressources ou les besoins de l'une ou l'autre des parties."
    );

    renderItallicText(
      doc,
      "La révision ne peut avoir pour effet de porter la rente à un montant supérieur à celui fixé initialement par le juge. »"
    );

    renderItallicIndentOutlineText(doc, "Article 276-4 du Code civil : ");

    renderItallicText(
      doc,
      "« Le débiteur d'une prestation compensatoire sous forme de rente peut, à tout moment, saisir le juge d'une demande de substitution d'un capital à tout ou partie de la rente. La substitution s'effectue selon des modalités fixées par décret en Conseil d'Etat. "
    );

    renderItallicText(
      doc,
      "Le créancier de la prestation compensatoire peut former la même demande s'il établit qu'une modification de la situation du débiteur permet cette substitution, notamment lors de la liquidation du régime matrimonial. "
    );

    renderItallicText(
      doc,
      "Les modalités d'exécution prévues aux articles 274, 275 et 275-1 sont applicables. Le refus du juge de substituer un capital à tout ou partie de la rente doit être spécialement motivé. »"
    );

    renderItallicBoldOutlineText(
      doc,
      "Les sanctions pénales encourues en cas de défaillance : délit d’abandon de famille. -"
    );

    renderItallicIndentOutlineText(doc, "Article 227-3 du Code pénal : ");

    renderItallicText(
      doc,
      "«Le fait, pour une personne, de ne pas exécuter une décision judiciaire, une convention judiciairement homologuée ou une convention prévue à l'article 229-1 du code civil lui imposant de verser au profit d'un enfant mineur, d'un descendant, d'un ascendant ou du conjoint une pension, une contribution, des subsides ou des prestations de toute nature dues en raison de l'une des obligations familiales prévues par le code civil, en demeurant plus de deux mois sans s'acquitter intégralement de cette obligation, est puni de deux ans d'emprisonnement et de 15 000 euros d'amende."
    );

    renderItallicText(
      doc,
      "Les infractions prévues par le premier alinéa du présent article sont assimilées à des abandons de famille pour l'application du 3° de l'article 373 du code civil. »"
    );
  }

  renderIndentTitle(doc, "Sur les impôts");

  if (form.aboutTaxes.isThePastTaxReturnSharedOrSplit === "shared") {
    renderText(
      doc,
      "Les époux établiront des déclarations distinctes et seront seuls responsables du montant y afférent à compter de l’année 2021 pour les revenus de 2020. "
    );

    renderText(
      doc,
      "Chacun des époux règlera les impôts sur les revenus 2020 au prorata de ses revenus"
    );
  } else {
    renderText(
      doc,
      "Les époux établissent d’ores et déjà des déclarations d’impôts séparées"
    );
  }

  renderIndentTitle(doc, "Sur les avantages matrimoniaux");

  renderText(
    doc,
    "Il est rappelé qu’en vertu des dispositions de l’article 265 du Code Civil, le divorce emporte révocation de plein droit des avantages matrimoniaux qui prennent effet à la dissolution du régime matrimonial ou au décès de l’un des époux et des dispositions à cause de mort accordés par un époux envers son conjoint par contrat de mariage ou pendant l’union"
  );

  renderText(
    doc,
    "Les époux confirment vouloir révoquer les avantages matrimoniaux à venir qu’ils auraient pu se consentir au cours de l’union"
  );

  renderIndentTitle(doc, "Sur la liquidation du régime matrimonial");

  renderText(
    doc,
    `Madame ${épouseNom} et Monsieur ${
      form.first.lastname
    } ont contracté mariage le ${moment(form.wedding.weddingDate).format(
      "DD/MM/YYYY"
    )} par devant l’Officier d’Etat Civil de la mairie de ${
      form.wedding.weddingLocation
    }.`
  );

  //QUESTION LIQUIDATION
  if (!form.wedding.isWeddingContrat && true) {
    renderText(
      doc,
      "Ils n’ont pas fait précéder leur union d’un contrat de mariage. Dès lors, les époux sont soumis au régime de la communauté de biens réduite aux acquêts. "
    );

    renderText(
      doc,
      "Ils n’ont procédé à aucune modification de leur régime matrimonial."
    );

    renderText(
      doc,
      "Les parties déclarent qu’elles ne possèdent aucun actif mobilier ou immobilier et aucun passif commun ou indivis, ni aucune créance entre époux ou d’indivision"
    );

    renderText(
      doc,
      "Les époux déclarent par ailleurs avoir parfaitement connaissance de leurs situations financières respectives, et se satisfaire de l’accord conclu entre eux à ce sujet."
    );

    renderText(
      doc,
      "Ils renoncent par conséquent à tous recours ultérieur à ce titre entre eux, ainsi qu’à l’encontre des rédacteurs et dépositaire de la présente convention."
    );

    renderText(doc, "En conséquence il n’y a pas lieu à liquidation.");

    renderText(doc, "Cela étant dit, les époux déclarent :");

    let arrayIsDebtWedding = [
      "Qu'ils ont procédé au partage amiable des meubles communs meublant le domicile conjugal, sans valeur vénale ;",
      "Qu'ils ont chacun repris chacun l'ensemble de leurs effets personnels ;",
    ];

    if (!form.debt.isDebtOrCredits) {
      arrayIsDebtWedding.push(
        "Qu'ils ont procédé au partage amiable des meubles communs meublant le domicile conjugal, sans valeur vénale ;"
      );
    }
    arrayIsDebtWedding = [
      ...arrayIsDebtWedding,
      "Qu'ils ont chacun repris chacun l'ensemble de leurs effets personnels ;",
    ];

    renderBulletPoint(doc, arrayIsDebtWedding);

    renderText(
      doc,
      "Les parties soussignées déclarent être intégralement remplies de leurs droits."
    );

    renderText(
      doc,
      `En conséquence, Monsieur ${form.first.lastname} et Madame ${épouseNom} renoncent à élever à l’avenir toutes réclamations ou contestations relatives à la liquidation et au partage intervenu entre eux ou à faire valoir la moindre créance, indemnité ou compensation dans le cadre des droits qu’ils avaient ou auraient pu tenir de leur régime matrimonial.`
    );
  }

  if (form.wedding.isWeddingContrat) {
    renderText(
      doc,
      `Les époux ont opté pour le régime de la séparation de biens, selon contrat reçu le ${
        form.wedding.weddingContratDate
      } par Maître ${form.wedding.weddingContratNotary}${
        !form.wedding.weddingContratNotaryCompanyName ||
        form.wedding.weddingContratNotaryCompanyName !== ""
          ? `, Notaire associé au sein de la ${form.wedding.weddingContratNotaryCompanyName}`
          : ""
      }, étude notariale située ${form.wedding.weddingContratNotaryAdress}.`
    );
  } else if (true) {
    //QUESTION nom du notaire de liquidation ???? TODO
    renderText(
      doc,
      `Les parties ont confié à l’Etude notariale ${form.wedding.weddingContratNotary} le soin d’établir un acte de liquidation et partage de leur régime matrimonial, lequel a été régularisé en date du [date] annexé à la présente convention et faisant corps avec elle.`
    );

    renderText(
      doc,
      `Les parties soussignées déclarent être intégralement remplies de leurs droits.`
    );

    renderText(
      doc,
      `En conséquence, Monsieur ${form.first.lastname} et Madame ${épouseNom} renoncent à élever à l’avenir toutes réclamations ou contestations relatives à la liquidation et au partage intervenu entre eux ou à faire valoir la moindre créance, indemnité ou compensation dans le cadre des droits qu’ils avaient ou auraient pu tenir de leur régime matrimonial.`
    );
  }

  if (form.debt.isDebtOrCredits) {
    renderIndentTitle(doc, "Sur le passif de communauté");

    renderText(doc, "Les époux ont contracté un crédit auprès de ");

    const creditLabel = ["first", "second", "third", "fourth", "fifth"];

    for (let label of creditLabel) {
      if (form.debt[`${label}SocietyDebts`]) {
        renderIndentText(
          doc,
          `${form.debt[`${label}SocietyDebts`]}, en date du ${moment(
            form.debt[`${label}DateStartContract`]
          ).format("DD/MM/YYYY")}, pour une durée de ${
            form.debt[`${label}CreditPeriod`]
          }, d’un montant de ${form.debt[`${label}AmountCredit`]}€`
        );

        renderIndentText(
          doc,
          `Les mensualités s’élèvent à ${form.debt[`${label}MensualityDebt`]}€`
        );

        renderIndentText(
          doc,
          `Le montant restant dû s’élève à  ${
            parseInt(form.debt[`${label}AmountCredit`]) -
            parseInt(form.debt[`${label}AmountRepaid`])
          }€`
        );

        renderIndentText(
          doc,
          `Il est convenu que cette dette sera remboursée par ${
            form.debt[`${label}CreditParticipantRepaid`]
          }`
        );
      }
    }

    //QUESTION
    renderText(
      doc,
      `Monsieur «Homme_Nom_de_Famille» a contracté un crédit auprès de :
        DANS LE FORMULAIRE LES DETTES SONT MUTALISéS
    `
    );

    renderText(
      doc,
      `Les époux sont toutefois informés qu’ils restent tous deux solidaires des dettes contractées pendant la durée du mariage. Qu’ainsi, en cas d’impayés, le créancier à la possibilité de se retourner contre l’un quelconque d’entre eux.`
    );
  }

  if (form.children.isChildren) {
    renderBlueTitle(doc, "CONVENTION RELATIVE AUX ENFANTS");

    renderIndentTitle(doc, "Sur l’autorité parentale");

    if (sharedChildrenNumber > 1) {
      renderText(doc, "L’autorité parentale sur les enfants :");
    } else {
      renderText(doc, "L’autorité parentale sur l’enfant :");
    }

    let arrayChildrenShared = [];
    let labelchildrenShared = [1, 2, 3, 4, 5];

    for (let label of labelchildrenShared) {
      if (form.children[`children${label}Lastname`]) {
        arrayChildrenShared.push(
          `${form.children[`children${label}Lastname`]} ${
            form.children[`children${label}Firstname`]
          }, né${form.children[`children${label}IsBoy`] ? "" : "e"} le ${moment(
            form.children[`children${label}BirthDate`]
          ).format("DD/MM/YYYY")}, à ${
            form.children[`children${label}BirthLocation`]
          }`
        );
      }
    }

    renderBulletPoint(doc, arrayChildrenShared);

    renderText(
      doc,
      `Sera exercée conjointement par Madame ${épouseNom} et Monsieur ${form.first.lastname}.`
    );

    renderText(
      doc,
      `A cet effet, ils devront notamment, prendre ensemble, dans l’intérêt de leurs enfants les décisions importantes concernant la santé, l’orientation scolaire, l’éducation et le changement de résidence.`
    );

    renderText(
      doc,
      `Ils devront également s’informer de l’organisation de la vie scolaire, activités sportives et culturelles, traitements médicaux, loisirs et vacances.`
    );

    renderText(
      doc,
      `Les parents s’engagent à permettre une libre communication de leurs enfants avec l’autre parent dans le respect de leur cadre de vie respectif, par le biais notamment de communication téléphonique ou tout autre support.`
    );

    renderText(
      doc,
      `Il est également rappelé les dispositions de l’article 373-2 du Code Civil qui dispose que : `
    );

    renderItallicText(
      doc,
      `« La séparation des parents est sans incidence sur les règles de dévolution de l'exercice de l'autorité parentale.
Chacun des père et mère doit maintenir des relations personnelles avec l'enfant et respecter les liens de celui-ci avec l'autre parent.
Tout changement de résidence de l'un des parents, dès lors qu'il modifie les modalités d'exercice de l'autorité parentale, doit faire l'objet d'une information préalable et en temps utile de l'autre parent. En cas de désaccord, le parent le plus diligent saisit le juge aux affaires familiales qui statue selon ce qu'exige l'intérêt de l'enfant. Le juge répartit les frais de déplacement et ajuste en conséquence le montant de la contribution à l'entretien et à l'éducation de l'enfant. »`
    );

    renderIndentTitle(doc, `Sur la fixation de la résidence des enfants`);

    if (form.children.sharedChildrenGuardAgreement) {
      renderText(
        doc,
        `D’un commun accord, la résidence habituelle des enfants est fixée au domicile de ${
          form.children.habitualResidence === "first"
            ? `Monsieur ${form.first.lastname}`
            : `Madame ${épouseNom}`
        } sis ${
          form.children.habitualResidence === "first"
            ? form.first.adress
            : form.second.adress
        }.`
      );

      renderText(
        doc,
        `${
          form.children.habitualResidence === "first"
            ? `Madame ${épouseNom}`
            : `Monsieur ${form.first.lastname}`
        } bénéficiera d’un droit de visite et d’hébergement fixé, à défaut de meilleur accord entre les parents, selon les modalités suivantes : `
      );

      renderBulletPoint(doc, [
        "En période scolaire :",

        "Les fins de semaines paires du vendredi sortie des classes au dimanche 18 heures",

        "Pendant les vacances scolaires :",

        "La première moitié des vacances scolaires les années paires et la seconde moitié les années impaires, avec un partage pour moitié des vacances d’été",
      ]);

      renderText(
        doc,
        `Le droit de visite et d’hébergement de ${
          form.children.habitualResidence === "first"
            ? `Madame ${épouseNom}`
            : `Monsieur ${form.first.lastname}`
        } s’étendra aux jours fériés et chômés précédant ou suivant la période considérée. `
      );

      renderText(
        doc,
        `Les dates de vacances scolaires à prendre en compte sont celles de l’académie dans le ressort de laquelle l’enfant est scolarisé.`
      );

      renderText(
        doc,
        `Il sera également rappelé que la moitié des vacances scolaires est décomptée à partir du premier jour de la date officielle des vacances. `
      );

      renderText(
        doc,
        `A défaut d’avoir exercé son droit dans la première heure en période scolaire ou dans la première journée pendant les vacances scolaires, ${
          form.children.habitualResidence === "first"
            ? `Madame ${épouseNom}`
            : `Monsieur ${form.first.lastname}`
        } sera réputé y avoir renoncé pour toute la période considérée. `
      );
    } else {
      renderText(
        doc,
        `D’un commun accord, les parents ont choisi le mode de résidence alternée et sauf meilleur accord ou modification exceptionnelle pour raison d’organisation, ils ont alors prévu que cette résidence alternée s’exercera comme suit :`
      );

      renderBulletPoint(doc, [
        "pendant l’année scolaire :",

        "une semaine sur  deux à compter du dimanche soir 18h au dimanche suivant 18h.",

        "pendant les vacances scolaires :",

        "une semaine sur  deux pendant les petites vacances, du vendredi après l’école soir semaine S au samedi 12h semaine S+1",
        "un mois chacun pour les grandes vacances d’été,",
      ]);

      renderText(
        doc,
        `étant précisé que les parents se partageront le soir de Noël et le réveillon du Nouvel An, et par ailleurs que la mère aura l’enfant le jour de la fête des mères, et le père le jour de la fête des pères. `
      );

      renderText(
        doc,
        `Les parties conviennent par ailleurs que la résidence de l’enfant chez la mère ou le père s’étendra au jour férié qui précède ou suit la fin de semaine pendant laquelle s’exerce ce droit pour l’un ou l’autre des parents, dès lors que les petites vacances scolaires débuteront ou se termineront par un jour férié. `
      );

      renderText(
        doc,
        `En dehors des vacances scolaires, il en sera de même lorsque le jour férié s'étendra après le week-end au lundi. 
`
      );

      renderText(
        doc,
        `Il est précisé que les époux ayant opté pour une garde alternée, ils répartiront entre eux pour moitié tout montant reçu au titre des droits versés par la Caisse d’Allocations Familiales.`
      );
    }

    renderIndentTitle(
      doc,
      `Sur la contribution à l’entretien et l’éducation des enfants`
    );

    if (form.children.isAlimony) {
      renderText(
        doc,
        `Les époux conviennent d’une contribution à l’entretien et l’éducation des enfants à la charge de ${
          form.children.alimonyParticipantAsk === "first"
            ? `Madame ${épouseNom}`
            : `Monsieur ${form.first.lastname}`
        } à hauteur de ${form.children.alimony}€ par enfant et par mois soit ${
          parseInt(form.children.alimony) * sharedChildrenNumber
        }€ euros au total. `
      );

      renderText(
        doc,
        `Cette contribution sera versée par ${
          form.children.alimonyParticipantAsk === "first"
            ? `Madame ${épouseNom}`
            : `Monsieur ${form.first.lastname}`
        } entre les mains de ${
          form.children.alimonyParticipantAsk === "first"
            ? `Monsieur ${form.first.lastname}`
            : `Madame ${épouseNom}`
        } avant le ${form.children.alimonyDate} de chaque mois. `
      );

      renderText(
        doc,
        `Cette contribution sera due jusqu’à ce que l${
          sharedChildrenNumber > 1 ? "es" : "'"
        } enfant${sharedChildrenNumber > 1 ? "s" : ""} soi${
          sharedChildrenNumber > 1 ? "en" : ""
        }t indépendant${sharedChildrenNumber > 1 ? "s" : ""} financièrement. `
      );

      renderText(
        doc,
        `Elle sera indexée sur l’indice des prix à la consommation de l’ensemble des ménages, série hors tabac, et révisée le 1er janvier de chaque année en fonction des variations subies par cet indice, l’indice de référence étant celui du mois et de l’année du prononcé du divorce et l’indice de révision le dernier publié à la date de la révision.`
      );

      renderText(doc, `Il sera procédé comme suit :`);

      renderText(
        doc,
        `                              Nouveau montant   =    Montant initial x dernier indice connu au 1er janvier	`
      );

      renderText(
        doc,
        `------------------------------------------------------------
Indice du mois et de l’année du jugement de divorce `
      );

      renderText(
        doc,
        `Il incombe au débiteur de la pension de calculer le montant de l’indexation et de revaloriser la pension au 1er janvier de chaque année ;`
      );

      renderText(
        doc,
        `Les frais de scolarité, frais extrascolaires, et les frais médicaux non remboursés par la sécurité sociale ou la mutuelle seront pris en charge par moitié entre les deux parents. 
`
      );

      renderText(
        doc,
        `Les époux sont informés, en application des dispositions de l’article 465-1 du code de procédure civile, qu’en cas de défaillance du débiteur de la contribution dans le règlement des sommes dues :
`
      );

      renderText(
        doc,
        `1° Le créancier peut obtenir le règlement forcé en utilisant à son choix une ou plusieurs voies d’exécution suivante :`
      );

      renderText(
        doc,
        `- saisie-attribution entre les mains d’un tiers
- autres saisies
- paiement direct entre les mains de l’employeur (saisie-arrêt sur salaire)
- recouvrement direct par l’intermédiaire du Procureur de la République
`
      );

      renderText(
        doc,
        ` 2° Le débiteur encourt les peines des articles 227-3 du Code Pénal qui dispose que : 
`
      );

      renderItallicText(
        doc,
        `« Le fait, pour une personne, de ne pas exécuter une décision judiciaire ou une convention judiciairement homologuée lui imposant de verser au profit d'un enfant mineur, d'un descendant, d'un ascendant ou du conjoint une pension, une contribution, des subsides ou des prestations de toute nature dues en raison de l'une des obligations familiales prévues par le code civil, en demeurant plus de deux mois sans s'acquitter intégralement de cette obligation, est puni de deux ans d'emprisonnement et de 15 000 euros d'amende.
Les infractions prévues par le premier alinéa du présent article sont assimilées à des abandons de famille pour l'application du 3° de l'article 373 du code civil. »
`
      );

      renderText(
        doc,
        `Et de celles de l’article 227-29 du même code qui dispose que : `
      );

      renderItallicText(
        doc,
        `« Les personnes physiques coupables des infractions prévues au présent chapitre encourent également les peines complémentaires suivantes :`
      );

      renderItallicText(
        doc,
        `1° L'interdiction des droits civiques, civils et de famille, suivant les modalités définies à l'article 131-26 ;
`
      );

      renderItallicText(
        doc,
        `2° La suspension, pour une durée de cinq ans au plus, du permis de conduire, cette suspension pouvant être limitée à la conduite en dehors de l'activité professionnelle ;`
      );

      renderItallicText(
        doc,
        `3° L'annulation du permis de conduire avec interdiction de solliciter la délivrance d'un nouveau permis pendant cinq ans au plus ;`
      );

      renderItallicText(
        doc,
        `4° L'interdiction, pour une durée de cinq ans au plus, de quitter le territoire de la République ;
`
      );

      renderItallicText(
        doc,
        `5° La confiscation de la chose qui a servi ou était destinée à commettre l'infraction ou de la chose qui en est le produit ;
`
      );

      renderItallicText(
        doc,
        `6° L'interdiction, soit à titre définitif, soit pour une durée de dix ans au plus, d'exercer une activité professionnelle ou bénévole impliquant un contact habituel avec des mineurs ;
`
      );

      renderItallicText(
        doc,
        `7° L'obligation d'accomplir un stage de responsabilité parentale, selon les modalités fixées à l'article  131-35-1 »
`
      );
    } else {
      renderText(
        doc,
        `
Les époux conviennent qu’aucune contribution à l’entretien et à l’éducation des enfants ne sera versée.
`
      );
    }

    renderIndentTitle(
      doc,
      `Sur le rattachement administratif et fiscal des enfants
`
    );

    if (sharedChildrenNumber === 1) {
      renderText(
        doc,
        `Les époux conviennent que les enfants seront rattachés fiscalement  «Rattachement_fiscal_supprimer_les_menti». 
`
      );
    } else {
      renderIndentTitle(
        doc,
        `Sur l’information de l’enfant mineur capable de discernement`
      );
    }

    if (sharedChildrenNumber === 1) {
      renderText(doc, `Les époux déclarent que leur enfant :`);
    } else {
      renderText(doc, `Les époux déclarent que leurs enfants :`);
    }

    renderBulletPoint(doc, arrayChildrenShared);

    //IF CHILDREN SHARED ===1 && age 7 ans
    let countChildrenSharedNot7 = 0;
    let date7yearsAgo = new Date();
    date7yearsAgo.setFullYear(date7yearsAgo.getFullYear() - 7);
    for (let label of labelchildrenShared) {
      if (
        moment(form.children[`children${label}BirthDate`]).isAfter(
          date7yearsAgo
        )
      ) {
        countChildrenSharedNot7++;
      }
    }
    if (sharedChildrenNumber - countChildrenSharedNot7 === 1) {
      renderText(
        doc,
        `Enfant du couple pourvu de discernement, a été régulièrement informé de son droit d’être entendu par un juge, par application de l’article 388–1 du Code civil, et qu’il n’entend pas faire usage de cette faculté.
`
      );
    }

    if (sharedChildrenNumber - countChildrenSharedNot7 > 1) {
      renderText(
        doc,
        `Enfants du couple pourvus de discernement, ont été régulièrement informés de leur droit d’être entendus par un juge, par application de l’article 388–1 du Code civil, et qu’ils n’entendent pas faire usage de cette faculté.
`
      );
    }

    if (countChildrenSharedNot7 === 1) {
      renderText(
        doc,
        `N’est pas doué de discernement, compte tenu de son âge. L’information prévue à l’article 388-1 du Code civil n’a donc pas été portée à sa connaissance.
`
      );
    }

    if (countChildrenSharedNot7 > 1) {
      renderText(
        doc,
        `Ne sont pas doués de discernement, compte tenu de leur âge. L’information prévue à l’article 388-1 du Code civil n’a donc pas été portée à leur connaissance.
`
      );
    }
  }

  renderBlueTitle(doc, `Dépôt AU RANG DES MINUTES DU NOTAIRE`);

  renderText(
    doc,
    `La présente convention sera déposée au rang des minutes de Maître «Notaire_prénom_et_nom», «Notaire_adresse», qui sera chargé de contrôler le respect des exigences formelles prévues aux articles 1° à 6° de l'article 229-3 du Code civil ainsi que le respect du délai de réflexion prévu à l'article 229-4 du Code Civil. 
`
  );

  renderText(
    doc,
    `A cet effet, seront annexés aux présentes les justificatifs d'envois par lettre recommandée avec avis de réception.`
  );

  //QUESTION qui est le notaire à envoyer TODO VARIABLE
  renderText(
    doc,
    `Maître ${form.first.selfLawyer}, Conseil de Monsieur ${form.first.lastname}, est expressément désigné pour adresser à Maître «Notaire_prénom_et_nom», Notaire, la convention de divorce et ses annexes aux fins de dépôt au rang de ses minutes, dans le délai de sept jours suivant la date de la signature de la convention par les époux ${form.first.lastname}-${form.second.lastname} et leurs avocats. `
  );

  renderText(
    doc,
    `Le mariage prendra fin, par l'effet de la présente convention, au jour du dépôt au rang des minutes du Notaire qui donnera force exécutoire et date certaine à la convention, et ce conformément aux dispositions des articles 260, 1° et 229-1 alinéas 2 et 3 du Code Civil.`
  );
  //QUESTION qui est le notaire à envoyer TODO VARIABLE
  renderText(
    doc,
    `Maître «Notaire_prénom_et_nom», Notaire,  délivrera une attestation de dépôt à chaque partie`
  );

  if (form.wedding.isConsortForeign) {
    renderBlueTitle(
      doc,
      `ELEMENT D’EXTRANEITE – TRANSCRIPTION DU DIVORCE A L’ETRANGER`
    );

    renderText(
      doc,
      `Si l’un des époux est de nationalité étrangère, celui-ci est informé par la présente clause du fait que le divorce par consentement mutuel de droit français, en vigueur depuis le 1er janvier 2017, enregistré par un Notaire, et non par un juge, n’est pas reconnu à l’heure actuelle par certains systèmes juridiques étrangers (Algérie, Tunisie, Maroc, Mali, Sénégal entre autres).`
    );

    renderText(
      doc,
      "Les époux ont été invités à consulter les autorités du pays dont ils ont la nationalité (consulat, ambassade), afin de se renseigner sur la procédure applicable en vigueur."
    );

    renderText(
      doc,
      "Il peut être nécessaire, pour que le divorce soit transcrit dans ces pays, de mener sur place une procédure de divorce distincte."
    );

    renderBoldText(
      doc,
      "Les époux déclarent avoir été informés de cette situation juridique, et excluent d’engager toute responsabilité des Avocats ou du Notaire désigné dans les présentes."
    );
  }

  renderBlueTitle(doc, "TRANSCRIPTION AUPRES DES SERVICES D’état CIVIL");

  renderText(
    doc,
    `L’avocat de Monsieur ${form.first.lastname}, Maître ${form.first.selfLawyer}, adressera l’attestation de dépôt de la convention à l’officier d’état civil du lieu de leur mariage aux fins de la transcription de la mention du divorce en marge de l'acte de mariage.`
  );

  renderBlueTitle(doc, "FRAIS DE LA PROCEDURE");

  renderBoldOutlineText(doc, "Coût du divorce :");

  renderText(
    doc,
    "Les époux déclarent assumer chacun les frais et honoraires de leurs avocats respectifs."
  );

  renderText(
    doc,
    "Les frais de dépôt du présent acte de 50,40 euros T.T.C. ainsi que les droits d’enregistrement et de partage des présentes seront pris en charge par les époux par moitié."
  );

  renderText(
    doc,
    "Au moyen de la présente convention, les époux déclarent être remplis de leurs droits et renoncent, expressément à élever dans l’avenir toute contestation à ce sujet."
  );

  renderBlueTitle(doc, "AFFIRMATION DE SINCERITE");

  renderText(
    doc,
    "Les parties affirment sous les peines édictées par l’article 1837 du CGI que le présent acte ne contient aucune information ou dissimulation frauduleuse et qu’il n’a pas été modifié ni contredit par aucune contre lettre."
  );

  renderText(
    doc,
    "Elles reconnaissent avoir été informées par leur conseil des peines encourues en cas d’inexactitude des éléments qu’elles ont déclarés sous leur propre responsabilité."
  );

  renderText(
    doc,
    "Elles déclarent que leur identité est conforme à celles exposées en tête de la convention de divorce, qu’elles ne sont pas dans un état civique, civil ou commercial mettant obstacle à la libre disposition de leurs biens ou à leur libre capacité."
  );

  renderBlueTitle(doc, "INFORMATION ET CONSEILS DES PARTIES");

  renderText(
    doc,
    `Maître ${form.second.selfLawyer}, conseil de Madame ${épouseNom} et Maître ${form.first.selfLawyer}», Conseil de Monsieur ${form.first.lastname}, après avoir donné lecture de cet acte aux parties et recueilli leurs signatures sur ledit acte, à la date mentionnée ci-après, le contresignent, avec l’accord des parties. `
  );

  renderText(
    doc,
    "Conformément à l’article 66-3-1 de la loi du 31 décembre 1971, ces contreseings attestent que chacun d’eux a pleinement éclairé la partie qu’il conseille sur les conséquences juridiques de cet acte, ce que les parties reconnaissent, chacune pour ce qui la concerne."
  );

  renderText(
    doc,
    "Chacun des avocats contresignataires de cet acte a personnellement vérifié l’identité et la capacité des signataires."
  );

  renderCenterBoldText(
    doc,
    "LES EPOUX DECLARENT ETRE INFORMES DE CE QUE LEUR CONVENTION EST OPPOSABLE AUX TIERS."
  );

  renderBoldOutlineText(doc, "ENONCIATIONS A L’ACTE");

  renderText(
    doc,
    "Les parties soussignées reconnaissent que les rédacteurs des présentes n’ont fait que rédiger à leur gré la convention arrêtée entre elles et déclarent qu’elles les dégagent de toute responsabilité quant à leurs déclarations et énonciations."
  );

  renderBlueTitle(doc, "RECOURS A UNE PROCEDURE AMIABLE");

  renderText(
    doc,
    "En cas de difficulté d’exécution des présentes et de leur suite, et notamment en cas de survenance d’un élément nouveau en ce qui concerne la résidence des enfants, les droits de visites et d’hébergement ou les pensions alimentaires, les parties conviennent de tenter de recourir avant toute saisine des juridictions à un mode alternatif de règlement des litiges (décret du 11 mars 2016 sur le préalable amiable)."
  );

  renderBlueTitle(doc, "SIGNATURE APRES DELAI DE REFLEXION");

  renderText(
    doc,
    "En application des dispositions de l’article 229-4 du code civil, le projet de la présente convention de divorce a été adressée aux époux au moins quinze jours avant la signature des présentes ;"
  );

  renderText(
    doc,
    `Maître ${form.first.selfLawyer}, Conseil de Monsieur ${form.first.lastname}, a adressé le projet de convention par lettre recommandée avec avis de réception le __/__/____, reçue le __/__/____.`
  );

  renderText(
    doc,
    `Maître ${form.second.selfLawyer}, Conseil de Madame ${épouseNom} a adressé le projet de convention par lettre recommandée avec avis de réception le __/__/____, reçue le __/__/____.`
  );

  renderText(
    doc,
    "La convention de divorce  constitue  un  contrat  à  terme  au  sens  de  l’article  1305  du code  civil,  qui  engage  les  parties  de  manière  irrévocable,  sauf  consentement  mutuel  des parties  pour  y  renoncer  ou  pour  les  causes  que  la  loi  autorise  (article  1193  du  code  civil)."
  );

  renderText(
    doc,
    "Seuls les effets de la convention, et donc l'exigibilité des obligations  de  chacun  des  époux,  sont  différés  jusqu'au dépôt  de  l'acte  au  rang  des  minutes  du  notaire  mais  la  force  obligatoire  de  la  convention s'impose  aux  parties  dès  la  signature.  "
  );

  renderText(
    doc,
    "Il s’ensuit donc que dans l’hypothèse où l’un des  époux  se  rétracterait  entre  la  signature  de  la  convention  et  son dépôt  au  rang  des  minutes,  le  notaire  doit  quand  même  procéder  à  l’enregistrement  de  la convention (Circulaire du ministère de la Justice  du 26 janvier 2017, fiche 6)."
  );

  renderText(
    doc,
    "Après avoir constaté que le délai de réflexion prévu à l’article 229-4 du code civil était expiré, les époux, assistés de leurs conseils respectifs, ont confirmé leur intention de consentir mutuellement à leur divorce et ont apposé leurs signatures au bas des présentes."
  );

  renderSpacing(doc);
  renderSpacing(doc);

  renderText(doc, "Fait à Paris, le ");

  renderText(doc, "En 5 exemplaires originaux ");

  renderSpacing(doc);

  doc.image(path.join() + "/pictures/ActeDAvocat.png", 270, null, {
    width: 60,
  });

  //   doc.text("", null, 220);

  renderSpacing(doc);
  renderBottomSignature(doc, form);

  doc.addPage();

  renderCenterBoldText(doc, "ANNEXES");

  let arrayAnnex = [
    `Copie de la carte d’identité de Madame ${épouseNom}`,
    `Copie de la carte d’identité de Monsieur ${form.first.lastname}`,
    `Copie du livret de famille`,
    `Original de l’extrait d’acte de mariage`,
    `Original de l’extrait d’acte de naissance de Madame ${épouseNom}`,
    `Original de l’extrait d’acte de naissance de Monsieur ${form.first.lastname}`,
  ];

  if (form.children.isChildren || form.children.isPreviousChildren) {
    arrayAnnex.push(`Original des extraits d’actes de naissance des enfants`);
  }

  arrayAnnex = [
    ...arrayAnnex,
    `Preuve de dépôt et de réception de l’envoi du projet de convention de divorce par l’Avocat de Madame ${épouseNom} `,
    `Preuve de dépôt et de réception de l’envoi du projet de convention de divorce par l’Avocat de Monsieur ${form.first.lastname}`,
    `Preuve du consentement de chacun des époux à l’envoi de la notification de la convention de divorce par recommandé électronique.`,
  ];

  let countChildrenSharedNot7 = 0;
  let date7yearsAgo = new Date();
  date7yearsAgo.setFullYear(date7yearsAgo.getFullYear() - 7);
  const labelchildrenShared = [1, 2, 3, 4, 5];
  for (let label of labelchildrenShared) {
    if (
      moment(form.children[`children${label}BirthDate`]).isAfter(date7yearsAgo)
    ) {
      countChildrenSharedNot7++;
    }
  }
  if (countChildrenSharedNot7 > 0) {
    arrayAnnex.push(
      `Formulaire d’information de l’enfant doué de discernement`
    );
  }

  if (form.realProperty.isRealProperty) {
    arrayAnnex.push(`Attestations art. 272 du Code civil`);
  }

  //QUESTION LIQUIDATION
  if (true) {
    arrayAnnex.push(`Etat liquidatif `);
  }

  if (form.wedding.isWeddingContrat) {
    arrayAnnex.push(`Copie du contrat de mariage `);
  }

  renderBulletPoint(doc, arrayAnnex);

  // Finalize PDF file
  doc.end();

  const buffer = await new Promise((resolve, reject) => {
    stream.on("finish", async function () {
      fs.readFile("doc/pdf/" + random + "output.pdf", function (err, data) {
        fs.unlink("doc/pdf/" + random + "output.pdf", function (err) {
          console.log(err);
        });
        resolve(data);
      });
    });
  });
  return buffer;
}

async function generateAnnexePdf({ client }) {
  const user = await User.findOne();
  const folder = await Folder.findById(user.folders[0]);
  const form = folder.form;

  const doc = new PDFDocument();
  const fs = require("fs");
  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream("outputAnnexe.pdf"));

  //ARNAUD SARRAILHé

  renderRightTextBold(doc, `${client.gender}`);
  renderRightTextBold(doc, `${client.firstname}`);
  renderRightTextBold(doc, `${client.lastname} ${client.birthname}`);
  renderRightText(doc, `${client.adress}`);
  renderRightText(doc, `${client.zipCode} ${client.city}`);

  //   renderRightTextBold(doc, `PAR LRAR ELECTRONIQUE : `);
  //   renderRightText(doc, `${client.email}`);

  doc.end();
}

function renderSpacing(doc) {
  doc.moveDown(1);
}

function renderBottomSignature(doc, form) {
  doc
    .moveDown(3)
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(`Monsieur ${form.first.lastname}`, 150, null, {
      continued: true,
    })
    .text(
      `Madame ${form.second.birthname} épouse ${form.second.lastname}`,
      250,
      null,
      {}
    )
    .moveDown(7);

  doc
    .font("Times-Roman")
    .fillColor("#000")
    .text(`Maître ${form.first.selfLawyer}`, 150, null, {
      continued: true,
    })
    .text(`Maître ${form.first.selfLawyer} `, 250, null, {})
    .moveDown(9)
    .text("", 75, null);
}

function renderArticle(doc, title, paragraphArray) {
  doc
    .font("Times-Bold")
    .fontSize(12)
    .fillColor("#000")
    .text(title, {
      align: "center",
      underline: true,
    })
    .moveDown(1);

  paragraphArray.forEach((para) => {
    doc
      .font("Times-Roman")
      .fontSize(12)
      .fillColor("#000")
      .text(para, {
        align: "justify",
        oblique: true,
      })
      .moveDown(1);
  });
  doc.moveDown(0.5);
}

function renderCenterBoldText(doc, text) {
  doc
    .moveDown(1)
    .fontSize(14)
    .font("Times-Bold")
    .fillColor("#000")
    .text(text, {
      align: "center",
    })
    .moveDown(2);
}

function renderText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(text, {
      align: "jusitfy",
    })
    .moveDown(1);
}

function renderRightText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(text, 400)
    .moveDown(0.5);
}

function renderRightTextBold(doc, text) {
  doc
    .font("Times-Roman")
    .fillColor("#000")
    .text(text, 400, null, { bold: true })
    .moveDown(0.5);
}

function renderBulletPoint(doc, pointArray) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text("", 125, null)
    .list(pointArray, {
      align: "jusitfy",
    })
    .text("", 75, null)
    .moveDown(1);
}

function renderBlueTitle(doc, title) {
  doc
    .fontSize(16)
    .moveDown(1)
    .font("Times-Bold")
    .fillColor("#1e7b9e")
    .text(title, {
      align: "center",
      oblique: true,
    })
    .moveDown(2);
}

function renderIndentTitle(doc, title) {
  doc
    .fontSize(12)
    .moveDown(1)
    .font("Times-Bold")
    .fillColor("#000")
    .text(`${title}`, 125, null, {
      underline: true,
    })
    .text("", 75, null)
    .moveDown(2);
}

function renderTextTiret(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(`    -     ${text}`);
}

function renderIndentText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(`${text}`, 125, null)
    .text("", 75, null)
    .moveDown(1);
}

function renderItallicIndentText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(`${text}`, 125, null, { oblique: true })
    .text("", 75, null)
    .moveDown(1);
}

function renderItallicIndentOutlineText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(`${text}`, 125, null, { oblique: true, underline: true })
    .text("", 75, null)
    .moveDown(1);
}

function renderOutlineText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(`${text}`, { outline: true })
    .moveDown(1);
}

function renderItallicBoldText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Bold")
    .fillColor("#000")
    .text(text, { oblique: true })
    .moveDown(1);
}

function renderBoldText(doc, text) {
  doc.fontSize(12).font("Times-Bold").fillColor("#000").text(text).moveDown(1);
}

function renderBoldOutlineText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Bold")
    .fillColor("#000")
    .text(text, { underline: true })
    .moveDown(1);
}

function renderItallicBoldOutlineText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Bold")
    .fillColor("#000")
    .text(text, { oblique: true, underline: true })
    .moveDown(1);
}

function renderItallicOutlineText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(text, { oblique: true, underline: true })
    .moveDown(1);
}

function renderItallicText(doc, text) {
  doc
    .fontSize(12)
    .font("Times-Roman")
    .fillColor("#000")
    .text(text, { oblique: true })
    .moveDown(1);
}

function calcDate(date1, date2) {
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);

  months = months - years * 12;

  var message = "";
  message += years + " ans";

  return message;
}

function isVoyelle(string) {
  if (!string) {
    return false;
  }
  if (
    string[0].toLowerCase() === "a" ||
    string[0].toLowerCase() === "e" ||
    string[0].toLowerCase() === "i" ||
    string[0].toLowerCase() === "o" ||
    string[0].toLowerCase() === "u" ||
    string[0].toLowerCase() === "y"
  ) {
    return true;
  }
  return false;
}

module.exports = {
  generateAnnexePdf,
  generatePdf,
};

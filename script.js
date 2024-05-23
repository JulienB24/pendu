// Liste de mots possibles

const mots = [
  "environnements",
  "standardisasse",
  "reinitialisees",
  "suroxyderaient",
  "desalignassent",
  "non-agressions",
  "contrebattrons",
  "aiguillonnames",
  "delabialisates",
  "desaimantasses",
  "renegociassent",
  "thermometrique",
  "bourgeonneriez",
  "versificateurs",
  "rappropriasses",
  "approvisionner",
  "heterogeneites",
  "chatouilleriez",
  "vesses-de-loup",
  "acagnardassiez",
  "reamenageaient",
  "trifouillasses",
  "precautionnons",
  "compromissions",
  "encouragements",
  "rechampiraient",
  "circonviendras",
  "recristallisat",
  "escomptassions",
  "sacralisations",
  "criticaillasse",
  "revolveriserez",
  "desagregeaient",
  "cailloutassent",
  "compartimentes",
  "machouilleront",
  "feignanterions",
  "soixante-seize",
  "desenvenimions",
  "contre-minames",
  "russifications",
  "encapuchonnera",
  "decouchassions",
  "rebouchassions",
  "cautionnerions",
  "enchatonnaient",
  "reproduisaient",
  "decongelassiez",
  "desencombrasse",
  "plastronnasses",
  "chimiotherapie",
  "debrouillerait",
  "cisaillassions",
  "hypnotisassent",
  "redecouvrirons",
  "brutalisassent",
  "challengerions",
  "antisatellites",
  "reexpediassiez",
  "ronsardiserent",
  "caracteriserai",
  "convainquirent",
  "claquemurerais",
  "intraveineuses",
  "biquotidiennes",
  "extravaguerais",
  "inflorescences",
  "surcomprimates",
  "pinailleraient",
  "embrigadassiez",
  "gouailleraient",
  "decarcasserons",
  "decalotterions",
  "inventorierais",
  "squatterisions",
  "depersonnalise",
  "multipropriete",
  "extravasassiez",
  "paraisonnerait",
  "transpositions",
  "atrophieraient",
  "redistribuions",
  "tonitrueraient",
  "inhospitaliere",
  "fraterniserons",
  "diaphanoscopie",
  "pied-de-chevre",
  "maquereauteras",
  "denasaliseriez",
  "electrisassent",
  "gadgetisassent",
  "mamelonnassions",
  "braconneraient",
  "desapprobateur",
  "shampouinasses",
  "mathematisames",
  "entrelarderais",
  "bouillonnantes",
  "manchonnassent",
  "arrerageassiez",
  "predestinaient",
  "porte-chapeaux",
  "embusqueraient",
  "conciliassions",
  "reinjectassent",
  "declavetassiez",
  "solidariserait",
  "planificatrice",
  "cavalcaderions",
  "soumissionnera",
  "desenrhumasses",
  "requinquassent",
  "mesestimations",
  "teleguidassent",
  "congreganistes",
  "multiplicateur",
  "insensibilisez",
  "coulissassions",
  "decentralisais",
  "eudiometriques",
  "numeriseraient",
  "mamelonnassiez",
  "clayonneraient",
  "copposedassent",
  "fortifieraient",
  "entrelacassent",
  "bureaucratiser",
  "prodiguassions",
  "septuagenaires",
  "arraisonnerait",
  "beatifieraient",
  "retransmettais",
  "delimitassions",
  "adenocarcinome",
  "selectionnerai",
  "dedifferenciai",
  "monographiques",
  "electrocutates",
  "redactionnelle",
  "entrevouterais",
  "depropaniseras",
  "refrigererions",
  "engazonnassent",
  "solennisassiez",
  "paillassonnons",
  "sophistiquates",
  "traumatiseront",
  "documentariste",
  "digtaliserions",
  "epontillassent",
];

let motChoisi = mots[Math.floor(Math.random() * mots.length)];
let motAffiche = motChoisi.replace(/[a-z]/g, "_ "); // Remplace toutes les lettres par des tirets bas

document.getElementById("mots").textContent = motAffiche.toUpperCase(); // Convertit le mot affiché en majuscules

let tentatives = 9;
let devineLettre = []; // Tableau pour stocker les lettres devinées

message = document.querySelector("#message");
keyboard = document.querySelector("#keyboard");
constrejouer = document.querySelector("#rejouer");
rejouer.style.display = "none";

rejouer.addEventListener("click", function () {
  // Recharger la page pour recommencer le jeu
  location.reload();
});
function devinerLettre(lettre) {
  if (!motChoisi.includes(lettre)) {
    // Si la lettre devinée n'est pas dans le mot choisi
    document.getElementById(`lettre-${lettre}`).style.backgroundColor = "black";
    document.getElementById(`lettre-${lettre}`).onclick = null;
    tentatives--;
    document.getElementById("img").src = `./image/le-pendu${tentatives}.png`;

    document.getElementById("tentatives").textContent = tentatives;
    if (tentatives === 0) {
      keyboard.style.display = "none";
      rejouer.style.display = "block";

      message.innerHTML =
        "DÉSOLÉ, vous avez perdu, le mot était : " + motChoisi.toUpperCase();

      // Si le nombre de tentatives restantes est égal à zéro
    }
  } else {
    devineLettre.push(lettre);
    // Remplace les lettres non devinées par des tirets bas
    motAffiche = motChoisi.replace(
      new RegExp(`[^${devineLettre.join("")}\\s-]`, "gi"),
      "_ "
    );
    document.getElementById(`lettre-${lettre}`).style.backgroundColor =
      "rgb(98, 80, 129)";

    document.getElementById("mots").textContent = motAffiche.toUpperCase(); // Met à jour le mot affiché en majuscules
    if (!motAffiche.includes("_")) {
      message.innerHTML =
        "<i class='fa-solid fa-trophy'></i> BRAVO, vous avez gagné, le mot était : " +
        motChoisi.toUpperCase() +
        '  <i class="fa-solid fa-trophy"></i>';
      keyboard.style.display = "none";

      rejouer.style.display = "block";
    }
  }
}

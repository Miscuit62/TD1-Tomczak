// Modifier le lien Wikipedia pour qu'il pointe vers la version française
document.querySelector("nav a").href = "https://fr.wikipedia.org";

// Vérifier le texte dans le premier input et afficher un message si nécessaire
document.querySelector("button").onclick = function () {
    const inputText = document.querySelector("#premiers-pas").value;
    if (inputText !== "Oui" && inputText !== "Non") {
        document.querySelector("#premiers-pas").value = "Il faut mettre Oui ou Non";
    }
};

// Modifier les noms des choix avec getElementById et nextSibling
document.getElementById("choix1").lastChild.textContent = " HP";
document.getElementById("choix2").lastChild.textContent = " Casque";
document.getElementById("choix3").lastChild.textContent = " Bluetooth";

// Modifier le texte "Volume" en fonction du choix sélectionné
document.querySelectorAll('input[name="choix"]').forEach((input) => {
    input.onclick = function () {
        const volumeLabel = document.querySelector("label[for='volume']");
        if (this.value === "1") {
            volumeLabel.textContent = "Volume HP";
        } else if (this.value === "2") {
            volumeLabel.textContent = "Volume Casque";
        } else if (this.value === "3") {
            volumeLabel.textContent = "Volume Bluetooth";
        }
    };
});

// Afficher la valeur actuelle du volume sous la barre lorsque celle-ci est modifiée
const volumeInput = document.querySelector("#volume");
volumeInput.oninput = function () {
    let volumeValue = document.querySelector("#volume-value");
    if (!volumeValue) {
        volumeValue = document.createElement("p");
        volumeValue.id = "volume-value";
        volumeInput.parentElement.appendChild(volumeValue);
    }
    volumeValue.textContent = `Valeur actuelle : ${this.value}`;
};

// Désactiver ou réactiver le volume en cochant ou décochant "Mute"
document.querySelector("#checkbox").onchange = function () {
    volumeInput.disabled = this.checked;
};

// Récupérer l’année choisie dans l'input type="date" et l’afficher dans la console
document.querySelector("#date").onchange = function () {
    const selectedDate = new Date(this.value);
    const year = selectedDate.getFullYear();
    document.querySelector("#selected-year").textContent = `Année choisie : ${year}`;
    console.log("Année choisie :", year);
};

// Faire progresser les barres de progression
function incrementProgress() {
    const downloadBar = document.querySelector("#telechargement");
    const storageBarInner = document.querySelector("#storage-bar-inner");

    if (downloadBar.value < 100) {
        downloadBar.value += 5;
    }

    const currentWidth = parseInt(storageBarInner.style.width);
    if (currentWidth < 100) {
        storageBarInner.style.width = `${currentWidth + 5}%`;
    }
}

setInterval(incrementProgress, 1000);

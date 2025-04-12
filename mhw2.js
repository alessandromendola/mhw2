const popup = document.querySelector("#popup");
const chiusuraPopupBtn = document.querySelector("#bottone-chiusura-popup");

const btnHelp = document.querySelector("#btn-help");
const submenu = document.querySelector("#submenu-help");
const freccia = document.querySelector("#icona-freccia");
const btnAltro = document.querySelector(".vedi_altro_btn");
const btnAltroNascondi = document.querySelector(".nascondi_altro_btn");
const btnMenuMobile = document.querySelector("#icona_menu_mobile");
const btnMenuMobileAperto = document.querySelector("#icona_menu_mobile_aperto");
const menumobile = document.querySelector("#mobile-menu");
const vociMenuDiscesa = document.querySelectorAll(".menu_discesa");
const likeButtons = document.querySelectorAll('[data-action="like"]');
const shareButtons = document.querySelectorAll('[data-action="condividi"]');
const modale = document.querySelector("#modale-condividi");

function closePopup() {
    popup.classList.remove("mostra-popup");
    popup.classList.add("nascondi");
    console.log("Popup chiuso");
}

function SottoMenu(event) {
    submenu.classList.toggle("nascondi");
    freccia.classList.toggle("ruotata");
    event.preventDefault();
    const menu = event.currentTarget;
    menu.classList.toggle("menu_selezionato");
}

function NascondiCliccandoOvunque(event) {
    if (!btnHelp.contains(event.target) && !submenu.contains(event.target)) {
        submenu.classList.add("nascondi");
        btnHelp.classList.remove("menu_selezionato");
        freccia.classList.remove("ruotata");
    }
    if (!btnMenuMobile.contains(event.target) && !menumobile.contains(event.target)) {
        menumobile.classList.add("nascondi");
        btnMenuMobileAperto.classList.add("nascondi");
        btnMenuMobile.classList.remove("nascondi");
    }
}

function MostraAltro() {
    const sez_altro = document.querySelector(".mostra_altro");
    sez_altro.classList.remove("nascondi");
    btnAltro.classList.add("nascondi");
}

function NascondiAltro() {
    const sez_altro = document.querySelector(".mostra_altro");
    sez_altro.classList.add("nascondi");
    btnAltro.classList.remove("nascondi");
}

function ApriMenu() {
    btnMenuMobileAperto.classList.remove("nascondi");
    btnMenuMobileAperto.addEventListener("click", ChiudiMenu)
    btnMenuMobile.classList.add("nascondi");
    menumobile.classList.remove("nascondi");
}

function ChiudiMenu() {
    btnMenuMobileAperto.classList.add("nascondi");
    btnMenuMobile.classList.remove("nascondi");
    menumobile.classList.add("nascondi");
}

function toggleSottoMenuMobile(event) {
    event.preventDefault();

    const targetId = this.dataset.target;
    const iconId = this.dataset.icon;

    const sottoMenu = document.getElementById(targetId);
    const iconaFreccia = document.getElementById(iconId);

    if (sottoMenu && iconaFreccia) {
        sottoMenu.classList.toggle("nascondi");
        iconaFreccia.classList.toggle("ruotata");
    }
}

function toggleHeartLike(event) {
    const button = event.currentTarget;
    const heart = button.querySelector("#icona-cuore");
    const heart2 = button.querySelector("#icona-cuore-premuto")

    if (heart) {
        heart.classList.toggle("nascondi");
    }

    if(heart2){
        heart2.classList.toggle("nascondi");
    }
}

function ApriModaleCondividi(){
    modale.classList.remove("nascondi");
    modale.classList.add("mostra-modale");
    document.body.classList.add("no-scroll");

    const btnChiudi = document.querySelector("#chiudi-modale");

    btnChiudi.addEventListener("click", ChiudiModale);
}

function ChiudiModale(){
    modale.classList.add("nascondi");
    modale.classList.remove("mostra-modale");
    document.body.classList.remove("no-scroll");
}

chiusuraPopupBtn.addEventListener("click", closePopup);
btnHelp.addEventListener("click", SottoMenu);
btnAltro.addEventListener("click", MostraAltro);
btnAltroNascondi.addEventListener("click", NascondiAltro);
btnMenuMobile.addEventListener("click", ApriMenu);
for (let i = 0; i < vociMenuDiscesa.length; i++) {
    vociMenuDiscesa[i].addEventListener("click", toggleSottoMenuMobile);
}
document.addEventListener("click", NascondiCliccandoOvunque);

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", toggleHeartLike);
}

for (let i = 0; i < shareButtons.length; i++) {
    shareButtons[i].addEventListener("click", ApriModaleCondividi);
}

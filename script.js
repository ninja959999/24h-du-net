
function image() {
    const largeur_ecran = window.innerWidth;
    const hauteur_ecran = window.innerHeight;
    const ratio_ecran = window.devicePixelRatio;

    document.documentElement.style.setProperty('--hauteur_ecran', hauteur_ecran + 'px');
    document.documentElement.style.setProperty('--largeur_ecran', largeur_ecran + 'px');
    document.documentElement.style.setProperty('--largeur_image1', largeur_ecran + 'px');
    document.documentElement.style.setProperty('--hauteur_image1', hauteur_ecran + 'px');
    
    document.documentElement.style.setProperty('--taille_nav', hauteur_ecran/11 + 'px');
    document.documentElement.style.setProperty('--taille_footer', hauteur_ecran/3 + 'px');

    document.documentElement.style.setProperty('--home_hauteur', hauteur_ecran*8.6/10 + 'px');
    document.documentElement.style.setProperty('--zone1_hauteur', hauteur_ecran + 'px');
    document.documentElement.style.setProperty('--home_hauteur3', hauteur_ecran*2/10 + 'px');

    document.documentElement.style.setProperty('--hauteur_footer_bottom', ((hauteur_ecran)*ratio_ecran)/6.5 + 'px');
}

image();
window.addEventListener('resize', image);



document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('userLang');
    const savedFlag = localStorage.getItem('userFlag');
    if (savedLang && savedFlag) {
        const btnImg = document.querySelector('.lang-btn .flag-icon');
        const btnSpan = document.querySelector('.lang-btn span');
        if (btnImg) btnImg.src = savedFlag;
        if (btnSpan) btnSpan.textContent = savedLang.toUpperCase();
    }

    document.querySelectorAll('.lang-option').forEach(function(option) {
        option.addEventListener('click', function() {
            const gtCode = this.getAttribute('data-gt');
            const lang = this.getAttribute('data-lang');
            const flag = this.getAttribute('data-flag');

            localStorage.setItem('userLang', lang);
            localStorage.setItem('userFlag', flag);

            const btnImg = document.querySelector('.lang-btn .flag-icon');
            const btnSpan = document.querySelector('.lang-btn span');
            if (btnImg) btnImg.src = flag;
            if (btnSpan) btnSpan.textContent = lang.toUpperCase();

            if (typeof doGTranslate === 'function') {
                doGTranslate(gtCode);
            }
        });
    });
});



const nav = document.querySelector("nav");
const home = document.querySelector("#home");

if (nav && home) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            nav.classList.toggle("scrolled", !entry.isIntersecting);
        },
        {
            rootMargin: `-${nav.offsetHeight}px 0px 0px 0px`,
            threshold: 0
        }
    );

    observer.observe(home);
}


const btn_haut = document.getElementById('btn_vers_haut');

btn_haut.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btn_haut.classList.add('visible');
    } else {
        btn_haut.classList.remove('visible');
    }
});



const btn_mode_sombre = document.getElementById('btn_mode_sombre');

const couleur_nav_jour = '#ffffff';
const couleur_nav_nuit = 'rgb(95, 93, 93)';

const couleur_background1_jour = 'rgb(250, 250, 250)';
const couleur_background1_nuit = '#1f1d1d';

const couleur_nav_font_jour = '#000000';
const couleur_nav_font_nuit = '#FFFFFF';

let estEnModeNuit = false;


document.documentElement.style.setProperty('--couleur_nav', couleur_nav_jour);
document.documentElement.style.setProperty('--couleur_background1', couleur_background1_jour);

btn_mode_sombre.addEventListener('click', () => {

    estEnModeNuit = !estEnModeNuit;


    const couleurNavActuelle = estEnModeNuit ? couleur_nav_nuit : couleur_nav_jour;
    const couleurBgActuelle = estEnModeNuit ? couleur_background1_nuit : couleur_background1_jour;
    const couleurNavFontActuelle = estEnModeNuit ? couleur_nav_font_nuit : couleur_nav_font_jour

    const imgMode = document.querySelector('#btn_mode_sombre img');
    imgMode.src = estEnModeNuit ? '/images/lune.png' : '/images/soleil.png';


    document.documentElement.style.setProperty('--couleur_nav', couleurNavActuelle);
    document.documentElement.style.setProperty('--couleur_background1', couleurBgActuelle);
    document.documentElement.style.setProperty('--couleur_nav_font', couleurNavFontActuelle);
});
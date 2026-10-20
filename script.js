function image() {
    const largeur_ecran = window.innerWidth;
    const hauteur_ecran = window.innerHeight;
    const ratio_ecran = window.devicePixelRatio

    document.documentElement.style.setProperty('--hauteur_ecran', hauteur_ecran + 'px');
    document.documentElement.style.setProperty('--largeur_ecran', largeur_ecran + 'px');

    document.documentElement.style.setProperty('--largeur_image1', largeur_ecran + 'px');
    document.documentElement.style.setProperty('--hauteur_image1', hauteur_ecran + 'px');
    
    document.documentElement.style.setProperty('--taille_nav', hauteur_ecran/11 + 'px');
    document.documentElement.style.setProperty('--taille_footer', hauteur_ecran/3 + 'px');

    document.documentElement.style.setProperty('--home_hauteur', hauteur_ecran*8.6/10 + 'px');
    document.documentElement.style.setProperty('--zone1_hauteur', hauteur_ecran + 'px');
    document.documentElement.style.setProperty('--home_hauteur3', hauteur_ecran*2/10 + 'px');

    document.documentElement.style.setProperty('--hauteur_footer_bottom', ((hauteur_ecran)*ratio_ecran)/6.5 + 'px')

}

image()

window.addEventListener('resize', image)



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
  window.scrollTo ({
    top : 0,
    left : 0,
    behavior : "smooth"
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 300){
    btn_haut.classList.add('visible')
  } else {
    btn_haut.classList.remove('visible')
  }
});
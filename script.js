function image() {
    const largeur_ecran = window.innerWidth;
    const hauteur_ecran = window.innerHeight;
    const ratio_ecran = window.devicePixelRatio

    document.documentElement.style.setProperty('--largeur_image1', `${largeur_ecran}px`);
    document.documentElement.style.setProperty('--hauteur_image1', `${hauteur_ecran}px`);
    
    document.documentElement.style.setProperty('--taille_nav', `${hauteur_ecran/10}px`);
    document.documentElement.style.setProperty('--taille_footer', `${hauteur_ecran/3}px`);

<<<<<<< HEAD
    document.documentElement.style.setProperty('--home_hauteur', `${(hauteur_ecran*8.6)/10}px`);
    document.documentElement.style.setProperty('--home_hauteur2', `${(hauteur_ecran*10)/6}px`);
=======
    document.documentElement.style.setProperty('--home_hauteur', `${(hauteur_ecran*9)/10}px`);
    document.documentElement.style.setProperty('--home_hauteur2', `${(hauteur_ecran)}px`);
>>>>>>> 1f8f876b55306a59305e7bb69dfa8d5b4cb244d4
    document.documentElement.style.setProperty('--home_hauteur3', `${(hauteur_ecran*2)/10}px`);

    document.documentElement.style.setProperty('--hauteur_footer_bottom', ((hauteur_ecran)*ratio_ecran)/6.5 + 'px')

}

image()

window.addEventListener('resize', image)


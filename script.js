function image() {
    var largeur_ecran = window.innerWidth;
    var hauteur_ecran = window.innerHeight;

    document.documentElement.style.setProperty('--largeur_image1', `${largeur_ecran}px`);
    document.documentElement.style.setProperty('--hauteur_image1', `${hauteur_ecran}px`);
    
    document.documentElement.style.setProperty('--taille_nav', `${hauteur_ecran/10}px`);

    document.documentElement.style.setProperty('--home_hauteur', `${(hauteur_ecran*9)/10}px`);

}

image()

window.addEventListener('resize', image)

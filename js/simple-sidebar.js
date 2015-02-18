$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
/* ne marche pas en haut résolution
$("#sidebar-wrapper a").click(function(e) {
    $("#wrapper").toggleClass("toggled");
});
*/
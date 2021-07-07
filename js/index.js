let sublistIsClosed = true;

const sublist = $(".work-nav .sublist");
const workLink = $(".work-nav");
const arrow = $("#arrow");
const aboutMeLink = $("#about-me-link");
const contactMeLink = $("#contact-me-link");
const hamburger = $(".hamburger");
const fullScreenNav = $(".fullscreen-nav-container");
const closeFullScreenNav = $("#close-fullscreen-nav");
const fullScreenNavLink = $(".fullscreen-nav-link a");

workLink.click(() => {
    if (sublistIsClosed) {
        arrow.removeClass("fa-sort-down arrow-down");
        arrow.addClass("fa-sort-up arrow-up");
        sublist.css("display", "block");
    } else {
        arrow.removeClass("fa-sort-up arrow-up");
        arrow.addClass("fa-sort-down arrow-down");
        sublist.css("display", "none");
    }

    sublistIsClosed = !sublistIsClosed;
})

aboutMeLink.click(() => {
    if (!sublistIsClosed) {
        arrow.removeClass("fa-sort-up arrow-up");
        arrow.addClass("fa-sort-down arrow-down");
        sublist.css("display", "none");

        sublistIsClosed = true;
    }
})

contactMeLink.click(() => {
    if (!sublistIsClosed) {
        arrow.removeClass("fa-sort-up arrow-up");
        arrow.addClass("fa-sort-down arrow-down");
        sublist.css("display", "none");

        sublistIsClosed = true;
    }
})

hamburger.click(() => {
    fullScreenNav.slideDown("slow");
})

closeFullScreenNav.click(() => {
    fullScreenNav.slideUp("slow");
})

fullScreenNavLink.click(() => {
    fullScreenNav.slideUp("fast");
})
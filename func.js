function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px"
}    
//------------------------------popup1---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openPopup1");
    const closeButton = document.getElementById("closePopup1");
    const popup = document.getElementById("popup1");

    openButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
//------------------------------popup2---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openPopup2");
    const closeButton = document.getElementById("closePopup2");
    const popup = document.getElementById("popup2");

    openButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
//------------------------------popup3---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openPopup3");
    const closeButton = document.getElementById("closePopup3");
    const popup = document.getElementById("popup3");

    openButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});

//------------------------------popup4---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openPopup4");
    const closeButton = document.getElementById("closePopup4");
    const popup = document.getElementById("popup4");

    openButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
//------------------------------popup4---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openPopup5");
    const closeButton = document.getElementById("closePopup5");
    const popup = document.getElementById("popup5");

    openButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
//------------------------------popup6---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openPopup6");
    const closeButton = document.getElementById("closePopup6");
    const popup = document.getElementById("popup6");

    openButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
//--------------------------------------email--------------------------------
function copyText() {
    navigator.clipboard.writeText
        ("amith3181@gmail.com");
        alert("copied Email amith3181@gmail.com")
}
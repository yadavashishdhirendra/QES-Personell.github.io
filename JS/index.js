// < !--Logo Resize starts here-- >
//  When the user scrolls down 50px from the top of the document, resize the header's font size
if (screen.width >= 600) {
    // download complicated script
    // swap in full-source images for low-source ones
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // Image Scroll width
            document.getElementById("QES__Logo").style.width = "300px";
            document.getElementById("QES__Logo").style.height = "94px";
        } else {
            // Image initial width
            document.getElementById("QES__Logo").style.width = "300px";
            document.getElementById("QES__Logo").style.height = "100px";
        }
    }
}


// < !--Logo Resize starts here-- >
//  When the user scrolls down 50px from the top of the document, resize the header's font size
if (screen.width <= 600) {
    // download complicated script
    // swap in full-source images for low-source ones
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // Image Scroll width
            document.getElementById("QES__Logo").style.width = "200px";
            document.getElementById("QES__Logo").style.height = "100px";
        } else {
            // Image initial width
            document.getElementById("QES__Logo").style.width = "210px";
            document.getElementById("QES__Logo").style.height = "100px";
        }
    }
}

// Logo Redirection Using JS
function imageClick(url) {
    window.location = url;
}



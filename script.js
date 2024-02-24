document.addEventListener("DOMContentLoaded", () => {

    let verticaldrop = document.querySelectorAll(".vertical-drop a");

    verticaldrop.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();

            verticaldrop.forEach((elem) => {
                elem.classList.remove("clicked");
            });
            element.classList.add("clicked");
            let targetId = element.getAttribute("href").substring(1);
            let contents = document.querySelectorAll('.content section');
            contents.forEach((content) => {
                content.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
        });
    });
    let aboutLink = document.getElementById("about-vd");
    aboutLink.click();

    document.getElementsByClassName('hamburger')[0].addEventListener("click", () => {
        const navbarElements = document.getElementsByTagName('nav');
        for (let i = 0; i < navbarElements.length; i++) {
            navbarElements[i].style.display = (navbarElements[i].style.display === 'block') ? 'none' : 'block';
        }
    });
});

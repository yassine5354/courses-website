// navbar scroll behavier//

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
    }
    )







    //show/hide faq//

    let toggles = document.getElementsByClassName("toggle");
    let contentDiv = document.getElementsByClassName("content");
    let icons = document.getElementsByClassName("icon");

    for (let i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener("click", () => {
            if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
                contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
                toggles[i].style.color = "#0084e9";
                icons[i].classList.remove("fa-plus");
                icons[i].classList.add("fa-minus");
            } else {
                contentDiv[i].style.height = "0px";
                toggles[i].style.color = "#111130";
                icons[i].classList.remove("fa-minus");
                icons[i].classList.add("fa-plus");
            }

            for (let j = 0; j < contentDiv.length; j++) {
                if (j !== i) {
                    contentDiv[j].style.height = 0;
                    toggles[j].style.color = "#111130";
                    icons[j].classList.remove("fa-minus");
                    icons[j].classList.add("fa-plus");
                }
            }
        });
    }




    //HIDE/SHOW MENU//
    const menu = document.querySelector(".nav__menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");




menuBtn.addEventListener("click",() =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})








//close menu//
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click",closeNav);

        
        
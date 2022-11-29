/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
let isLoaded = false; 

function getUserData() {
  if (!isLoaded) {
    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            let parentElement = document.getElementById("output");

            let headerParagraph = createElement("p", "header-paragraph", null);
            let headerUserLogin = createElement("span", "user-login-header", "User login");
            let headerUserAvatar = createElement("span", "user-avatar-header", "User avatar url");

            headerParagraph.appendChild(headerUserLogin);
            headerParagraph.appendChild(headerUserAvatar);

            parentElement.appendChild(headerParagraph);
            data.forEach(user => {
                
                let parentParagraph = createElement("p", "user-entry", null);
                let userLoginElement = createElement("span", "user-login", user.login);
                let userAvatarElement = createElement("span", "user-avatar", user.avatar_url);

                parentParagraph.appendChild(userLoginElement);
                parentParagraph.appendChild(userAvatarElement);
                parentElement.appendChild(parentParagraph);
                
            });
            document.getElementById("message").remove();
            isLoaded = true;
        });
    }
}

function createElement(elementName, className, innerHTML) { 
    let element = document.createElement(elementName);
    element.className = className;
    element.innerHTML = innerHTML;
    return element;
}

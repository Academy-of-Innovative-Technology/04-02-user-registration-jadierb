document.querySelector(".btn-primary").addEventListener("click", function (event) {

    

    const form = document.getElementById("registrationForm");
    const noSavedUserDiv = document.getElementById("noSavedUser");
    const savedUserPanel = document.getElementById("savedUserPanel");
    const loadUserBtn = document.getElementById("loadUserBtn");
    const clearUserBtn = document.getElementById("clearUserBtn");

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const countrySelect = document.getElementById("country");
    const aboutTextarea = document.getElementById("about");

    const savedFirstNameSpan = document.getElementById("savedFirstName");
    const savedLastNameSpan = document.getElementById("savedLastName");
    const savedEmailSpan = document.getElementById("savedEmail");
    const savedCountrySpan = document.getElementById("savedCountry");
    const savedAccountTypeSpan = document.getElementById("savedAboutType");
    const savedAboutSpan = document.getElementById("savedAbout");

    function SaveUserData() {
        const selectAcountType = document.querySelector('input[name="accountType"]:checked');

        const user = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            country: countrySelect.value,
            accountType: selectAcountType ? selectAcountType.value : null,
            about: aboutTextarea.value
        };
        const jsonUser = JSON.stringify(user);
        localStorage.setItem("registeredUser", jsonUser);
    }
displayUser(user);
}

function loadUser() {
    const savedString = localStorage.getItem("registeredUser");

    if (!savedString) {
        console.log("No saved user found");
        return null;
    }
const savedUser = JSON.parse(savedString);

firstNameInput.value = savedUser.firstName || "";
lastNameInput.value = savedUser.lastName || "";
emailInput.value = savedUser.email || "";
passwordInput.value = savedUser.password || "";
conuntrySelect.value = savedUser.country || "";
aboutTextarea.value = savedUser.about || "";

const radioButton = document.querySelector(`input[name="accountType]{value="${savedUser.accountType}`)
if (radioButton) {
    radioButton.checked = true;
    return savedUser
}
function displayUser(userOb) {
    if (!userObj) {
        noSavedUserDiv.classList.remove("d-none");
        savedUserpanel.classList.add("d-none");
        return;
    }

}

noSavedUserDiv.class.add("d-none");
savedUserpanel.classList.remove("d-none");

savedFirstNameSpan.textContent = userObj.firstName || "_";
savedLastNameSpan.textContent = userObj.lastName || "_";
savedEmailSpan.textContent = userObj.email || "_";
savedCountrySpan.textContent = userObj.country || "_";
savedAccountTypeSpan.textContent = userObj.accountType || "_";
savedAboutSpan.textContent = userObj.avout || "_";
}

function clearUser() {

 localStorage.removeItem("registeredUser");
 noSavedUserDiv.classList.remove("d-none");
 savedUserPanel.classList.add("d-none");
 console,log("User data cleared from localStorage");
}
]});
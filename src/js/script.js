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

});
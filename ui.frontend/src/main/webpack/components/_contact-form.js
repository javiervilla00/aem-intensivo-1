document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const mainTitle = document.getElementById("contactTitle");
    const inputName = document.getElementById("contactName");
    const inputEmail = document.getElementById("contactEmail");
    const inputPhone = document.getElementById("contactPhone");
    const inputMessage = document.getElementById("contactMessage");
    const btnSubmit = document.getElementById("contactSubmit");
    const charCount = document.getElementById("charCount");
    const successBox = document.getElementById("contactSuccess");
    const phoneInput = window.intlTelInput(inputPhone, {
      initialCountry: 'es',
      preferredCountries: ['es', 'mx', 'co', 'ar', 'us'],
      separateDialCode: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    const itiContainer = inputPhone.parentElement;
    const phoneLabel = document.querySelector("label[for='contactPhone']");
    const contactBtnGoBack = document.getElementById("contactBtnGoBack");
    if(itiContainer && phoneLabel) itiContainer.appendChild(phoneLabel);

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}(?:\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,})+$/;
    const emailRegex = /^[^\s@]+@[^@\s]+\.[^\s@]+$/;

    function validateField(input, regex, isOptional, minLength = 0, maxLength = Infinity) {
      const value = input.value.trim();
      const errorMsg = input.parentElement.querySelector(".contact-form__error-msg");
      let isValid = true;

      if (value === "") {
        isValid = isOptional;
      } else {
        if (regex && !regex.test(value)) isValid = false;
        if (value.length < minLength || value.length > maxLength) isValid = false;
      }

      if (value !== "") input.classList.add("has-value");
      else input.classList.remove("has-value");

      if (isValid || value === "") {
        input.classList.remove("is-invalid");
        if (errorMsg) errorMsg.style.display = "none";
      } else {
        input.classList.add("is-invalid");
        if (errorMsg) errorMsg.style.display = "block";
      }
      return isValid;
    }

    function validatePhoneLogic() {
      const value = inputPhone.value.trim();
      const errorMsg = document.getElementById("errorPhone");
      let isValid = value === "" ? true : phoneInput.isValidNumber();
      
      if (value !== "") inputPhone.classList.add("has-value");
      else inputPhone.classList.remove("has-value");

      if (isValid) {
        inputPhone.classList.remove("is-invalid");
        errorMsg.style.display = "none";
      } else {
        inputPhone.classList.add("is-invalid");
        errorMsg.style.display = "block";
      }
      return isValid;
    }

    function checkFormValidity() {
      const isNameValid = inputName.value.trim() !== "" && nameRegex.test(inputName.value.trim());
      const isEmailValid = inputEmail.value.trim() !== "" && emailRegex.test(inputEmail.value.trim());
      const isPhoneValid = validatePhoneLogic();
      const isMessageValid = inputMessage.value.trim().length >=20 && inputMessage.value.trim().length <= 500;

      if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        btnSubmit.removeAttribute("disabled");
      } else {
        btnSubmit.setAttribute("disabled", "true");
      }
    }

    inputName.addEventListener("input", () => { validateField(inputName, nameRegex, false); checkFormValidity(); });
    inputEmail.addEventListener("input", () => { validateField(inputEmail, emailRegex, false); checkFormValidity(); });
    inputPhone.addEventListener("input", checkFormValidity);
    inputPhone.addEventListener("countrychange", checkFormValidity);
    inputMessage.addEventListener("input", function() {
      const length = this.value.length;
      charCount.innerText = `${length}/500`;
      charCount.style.color = length < 20 || length > 500 ? '#D93025' : '#C6C6C6';
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
      validateField(inputMessage, null, false, 20, 500);
      checkFormValidity();
    });

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = {
        nombre: inputName.value.trim(),
        email: inputEmail.value.trim(),
        telefono: phoneInput.getNumber() || "No facilitado",
        consulta: inputMessage.value.trim(),
      };
      console.log("=== NUEVO MENSAJE DE CONTACTO ===");
      console.table(formData);
      console.log("=================================");
      
      alert("¡El formulario se ha enviado correctamente!");

      form.style.display = "none";
      if(mainTitle) mainTitle.style.display = "none";
      if(successBox) successBox.style.display = "block";
      
      form.reset();
      document.querySelectorAll(".has-value").forEach(el => el.classList.remove("has-value"));
      btnSubmit.setAttribute("disabled", "true");
      charCount.innerText = "0/500";
      inputMessage.style.height = "auto";
    });
    if (contactBtnGoBack) {
      contactBtnGoBack.addEventListener("click", function() {
        successBox.style.display = "none";
        form.style.display = "block";
        if(mainTitle) mainTitle.style.display = "block";
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
});
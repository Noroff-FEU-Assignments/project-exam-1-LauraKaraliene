function alertMessage(type = "success", message = "") {
    return `<div class="alert-message" ${type}">${message}</div>`;
  }

  const alert = document.querySelector(".alert-message");
  alert.style.textAlign = "center";
const cookieBox = document.querySelector("#cookie-box"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("ALLCOOKIES-WK")) return;
  if (document.cookie.includes("ESSENTIALCOOKIES-WK")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieStatus= ALLCOOKIES-WK; max-age=" + 60 * 60 * 24 * 30 + ";path=/";
      }
      if (button.id == "declineBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieStatus= ESSENTIALCOOKIES-WK; max-age=" + 60 * 60 * 24 * 30 + ";path=/";
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);
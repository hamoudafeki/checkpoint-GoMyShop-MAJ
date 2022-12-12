const bigContainer = document.querySelector(".big-container");
const thanks = document.getElementById("thanks");
const visa = document.getElementById("visa");
const buy = document.querySelectorAll(".js-buy");

const addProduct = document.querySelector("#add-pro");
const proContainer = document.querySelector("#pro-container");

// insertion d'un nv produit
addProduct.addEventListener("click", (eo) => {
  const newProduct = ` <div class="card mycard" style="width: 18rem;">
    <img style="border-radius:20px; " src="cardpic.jpg" class="card-img-top" alt="product">
    <div class="card-body">
      <h5 class="card-title">New Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buy"  href="#" class="js-buy btn btn-primary">Buy</a>
    </div>
  </div>  `;
  proContainer.innerHTML += newProduct;
});
//cibler le click sur le boutton "buy"
proContainer.addEventListener("click", (eo) => {
  if (eo.target.className == "js-buy btn btn-primary") {
    bigContainer.classList.add("active");
    eo.preventDefault();
    thanks.style.display = "none";
    visa.style.display = "block";
  }
});

// btn de confirmation d'achat (".yes")
const btnYess = document.querySelectorAll(".yes");
btnYess.forEach((item) => {
  item.addEventListener("click", (eo) => {
    thanks.style.display = "block";
    visa.style.display = "none";
    setTimeout(() => {
      thanks.style.display = "none";
      bigContainer.classList.remove("active");
    }, 3000);
  });
});

//dark mode - toggle
const dark = document.getElementById("dark");
const body = document.getElementById("body");
dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});

// popup "about"
const bigAbout = document.querySelector(".bigAbout");
const about = document.getElementById("aboutus");
about.addEventListener("click", (eo) => {
  bigAbout.style.display = "block";
});

// popup "back home" from "about"
const backHome = document.getElementById("about");
backHome.addEventListener("click", (eo) => {
  bigAbout.style.display = "none";
});

// popup "contact"
const contact = document.querySelector(".contact");
const bigContact = document.querySelector(".bigContact");
contact.addEventListener("click", (eo) => {
  bigContact.classList.add("activeContact");
});

// popup "back home" from "contact"
const back = document.getElementById("back");
back.addEventListener("click", (eo) => {
  bigContact.classList.remove("activeContact");
});


//have a good day :)
// the navigation
// [1] closing navbar by clicking on window
let navToggler = document.querySelector(".navbar .navbar-toggler");
let nav = document.querySelector(".navbar .collapse");

navToggler.addEventListener("click", stopProp);
function stopProp(e) {
  e.stopPropagation();
}

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("navbar-toggler")) {
    return false;
  } else {
    if (nav.classList.contains("show")) {
      navToggler.click();
    }
  }
});
// [2] nav-items (active)
let navItems = document.querySelectorAll(".nav-item a");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => {
      i.classList.remove("active");
    });

    item.classList.add("active");

    document.getElementById(item.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// the works section (filtering images)
let worksLis = document.querySelectorAll(".works ul li");
let images = document.querySelectorAll(".works .image");

worksLis.forEach((li) => {
  li.addEventListener("click", function () {
    worksLis.forEach((one) => {
      one.classList.remove("active");
    });
    li.classList.add("active");

    if (li.dataset.work != "all") {
      images.forEach((image) => {
        image.parentElement.style.display = "none";
      });

      document.querySelectorAll(`.works .${li.dataset.work}`).forEach((el) => {
        el.parentElement.style.display = "block";
      });
    } else {
      images.forEach((image) => {
        image.parentElement.style.display = "block";
      });
    }
  });
});

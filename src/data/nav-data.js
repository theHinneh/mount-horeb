export const data = [
  {
    name: "Home",
    link: "/",
    className: "nav-link",
    // action: "",
    // isIcon: false,
  },
  {
    name: "Visit",
    link: "/visit",
    className: "nav-link",
    // action: "",
    // isIcon: false,
  },
  {
    name: "About Us",
    link: "/about-us",
    className: "nav-link",
    // action: "",
    // isIcon: false,
  },
  {
    name: "Event",
    link: "/event",
    className: "nav-link",
    // action: "",
    // isIcon: false,
  },
  {
    name: "Donation",
    link: "/donation",
    className: "nav-link",
    // action: "",
    // isIcon: false,
  },
  {
    name: "Food Bank",
    link: "/food-bank",
    className: "nav-link",
    // action: "",
    // isIcon: false,
  },
  // {
  //   name: "",
  //   link: "",
  //   className: "icon",
  //   // action: myFunction,
  //   // isIcon: true,
  // },
];

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

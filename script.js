const btn = document.querySelector(".btn-cors");

btn.addEventListener("click", () => {
  console.log("clicked");
  fetch("https://fundingportal.onrender.com/script/all")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

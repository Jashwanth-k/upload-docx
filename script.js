const submitForm = (e) => {
  e.preventDefault();
  data = [];
  let rname = document.getElementById("name").value;
  // debugger;
  let img = document.getElementById("img").files[0];
  let script = document.getElementById("script").files[0];
  let price = document.getElementById("price").value;
  let audio = document.getElementById("music").files[0];
  /* saveData(rname, img, script, price); */

  form = new FormData();
  form.append("name", rname);
  form.append("image", img);
  form.append("script", script);
  form.append("price", price);
  form.append("audio", audio);

  // console.log(form);
  fetch("http://localhost:8081/music/create", {
    method: "POST",
    body: form,
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};
/* const saveData = (rname, img, script, price) => {
 
  return newData;
}; */
document.getElementById("Form").addEventListener("submit", submitForm);

const submitForm = (e) => {
  e.preventDefault();
  data = [];
  let rname = document.getElementById("name").value;
  let img = document.getElementById("img").value;
  let script = document.getElementById("script").value;
  let price = document.getElementById("price").value;
  /* saveData(rname, img, script, price); */
  let newData = {
    rname: rname,
    img: img,
    script: script,
    price: price,
  };
  data.push(newData);

  console.log(data);
};
/* const saveData = (rname, img, script, price) => {
 
  return newData;
}; */
document.getElementById("Form").addEventListener("submit", submitForm);

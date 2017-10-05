{
  ENV.mutations(e.target.value / 100);
  document.querySelector("#ratioval").innerHTML =
    "mutations : " + (ENV.mutations() * 100).toFixed(0) + "%";
}

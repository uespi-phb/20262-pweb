const $ = (id) => document.getElementById(id);

window.addEventListener("load", () => {
  $("zipcode").addEventListener("input", zipCodeChanged);
  $("btn-zip").addEventListener("click", zipCodeSearch);
});

function zipCodeSearch(event) {
  const zipcode = $("zipcode");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://viacep.com.br/ws/${zipcode.value}/json/`);
  xhr.onload = function () {
    console.log(`status = ${xhr.status}`);

    const response = JSON.parse(xhr.response);

    if (!response.erro) {
      console.log("SUCCESS");
      console.log(response);

      $("place").value = response.logradouro;
      $("neighborhood").value = response.bairro;
      $("city").value = response.localidade;
      $("state").value = response.estado;
    } else {
      zipcode.classList.toggle("field-error");
    }
  };
  xhr.send();
}

function zipCodeChanged(event) {
  const zipcode = $("zipcode");
  zipcode.classList.remove("field-error");
  zipcode.value = zipcode.value.replace(/\D/g, "");
  $("btn-zip").disabled = zipcode.value.length !== 8;
}

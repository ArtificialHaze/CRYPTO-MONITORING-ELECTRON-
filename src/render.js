const getCoinData = async () => {
  const res = await fetch("[COINAPI_URL]", {
    method: "GET",
    headers: {
      "x-coinapi-key": "[API_KEY_GOES_HERE]",
    },
  });
  const data = await res.json();
  const table = document.getElementById("coinTableBody");
  const loader = document.getElementById("loading");
  data.forEach((currency) => {
    if (currency.type_is_crypto) {
      let rowHtml = `<tr>
      <td>${currency.name}</td>
      <td>${currency.asset_id}</td>
      <td>${currency.price_usd}</td>
      </tr>`;
      let template = document.createElement("template");
      template.innerHTML = rowHtml;
      let rowElement = template.content.firstChild;
      table.appendChild(rowElement);
    }
  });
  loader.parentElement.removeChild(loader);
};

getCoinData();

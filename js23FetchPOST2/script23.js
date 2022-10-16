const ENDPOINT_URL = "https://olive-bead-glazer.glitch.me";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function createTableFromUrl(url) {
  carData = await getData(url);
  populateTable(carData);
}

function populateTable(data) {
  const tbody = document.querySelector("tbody");
  data.forEach((dateItem) => {
    const tdBrand = document.createElement("td");
    tdBrand.textContent = dateItem.brand;
    const tdModel = document.createElement("td");
    tdModel.textContent = dateItem.model;
    const tr = document.createElement("tr");
    tr.append(tdBrand, tdModel);
    tbody.append(tr);
  });
}

createTableFromUrl(ENDPOINT_URL);

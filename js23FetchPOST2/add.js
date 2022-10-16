const ENDPOINT_URL = "https://olive-bead-glazer.glitch.me";

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const carBrand = document.getElementById("brand").value.trim();
  const carModel = document.getElementById("model").value.trim();

  if (carBrand.length == 0 || carModel.length == 0) {
    const addData = document.createElement("div");
    addData.textContent = "Error!!!";
    document.body.prepend(addData);
  } else {
    const data = {
      brand: carBrand,
      model: carModel,
    };

    const allGood = document.createElement("div");
    allGood.textContent = "Data saved successfully";
    document.body.prepend(allGood);
    sendData(ENDPOINT_URL, data);
  }
});

async function sendData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    }
  } catch (error) {
    console.error(error);
  }
}

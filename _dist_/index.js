const baseUrl ="https://platzi-avo.vercel.app"

const appNode = document.querySelector("#app")

//web api
//Conectamos al server
window
  .fetch(`${baseUrl}/api/avo`)
  //procesar la respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  // JSON -> Data -> Renderizar info browser
  .then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
      const imagen = document.createElement("img");
        imagen.src = `${baseUrl}${item.image}`;

      const title = document.createElement("h2");
      title.textContent = item.name;

      const price = document.createElement("div");
      price.textContent = item.price;

      const container = document.createElement("div");
      container.append(imagen, title, price);

      todosLosItems.push(container);
    });
    document.body.append(...todosLosItems);
  });

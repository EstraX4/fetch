const url = "https://platzi-avo.vercel.app/api/avo";

//web api
//Conectamos al server
window
.fetch(url)
//procesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())
// JSON -> Data -> Renderizar info browser
.then((responseJson) => {
    const todosLosItems = []
    responseJson.data.forEach((item) => {
        const imagen = document.createElement("img");
        const title = document.createElement("h2");
        const price = document.createElement("div");

        const container = document.createElement("div");
        container.append(imagen, title, price);

        todosLosItems.push(container);
    });
    document.body.append(...todosLosItems);
})


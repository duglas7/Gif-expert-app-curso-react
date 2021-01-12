const getGif = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=0GKw9Gdyo1TGaZ4ptDMNo6n7dnaBzHYT`; //El encodeURI lo que realiza es la validacion de que no existan espacios en blanco
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url, //El signo de interrogacion lo que hace es una condicion donde pregunta si existe ese elemento lo agregue y si no, no hace nada
      }
    })
    return gifs;
  }
  export default getGif;
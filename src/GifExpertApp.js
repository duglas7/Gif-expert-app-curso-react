import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <p>Busca tu Gif Favorito</p>
      <AddCategory
        setCategories={setCategories} // Esto es para comunicar el estado de este componente con el otro componente llamado en este mismo
      />

      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;

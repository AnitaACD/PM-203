import React, { useState } from "react";

import SplashScreen from "./screens/SplashScreen";
import LibrosScreen from "./screens/LibrosScreen";


export default function App() {

  const [splash, setSplash] = useState(true);


  const cambiarPantalla = () => {

    setSplash(false);

  };


  if (splash) {

    return (

      <SplashScreen
        cambiarPantalla={cambiarPantalla}
      />

    );

  }


  return (

    <LibrosScreen />

  );

}
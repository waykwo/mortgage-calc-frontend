import axios from "axios";
import { useState, useEffect } from "react";
import { PropertiesIndex } from "./PropertiesIndex";

export function PropertiesPage() {
   const [myProperties, setProperties] = useState([]);

   const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/properties.json").then((response) => {
      console.log(response.data);
      setProperties(response.data);
    })
   }

   useEffect(handleIndex, []);

  return (
    <main>
      <PropertiesIndex properties={myProperties}/>
    </main>
  )
}
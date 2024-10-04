import axios from "axios";
import { useState, useEffect } from "react";
import { PropertiesIndex } from "./PropertiesIndex";
import { PropertiesNew } from "./PropertiesNew";

export function PropertiesPage() {
   const [myProperties, setProperties] = useState([]);

   const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/properties.json").then((response) => {
      console.log(response.data);
      setProperties(response.data);
    });
   };

   const handleCreate = (params, successCallback) => {
    console.log("handlCreate", params);
    axios.post("http://localhost:3000/properties.json", params).then((response) => {
      setProperties([...myProperties, response.data]);
      successCallback();
    });
   };

   useEffect(handleIndex, []);

  return (
    <main>
      <PropertiesNew onCreate={handleCreate} />
      <PropertiesIndex properties={myProperties}/>
    </main>
  )
}
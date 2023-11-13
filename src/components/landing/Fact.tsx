import React, { useState } from "react";
import "./Landing.css";
import Brain from "../../assets/brain-bg.png";
import { Link } from "react-router-dom";
import axios from "axios";
import useTokenAuth from "../../auth/useTokenAuth";

interface Props {
  fact: any
}

export default function Fact({ fact }: Props) {

  const token:any = useTokenAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newFunFact, setNewFunFact] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
    setNewFunFact(fact);
  };

  const handleSaveClick = async () => {
    try {
      await axios.post("/facts", {headers: { "Authorization": `Bearer ${token.currentUser}` }})
    }
    catch (e) {
      console.log(e)
    }
    setIsEditing(false);
  };

  const handleInputChange = (e: any) => {
    setNewFunFact(e.target.value);
  };

  return (
    <div className="bg-blue1 py-12">
      <div className="lg:justify-center lg:items-center lg:flex grid place-items-center">
        <div className="lg:w-1/2 px-12">
          <h1 className="text-3xl text-center lg:text-left font-logo">¿Lo sabías...?</h1>
          {isEditing ? (
            <div>
              <textarea
                className="text-justify text-sm w-96 h-28 p-2 mt-4"
                value={newFunFact}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveClick}>Guardar</button>
            </div>
          ) : (
            <p className="text-justify text-lg">{fact}</p>
          )}
          {!token.currentUser ? null : (
            <p className="mx-16 mt-8">
              Hola Verónica. ¿Quieres cambiar el fun fact? Haz {" "}
              <span className="underline hover:font-semibold" onClick={handleEditClick}>
                click aquí
              </span>
            </p>
          )}
        </div>
        <img className="w-60" src={Brain} />
      </div>
    </div>
  );
}

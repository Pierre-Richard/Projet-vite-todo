import { useEffect, useState } from "react";
import "./App.css";
import { InputList } from "./components/inputList";

function App() {
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<{ input: string }[]>([]);
  const [isExist, setIsExist] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setIsExist(value.trim() === "");
  };

  const handleButton = () => {
    // Ajouter un nouvel élément à la liste
    const updatedList = [...list, { input: input }];
    setList(updatedList);

    // Sauvegarder la liste mise à jour dans le localStorage
    localStorage.setItem("Liste de valeurs", JSON.stringify(updatedList));

    // Réinitialiser l'input et désactiver le bouton
    setInput("");
    setIsExist(true);
  };

  useEffect(() => {
    // Récupérer la liste du localStorage lors du montage
    const savedList = localStorage.getItem("Liste de valeurs");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  return (
    <>
      <input
        type="text"
        name="input"
        placeholder="Enter your text"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleButton} disabled={isExist}>
        Add
      </button>
      <InputList list={list} />
    </>
  );
}

export default App;

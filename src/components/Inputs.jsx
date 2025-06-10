import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import typesPokemons from "../data/dataTypeSelect.json";
import generations from "../data/dataGeneration.json";

import "../styles/Input.css";

export default function Inputs({ idState, nameState, typeState, setNumCard }) {
  const [focus, setFocus] = useState(false);

  const navigate = useNavigate();

  const focusSearch = () => {
    setFocus(true);
  };
  const blurSearch = () => {
    setFocus(false);
  };
  const handleClickReset = (filter) => {
    if (filter === "id") idState.setValueId("");
    if (filter === "name") nameState.setValueName("");
    if (filter === "select") typeState.setSelectType("");
  };
  const HandleChangeFilter = (filter, value) => {
    if (filter === "id") idState.setValueId(value);
    if (filter === "name") nameState.setValueName(value.toLowerCase());
    if (filter === "select") typeState.setSelectType(value);
  };

  const handleCHangeGeneration = (e) => {
    setNumCard(20);
    navigate(`/${e.target.value}`);
  };

  return (
    <>
      <h2 className="h2Explor">Mon Pokedex</h2>
      <h3 className="h3Explor">
        Explorez le vaste monde du Pokédex et découvrez tous les Pokémon de vos
        rêves.
      </h3>
      <div className="filter">
        <div className="div-search">
          <select
            name="pokType"
            className="input-search"
            id="searchByType"
            onChange={(e) => HandleChangeFilter("select", e.target.value)}
            onBlur={blurSearch}
            onFocus={focusSearch}
            value={typeState.selectType}
          >
            <option value="">Type du pokémon</option>
            {typesPokemons.map((type) => (
              <option value={type.name} key={type.name}>
                {type.txt}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn-close-search"
            id="close1"
            onClick={() => handleClickReset("select")}
            style={{
              display: typeState.selectType ? "inline-block" : "none",
              color: focus ? "var(--white)" : "var(--dark)",
            }}
          >
            X
          </button>
        </div>
        <div className="div-search">
          <input
            type="number"
            className="input-search"
            id="searchById"
            value={idState.valueId}
            placeholder="&#x1F50E;&#xFE0E;  ID du pokémon"
            onChange={(e) => HandleChangeFilter("id", e.target.value)}
            onBlur={blurSearch}
            onFocus={focusSearch}
          />
          <button
            type="button"
            className="btn-close-search"
            id="close2"
            onClick={() => handleClickReset("id")}
            style={{
              display: idState.valueId ? "inline-block" : "none",
              color: focus ? "var(--white)" : "var(--dark)",
            }}
          >
            X
          </button>
        </div>
        <div className="div-search">
          <input
            type="text"
            className="input-search"
            id="searchByName"
            value={nameState.valueName}
            placeholder="&#x1F50E;&#xFE0E;  Nom du pokémon"
            onChange={(e) => HandleChangeFilter("name", e.target.value)}
            onBlur={blurSearch}
            onFocus={focusSearch}
          />
          <button
            type="button"
            className="btn-close-search"
            id="close3"
            onClick={() => handleClickReset("name")}
            style={{
              display: nameState.valueName ? "inline-block" : "none",
              color: focus ? "var(--white)" : "var(--dark)",
            }}
          >
            X
          </button>
        </div>
        <div className="div-search">
          <select
            name="pokGeneration"
            className="input-search"
            id="searchByType"
            onChange={handleCHangeGeneration}
          >
            {generations.map((generation) => (
              <option value={generation.name} key={generation.name}>
                {generation.txt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

Inputs.propTypes = {
  idState: PropTypes.shape({
    valueId: PropTypes.string.isRequired,
    setValueId: PropTypes.func.isRequired,
  }).isRequired,
  nameState: PropTypes.shape({
    valueName: PropTypes.string.isRequired,
    setValueName: PropTypes.func.isRequired,
  }).isRequired,
  typeState: PropTypes.shape({
    selectType: PropTypes.string.isRequired,
    setSelectType: PropTypes.func.isRequired,
  }).isRequired,
  setNumCard: PropTypes.func.isRequired,
};

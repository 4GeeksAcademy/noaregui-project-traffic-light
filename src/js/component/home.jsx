//Importamos los hooks de useEffect y useState para poder utilizarlos
import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	//Definimos un estado, porque queremos que el valor inicial vaya modificándose. selectedColor almacena el color actual del semáforo que enste caso será "yellow"
	const [ selectedColor, setSelectedColor ] = useState("yellow");
	const [ purpleActive, setPurpleActive]  = useState("false");
	const [ phrase, setPhrase ] = useState("");

	useEffect(() => {
		//Actualizar la frase según el color seleccionado
		switch (selectedColor) {
			case "green":
				setPhrase("Frase 1")
				break;
			case "yellow":
				setPhrase("Frase 2")
				break;
			case "red":
				setPhrase("Frase 3")
				break;
			case "purple":
				setPhrase("Frase 4")
				break;
			default:
				setPhrase("");
		}
	}, [selectedColor]); //Ejecutar el efecto cuando selectedColor cambia, recuerda que si lo dejamos vacío solo se ejecuta 1 vez
	
	const toggleColor = () => {
		if(selectedColor === "red") {
			setSelectedColor("yellow");
		} else if (selectedColor === "yellow") {
			selectedColor ("green") 
		} else if (selectedColor === "green") {
			selectedColor ("purple")
		} else {
			setSelectedColor("red");
		}
	};

	const togglePurple = () => {
		setPurpleActive(!purpleActive);
	};

	//Todo lo que esté en return es el contenido del componente
	return (
		<div className="traffic-light">
			{/* En HTML sería <div onclick = setSelectedColor("red") Como estamos en jsx tendremos que poner la función en {} porque es JS */}
			{/* <div onClick = {() = setSelectedColor("red")} */}
			<div 
			//La función se activa cuando se pulse en la luz roja setSelectedColor("red")
			onClick={() => setSelectedColor("red")}
			className={"ligth red" + (selectedColor === "red" ? " glow" : "")
			}></div>
			<div 
			onClick={() => setSelectedColor("yellow")}
			className={"ligth yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<div 
			onClick={() => setSelectedColor("green")}
			className={"ligth green" + (selectedColor === "green" ? " glow" : "")}></div>
			{purpleActive && (
				<div
				onClick={() => setSelectedColor("purple")}
				className={"light purple" + (selectedColor === "purple" ? " glow" : "")}>
				</div>
			)}
			<div>
				<button className="boton1" onClick={toggleColor}>CAMBIAR COLOR</button>
			</div>
			<div>
				<button className="boton2" onClick={togglePurple}>{purpleActive ? "DESACTIVAR PURPURA" : "ACTIVAR PURPURA"}</button>
			</div>
		</div>
	);
};

export default Home;

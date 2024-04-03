//Importamos los hooks de useEffect y useState para poder utilizarlos
import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	//Definimos un estado, porque queremos que el valor inicial vaya modificándose. selectedColor almacena el color actual del semáforo que enste caso será "orange"
	const [ selectedColor, setSelectedColor ] = useState("red");
	const [ purpleActive, setPurpleActive]  = useState(false);
	const [ phrase, setPhrase ] = useState("");

	useEffect(() => {
		//Actualizar la frase según el color seleccionado
		switch (selectedColor) {
			case "yellow":
				setPhrase("Almost ready but keep calm");
				break;
			case "orange":
				setPhrase("You can start pressing the clutch");
				break;
			case "red":
				setPhrase("Don't even think about speeding up");
				break;
			case "purple":
				setPhrase("");
				break;
			default:
				setPhrase("");
		}
	}, [selectedColor]); //Ejecutar el efecto cuando selectedColor cambia, recuerda que si lo dejamos vacío solo se ejecuta 1 vez
	
	const toggleColor = () => {
		if(selectedColor === "red") {
			setSelectedColor("orange");
		} else if (selectedColor === "orange") {
			setSelectedColor ("yellow") 
		} else if (selectedColor === "yellow") {
			setSelectedColor ("purple")
		} else {
			setSelectedColor("red");
		}
	};

	const toggleGreen = () => {
		setPurpleActive(!purpleActive);
	};

	//Todo lo que esté en return es el contenido del componente
	return (
		<>
		<video className="video" autoPlay loop src="https://videos.pexels.com/video-files/5638438/5638438-uhd_3840_2160_25fps.mp4"/>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="traffic-light">
						{/* En HTML sería <div onclick = setSelectedColor("red") Como estamos en jsx tendremos que poner la función en {} porque es JS */}
						{/* <div onClick = {() = setSelectedColor("red")} */}
						<div 
						//La función se activa cuando se pulse en la luz roja setSelectedColor("red")
							onClick={() => setSelectedColor("red")}
							className={"light red" + (selectedColor === "red" ? " glow" : "")}>
						</div>
						<div 
							onClick={() => setSelectedColor("orange")}
							className={"light orange" + (selectedColor === "orange" ? " glow" : "")}>
						</div>
						<div 
							onClick={() => setSelectedColor("yellow")}
							className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}>
						</div>
						{purpleActive && (
							<div
								onClick={() => setSelectedColor("purple")}
								className={"light purple" + (selectedColor === "purple" ? " glow" : "")}>
							</div>
						)}
						
					</div>
					<div className="boton">
						<button type="button" class="btn btn-dark uno" onClick={toggleColor}>Change color</button>
						<button type="button" class="btn btn-dark dos" onClick={toggleGreen}>{purpleActive ? "Turn OFF the new ligth" : "Turn ON the new ligth"}</button>
					</div>
					
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="frase frase-grande">
						<p>{phrase}</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;

/*
1. Importamos React con los hook necesarios en este caso useEffect y useState.
2. Creamos el componente.
3. Añadimos la declaración de la variable useState y useEffect.
4. Función principal del componente. En este caso será cambiar un color por otro
5. return ( );
*/

//Importamos los hooks de useEffect y useState para poder utilizarlos
/*1*/import React, { useState, useEffect } from "react";

//create your first component
/*2*/const Home = () => {
	/*Definimos un estado, porque queremos que el valor inicial vaya modificándose. 
	selectedColor almacena el color actual del semáforo que enste caso será "orange", será la variable inicial,
	setSelectedColor es la función que se encargará de modificar la variable*/
/*3*/const [ selectedColor, setSelectedColor ] = useState("red");
	const [ greenActive, setgreenActive] = useState(false);
	const [ phrase, setPhrase ] = useState("");
	

/*3*/useEffect(() => {
        //Actualizar la frase según el color seleccionado
        switch (selectedColor) {
            /*Cuando el selectedColor sea "yellow" activamos la función setPhrase, que actualizará la frase que le decimos entre ("")*/
            case "yellow":
                setPhrase("Almost ready but keep calm");
                break;
            case "orange":
                setPhrase("You can start pressing the clutch");
                break;
            case "red":
                setPhrase("Don't even think about speeding up");
                break;
            case "green":
                setPhrase(<span className="go">GO!</span>);
                break;
            default:
                setPhrase("");
        }
    }, [selectedColor]);
	/*El array de dependencia tiene la variable selectedColor, esto quiere decir que useEffect se ejecutará cada vez que
    el valor de selectedColor cambie, recuerda que si lo dejamos vacío solo se ejecuta 1 vez cuando se ejecuta todo el código*/

	/*La función principal que le añadiremos al botón es que cuando clickes cambie el color. Aquí hacemos el cambio de color. Después la
	añadiremos al evento onClick. Por ahora hacemos el cambio de colores. */
/*4*/const changeColor = () => {
	if (greenActive) {
		if(selectedColor === "red") {
			setSelectedColor("orange");
			} else if (selectedColor === "orange") {
			setSelectedColor ("yellow") 
			} else if (selectedColor === "yellow") {
			setSelectedColor("green");
			} else {
				setSelectedColor("red");
			}
	} else {
		if(selectedColor === "red") {
			setSelectedColor("orange");
			} else if (selectedColor === "orange") {
			setSelectedColor ("yellow") 
			} else if (selectedColor === "yellow") {
			setSelectedColor("red");
			} 
	}
};


	/*El botón green está desactivado, porque greenActive empieza en el valor false. Lo que le estamos diciendo es, quiero que
	 cuando la función(setgreenActive) actualice el valor de greenActive (false), esta sea true. Si el valor inicial es que greenActive
	 sea false, (!greenActive) será = true */
	 const toggleGreen = () => {
        setgreenActive(!greenActive);
    };


	//Todo lo que esté en return es el contenido del componente
/*5*/return (
		<>
			<video className="video" autoPlay loop src="https://videos.pexels.com/video-files/5638438/5638438-uhd_3840_2160_25fps.mp4"/>
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<div className="traffic-light">
							<div
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
							{greenActive &&
								<div
									onClick={() => {if (!greenActive) {setSelectedColor("green");}}}
									className={"light green" + (selectedColor === "green" ? " glow" : "")}>
										{greenActive && <h1 className="ready">Ready?</h1>}
								</div>
							}
						</div>

						<div className="boton">
							<button type="button" className="btn btn-dark uno" onClick={changeColor}>Change color</button>
							<button
								type="button"
								className="btn btn-dark dos"
								onClick={toggleGreen}
								disabled={selectedColor === "green" && !greenActive}>
									{greenActive ? "Turn OFF the new light" : "Turn ON the new light"}
							</button>
						</div>
						
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

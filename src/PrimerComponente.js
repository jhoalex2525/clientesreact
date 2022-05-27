export function PrimerComponente(){
    let nombre = "Jhonatan Ossa"
    let datos = {
        firstname: "Jhonatan Ossa",
        profesion: "Analista de Procesos",
        age: 32
    }
    return(
        <div>
            <h1 className="text-center">Bienvenidos</h1>
            <p>ESTA ES MI PRIMERA APP CON REACT, soy {nombre}</p>
            <ul>
                <li>{datos.firstname}</li>
                <li>{datos.profesion}</li>
                <li>{datos.age}</li>
            </ul>
        </div>
    )
}
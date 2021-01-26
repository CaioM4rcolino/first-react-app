// import {Component} from "react"

import { useState } from "react";

// class Header extends Component{
//   render(){
//     return(
//       <header>
//       <p>Hello World Senaiers!!</p>
//       </header>
      
//     );
//   }     
// }

function Header(props){
  return(
    <header className="header">
      <p>Hello World Senaiers!!</p>
      <button onClick={props.click}>Trocar Usuário</button>
      {props.children}
      <hr/>
    </header>
    
  )
}

function Form(){

  const [nome, setNome] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value)
  }

  return(

    <>

      <p>{nome}</p>
      <input type="text" placeholder="Digite seu nome" value={nome}
      onChange={handleNome}/>

    </>

  );
}

function App() {

  const [user, setUser] = useState("On");

  const handleClick = () => {
    if(user == "On")
      setUser("Off")
    else
      setUser("On")
  }

  return (
    <div className="App">
      <Header name="KING KONG" click={handleClick}>
        <p>Eu sou filho de Header</p>
      </Header>
     <p>
        My React App
     </p>
     <p>
       Nome do usuário: {user}
     </p>
      <Form/>
    </div>

     
  );
}


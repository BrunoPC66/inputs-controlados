import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [name, setName] = useState("");

  const [idade, setIdade] = useState("");

  const [email, setEmail] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const enviaDados = () => {
    const verificaMudanca = {
      nome: name,
      idade: idade,
      email: { email }
    };
    setName("");
    setIdade("");
    setEmail("");
    return console.log(verificaMudanca);
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={name} onChange={onChangeName} />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade} />
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={onChangeEmail} />
        </label>
        <button onClick={enviaDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;

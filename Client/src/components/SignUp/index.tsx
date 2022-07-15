import { FormEvent, useState } from "react";
import "./styles"
import { StyledContainer } from "./styles";
const axios = require('axios').default;

interface ResponseData {
    statusCode: number,
    data: string
}

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
    }

    function handleClick() {
        axios.post(
            "http://localhost:3333/volunteer", {
            name: name,
            email: email,
            password: password
        }).then((response: ResponseData) => { console.log(response) })

    }

    return (

        <StyledContainer>
            <h1>Fazer cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        id="name"
                        type="text"
                        onChange={event => setName(event.target.value)}
                        value={name}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email} />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </div>

                {/* <div>
                        <label htmlFor="password2">Repita a sua senha</label>
                        <input type="password" id="password2" />
                    </div> */}

                <button type="submit" onClick={handleClick} >Cadastrar</button>
            </form>
        </StyledContainer>

    )
}
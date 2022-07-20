import { FormEvent, useState } from "react";
import "./styles"
import { StyledContainer } from "./styles";
import axios from "axios"

interface ResponseData {
    auth: boolean
}

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let data = null;

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
    }

    async function handleClick() {
        try {
            const response = await axios.post<ResponseData>(
                "http://localhost:3333/volunteer", {
                name: name,
                email: email,
                password: password
            })

            if (response.data.auth){
                alert("Usuário cadastrado com sucesso")
            }

        } catch (error: any) {
            alert(error.response.data)
        }

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

                <button type="submit" onClick={handleClick} >Cadastrar</button>
                {data && <p>{data}</p>}
            </form>
        </StyledContainer>

    )
}
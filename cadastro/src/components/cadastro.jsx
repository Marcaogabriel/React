import { useState } from "react"; 
export function Cadastro(){

    const [name, novoName] = useState()
    const [usuario, novousuario] = useState()
    const [email, novoEmail] = useState()
    const [emailorigi, mostarnovoEmail] = useState()

    function Ativar(e){
        e.preventDefault()
        novousuario(name)
        mostarnovoEmail(email)
    }

    function Desativar(){
        novousuario("")
        mostarnovoEmail("")
    }
    return(
        <div>
            <form className="box">
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome"  placeholder="Digite seu Username:"  onChange={(e) => novoName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email"  placeholder="Digite seu email:" onChange={(e) => novoEmail(e.target.value)} />
            </div>
            <div>
                <button type="submit" onClick={Ativar}>Enviar</button>
            </div>
            {usuario && emailorigi &&
                <div>
                    <p>O seu Email é: {emailorigi}</p>
                    <p>O seu Usuario é: {usuario}</p>
                    <button onClick={Desativar}>Limpar</button>,
                </div>
            }
            </form>
        </div>
    )
}
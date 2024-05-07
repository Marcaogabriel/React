import { useState, useEffect } from "react"
import React from "react"
import Gatu from "../Components/Gatu"
export default function Gato(){
    const [image, setImage] = useState()
  
    useEffect(()=> {
      fetch("https://cataas.com/cat")
      .then((response)=> {
        return response.blob()
      })
      .then((myBlob) => {
        var objectURL = URL.createObjectURL(myBlob)
        setImage(objectURL)   

      })
      .catch((error) => console.log(error))
    }, [])

    return (
    <div id=" ">
        <div>
            <Gatu/>
            <img className="lado" src={image} alt="Carregando..." />
            <img className="lado" src={image} alt="Carregando..." />
            <img className="lado" src={image} alt="Carregando..." />
            <img className="lado" src={image} alt="Carregando..." />
            <img className="lado" src={image} alt="Carregando..." />
            <img className="lado" src={image} alt="Carregando..." />
            <img className="lado" src={image} alt="Carregando..." />
            <img className="lado" src={image} alt="Carregando..." />
            <img className="lado" src={image} alt="Carregando..." />
        </div>
    </div>
    )
}

/* 1 const [image, setImage] = useState(): Este trecho utiliza o hook useState para definir um estado image que irá armazenar o URL da imagem. setImage é uma função que será usada para atualizar esse estado. Inicialmente, image é definido como undefined.

2 useEffect(() => { ... }, []): O hook useEffect é usado para realizar efeitos colaterais na renderização do componente. Neste caso, é usado para buscar e atualizar a imagem quando o componente é montado pela primeira vez (devido ao array de dependências vazio [], indicando que o efeito só deve ocorrer uma vez, após a montagem do componente).

3 fetch("https://cataas.com/cat"): Esta linha usa a função fetch para fazer uma solicitação GET para a URL "https://cataas.com/cat", que retorna uma imagem aleatória de um gato.

4.then((response) => { return response.blob() }): Após a resposta da solicitação HTTP, este trecho transforma a resposta em um objeto do tipo Blob, que representa os dados binários da imagem. Um Blob é um objeto que representa um pedaço de dados brutos, como um arquivo.

5.then((myBlob) => { var objectURL = URL.createObjectURL(myBlob) setImage(objectURL) }): Após a conversão da resposta em um Blob, este trecho cria um URL temporário (objectURL) para a imagem usando URL.createObjectURL(). Esse URL temporário é então atribuído ao estado image usando setImage, atualizando assim o estado do componente com o URL da imagem.

6 .catch((error) => console.log(error)): Se ocorrer algum erro durante a busca da imagem, este trecho captura o erro e o registra no console.
x
Em resumo, este código React usa useState para armazenar o URL de uma imagem e useEffect para buscar e atualizar dinamicamente esse URL quando o componente é montado. O URL é obtido através de uma solicitação fetch para uma API que fornece imagens aleatórias de gatos. */
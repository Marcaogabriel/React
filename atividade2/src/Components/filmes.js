import aprimeiraprofecia from "../Assets/img/APrimeiraProfecia.jpg";
import spyfamily from "../Assets/img/GekijobanSpyxFamily.jpg";
import ghoster from "../Assets/img/Ghostbusters.jpg";
import godzilaxkong from "../Assets/img/GodzillaeKong.webp";
import guerracivi from "../Assets/img/Guerracivil.webp";
import kungfupanda from "../Assets/img/Kungfupanda.jpg";
import gatodesorte from "../Assets/img/UmGatodesorte.webp";
import osfarofeiros from "../Assets/img/osfarofeiros.jpg"

const filmes = [
    { 
        id: '1',
        nome: "A Primeira Profecia",
        nota: "★★★★☆",
        avaliacaousuario: "3.0",
        ano: 2024,
        diretor: "Arkasha Stevenson",
        sinopse: "A Primeira Profecia marca o prelúdio do clássico filme de terror A Profecia (1976). A nova trama acompanha a jovem americana Margaret (Nell Tiger Free), que é enviada a Roma para viver a serviço da igreja. No local, ela se afeiçoa por Carlita, uma jovem quieta e sozinha, que também mora no convento. Ao questionar o passado e a situação da garota para as outras irmãs da igreja, ela é alertada para se manter afastada. No entanto, antes de seguir o conselho, ela se depara com uma escuridão que a faz questionar sua fé. Com a ajuda de um padre exonerado, ela acaba descobrindo uma conspiração tenebrosa, que por anos foi ocultada pela igreja local, que tentava esconder o inevitável: a volta do mal encarnado, o chamado anticristo.",        
        img: aprimeiraprofecia,
    },
    { 
        id: '2',
        nome: "Gekijoban Spy x Family Code: White",
        nota: "Em Estreia",
        avaliacaousuario: "Não há",
        ano: 2024,
        diretor: "Kazuhiro Furuhashi",
        sinopse: "Ele é um espião. Ela é uma assassina. Juntos, Loyd e Yor mantêm vidas duplas enquanto fingem ser uma família comum. Neste filme baseado no mangá de Tatsuya Endo, Loyd decide ajudar Anya a vencer um concurso de culinária na Eden Academy depois de ser substituído na Operação Strix. Enquanto tenta progredir em sua missão atual, a paz mundial é ameaçada quando Anya acaba se envolvendo por engano, colocando tudo a perder.",        
        img: spyfamily,
    },
    { 
        id: '3',
        nome: "Ghostbusters: Apocalipse de Gelo",
        nota: "★★★★☆", 
        avaliacaousuario: "3.6",
        ano: 2024,
        diretor: "Gil Kenan",
        sinopse: "Nesta sequência da franquia Ghostbusters, a família Spengler retorna para onde tudo começou: a famosa estação de bombeiros em Nova York. Eles pretendem se unir com os caça-fantasmas originais que desenvolveram um laboratório ultra secreto de pesquisa para levar a caça aos fantasmas a outro nível, mas quando a descoberta de um artefato antigo libera uma grande força do mal, os Ghostbusters das duas gerações precisam juntar as forças para proteger suas casas e salvar o mundo de uma segunda Era do Gelo.",        
        img: ghoster,
    },
    {  
        id: '4',
        nome: "Godzilla e Kong: O Novo Império",
        nota: "★★★★☆",
        avaliacaousuario: "4.4",
        ano: 2024,
        diretor: "Adam Wingard",
        sinopse: "Em Godzilla e Kong: O Novo Império, é um novo capítulo no chamado MonsterVerse, onde depois de terem se encontrado como inimigos em Godzila vs Kong, o poderoso Kong e o temível Godzilla se unem contra uma colossal ameaça mortal escondida no mundo dos humanos, que além de ameaçar sua própria existência também ameaça nossa espécie. Mergulhando profundamente nos mistérios da Ilha da Caveira e nas origens da Terra Oca, o filme irá explorar a antiga batalha de Titãs que ajudou a forjar esses seres extraordinários e os ligou à humanidade para sempre. Dirigido novamente por Adam Wingard, a trama também trará de volta personagens conhecidos, além de introduzir um novo protagonista, interpretado por Dan Stevens.",        
        img: godzilaxkong,
    },
    {  
        id: '5',
        nome: "Guerra Civil",
        nota: "★★★☆☆",
        avaliacaousuario: "3.3",
        ano: 2024,
        diretor: " Alex Garland",
        sinopse: "Dirigido pelo premiado Alex Garland (Ex Machina), Guerra Civil apresenta uma mistura de ação e suspense, ambientado em um futuro não tão distante, quando uma guerra civil se instaura nos Estados Unidos. Neste cenário, uma equipe pioneira de jornalistas de guerra, onde estão Lee (Kirsten Dunst) e seu colega de trabalho Joel (Wagner Moura), viajam pelo país para registrar a dimensão e a situação de um cenário violento que tomou as ruas em uma rápida escalada, envolvendo toda a nação. No entanto, o trabalho de registro se transforma em uma guerra de sobrevivência quando eles também se tornam o alvo. O elenco conta ainda com nomes como Stephen McKinley Henderson, Jesse Plemmons e Nick Offerman.",        
        img: guerracivi,
    },
    {  
        id: '6',
        nome: "Kung Fu Panda 4",
        nota: "★★★★☆",
        avaliacaousuario: "4.1",
        ano: 2024,
        diretor: " Mike Mitchell (V) ",
        sinopse: "Depois de três aventuras arriscando sua própria vida para derrotar os mais poderosos vilões, Po, o Grande Dragão Guerreiro( Jack Black) é escolhido para se tornar o Líder Espiritual do Vale da Paz. A escolha em si já problemática ao colocar o mestre de kung fu mais improvável do mundo em um cargo como esse e além disso, ele precisa encontrar e treinar um novo Dragão Guerreiro antes de assumir a honrada posição e a pessoa certa parece ser Zhen (Awkwafina) uma raposa com muitas habilidades, mas que não gosta muito da ideia de ser treinada. Como se os desafios já não fossem o bastante, a Camaleoa (Viola Davis), uma feiticeira perversa, tenta trazer de volta todos os vilões derrotados por Po do reino espiritual.",        
        img: kungfupanda,
    },
    {  
        id: '7',
        nome: "Um Gato de Sorte",
        nota: "★★★☆☆",
        avaliacaousuario: "3.1",
        ano: 2024,
        diretor: " Christopher Jenkins",
        sinopse: "Nesta animação, de Christopher Jenkins, diretor que trabalhou com obras como Tá Dando Onda (2007) e Atlantis: O Reino Perdido conhecemos Beckett (Mo Gilligan), um gato mimado que não reconhece a sorte que ao ser resgatado e acolhido por Rose (Simone Ashley), uma estudante apaixonada e de bom coração. Contra sua vontade, ele vê sua rotina sofrer mudanças quando cai por acidente em um bueiro e perde sua nona vida, fazendo com que o destino entre em cena para colocá-lo em uma jornada transformadora.",        
        img: gatodesorte,
    },
    {  
        id: '8',
        nome: "Os Farofeiros 2",
        nota: "★★★☆☆",
        avaliacaousuario: "3.7",
        ano: 2024,
        diretor: "Roberto Santucc",
        sinopse: "Em Os Farofeiros 2, acompanhamos um novo capítulo da história dos amigos Alexandre (Antônio Fragoso), Lima (Maurício Manfrini), Rocha (Charles Paraventi) e Diguinho (Nilton Bicudo). Quando Alexandre é reconhecido como o melhor gerente de vendas na empresa em que trabalha, ele ganha como recompensa por seus esforços uma viagem para a Bahia com toda a família. Porém, os outros três amigos não estão muito felizes com a forma como Alexandre comanda as coisas. Para tentar amolecer o coração dos amigos e garantir sua tão esperada promoção, ele resolve levar todos - acompanhados das esposas e dos filhos - para a viagem ao Nordeste.",        
        img: osfarofeiros,
    }
]

export {filmes};
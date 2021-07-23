

const jsonCards = "[{\"name\":\"Serra Angel\",\"image\":\"static/img/serraangel.png\",\"manaCost\":3,\"typeLine\":\"Creature - Angel\",\"expansionSymbol\":\"static/img/serraangelexpansionsymbol.png\",\"hability\":\"Flying, vigilance\",\"text\":\"The angel remembers her past lives like dreams. Her song held up meadows. Her blade darkness. Her wings carried her across the ages.\",\"power\":\"4/4\",\"collectorNumber\":\"033/269 U\"},{\"name\":\"Brainstorm\",\"image\":\"static/img/kokusho.png\",\"manaCost\":4,\"typeLine\":\"Instant\",\"expansionSymbol\":\"static/img/kokushoexpansionsymbol.png\",\"hability\":\"Flying<br>When Kokusho, the Evening Star dies, each opponent loses 5 life. You gain life equal to the life lost this way.\",\"text\":\"The fall of the evening star never heralds a gentle dawn.\",\"power\":\"5/5\",\"collectorNumber\":\"095/249 R\"}]"  
localStorage.setItem("jsonCards",jsonCards)


    let cartasdeMagic = localStorage.getItem("jsonCards")

    let cartasMagic = JSON.parse(cartasdeMagic)
    let carta1 = {
        
        nome: cartasMagic[0].name,
        imagem: cartasMagic[0].image,
        custodeMana: cartasMagic[0].manaCost,
        criatura: cartasMagic[0].typeLine,
        expansionSimbolo: cartasMagic[0].expansionSymbol,
        habilidade: cartasMagic[0].hability,
        texto: cartasMagic[0].text,
        poder: cartasMagic[0].power,
        numeroColecionado: cartasMagic[0].collectorNumber
    }

    let carta2 = {
        nome: cartasMagic[1].name,
        imagem: cartasMagic[1].image,
        custodeMana: cartasMagic[1].manaCost,
        criatura: cartasMagic[1].typeLine,
        expansionSimbolo: cartasMagic[1].expansionSymbol,
        habilidade: cartasMagic[1].hability,
        texto: cartasMagic[1].text,
        poder: cartasMagic[1].power,
        numeroColecionado: cartasMagic[1].collectorNumber
    }

    console.log(carta1,carta2)

    function imprimeCarta2() {
        let nomePersonagem = document.querySelector(".characterName")
        let custoMana = document.querySelector(".numberManaCost")
        let imagemPersonagem = document.querySelector(".characterImg").src="static/img/kokusho.png"
        let tipo = document.querySelector(".type")
        let simboloExpansao = document.querySelector(".expansionSymbol").src="satic/img/kokushoexpansionsymbol.png"
        let habilidadePersonagem = document.querySelector(".habilities")
        let informacoesTexto = document.querySelector(".textInformations")
        let linha = document.querySelector(".divisoria")
        let numeroPoder = document.querySelector(".powerNumber")
        let numerodeColecionador = document.querySelector(".collectionNumber")

        nomePersonagem.innerHTML = carta2.nome
        custoMana.innerHTML = carta2.custodeMana
        tipo.innerHTML = carta2.criatura
        habilidadePersonagem.innerHTML = carta2.habilidade
        habilidadePersonagem.style.position = "relative"
        habilidadePersonagem.style.fontSize = "18px"   
        informacoesTexto.innerHTML = carta2.texto
        informacoesTexto.style.position = "relative"
        informacoesTexto.style.top = "60px"
        linha.style.position = "relative"
        linha.style.top = "75px"
        numeroPoder.innerHTML = carta2.poder
        numerodeColecionador.innerHTML = carta2.numeroColecionado
    }

    function imprimeCarta1() {
        location.reload()
    }

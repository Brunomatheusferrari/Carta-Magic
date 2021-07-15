const jsonCards = "[{\"name\":\"Serra Angel\",\"image\":\"static/img/serraangel.png\",\"manaCost\":3,\"typeLine\":\"Creature - Angel\",\"expansionSymbol\":\"static/img/serraangelexpansionsymbol.png\",\"hability\":\"Flying, vigilance\",\"text\":\"The angel remembers her past lives like dreams. Her song held up meadows. Her blade darkness. Her wings carried her across the ages.\",\"power\":\"4/4\",\"collectorNumber\":\"033/269 U\"},{\"name\":\"Brainstorm\",\"image\":\"\",\"manaCost\":4,\"typeLine\":\"Instant\",\"expansionSymbol\":\"static/img/kokushoexpansionsymbol.png\",\"hability\":\"Flying<br>When Kokusho, the Evening Star dies, each opponent loses 5 life. You gain life equal to the life lost this way.\",\"text\":\"The fall of the evening star never heralds a gentle dawn.\",\"power\":\"5/5\",\"collectorNumber\":\"095/249 R\"}]"  
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

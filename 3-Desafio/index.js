class hero{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;
        
        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":

                ataque = "shuriken"
                break
            default:
                ataque = "desconhecido"
        }        
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
        //console.log(`O heroi ${this.nome} tipo ${this.tipo}, atacou usando ${ataque}`) // Sugestão
    }

}

let guerra = {
    guerreiro: {
        0: ["Merlim", 400, "mago"],
        2: ["Geralt", 55, "guerreiro"],
        3: ["Scrolls", 40, "monge"],
        4: ["Hattori", 30, "ninja"],
        5: ["Gendalf", 300, "mago"],
        6: ["Genshô", 35, "monge"],
        7: ["Baltazar", 25, "guerreiro"],
        8: ["Kato", 28, "ninja"],
        9: ["Fandom", 180, "mago"]
    }
}

function main(guerra) {
    for (let index in guerra.guerreiro) {
        let [name, age, tip] = guerra.guerreiro[index]        
        let heroi = new hero(name, age, tip)
        heroi.atacar()
    }
}

main(guerra)
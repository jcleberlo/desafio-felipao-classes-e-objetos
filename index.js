class heroi {
    constructor (nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar () {
      let ataque = ""
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
      }
  
      console.log (`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }

let heroiMago = new heroi ("Antonio" , 15 , "mago")
let heroiGuerreiro = new heroi ("José" , 16 , "guerreiro")
let heroiMonge = new heroi ("Francisco" , 17 , "monge")
let heroiNinja = new heroi ("Raimundo" , 14 , "ninja")

heroiMago.atacar ()
heroiGuerreiro.atacar ()
heroiMonge.atacar ()
heroiNinja.atacar ()
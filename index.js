class Hero {
  constructor(nome, idade, classe) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;

    if (this.classe === "Guerreiro") {
      this.ataque = "Espada";
    } else if (this.classe === "Mago") {
      this.ataque = "Magia";
    } else if (this.classe === "Monge") {
      this.ataque = "Soco";
    } else if (this.classe === "Ninja") {
      this.ataque = "Katana";
    }
  }

  mensagem() {
    console.log(`O ${this.nome} atacou usando ${this.ataque}`);
  }
}

let jornada = new Hero("João", "20", "Ninja");
jornada.mensagem();

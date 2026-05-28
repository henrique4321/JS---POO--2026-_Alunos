//Classse Pai
class Animal {
    // Método da classe pai
    fazerSom(){
        return "Som genérico"
    }
}

//Classes filhas
class Cachorro extends Animal {
    //Polimorfismo (mesmo método, mas com comportamentos diferentes em cada objeto)
    fazerSom(){
        return "Au au!" //Aqui o polimorfismo ocorre
    }
}
//Classes filhas
class Gato extends Animal {
    fazerSom(){
        return "Miau!" //Aqui o polimorfismo ocorre
    }
}

//Função Polimórfica (Trabalha com diferentes objetos)
//importante é possuir o método fazerSom().
function comunicarAnimal(animal) {
    return animal.fazerSom()  //Aqui o polimorfismo ocorre
}

//Criando objetos
const henrique = new Cachorro()
const brutus = new Gato()

//Exibindo
document.body.innerHTML = `
    <h1>Polimorfismo</1>

    <h2>Som do henrique: </h2>
    <p>${comunicarAnimal(henrique)}</p>
    <p>_________________________</p>

    <h2>Som do brutus: </h2>
    <p>${comunicarAnimal(brutus)}</p>
`

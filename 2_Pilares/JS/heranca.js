//Classe Pai
class Animal {
    constructor(nome){
        this.nome = nome
    }

    //Método dormir (classe pai)
    // Será herdado por todos os filhos objetos
    dormir() {
        return `${this.nome} está dormindo.`
    }
}

    //Classe cavalo
    class Cavalo extends Animal {
        //Método exclusivo da Classe cavalo
        relinchar() {
           return `${this.nome} fez: Iiiirrrrrí.` 
        }
    }

    //Classe Passáro
    class Passaro extends Animal {
        //Método exclusivo da Classe Pássaro
        cantar(){
            return `${this.nome} fez: Piu piu!.`
        }
    }

    //Criando instâncias ou objetos
    const cavalo = new Cavalo ('Pé de pano')
    const passaro = new Passaro('Piu')

    //Exibindo
    document.body.innerHTML = `
        <h1>Herança</1>
        
       
        <!-- Método herdado -->
        <p>${cavalo.dormir()}</p>
        <!-- Método próprio -->
        <p>${cavalo.relinchar()}</p>
        <p>_______________________________</p>
          
        <!-- Método herdado -->
        <p>${passaro.dormir()}</p>
        <!-- Método próprio -->
        <p>${passaro.cantar()}</p>  
    `
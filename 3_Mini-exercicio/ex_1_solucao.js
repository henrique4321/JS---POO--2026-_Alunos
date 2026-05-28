//classe pai
class Pedido {
    #cliente

    constructor(cliente){
        this.#cliente = cliente
    }

    getNome() {
        return this.#cliente
    }

    mostrarpedido(){
        return `Pedido para: ${this.#cliente}`
    }
}

//classe filha 
class pedidolanche extends Pedido{
    mostrarpedido(){
        return `Pedido de lanche enviado!`
    }
}

//classe filha 
class pedidopizza extends Pedido{
    mostrarpedido(){
        return `Pedido de pizza enviado!`
    }
}

//Função Polimórfica
function comunicarCliente(pedido) {
    return pedido.mostrarpedido()
}

//Criando objetos
const Portuguesa = new pedidopizza("Henrique")
const Calzone  = new pedidolanche("Daniel")

//Exibindo
document.body.innerHTML = `
    <h1>Lanchonete do Henrique</h1>

    <p>${comunicarCliente(Portuguesa)}</p>

    <p>_______________________________</p>

    <p>${comunicarCliente(Calzone)}</p>
`
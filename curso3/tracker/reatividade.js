const projeto = {
    id: 1,
    descricao: "Alura Tracker 3.0"
}

const proxy = new Proxy(projeto, {
    get(objetoOrignal, chave){
        console.log(`Alguém pediu a chave ${chave} do projeto`)
        return objetoOrignal[chave]
    },
    set(objetoOrignal, chave, valor){
        console.log(`Alguém alterou a chave ${chave} do projeto para o valor ${valor}`)
        objetoOrignal[chave] = valor
    }
})

proxy.descricao = "Reatividaed é mega bacana"

console.log(proxy.descricao)

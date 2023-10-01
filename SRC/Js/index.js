const personagem = document.querySelectorAll(".personagem")
personagem


const botoes = document.querySelectorAll(".botao")
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        desselecionarbotao()  
        
        botao.classList.add("selecionado")
        const pselecionado = document.querySelector(".personagem.selecionado")
        pselecionado.classList.remove('selecionado')
        personagem[index].classList.add('selecionado')

        
    })
})


function desselecionarbotao() {
    const bselecionado = document.querySelector(".botao.selecionado")
    bselecionado.classList.remove("selecionado")
}


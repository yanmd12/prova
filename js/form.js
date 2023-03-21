let botaoAdicionar = document.querySelector('#adicionar-reserva')
botaoAdicionar.addEventListener('click', function (evento){

    evento.preventDefault () //anula estrutura padrão, nesse caso em especifico anula a atualização

    let form = document.querySelector('#form-adiciona')  //primeiro é o evento que vai ser exectado, 2 é a funcao que vai escutar

    let reservas = obterValoresDoForm(form)

    // let total = somar()


    // let total = total(nome)

    // let erros = validaReservas(reserva)

    // if(erros.length > 0){
    //     exibeMensagemDeErro(erros)

    //     return
    // }


    adicionaReservaNaTabela(reservas)

})

// function validaReservas(reserva){
//     let erros = [0]
//     if(cliente.nome.length == 0){
//                 erros.push('O nome não pode estar em branco')
//             }
//             if(cliente.qntd.legth == 0){
//                 erros.push('A quantidade não pode estar em branco')
//             }
//             if(cliente.dia.length == 0){
//                 erros.push('O dia não pode estar em branco')
//             }
//             if(cliente.hora.length == 0){
//                 erros.push('A altura não pode estar em branco')
//             }

// }

    
//     let erros = []

//     if(cliente.nome.length == 0){
//         erros.push('O nome não pode estar em branco')
//     }
//     if(cliente.qntd.legth == 0){
//         erros.push('A quantidade não pode estar em branco')
//     }
//     if(cliente.dia.length == 0){
//         erros.push('O dia não pode estar em branco')
//     }
//     if(cliente.hora.length == 0){
//         erros.push('A altura não pode estar em branco')
//     }
   
    
//     return erros

// }
function exibeMensagemDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''


    erros.forEach(function(erro) {
        let li= document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function adicionaReservaNaTabela(reserva) {
    let reservaTr = montarTr(reserva)
    let tabela = document.querySelector('#tabela-reservas')


    tabela.appendChild(reservaTr)
}

function montarTr(reserva) {
    let reservaTr = document.createElement('tr')
    reservaTr.classList.add('reserva')

    reservaTr.appendChild(montarTd(reserva.nome, 'info-reserva'))
    reservaTr.appendChild(montarTd(reserva.qntd, 'info-qntd'))
    reservaTr.appendChild(montarTd(reserva.dia, 'info-dia'))
    reservaTr.appendChild(montarTd(reserva.hora, 'info-hora'))
    reservaTr.appendChild(montarTd(reserva.total, 'info-total'))

    return reservaTr
}

function montarTd(dado, classe) {
    //criando uma td 
    let td = document.createElement('td')
    //criando um elemento td
    td.textContent = dado
    //classlist define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

function obterValoresDoForm(form) {
    let reservas = {
        nome: form.nome.value,
        qntd: form.qntd.value,
        dia: form.dia.value,
        hora: form.hora.value,
        // total: form.total.value,
       
        
        
    }
    return reservas
}
function total(){
    // let nome = total
    // let total = Number(text.value)
    // res.innerHTML = `<p> Sua velocidade é de ${total} </p>`
    // //     window.confirm(`você confirma sua reserva?`)
    
   
}

function somar(){
    // let soma = document.getElementsByClassName('info-total') 
    //     for(let soma= 1; soma <= 20; soma ++ )
    //     res.innerHTML + ` ${soma}`
}

let titulo = document.querySelector('.titulo') //seleciona a classe do html e faço alteração nela usando o document - alem de deixar dinamico 
titulo.textContent = 'Dom La Carta' //atualizar o conteudo

//-------------------------------------------------------//

let reserva = document.querySelector('.reserva')
//console.log(pacientes)

for (var i = 0; i <= reserva.length; i++) { // laço de repetição
    let reserva = reserva[i]

    //peso do paciente
    let qntdTd = reserva.querySelectorAll('.info-qntd')
    let qntd = qntdTd.textContent

    //altura do paciente
    let diaTd = reserva.querySelector('.info-dia')
    let dia = diaTd.textContent

    let totalTd = reserva.querySelector('.info-total') //pega a cedula

    let qntdEhValido = validaQntd(qntd)


    if (!qntdEhValido) {
        console.log('Quantidade invalida')
        qntdEhValido = false
        totalTd.textContent = 'Quantidade invalida'
        reserva.classList.add('reserva-invalida')
    }





}

//------------------------------------------------------------------------------//
function calculaTotal(reserva) {
    let total = 0
    total = reserva + reserva //calculo 
    return total //ajuste das casas decimais 
}

//-----------------------------------------------------------------------------------//
function validaQntd(qntd) {
    if (qntd >= 0 && qntd <= 20) {
        return true
    } else {
        return false
    }
}


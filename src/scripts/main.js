document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio + 1);
        // alert(numeroAleatorio);


        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        // document.getElementById('resultado-valor-ceil').innerText = Math.ceil(numeroAleatorio);
        // document.getElementById('resultado-valor-floor').innerText = Math.floor(numeroAleatorio);
        // document.getElementById('resultado-valor-round').innerText = Math.round(numeroAleatorio);

        document.querySelector('.resultado').style.display = 'block';
    })
})
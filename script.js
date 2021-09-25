
var inicio = document.querySelectorAll('#inicio');

inicio.forEach(function(inicio) {
    inicio.addEventListener("click",  inicio.remove);
});

function start() {
    const dino = document.querySelector('.dino');
    const background = document.querySelector('.background');

    let position = 0;
    let isJumping;

    function handleKeyUp(event){
        if (event.keyCode === 32){
            if(!isJumping){
                jump();
            }
        }
    }

    function jump() {
        isJumping = true; 
        //Subindo
        let upInterval = setInterval(() => {
            if (position >= 150){
                clearInterval(upInterval);
                //Descendo
                let downInterval = setInterval(() =>{
                    if (position <= 0){
                        clearInterval(downInterval);
                        isJumping = false;
                    }else{
                        position -= 20;
                        dino.style.bottom = position + 'px';
                    }
                })
            }else{
                position += 20;
                dino.style.bottom = position + 'px';
            }
        }, 20);
    }

    function createPedras(){
        const pedras = document.createElement('div');
        let pedrasPosition = 1800;
        let randomTime = Math.random() * 6000;

        pedras.classList.add('pedras');
        pedras.style.left = 1800 + 'px';
        background.appendChild(pedras);

        let leftInterval = setInterval(() => {
            if (pedrasPosition < -60){
                clearInterval(leftInterval);
                background.removeChild(pedras);
            }else if (pedrasPosition > 0 && pedrasPosition < 60 && position < 60){
                clearInterval(leftInterval);
                document.body.innerHTML = '<div class="fim"><div class="game-over"></div>Fim de Jogo</div>';
            }else{
                pedrasPosition -= 15;
                pedras.style.left = pedrasPosition + 'px';
            }
        }, 20);
        setTimeout(createPedras, randomTime);
    }
    createPedras();
    document.addEventListener('keyup', handleKeyUp );
}

/*function reiniciaJogo() {
    var fim = document.querySelectorAll('.fim');
    fim.forEach(function(fim) {
        fim.addEventListener("click",  fim.remove);
    });
    start();
} */
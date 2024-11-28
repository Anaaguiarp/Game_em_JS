document.getElementById('jogo').hidden = true;

let pontuacao = 0;

function iniciarJogo() {
    const nome = document.getElementById('nome').value.trim();
    if(!nome){
        alert('Por favor, informe seu nome!');
        return;
    }else{
        alert(`Vamos começar, ${nome}!`);
    }
    document.getElementById('jogo').hidden = false;
}

const areas = document.querySelectorAll('.area');
const espacos = document.querySelectorAll('.espaco');

areas.forEach(area => {
    area.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
});

espacos.forEach(espaco => {
    espaco.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    espaco.addEventListener('drop', (event) => {
        event.preventDefault();
        const areaId = event.dataTransfer.getData('text/plain');
        const area = document.getElementById(areaId);
        const espacoId = event.target.id;

        if (area.dataset.category === espaco.dataset.category) {
            espaco.appendChild(area);
            pontuacao++;
            alert(`Você colocou no espaço correto!`);
        } else {
            alert(`Esse item não pertence a esse espaço. Tente novamente.`);
            pontuacao--;
        }
    });
});

function verPontuacao(){
    alert(`Sua pontuação até o momento é: ${pontuacao}`);
}
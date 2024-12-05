function exibirInfo(planta) {
    let descricao = document.getElementById('descricao');
    
    switch(planta) {
        case 'planta1':
            descricao.innerHTML = `
                <h3>Planta 1</h3>
                <p>Esta planta é conhecida por suas folhas grandes e exuberantes. Ela ajuda a purificar o ar ao absorver dióxido de carbono e liberar oxigênio.</p>
            `;
            break;
        case 'planta2':
            descricao.innerHTML = `
                <h3>Planta 2</h3>
                <p>A Planta 2 é uma planta nativa das florestas tropicais. Suas folhas são importantes para a preservação da biodiversidade e a regulação do clima local.</p>
            `;
            break;
        case 'planta3':
            descricao.innerHTML = `
                <h3>Planta 3</h3>
                <p>Com folhas resistentes, a Planta 3 é capaz de sobreviver em condições extremas, ajudando a prevenir a erosão do solo e mantendo o equilíbrio ecológico.</p>
            `;
            break;
        default:
            descricao.innerHTML = "<p>Selecione uma planta para saber mais sobre ela.</p>";
    }
}

function adicionar30Dias(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém a data inserida pelo usuário
    const inputData = document.getElementById('data_retirada').value;
    
    

    if (inputData) {
        // Cria um objeto de data a partir da data inserida
        const dataInicial = new Date(inputData);

        // Adiciona 30 dias
        const novaData = new Date(dataInicial);
        novaData.setDate(novaData.getDate() + 31);

        // Formata a nova data para o formato DD/MM/AAAA
        const diaFinal = String(novaData.getDate()).padStart(2, '0');
        const mesFinal = String(novaData.getMonth() + 1).padStart(2, '0'); // Ajusta o mês para 1-12
        const anoFinal = novaData.getFullYear();

        // Exibe o resultado na seção
        const resultado = document.getElementById('data');
        resultado.textContent = `Sua próxima retirada será: ${diaFinal}/${mesFinal}/${anoFinal}`;

        // Mostra a seção de resultado
        const resultadoSection = document.querySelector('.resultado');
        resultadoSection.classList.remove('hide');

}
}

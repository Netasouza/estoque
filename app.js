document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtendo os valores do formulário
    const productName = document.getElementById('product-name').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    // Adicionando produto na tabela
    const list = document.getElementById('product-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${productName}</td>
        <td>${productQuantity}</td>
        <td><button onclick="deleteProduct(this)">Remover</button></td>
    `;
    list.appendChild(row);

    // Limpando o formulário
    document.getElementById('product-form').reset();
});

// Função para remover produto da tabela
function deleteProduct(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

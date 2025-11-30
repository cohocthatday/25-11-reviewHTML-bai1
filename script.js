const form = document.getElementById("productForm");
const nameInput = document.getElementById("productName");
const priceInput = document.getElementById("productPrice");
const list = document.getElementById("productList");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameText = nameInput.value.trim();
    const priceText = priceInput.value.trim();
    if (!nameText || !priceText) return;

    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td class="task-name">${nameText}</td>
    <td class="task-price">${priceText}</td>
    <td>
        <button class="delete">Xoá</button>
    </td>
    `;

    const deleteBtn = tr.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
        tr.remove();
    });

    list.appendChild(tr);

    nameInput.value = "";
    priceInput.value = "";
    
    nameInput.focus();

});
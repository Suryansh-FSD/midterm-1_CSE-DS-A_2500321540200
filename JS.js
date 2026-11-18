let products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Chair", price: 1500, category: "Furniture" }
];


function displayProducts() {
    let table = document.getElementById("productList");
    if (!table) return;

    table.innerHTML = "";

    products.forEach(function(p) {
        table.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>₹${p.price}</td>
                <td>${p.category}</td>
                <td>
                    <button class="edit" onclick="editProduct(${p.id})">Edit</button>
                    <button class="delete" onclick="deleteProduct(${p.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}


let form = document.getElementById("productForm");
if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();

        let id = Number(document.getElementById("id").value);
        let name = document.getElementById("name");
        let price = Number(document.getElementById("price").value);
        let category = document.getElementById("category").value;

        let product = {
            id: id,
            name: name.value,
            price: price,
            category: category
        };

        products.push(product);

        alert("Product added successfully!");


        form.reset();

        displayProducts();
    };
}


function editProduct(id) {
    let product = products.find(p => p.id === id);
    if (!product) return;

    let name = prompt("Enter new name", product.name);
    let price = prompt("Enter new price", product.price);
    let category = prompt("Enter new category", product.category);

    if (name && price && category) {
        product.name = name;
        product.price = Number(price);
        product.category = category;

        displayProducts();
    }
}


function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        products = products.filter(p => p.id !== id);
        displayProducts();
    }
}


displayProducts();

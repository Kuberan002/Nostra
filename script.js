document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Men's T-Shirt", category: "men", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Women's Dress", category: "women", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Kid's T-Shirt", category: "kids", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Men's Jeans", category: "men", image: "https://via.placeholder.com/150" },
        { id: 5, name: "Women's Skirt", category: "women", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Kid's Jeans", category: "kids", image: "https://via.placeholder.com/150" },
        { id: 7, name: "Men's Hoodie", category: "men", image: "https://via.placeholder.com/150" },
        { id: 8, name: "Women's Top", category: "women", image: "https://via.placeholder.com/150" },
    ];

    const productGrid = document.getElementById("productGrid");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // Function to display products
    const displayProducts = (filteredProducts) => {
        productGrid.innerHTML = "";
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
            `;
            productGrid.appendChild(productCard);
        });
    };

    // Initial display of all products
    displayProducts(products);

    // Search functionality
    searchInput.addEventListener("keyup", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const category = e.target.dataset.category;
            if (category === "all") {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                displayProducts(filteredProducts);
            }
        });
    });
});
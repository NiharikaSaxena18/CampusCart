const sampleProducts = [
    {
        name: "Sample Product 1",
        description: "This is a sample product description.",
        category: "Electronics",
        price: 99.99,
        quantity: 10,
        imageUrl: "https://cdn.pixabay.com/photo/2025/04/21/14/54/daisies-9547672_1280.jpg",
        seller: "60c72b2f9b1e8c001c8e4d3a"
    },
    {
        name: "Sample Product 2",
        description: "This is another sample product description.",
        category: "Books",
        price: 19.99,
        quantity: 5,
        imageUrl: "https://cdn.pixabay.com/photo/2025/04/21/14/54/daisies-9547672_1280.jpg",
        seller: "60c72b2f9b1e8c001c8e4d3a"
    }
];

// Fixed: changed 'products' to 'sampleProducts'
for (let i = 3; i <= 20; i++) {
    sampleProducts.push({
        name: `Sample Product ${i}`,
        description: "This is a sample product description.",
        category: ["Electronics", "Books", "Chairs", "Accessories", "Home"][i % 5],
        price: parseFloat((Math.random() * 100 + 10).toFixed(2)),
        quantity: Math.floor(Math.random() * 10) + 1,
        imageUrl: "https://cdn.pixabay.com/photo/2025/04/21/14/54/daisies-9547672_1280.jpg",
        seller: "60c72b2f9b1e8c001c8e4d3a"
    });
}

module.exports = { data: sampleProducts };
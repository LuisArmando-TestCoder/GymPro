<script lang="ts">
    export let products: {
        name: string;
        price: string;
        image: string;
    }[] = [];

    let currentIndex = 0;

    function nextProduct() {
        if (currentIndex < products.length - 3) {
            currentIndex += 1;
        }
    }

    function prevProduct() {
        if (currentIndex > 0) {
            currentIndex -= 1;
        }
    }
</script>

<div class="container">
    <div class="headline">¡NUEVOS PRODUCTOS!</div>

    <div class="product-grid">
        {#each products.slice(currentIndex, currentIndex + 3) as product}
            <div class="product">
                <img src={product.image} alt={product.name} />
                <div class="product-name">{product.name}</div>
                <div class="product-price">Precio: ₡{product.price}</div>
            </div>
        {/each}
    </div>

    <div class="nav-buttons">
        <button
            class="button"
            on:click={prevProduct}
            disabled={currentIndex === 0}
        >
            &#8592; Anterior
        </button>
        <button
            class="button"
            on:click={nextProduct}
            disabled={currentIndex >= products.length - 3}
        >
            Siguiente &#8594;
        </button>
    </div>
</div>

<style>
    .container {
        background-color: #1a1a1a;
        color: white;
        padding: 2rem;
        text-align: center;
    }

    .headline {
        font-size: 2rem;
        font-weight: bold;
        color: #b3ff00;
    }

    .product-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 2rem;
    }

    .product {
        background-color: #333;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        position: relative;
    }

    .product img {
        max-width: 100%;
        border-radius: 0.5rem;
    }

    .product-name {
        margin: 1rem 0 0.5rem;
        font-weight: bold;
    }

    .product-price {
        color: #b3ff00;
    }

    .nav-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }

    .button {
        background-color: #b3ff00;
        color: black;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 0.25rem;
    }

    .button:hover {
        background-color: #99cc00;
    }
</style>

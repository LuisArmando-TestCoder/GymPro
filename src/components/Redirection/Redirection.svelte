<script lang="ts">
    import HtmlTextLettersClassWrapper from "../HTMLTextLettersClassWrapper/HTMLTextLettersClassWrapper.svelte";

</script>

<div class="redirection">
    <header class="header">
        <span class="ornament"/>
        <h1 class="title">Servicios Gym Pro</h1>
        <h2 class="subtitle">Te ayudamos con</h2>
    </header>
    
    <div class="cards">
        <div class="card card-side">
            <img src="./icons/muscle.svg" alt="Asesorías Icono" class="icon" />
            <h3 class="section">
                <HtmlTextLettersClassWrapper HTMLText="Asesorías Personalizadas" />
            </h3>
            <p class="description">
                <HtmlTextLettersClassWrapper HTMLText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            </p>
            <a href="./" class="store-redirection">
                <HtmlTextLettersClassWrapper HTMLText="Ver tienda" />
                <img class="arrow" src="./icons/diagonal-arrow-right-up black.svg" alt="">
            </a>
        </div>
        <div class="card card-center">
            <img src="./icons/weightlifting.svg" alt="Suplementos Icono" class="icon" />
            <h3 class="section">
                <HtmlTextLettersClassWrapper HTMLText="Suplementos Deportivos" />
            </h3>
            <p class="description">
                <HtmlTextLettersClassWrapper HTMLText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            </p>
            <a href="./" class="store-redirection">
                <HtmlTextLettersClassWrapper HTMLText="Ver tienda" />
                <img class="arrow" src="./icons/diagonal-arrow-right-up green.svg" alt="">
            </a>
        </div>
        <div class="card card-side">
            <img src="./icons/yoga.svg" alt="Calidad Icono" class="icon" />
            <h3 class="section">
                <HtmlTextLettersClassWrapper HTMLText="Calidad de Productos" />
            </h3>
            <p class="description">
                <HtmlTextLettersClassWrapper HTMLText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            </p>
            <a href="./" class="store-redirection">
                <HtmlTextLettersClassWrapper HTMLText="Ver tienda" />
                <img class="arrow" src="./icons/diagonal-arrow-right-up black.svg" alt="">
            </a>
        </div>
    </div>
    
    <div class="store-link">
        <a href="./" class="anchor">
            <HtmlTextLettersClassWrapper HTMLText="Ir a la Tienda" />
        </a>
    </div>
</div>

<style lang="scss">
    @import "./style.scss";
</style>
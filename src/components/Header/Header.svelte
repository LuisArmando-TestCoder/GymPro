<script>
    import Svg from "../SVG/SVG.svelte";
import ThemeChanger from "../ThemeChanger/ThemeChanger.svelte";

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header>
    <nav>
        <div class="menu {menuOpen ? 'open' : ''}">
            <section class="menu-section">
                <span class="menu-item">Inicio</span>
                <span class="menu-item">Nosotros</span>
                <span class="menu-item">Contacto</span>
            </section>
            <section class="menu-section center">
                <Svg src="./icons/GymPro ICON logo.svg" />
            </section>
            <section class="menu-section">
                <div class="dropdown">
                    <span class="menu-item">Tienda</span>
                    <ul class="dropdown-menu">
                        <li>Suplementos</li>
                        <li>Accesorios</li>
                        <li>Ropa Deportiva</li>
                    </ul>
                </div>
                <ThemeChanger />
                <div class="cart-icon">🛒</div>
                <span class="menu-icon" on:click={toggleMenu}>☰</span>
            </section>
        </div>
    </nav>
</header>

<style>
    .menu-section {
        width: 100%;
        max-width: 33.33%;
        display: flex;
        justify-content: space-between;
        place-items: center;
    }

    .center {
        justify-content: center;
    }

    header {
        background-color: var(--color-background-inversion);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        box-shadow: 0 0 100px -35px var(--color-background);
        color:  var(--color-background);
        font-family: var(--font-title);
    }

    nav {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        width: 100%;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    .menu {
        display: flex;
        gap: 1rem;
        width: 100%;
        justify-content: space-between;
    }

    .menu-item {
        cursor: pointer;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: bold;
    }

    .menu-item:hover {        
    }

    .dropdown {
        position: relative;
    }

    .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        list-style: none;
        padding: 0.5rem 1rem;
        z-index: 10;
    }

    .dropdown-menu li {
        margin: 0.5rem 0;
        cursor: pointer;
    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .cart-icon {
        font-size: 1.2rem;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .menu {
            display: none;
            flex-direction: column;
            gap: 0;
            position: absolute;
            top: 100%;
            right: 0;
            background: #fff;
            border: 1px solid #ddd;
            width: 200px;
            padding: 1rem;
        }

        .menu.open {
            display: flex;
        }

        .menu-icon {
            display: block;
            font-size: 1.5rem;
            cursor: pointer;
        }
    }
</style>

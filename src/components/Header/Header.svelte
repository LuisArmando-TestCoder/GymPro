<script>
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header>
    <div class="logo">GymPro</div>
    <nav>
        <div class="menu {menuOpen ? 'open' : ''}">
            <span class="menu-item">Inicio</span>
            <span class="menu-item">Nosotros</span>
            <span class="menu-item">Contacto</span>
            <div class="dropdown">
                <span class="menu-item">Tienda</span>
                <ul class="dropdown-menu">
                    <li>Suplementos</li>
                    <li>Accesorios</li>
                    <li>Ropa Deportiva</li>
                </ul>
            </div>
        </div>
        <div class="cart-icon">🛒</div>
        <span class="menu-icon" on:click={toggleMenu}>☰</span>
    </nav>
</header>

<style>
    header {
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }

    nav {
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    .menu {
        display: flex;
        gap: 1rem;
    }

    .menu-item {
        cursor: pointer;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: bold;
        color: #000;
    }

    .menu-item:hover {
        color: #ffcc00;
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

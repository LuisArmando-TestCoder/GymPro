<script>
    // Add any necessary logic here if needed
</script>

<footer class="footer">
    <div class="footer-container">
        <!-- Newsletter Section -->
        <div class="newsletter">
            <h2>Forma parte de nuestra comunidad Fitness</h2>
            <p>¡Suscríbete a nuestro boletín para recibir promociones y más!</p>
            <form class="subscribe-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>

        <!-- Footer Main Sections -->
        <div class="footer-main">
            <!-- Logo Section -->
            <div class="logo">
                <h3>GYM PRO®</h3>
                <p class="tagline">WELLNESS NUTRITION</p>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque porttitor ligula gravida lacus cursus
                    ullamcorper.
                </p>
            </div>

            <!-- Links Section -->
            <div class="links">
                <!-- Services -->
                <div>
                    <h4>SERVICIOS</h4>
                    <ul>
                        <li><a href="#">Asesorías</a></li>
                        <li><a href="#">Suplementos</a></li>
                    </ul>
                </div>

                <!-- Gym Pro -->
                <div>
                    <h4>GYM PRO</h4>
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Productos</a></li>
                    </ul>
                </div>

                <!-- Legal -->
                <div>
                    <h4>LEGAL</h4>
                    <ul>
                        <li><a href="#">Política de Devoluciones</a></li>
                        <li><a href="#">Política de Compra</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Footer Bottom Section -->
        <div class="footer-bottom">
            <p>© 2024 Gym Pro. All rights reserved</p>
            <p>Desarrollado por Babaluum | Oriens Studio</p>
            <div class="social-media">
                <a href="#"><img src="whatsapp-icon.svg" alt="WhatsApp" /></a>
                <a href="#"><img src="facebook-icon.svg" alt="Facebook" /></a>
                <a href="#"><img src="instagram-icon.svg" alt="Instagram" /></a>
            </div>
        </div>
    </div>
</footer>

<style>
    :root {
        --primary-color: #c4ff00;
        --text-color: #000;
        --spacing-unit: 16px;
        --max-width: 1200px;
    }

    .footer {
        background-color: var(--primary-color);
        padding: calc(var(--spacing-unit) * 2);
        color: var(--text-color);
        font-family: Arial, sans-serif;
    }

    .footer-container {
        max-width: var(--max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: calc(var(--spacing-unit) * 2);
    }

    /* Newsletter Section */
    .newsletter {
        text-align: center;
    }

    .newsletter h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: var(--spacing-unit);
    }

    .subscribe-form {
        display: flex;
        justify-content: center;
        gap: var(--spacing-unit);
        margin-top: var(--spacing-unit);
    }

    .subscribe-form input {
        flex: 1;
        max-width: 300px;
        padding: calc(var(--spacing-unit) / 2);
        border: 1px solid var(--text-color);
        border-radius: 4px;
    }

    .subscribe-form button {
        padding: calc(var(--spacing-unit) / 2) calc(var(--spacing-unit) * 1.5);
        background-color: var(--text-color);
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    /* Footer Main Sections */
    .footer-main {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: calc(var(--spacing-unit) * 3);
        align-items: start;
    }

    .logo {
        text-align: left;
    }

    .logo h3 {
        font-size: 1.25rem;
        font-weight: bold;
    }

    .tagline {
        font-size: 1rem;
        margin-bottom: var(--spacing-unit);
    }

    .description {
        font-size: 0.875rem;
        line-height: 1.5;
    }

    .links {
        display: flex;
        justify-content: space-between;
        gap: calc(var(--spacing-unit) * 2);
    }

    .links h4 {
        font-size: 1rem;
        margin-bottom: var(--spacing-unit);
    }

    .links ul {
        list-style: none;
        padding: 0;
    }

    .links li {
        margin-bottom: calc(var(--spacing-unit) / 2);
    }

    .links a {
        text-decoration: none;
        color: var(--text-color);
    }

    /* Footer Bottom */
    .footer-bottom {
        text-align: center;
        border-top: 1px solid var(--text-color);
        padding-top: calc(var(--spacing-unit) * 2);
    }

    .social-media {
        margin-top: var(--spacing-unit);
        display: flex;
        justify-content: center;
        gap: calc(var(--spacing-unit) * 1.5);
    }

    .social-media img {
        width: 24px;
        height: 24px;
    }
</style>

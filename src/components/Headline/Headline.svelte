<div class="headline">
    <p class="title">
        <span class="color-1">Somos</span>
        <span class="color-2">tu tienda</span> <span class="color-1">#1</span>
        <span class="color-2">de</span>
        <span class="color-1">suplementos deportivos</span>
    </p>
    <p class="extra">
        Aquí encontrarás todo lo que necesitas para alcanzar tus metas.
        ¡Nosotros te asesoramos para que adquieras el producto que más se adapte
        a tus necesidades! conoce más sobre nosotros
    </p>
</div>

<style lang="scss">
  .extra {
    color: var(--color-background);
    font-family: var(--font-paragraph);
    place-items: center;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .title {
    text-align: right;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    font-family: var(--font-title);
    border-right: 1px solid var(--color-background);

    @media screen and (max-width: 1024px) {
      border: none;
    }
  }

  .headline {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 30rem 10rem 10rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-background);

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

    & > * {
      padding: 2rem 4rem;
    }

    .color-1 {
      color: var(--color-foreground);
    }

    .color-2 {
      color: var(--color-background);
    }
  }
</style>
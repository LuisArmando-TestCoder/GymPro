<script>
    import { onMount } from "svelte";

    let isDarkTheme = true;

    // Check localStorage for theme preference
    onMount(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            isDarkTheme = storedTheme === "dark";
        }
        updateTheme();
    });

    const toggleTheme = () => {
        isDarkTheme = !isDarkTheme;
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
        updateTheme();
    };

    const updateTheme = () => {
        document.documentElement.style.setProperty(
            "--color-background",
            isDarkTheme ? "#ffffff" : "#181818",
        );
        document.documentElement.style.setProperty(
            "--color-background-inversion",
            isDarkTheme ? "#181818" : "#ffffff",
        );
        document.documentElement.style.setProperty(
            "--color-foreground",
            isDarkTheme ? "#ccff0d" : "#181818",
        );
        document.documentElement.style.setProperty(
            "--color-outline",
            isDarkTheme ? "#181818" : "#ccff0d",
        );

        //   --color-foreground: #181818;
        //   --color-outline: #ccff0d;
        //   --color-background: #ffffff; // #f1e9e4
        document.documentElement.style.setProperty(
            "--theme",
            isDarkTheme ? "dark" : "light",
        );
        document.documentElement.style.setProperty(
            "--bg-filter",
            isDarkTheme
                ? "contrast(-55%) brightness(4.25)"
                : "contrast(55%) brightness(4.25)",
        );
    };
</script>

<div class={isDarkTheme ? "dark" : "light"}>
    <button class="theme-toggle" on:click={toggleTheme}>
        <div class="icon"></div>
    </button>
</div>

<style>
    .theme-toggle {
        background: transparent;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        transition:
            background-color 0.5s,
            color 0.5s;
    }

    .theme-toggle .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: inset 0 0 0 10px red;
        transition:
            box-shadow 0.5s,
            background-color 0.5s;
    }

    .dark .theme-toggle .icon {
        border-radius: 50%;
        box-shadow: inset -7px 0px 0 2px var(--color-background);
    }

    .light .theme-toggle .icon {
        border-radius: 50%;
        box-shadow: inset -40px -3px 0 4px var(--color-foreground);;
    }
</style>

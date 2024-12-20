<script lang="ts">
    import { onMount } from "svelte";

    function changeTheme(theme: "dark" | "light") {
        const root = document.documentElement; // Access the root element to modify CSS variables

        if (theme === "dark") {
            root.style.setProperty("--color-background", "#181818"); // Set background to black
            root.style.setProperty("--color-foreground", "#FFFFFF"); // Set foreground to white
            root.style.setProperty("--color-outline", "#CCFF0B"); // Set foreground to white
        } else if (theme === "light") {
            root.style.setProperty("--color-background", "#FFFFFF"); // Set background to white
            root.style.setProperty("--color-foreground", "#181818"); // Set foreground to black
            root.style.setProperty("--color-outline", "#CCFF0B"); // Set foreground to black
        }
    }

    onMount(() => {
        console.log(changeTheme);
    });
</script>
<style lang="scss"></style>
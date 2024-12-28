<script>
    import { onMount } from 'svelte';
    export let src = ''; // URL to the SVG file
  
    let svgContent = ''; // Store fetched SVG content
    let error = ''; // Error message if fetching fails
  
    onMount(async () => {
      if (!src) {
        error = 'No source provided for the SVG.';
        return;
      }
  
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.status} ${response.statusText}`);
        }
        svgContent = await response.text();
      } catch (err) {
        error = err.message;
      }
    });
  </script>
  
{#if error}
    <p style="color: red;">{error}</p>
{:else if svgContent}
    {@html svgContent}
{:else}
    <p class="loading">Loading<span class="dots"></span></p>
{/if}
  
  <style>
    .svg-wrapper {
      display: inline-block;
    }
  
    .loading {
      font-family: var(--font-paragraph);
      font-size: 16px;
      color: red;
    }
  
    .dots::after {
      content: ".";
      display: inline-block;
      animation: dots 1.5s infinite steps(1, end);
    }
  
    @keyframes dots {
      0% {
        content: ".";
      }
      33% {
        content: "..";
      }
      66% {
        content: "...";
      }
      100% {
        content: ".";
      }
    }
  </style>
  
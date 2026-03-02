<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<nav>
    <a href="/" class="brand">mcskin.me</a>
    <a href="https://github.com/TinyBrickBoy/mcpfp" target="_blank" rel="noopener" class="nav-link">GitHub</a>
</nav>

<main>
    {@render children()}
</main>

<footer>
    <span>Built by <a href="https://github.com/TinyBrickBoy" target="_blank" rel="noopener">TinyBrickBoy</a></span>
    <span>Based on <a href="https://github.com/MauritsWilke/mcpfp" target="_blank" rel="noopener">mcpfp by MauritsWilke</a></span>
</footer>

<style lang="scss">
    $accent: #da4167;
    $bg: #0d1117;
    $bg-nav: #161b22;
    $border: #30363d;
    $text: #e6edf3;
    $text-muted: #8b949e;

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(body) {
        background: $bg;
        color: $text;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    :global(a) { text-decoration: none; }

    nav {
        position: sticky;
        top: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        height: 44px;
        background: $bg-nav;
        border-bottom: 1px solid $border;

        .brand {
            font-family: "Minecraft", monospace;
            font-size: 0.95rem;
            color: $accent;
        }

        .nav-link {
            font-size: 0.8rem;
            color: $text-muted;
            transition: color 0.15s;

            &:hover { color: $text; }
        }
    }

    main { flex: 1; }

    footer {
        display: flex;
        justify-content: space-between;
        padding: 0.75rem 1.5rem;
        border-top: 1px solid $border;
        font-size: 0.75rem;
        color: $text-muted;

        a {
            color: $text-muted;
            border-bottom: 1px solid transparent;
            transition: color 0.15s, border-color 0.15s;

            &:hover {
                color: $accent;
                border-color: $accent;
            }
        }
    }

    @media (max-width: 600px) {
        footer {
            flex-direction: column;
            gap: 0.25rem;
        }
    }
</style>

<script lang="ts">
    import ThemeToggle from "@components/ThemeToggle.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<nav id="navBar">
    <a href="/">
        <h1>mcskin.me</h1>
    </a>

    <div id="themeToggle">
        <ThemeToggle />
    </div>
</nav>

<footer id="footer">
    <a href="https://github.com/TinyBrickBoy/mcpfp" target="_blank" rel="noopener">
        <p>View me on GitHub!</p>
    </a>

    <a href="https://github.com/MauritsWilke/mcpfp" target="_blank" rel="noopener">
        <p>Thanks to MauritsWilke!</p>
    </a>
</footer>

{@render children()}

<style lang="scss">
    $background-color: #1b2531;
    $background-color-dark: #191f27;
    $coloured-text: #da4167;

    $lightMode-background-color: #fff;
    $lightMode-background-color-dark: #fff;

    :root {
        font-size: 10px;
    }

    :global(*) {
        margin: 0;
        padding: 0;

        transition: all 0.3s;
        font-family: "Minecraft", "monospace";
        font-display: swap;
    }

    :global(body) {
        background-color: $background-color;
    }

    :global(body.dark-mode) {
        background-color: $lightMode-background-color;
    }

    a {
        text-decoration: none;
    }

    #navBar {
        width: 100vw;
        height: 9rem;

        display: flex;
        align-items: center;

        background-color: $background-color-dark;
        box-shadow: 0px 1px 3px rgba(255, 255, 255, 0.25);

        h1 {
            color: $coloured-text;
            font-size: 5rem;
            margin-left: 1.5rem;
        }

        #themeToggle {
            margin-left: auto;
            margin-right: 1.5rem;
            margin-bottom: 1.5rem;
            margin-top: 1.5rem;

            height: 6rem;
            width: 6rem;
        }
    }

    :global(body.dark-mode) #navBar {
        background-color: $lightMode-background-color-dark;
        box-shadow: 0px 1px 3px rgba(25, 31, 39, 0.25);
    }

    #footer {
        position: fixed;
        bottom: 0;

        height: 4rem;
        width: 100vw;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        p {
            font-size: 2rem;
            margin: 1rem;
            color: #fff;
        }

        background-color: $background-color-dark;
        box-shadow: 0px -1px 3px rgba(255, 255, 255, 0.25);
    }

    :global(body.dark-mode) #footer {
        background-color: $lightMode-background-color-dark;
        box-shadow: 0px -1px 3px rgba(25, 31, 39, 0.25);

        p {
            color: $background-color-dark;
        }
    }

    @media only screen and (max-width: 768px) {
        #navBar {
            height: 7rem;

            h1 {
                font-size: 2.5rem;
            }

            img {
                height: 5rem;
                width: auto;
                margin: 1rem;
                border-radius: 5px;
            }

            #themeToggle {
                margin-left: auto;
                margin-right: 0.5rem;
                margin-bottom: 1.5rem;
                margin-top: 1.5rem;

                height: 4rem;
                width: 4rem;
            }
        }

        #footer {
            p {
                font-size: 1.5rem;
            }
        }
    }
</style>

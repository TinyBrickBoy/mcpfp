<svelte:head>
    <title>mcskin.me</title>
    <meta name="description" content="Free API to generate Minecraft profile pictures and retrieve skin data." />
</svelte:head>

<div class="page">
    <section class="hero">
        <h1>Minecraft Skin API</h1>
        <p>Generate profile pictures and fetch skin data for any Minecraft player — no auth required.</p>
        <div class="hero-url">
            <span class="tag">GET</span>
            <code>mcskin.me/api/pfp/TinyBrickBoy.png</code>
        </div>
    </section>

    <section class="endpoints">
        <div class="card">
            <div class="card-head">
                <span class="method">GET</span>
                <code>/api/pfp/<em>{"{username}"}</em>.png</code>
            </div>
            <p class="desc">Returns a generated Minecraft profile picture as PNG.</p>

            <div class="block">
                <div class="label">Parameters</div>
                <table>
                    <thead><tr><th>Name</th><th>In</th><th>Description</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><code>username</code></td>
                            <td>path</td>
                            <td>Minecraft username (1–16 characters)</td>
                        </tr>
                        <tr>
                            <td><code>gradient</code></td>
                            <td>query</td>
                            <td>Hex colors separated by <code>-</code>, e.g. <code>ff0000-0000ff</code></td>
                        </tr>
                        <tr>
                            <td><code>transparent</code></td>
                            <td>query</td>
                            <td>Set to <code>true</code> for a transparent background</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="block">
                <div class="label">Examples</div>
                <pre><code>/api/pfp/TinyBrickBoy.png
/api/pfp/TinyBrickBoy.png?gradient=da4167-1b2531
/api/pfp/TinyBrickBoy.png?transparent=true</code></pre>
            </div>
        </div>

        <div class="card">
            <div class="card-head">
                <span class="method">GET</span>
                <code>/api/mojang/<em>{"{username}"}</em>.json</code>
            </div>
            <p class="desc">Returns the player's skin as a base64-encoded data URL.</p>

            <div class="block">
                <div class="label">Parameters</div>
                <table>
                    <thead><tr><th>Name</th><th>In</th><th>Description</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><code>username</code></td>
                            <td>path</td>
                            <td>Minecraft username (1–16 characters)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="block">
                <div class="label">Example</div>
                <pre><code>/api/mojang/TinyBrickBoy.json</code></pre>
            </div>

            <div class="block">
                <div class="label">Response</div>
                <pre><code>{`{ "skin": "data:image/png;base64,..." }`}</code></pre>
            </div>
        </div>
    </section>
</div>

<style lang="scss">
    $accent:      #da4167;
    $accent-dim:  rgba(218, 65, 103, 0.1);
    $bg-card:     #161b22;
    $border:      #30363d;
    $text:        #e6edf3;
    $muted:       #8b949e;
    $code-bg:     #0d1117;
    $green:       #3fb950;

    .page {
        max-width: 720px;
        margin: 0 auto;
        padding: 2.5rem 1.5rem 4rem;
    }

    /* Hero */
    .hero {
        margin-bottom: 2rem;

        h1 {
            font-size: 1.5rem;
            font-weight: 600;
            color: $text;
            margin-bottom: 0.4rem;
        }

        p {
            font-size: 0.85rem;
            color: $muted;
            margin-bottom: 1rem;
        }

        .hero-url {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            background: $bg-card;
            border: 1px solid $border;
            border-radius: 6px;
            padding: 0.4rem 0.75rem;

            code {
                font-size: 0.8rem;
                color: $muted;
                font-family: 'Courier New', monospace;
            }
        }

        .tag {
            font-size: 0.65rem;
            font-weight: 700;
            background: rgba(63, 185, 80, 0.15);
            color: $green;
            border: 1px solid rgba(63, 185, 80, 0.3);
            padding: 0.1rem 0.4rem;
            border-radius: 3px;
            font-family: monospace;
        }
    }

    /* Cards */
    .endpoints {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .card {
        background: $bg-card;
        border: 1px solid $border;
        border-radius: 8px;
        overflow: hidden;

        .card-head {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.65rem 1rem;
            border-bottom: 1px solid $border;
            background: rgba(255,255,255,0.015);

            .method {
                font-size: 0.65rem;
                font-weight: 700;
                padding: 0.15rem 0.5rem;
                border-radius: 3px;
                font-family: monospace;
                background: rgba(63, 185, 80, 0.15);
                color: $green;
                border: 1px solid rgba(63, 185, 80, 0.3);
                flex-shrink: 0;
            }

            code {
                font-family: 'Courier New', monospace;
                font-size: 0.875rem;
                color: $text;

                em {
                    color: $accent;
                    font-style: normal;
                }
            }
        }

        .desc {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            color: $muted;
            border-bottom: 1px solid $border;
        }
    }

    .block {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid $border;

        &:last-child { border-bottom: none; }
    }

    .label {
        font-size: 0.65rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: $muted;
        margin-bottom: 0.5rem;
    }

    /* Table */
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.8rem;

        th {
            text-align: left;
            padding: 0.3rem 0.6rem;
            color: $muted;
            font-weight: 500;
            font-size: 0.72rem;
            border-bottom: 1px solid $border;
        }

        td {
            padding: 0.4rem 0.6rem;
            color: $muted;
            border-bottom: 1px solid rgba(48, 54, 61, 0.4);

            &:first-child { color: $text; }

            code {
                font-family: 'Courier New', monospace;
                font-size: 0.78rem;
                color: $accent;
                background: $accent-dim;
                padding: 0.05rem 0.35rem;
                border-radius: 3px;
            }
        }

        tr:last-child td { border-bottom: none; }
    }

    /* Code */
    pre {
        background: $code-bg;
        border: 1px solid $border;
        border-radius: 5px;
        padding: 0.6rem 0.85rem;
        overflow-x: auto;

        code {
            font-family: 'Courier New', monospace;
            font-size: 0.8rem;
            color: #79c0ff;
            white-space: pre;
        }
    }

    @media (max-width: 600px) {
        .page { padding: 1.5rem 1rem 3rem; }

        .card .card-head code { font-size: 0.78rem; }
    }
</style>

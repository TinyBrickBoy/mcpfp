<svelte:head>
    <title>mcskin.me</title>
    <meta name="description" content="Free API to generate Minecraft profile pictures and retrieve skin data." />
</svelte:head>

<div class="page">
    <section class="hero">
        <div class="hero-badge">Free & Open Source API</div>
        <h1>Minecraft skin API</h1>
        <p class="hero-sub">Generate profile pictures and fetch skin data for any Minecraft player — no auth required.</p>
        <div class="hero-example">
            <span class="method-tag">GET</span>
            <code>mcskin.me/api/pfp/TinyBrickBoy.png</code>
        </div>
    </section>

    <section class="endpoints">
        <div class="endpoint-card">
            <div class="endpoint-header">
                <span class="method get">GET</span>
                <code class="route">/api/pfp/<span class="param">{"{username}"}</span>.png</code>
            </div>
            <p class="endpoint-desc">Returns a generated Minecraft profile picture as a PNG image.</p>

            <div class="params">
                <div class="params-title">Parameters</div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>In</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>username</code></td>
                            <td class="muted">path</td>
                            <td class="muted">Minecraft username (1–16 characters)</td>
                        </tr>
                        <tr>
                            <td><code>gradient</code></td>
                            <td class="muted">query</td>
                            <td class="muted">Hex colors separated by <code>-</code>, e.g. <code>ff0000-0000ff</code></td>
                        </tr>
                        <tr>
                            <td><code>transparent</code></td>
                            <td class="muted">query</td>
                            <td class="muted">Set to <code>true</code> for a transparent background</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="examples">
                <div class="examples-title">Examples</div>
                <div class="code-block"><code>/api/pfp/TinyBrickBoy.png</code></div>
                <div class="code-block"><code>/api/pfp/TinyBrickBoy.png?gradient=da4167-1b2531</code></div>
                <div class="code-block"><code>/api/pfp/TinyBrickBoy.png?transparent=true</code></div>
            </div>
        </div>

        <div class="endpoint-card">
            <div class="endpoint-header">
                <span class="method get">GET</span>
                <code class="route">/api/mojang/<span class="param">{"{username}"}</span>.json</code>
            </div>
            <p class="endpoint-desc">Returns the player's skin as a base64-encoded data URL.</p>

            <div class="params">
                <div class="params-title">Parameters</div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>In</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>username</code></td>
                            <td class="muted">path</td>
                            <td class="muted">Minecraft username (1–16 characters)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="examples">
                <div class="examples-title">Example</div>
                <div class="code-block"><code>/api/mojang/TinyBrickBoy.json</code></div>
            </div>

            <div class="response">
                <div class="examples-title">Response</div>
                <pre><code>{`{ "skin": "data:image/png;base64,..." }`}</code></pre>
            </div>
        </div>
    </section>
</div>

<style lang="scss">
    $accent: #da4167;
    $accent-dim: rgba(218, 65, 103, 0.12);
    $bg-card: #161b22;
    $border: #30363d;
    $text: #e6edf3;
    $text-muted: #8b949e;
    $code-bg: #0d1117;
    $green: #3fb950;

    .page {
        max-width: 76rem;
        margin: 0 auto;
        padding: 6rem 2.4rem 8rem;
    }

    /* Hero */
    .hero {
        text-align: center;
        margin-bottom: 6rem;

        .hero-badge {
            display: inline-block;
            background: $accent-dim;
            color: $accent;
            border: 1px solid rgba(218, 65, 103, 0.3);
            border-radius: 10rem;
            padding: 0.4rem 1.2rem;
            font-size: 1.2rem;
            letter-spacing: 0.05em;
            margin-bottom: 2rem;
        }

        h1 {
            font-size: clamp(3.2rem, 6vw, 5.6rem);
            font-weight: 700;
            color: $text;
            letter-spacing: -0.02em;
            margin-bottom: 1.6rem;
            line-height: 1.1;
        }

        .hero-sub {
            font-size: clamp(1.5rem, 2vw, 1.8rem);
            color: $text-muted;
            max-width: 52rem;
            margin: 0 auto 3.2rem;
            line-height: 1.7;
        }

        .hero-example {
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            background: $bg-card;
            border: 1px solid $border;
            border-radius: 0.8rem;
            padding: 1.2rem 1.8rem;
            font-size: 1.4rem;

            code {
                color: $text-muted;
                font-family: 'Courier New', monospace;
            }
        }
    }

    .method-tag {
        background: $green;
        color: #000;
        font-size: 1.1rem;
        font-weight: 700;
        padding: 0.2rem 0.8rem;
        border-radius: 0.4rem;
        font-family: monospace;
        flex-shrink: 0;
    }

    /* Endpoint cards */
    .endpoints {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }

    .endpoint-card {
        background: $bg-card;
        border: 1px solid $border;
        border-radius: 1.2rem;
        overflow: hidden;

        .endpoint-header {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            padding: 2rem 2.4rem;
            border-bottom: 1px solid $border;
            background: rgba(255,255,255,0.02);

            .method {
                font-size: 1.2rem;
                font-weight: 700;
                padding: 0.3rem 0.9rem;
                border-radius: 0.4rem;
                font-family: monospace;
                flex-shrink: 0;

                &.get {
                    background: rgba(63, 185, 80, 0.15);
                    color: $green;
                    border: 1px solid rgba(63, 185, 80, 0.3);
                }
            }

            .route {
                font-family: 'Courier New', monospace;
                font-size: 1.6rem;
                color: $text;

                .param {
                    color: $accent;
                }
            }
        }

        .endpoint-desc {
            padding: 1.6rem 2.4rem;
            color: $text-muted;
            font-size: 1.5rem;
            border-bottom: 1px solid $border;
        }
    }

    /* Params table */
    .params, .examples, .response {
        padding: 2rem 2.4rem;
        border-bottom: 1px solid $border;

        &:last-child {
            border-bottom: none;
        }
    }

    .params-title, .examples-title {
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: $text-muted;
        margin-bottom: 1.2rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 1.4rem;

        th {
            text-align: left;
            padding: 0.6rem 1rem;
            color: $text-muted;
            font-weight: 500;
            font-size: 1.2rem;
            border-bottom: 1px solid $border;
        }

        td {
            padding: 0.8rem 1rem;
            border-bottom: 1px solid rgba(48, 54, 61, 0.5);
            color: $text;

            &.muted {
                color: $text-muted;
            }

            &:last-child {
                border-bottom: none;
            }

            code {
                font-family: 'Courier New', monospace;
                font-size: 1.3rem;
                color: $accent;
                background: $accent-dim;
                padding: 0.1rem 0.5rem;
                border-radius: 0.3rem;
            }
        }

        tr:last-child td {
            border-bottom: none;
        }
    }

    /* Code blocks */
    .code-block {
        background: $code-bg;
        border: 1px solid $border;
        border-radius: 0.6rem;
        padding: 1rem 1.4rem;
        margin-bottom: 0.8rem;
        font-size: 1.4rem;

        &:last-child {
            margin-bottom: 0;
        }

        code {
            font-family: 'Courier New', monospace;
            color: #79c0ff;
        }
    }

    pre {
        background: $code-bg;
        border: 1px solid $border;
        border-radius: 0.6rem;
        padding: 1.4rem;
        overflow-x: auto;

        code {
            font-family: 'Courier New', monospace;
            font-size: 1.4rem;
            color: #79c0ff;
        }
    }

    @media (max-width: 600px) {
        .page {
            padding: 4rem 1.6rem 6rem;
        }

        .endpoint-card .endpoint-header {
            padding: 1.6rem;
            flex-wrap: wrap;

            .route {
                font-size: 1.3rem;
            }
        }

        .params, .examples, .response {
            padding: 1.6rem;
        }

        .hero .hero-example {
            flex-direction: column;
            text-align: left;
        }
    }
</style>

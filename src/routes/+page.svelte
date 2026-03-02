<svelte:head>
    <title>mcskin.me — Minecraft Skin API</title>
    <meta name="description" content="Free API to generate Minecraft profile pictures and retrieve skin data." />
</svelte:head>

<div class="page">
    <section class="hero">
        <h1>Minecraft Skin API</h1>
        <p>Render profile pictures, heads, bodies and chests — or fetch raw skin data for any Minecraft player. No auth required.</p>
    </section>

    <section class="endpoints">

        <div class="card">
            <div class="card-head">
                <span class="badge get">GET</span>
                <code class="route">/api/pfp/<span class="param">{"{username}"}</span>.png</code>
                <span class="card-desc">Returns a generated profile picture as PNG.</span>
            </div>

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
                            <td>Hex colors separated by <code>-</code>&nbsp; e.g. <code>ff0000-0000ff</code></td>
                        </tr>
                        <tr>
                            <td><code>transparent</code></td>
                            <td>query</td>
                            <td>Set to <code>true</code> for transparent background</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="block">
                <div class="label">Examples</div>
                <div class="examples">
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/pfp/<span class="seg-param">TinyBrickBoy</span>.png</span></code>
                    </div>
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/pfp/<span class="seg-param">TinyBrickBoy</span>.png</span><span class="seg-q">?gradient=<span class="seg-v">da4167-1b2531</span></span></code>
                    </div>
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/pfp/<span class="seg-param">TinyBrickBoy</span>.png</span><span class="seg-q">?transparent=<span class="seg-v">true</span></span></code>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-head">
                <span class="badge get">GET</span>
                <code class="route">/api/body/<span class="param">{"{username}"}</span>.png</code>
                <span class="card-desc">Returns a full-body front-view render.</span>
            </div>

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
                            <td><code>size</code></td>
                            <td>query</td>
                            <td>Output height in pixels (32–1024), default <code>256</code>. Width scales proportionally (1:2 ratio).</td>
                        </tr>
                        <tr>
                            <td><code>overlay</code></td>
                            <td>query</td>
                            <td>Set to <code>false</code> to hide hat &amp; armor layers</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="block">
                <div class="label">Examples</div>
                <div class="examples">
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/body/<span class="seg-param">TinyBrickBoy</span>.png</span></code>
                    </div>
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/body/<span class="seg-param">TinyBrickBoy</span>.png</span><span class="seg-q">?size=<span class="seg-v">512</span></span></code>
                    </div>
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/body/<span class="seg-param">TinyBrickBoy</span>.png</span><span class="seg-q">?overlay=<span class="seg-v">false</span></span></code>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-head">
                <span class="badge get">GET</span>
                <code class="route">/api/chest/<span class="param">{"{username}"}</span>.png</code>
                <span class="card-desc">Returns a torso + arms render (no head, no legs).</span>
            </div>

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
                            <td><code>size</code></td>
                            <td>query</td>
                            <td>Output height in pixels (12–1024), default <code>128</code></td>
                        </tr>
                        <tr>
                            <td><code>overlay</code></td>
                            <td>query</td>
                            <td>Set to <code>false</code> to hide armor layer</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="block">
                <div class="label">Examples</div>
                <div class="examples">
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/chest/<span class="seg-param">TinyBrickBoy</span>.png</span></code>
                    </div>
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/chest/<span class="seg-param">TinyBrickBoy</span>.png</span><span class="seg-q">?size=<span class="seg-v">256</span></span></code>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-head">
                <span class="badge get">GET</span>
                <code class="route">/api/skin/<span class="param">{"{username}"}</span>.png</code>
                <span class="card-desc">Returns the raw Minecraft skin texture as PNG.</span>
            </div>

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
                <div class="examples">
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/skin/<span class="seg-param">TinyBrickBoy</span>.png</span></code>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-head">
                <span class="badge get">GET</span>
                <code class="route">/api/head/<span class="param">{"{username}"}</span>.png</code>
                <span class="card-desc">Returns a rendered 2D face with hat layer.</span>
            </div>

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
                            <td><code>size</code></td>
                            <td>query</td>
                            <td>Output size in pixels (8–512), default <code>128</code></td>
                        </tr>
                        <tr>
                            <td><code>overlay</code></td>
                            <td>query</td>
                            <td>Set to <code>false</code> to hide the hat layer</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="block">
                <div class="label">Examples</div>
                <div class="examples">
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/head/<span class="seg-param">TinyBrickBoy</span>.png</span></code>
                    </div>
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/head/<span class="seg-param">TinyBrickBoy</span>.png</span><span class="seg-q">?size=<span class="seg-v">256</span></span></code>
                    </div>
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/head/<span class="seg-param">TinyBrickBoy</span>.png</span><span class="seg-q">?overlay=<span class="seg-v">false</span></span></code>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-head">
                <span class="badge get">GET</span>
                <code class="route">/api/uuid/<span class="param">{"{username}"}</span>.json</code>
                <span class="card-desc">Returns the UUID for a given username.</span>
            </div>

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
                <div class="examples">
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/uuid/<span class="seg-param">TinyBrickBoy</span>.json</span></code>
                    </div>
                </div>
            </div>

            <div class="block">
                <div class="label">Response <span class="status-ok">200 OK</span></div>
                <pre><code>{`{
  "username": "TinyBrickBoy",
  "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}`}</code></pre>
            </div>
        </div>

        <div class="card">
            <div class="card-head">
                <span class="badge get">GET</span>
                <code class="route">/api/mojang/<span class="param">{"{username}"}</span>.json</code>
                <span class="card-desc">Returns skin data as a base64-encoded data URL.</span>
            </div>

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
                <div class="examples">
                    <div class="ex">
                        <span class="badge get sm">GET</span>
                        <code><span class="seg-path">/api/mojang/<span class="seg-param">TinyBrickBoy</span>.json</span></code>
                    </div>
                </div>
            </div>

            <div class="block">
                <div class="label">Response <span class="status-ok">200 OK</span></div>
                <pre><code>{`{
  "skin": "data:image/png;base64,..."
}`}</code></pre>
            </div>
        </div>

    </section>
</div>

<style lang="scss">
    $accent:     #da4167;
    $accent-dim: rgba(218, 65, 103, 0.12);
    $bg-card:    #161b22;
    $border:     #30363d;
    $text:       #e6edf3;
    $muted:      #8b949e;
    $code-bg:    #0d1117;
    $green:      #3fb950;
    $blue:       #79c0ff;
    $yellow:     #e3b341;

    .page {
        max-width: 820px;
        margin: 0 auto;
        padding: 3rem 2rem 9rem;
    }

    /* Hero */
    .hero {
        margin-bottom: 2.5rem;

        h1 {
            font-size: 2.8rem;
            font-weight: 700;
            color: $text;
            letter-spacing: -0.01em;
            margin-bottom: 0.6rem;
        }

        p {
            font-size: 1.5rem;
            color: $muted;
            line-height: 1.6;
        }
    }

    /* Override Minecraft font for all code elements and their children */
    :global(code), :global(code *), :global(pre), :global(pre *) {
        font-family: 'Courier New', monospace;
    }

    /* Cards */
    .endpoints {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .card {
        background: $bg-card;
        border: 1px solid $border;
        border-radius: 10px;
        overflow: hidden;
    }

    .card-head {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.2rem 1.6rem;
        border-bottom: 1px solid $border;
        background: rgba(255, 255, 255, 0.02);
        flex-wrap: wrap;

        .route {
            font-family: 'Courier New', monospace;
            font-size: 1.5rem;
            color: $text;

            .param { color: $accent; }
        }

        .card-desc {
            margin-left: auto;
            font-size: 1.3rem;
            color: $muted;
        }
    }

    /* Badges */
    .badge {
        font-size: 1.1rem;
        font-weight: 700;
        font-family: monospace;
        padding: 0.2rem 0.7rem;
        border-radius: 4px;
        flex-shrink: 0;

        &.get {
            background: rgba(63, 185, 80, 0.15);
            color: $green;
            border: 1px solid rgba(63, 185, 80, 0.3);
        }

        &.sm {
            font-size: 0.9rem;
            padding: 0.15rem 0.55rem;
        }
    }

    /* Blocks */
    .block {
        padding: 1.2rem 1.6rem;
        border-bottom: 1px solid $border;

        &:last-child { border-bottom: none; }
    }

    .label {
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: $muted;
        margin-bottom: 0.8rem;
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    .status-ok {
        font-size: 1rem;
        font-weight: 600;
        color: $green;
        background: rgba(63, 185, 80, 0.1);
        border: 1px solid rgba(63, 185, 80, 0.25);
        padding: 0.1rem 0.5rem;
        border-radius: 3px;
        text-transform: none;
        letter-spacing: 0;
    }

    /* Table */
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 1.35rem;

        th {
            text-align: left;
            padding: 0.5rem 0.8rem;
            color: $muted;
            font-weight: 500;
            font-size: 1.2rem;
            border-bottom: 1px solid $border;
        }

        td {
            padding: 0.6rem 0.8rem;
            color: $muted;
            line-height: 1.45;
            border-bottom: 1px solid rgba(48, 54, 61, 0.5);
            vertical-align: top;

            &:first-child { color: $text; }

            code {
                font-family: 'Courier New', monospace;
                font-size: 1.25rem;
                color: $accent;
                background: $accent-dim;
                padding: 0.1rem 0.4rem;
                border-radius: 3px;
            }
        }

        tr:last-child td { border-bottom: none; }
    }

    /* Examples */
    .examples {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .ex {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        background: $code-bg;
        border: 1px solid $border;
        border-radius: 6px;
        padding: 0.7rem 1.1rem;
        transition: border-color 0.15s;

        &:hover { border-color: #484f58; }

        code {
            font-family: 'Courier New', monospace;
            font-size: 1.35rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .seg-path  { color: $text; }
        .seg-param { color: $accent; }
        .seg-q     { color: $muted; }
        .seg-v     { color: $yellow; }
    }

    /* Pre / Response */
    pre {
        background: $code-bg;
        border: 1px solid $border;
        border-radius: 6px;
        padding: 1rem 1.2rem;
        overflow-x: auto;

        code {
            font-family: 'Courier New', monospace;
            font-size: 1.35rem;
            color: $blue;
            white-space: pre;
        }
    }

    @media (max-width: 640px) {
        .page { padding: 2rem 1.2rem 9rem; }
        .card-head .card-desc { display: none; }
    }
</style>

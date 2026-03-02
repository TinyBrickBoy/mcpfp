<svelte:head>
    <meta name="title" content="mcskin.me" />
    <meta name="description" content="API to generate Minecraft profile pictures and retrieve skin data." />
</svelte:head>

<div id="docs">
    <section id="intro">
        <h2>mcskin.me</h2>
        <p>A simple API for generating Minecraft profile pictures and retrieving skin data.</p>
    </section>

    <section class="endpoint">
        <h3>Generate Profile Picture</h3>
        <div class="method">GET</div>
        <code class="url">/api/pfp/{"{username}"}.png</code>
        <p>Returns a generated Minecraft profile picture as PNG.</p>

        <h4>Parameters</h4>
        <table>
            <thead>
                <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
            </thead>
            <tbody>
                <tr><td><code>username</code></td><td>Path</td><td>Minecraft username (1-16 characters)</td></tr>
                <tr><td><code>gradient</code></td><td>Query</td><td>Custom colors, e.g. <code>?gradient=ff0000-00ff00-0000ff</code></td></tr>
                <tr><td><code>transparent</code></td><td>Query</td><td><code>?transparent=true</code> for a transparent background</td></tr>
            </tbody>
        </table>

        <h4>Examples</h4>
        <code class="example">/api/pfp/TinyBrickBoy.png</code>
        <code class="example">/api/pfp/TinyBrickBoy.png?gradient=da4167-1b2531</code>
        <code class="example">/api/pfp/TinyBrickBoy.png?transparent=true</code>
    </section>

    <section class="endpoint">
        <h3>Get Skin Data</h3>
        <div class="method">GET</div>
        <code class="url">/api/mojang/{"{username}"}.json</code>
        <p>Returns the skin as a base64-encoded data URL in JSON format.</p>

        <h4>Parameters</h4>
        <table>
            <thead>
                <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
            </thead>
            <tbody>
                <tr><td><code>username</code></td><td>Path</td><td>Minecraft username (1-16 characters)</td></tr>
            </tbody>
        </table>

        <h4>Example</h4>
        <code class="example">/api/mojang/TinyBrickBoy.json</code>

        <h4>Response</h4>
        <pre>{"{"} "skin": "data:image/png;base64,..." {"}"}</pre>
    </section>
</div>

<style lang="scss">
    $coloured-text: #da4167;
    $text-color: #cdd6e0;
    $bg-card: rgba(255, 255, 255, 0.05);
    $border-color: rgba(255, 255, 255, 0.1);

    #docs {
        max-width: 80rem;
        margin: 4rem auto;
        padding: 0 2rem 8rem;
    }

    #intro {
        margin-bottom: 4rem;
        text-align: center;

        h2 {
            font-size: 3.5rem;
            color: $coloured-text;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.6rem;
            color: $text-color;
        }
    }

    .endpoint {
        background: $bg-card;
        border: 1px solid $border-color;
        border-radius: 10px;
        padding: 3rem;
        margin-bottom: 3rem;

        h3 {
            font-size: 2.2rem;
            color: #fff;
            margin-bottom: 1rem;
        }

        h4 {
            font-size: 1.4rem;
            color: $text-color;
            margin-top: 2rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
        }

        p {
            font-size: 1.4rem;
            color: $text-color;
            margin-bottom: 1rem;
        }
    }

    .method {
        display: inline-block;
        background: #2ecc71;
        color: #000;
        font-size: 1.2rem;
        padding: 0.3rem 1rem;
        border-radius: 4px;
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    code.url {
        display: block;
        font-size: 1.6rem;
        color: $coloured-text;
        margin-bottom: 1rem;
    }

    code.example {
        display: block;
        font-size: 1.3rem;
        color: #8be9fd;
        background: rgba(0, 0, 0, 0.3);
        padding: 0.8rem 1.2rem;
        border-radius: 5px;
        margin-bottom: 0.5rem;
    }

    pre {
        font-size: 1.3rem;
        color: #8be9fd;
        background: rgba(0, 0, 0, 0.3);
        padding: 1.2rem;
        border-radius: 5px;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 1.3rem;

        th {
            text-align: left;
            color: $text-color;
            padding: 0.8rem;
            border-bottom: 1px solid $border-color;
        }

        td {
            color: #fff;
            padding: 0.8rem;
            border-bottom: 1px solid $border-color;
        }

        code {
            color: $coloured-text;
        }
    }

    :global(body.dark-mode) {
        .endpoint {
            background: rgba(0, 0, 0, 0.03);
            border-color: rgba(0, 0, 0, 0.1);

            h3 { color: #333; }
            p { color: #555; }
        }

        #intro p { color: #555; }
        #intro h2 { color: $coloured-text; }

        td { color: #333; }
        th { color: #555; }

        code.example, pre {
            background: rgba(0, 0, 0, 0.06);
            color: #1b6a8a;
        }

        code.url { color: $coloured-text; }
        table code { color: $coloured-text; }
    }
</style>

# mcskin.me

A free, open-source API for generating Minecraft profile pictures and retrieving skin data.

Based on [mcpfp](https://github.com/MauritsWilke/mcpfp) by [MauritsWilke](https://github.com/MauritsWilke).

---

## API

### Generate Profile Picture

```
GET /api/pfp/{username}.png
```

| Parameter     | In    | Description                                       |
|---------------|-------|---------------------------------------------------|
| `username`    | path  | Minecraft username (1–16 characters)              |
| `gradient`    | query | Hex colors separated by `-`, e.g. `ff0000-0000ff` |
| `transparent` | query | Set to `true` for a transparent background        |

```
/api/pfp/TinyBrickBoy.png
/api/pfp/TinyBrickBoy.png?gradient=da4167-1b2531
/api/pfp/TinyBrickBoy.png?transparent=true
```

---

### Full Body

```
GET /api/body/{username}.png
```

Renders a flat front-view of the full character (head, body, arms, legs).

| Parameter  | In    | Description                                            |
|------------|-------|--------------------------------------------------------|
| `username` | path  | Minecraft username (1–16 characters)                   |
| `size`     | query | Output height in pixels (32–1024), default `256`       |
| `overlay`  | query | Set to `false` to hide hat & armor layers              |

```
/api/body/TinyBrickBoy.png
/api/body/TinyBrickBoy.png?size=512
/api/body/TinyBrickBoy.png?overlay=false
```

---

### Chest

```
GET /api/chest/{username}.png
```

Renders only the torso and arms (no head, no legs).

| Parameter  | In    | Description                                       |
|------------|-------|---------------------------------------------------|
| `username` | path  | Minecraft username (1–16 characters)              |
| `size`     | query | Output height in pixels (12–1024), default `128`  |
| `overlay`  | query | Set to `false` to hide armor layer                |

```
/api/chest/TinyBrickBoy.png
/api/chest/TinyBrickBoy.png?size=256
```

---

### Raw Skin Texture

```
GET /api/skin/{username}.png
```

Returns the raw 64×64 Minecraft skin texture as PNG.

```
/api/skin/TinyBrickBoy.png
```

---

### Head / Face

```
GET /api/head/{username}.png
```

| Parameter  | In    | Description                                  |
|------------|-------|----------------------------------------------|
| `username` | path  | Minecraft username (1–16 characters)         |
| `size`     | query | Output size in pixels (8–512), default `128` |
| `overlay`  | query | Set to `false` to hide the hat layer         |

```
/api/head/TinyBrickBoy.png
/api/head/TinyBrickBoy.png?size=256
/api/head/TinyBrickBoy.png?overlay=false
```

---

### UUID Lookup

```
GET /api/uuid/{username}.json
```

```json
{
  "username": "TinyBrickBoy",
  "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

---

### Skin Data (base64)

```
GET /api/mojang/{username}.json
```

```json
{ "skin": "data:image/png;base64,..." }
```

---

## Running locally

```bash
git clone https://github.com/TinyBrickBoy/mcpfp.git
cd mcpfp
npm install
npm run dev
```

# mcskin.me

A free, open-source API for generating Minecraft profile pictures and retrieving skin data.

Based on [mcpfp](https://github.com/MauritsWilke/mcpfp) by [MauritsWilke](https://github.com/MauritsWilke).

---

## API

### Generate Profile Picture

```
GET /api/pfp/{username}.png
```

| Parameter     | In    | Description                                      |
|---------------|-------|--------------------------------------------------|
| `username`    | path  | Minecraft username (1–16 characters)             |
| `gradient`    | query | Hex colors separated by `-`, e.g. `ff0000-0000ff`|
| `transparent` | query | Set to `true` for a transparent background       |

**Examples**
```
/api/pfp/TinyBrickBoy.png
/api/pfp/TinyBrickBoy.png?gradient=da4167-1b2531
/api/pfp/TinyBrickBoy.png?transparent=true
```

---

### Get Skin Data

```
GET /api/mojang/{username}.json
```

| Parameter  | In   | Description                          |
|------------|------|--------------------------------------|
| `username` | path | Minecraft username (1–16 characters) |

**Example**
```
/api/mojang/TinyBrickBoy.json
```

**Response**
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

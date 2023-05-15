# 💬 FrankerFaceZ (FFZ) API

Unofficial FrankerFaceZ API Wrapper for Node.js

## ⚙️ Installation

```bash
# With YARN:
yarn add frankerfacez

# With NPM:
npm install frankerfacez
```

## 📚 Usage

### Get user data and emotes

```typescript
import FrankerFaceZ from "frankerfacez";

FrankerFaceZ.getGlobalEmotes()
    .then(console.log);
// Returns Emote[],
```

## 📦 Interfaces

### Emote

```json
{
  "id": string,
  "code": string,
  "imageType": "png" | "gif",
  "animated": boolean,
  "src": {
    "low": string,
    "mid": string,
    "high": string,
  },
  "userId?": string,
  "user?": {
    "id": string,
    "name": string,
    "displayName": string,
    "providerId": string
  }
}
```

## ❤️

Made with Love by Sammwy, Donate at [PayPal](https://paypal.me/sammwy)

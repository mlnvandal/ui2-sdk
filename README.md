# ui2-sdk

React UI kit (UI2).

## Installation (git dependency)
In your app `package.json`:
```json
{
  "dependencies": {
    "ui2-sdk": "git+https://github.com/mlnvandal/ui2-sdk.git"
  }
}
```

## Usage
```tsx
import { Button, ButtonIcon, DataTable, Sidebar } from "ui2-sdk";
import "ui2-sdk/dist/style.css";
```

## Build for distribution
```bash
npm run build:package
```
This creates `dist` with compiled assets.

## Notes
- This repository stores built assets in `dist/`.
- `react` and `react-dom` are peer dependencies.

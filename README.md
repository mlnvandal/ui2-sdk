# ui2-sdk

React UI kit (UI2).

## Installation (git dependency)
In your app `package.json`:
```json
{
  "dependencies": {
    "ui2-sdk": "git+ssh://git@github.com:ORG/REPO.git#path:/package"
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
This creates `package/dist` with compiled assets and syncs the version from the root `package.json`.

## Notes
- `react` and `react-dom` are peer dependencies.
- Only `package/` should be used for git dependency installs.

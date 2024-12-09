# use-midnight

> A React hook to use Midnight in the browser

[![NPM](https://img.shields.io/npm/v/use-midnight.svg)](https://www.npmjs.com/package/use-midnight) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install use-midnight
```

## Usage

```tsx
import React from "react";

import { useMidnight, MidnightButton } from "use-midnight";
import type { Midnight } from "use-midnight";

function App() {
  const subscribe = (mn: Midnight) => {
    console.log(md);
  };

  return <MidnightButton subscribe={subscribe} />;
}
```

The hook has 2 exports:  
1- a `useMidnight` function that performs different checks and returns values injected by the Lace wallet into the browser  
2- a `MidnightButton` with a customizable appearance that shows the status of the dapp and user connection to the Lace wallet

## License

MIT © [claudebarde](https://github.com/claudebarde)

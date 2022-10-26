---
title: bucket.file.get()
description: Get the contents of a file from a bucket.
---

Get the contents of a file from a bucket.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');

const logoData = await logo.get();
```

## Examples

### Get a file

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');

const logoData = await logo.get();
```
---
title: api.route.put()
description: Register a handler for HTTP PUT requests to the route.
---

Register a handler for HTTP PUT requests to the route.

```javascript
import { api } from '@nitric/sdk';

const PARAM_ID = 'customerId';

const customerRoute = api('public').route(`/customers/:${PARAM_ID}`);

customerRoute.put((ctx) => {
  // construct response for the PUT: /customers/:customerId request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

## Parameters

---

**match** required `string`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [create a route with path params](#create-a-route-with-path-params)

---

**...middleware** required `HttpMiddleware`

One or more middleware functions to use as the handler for HTTP requests. Handlers can be sync or async.

---

## Examples

### Register a handler for PUT requests

```javascript
import { api } from '@nitric/sdk';

const PARAM_ID = 'customerId';

const customerRoute = api('public').route(`/customers/:${PARAM_ID}`);

customerRoute.put((ctx) => {
  const id = ctx.req.params[PARAM_ID];
  // handle the PUT request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```javascript
import { api } from '@nitric/sdk';
import { validate } from '../middleware';

const PARAM_ID = 'customerId';

const putCustomer = (ctx) => {
  const id = ctx.req.params[PARAM_ID];
  // handle the PUT request...
  const responseBody = {};
  ctx.res.json(responseBody);
};

const customerRoute = api('public').route(`/customers/:${PARAM_ID}`);

customerRoute.put(validate, putCustomer);
```

### Access the request body

The PUT request body is accessible from the `ctx.req` object.

```javascript
import { api } from '@nitric/sdk';

const customerRoute = api('public').route(`/customers/:${PARAM_ID}`);

customerRoute.put((ctx) => {
  const customerData = ctx.req.data;
  // parse, validate and store the request payload...
});
```
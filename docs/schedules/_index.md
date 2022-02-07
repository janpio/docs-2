# Schedules

## Overview

Nitric makes it easy to create functions that run on a schedule. Schedules are most useful for batch workloads, reporting and other activities that happen on a set cadence.

### Frequencies

Frequencies define when your functions should run. Nitric supports expressive schedules which run as often as once per minute. Frequencies can be configured in minutes, hours and days.

## The basics

<!-- TODO: ================= update link below with example ================= -->

The guide below highlights how to create schedules, you can use it in your own project or take a look at [one of our examples](#)

### Create a schedule

Creating schedules with Nitric can be done in a single line using our `config-as-code` functionality to define resources.

```javascript
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 5 minutes
schedule('process-transactions').every('5 minutes', async (ctx) => {
  // do some processing
});

// Create a schedule that runs every 3 hours
schedule('send-reminder').every('3 hours', async (ctx) => {
  // do some processing
});

// We can also just provide a simple singular rate as well
schedule('send-reports').every('day', async (ctx) => {
  // do some processing
});
```

## What's next?

<!-- TODO: ================= update link below with reference page ================= -->

- Learn more about schedules in our [reference docs]().
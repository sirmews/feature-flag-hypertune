---
name: Hypertune Integration example
slug: feature-flag-hypertune
description: Learn to use Hypertune, a powerful feature flag, A/B testing and app configuration platform.
framework: Next.js
useCase: Edge Middleware
css: Tailwind
deployUrl: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhypertunehq%2Fvercel-examples-fork%2Ftree%2Fmain%2Fedge-middleware%2Ffeature-flag-hypertune&env=NEXT_PUBLIC_HYPERTUNE_TOKEN,EDGE_CONFIG,EDGE_CONFIG_HYPERTUNE_ITEM_KEY&envDescription=Environment%20variables%20needed%20to%20use%20Hypertune%20with%20Vercel%20Edge%20Config&envLink=https%3A%2F%2Fdocs.hypertune.com%2Fgetting-started%2Fvercel-quickstart&project-name=feature-flag-hypertune&repository-name=feature-flag-hypertune&demo-title=Hypertune%20with%20Vercel%20Edge%20Config&demo-description=Use%20Hypertune%20with%20Vercel%20Edge%20Config&demo-url=https%3A%2F%2Ffeature-flag-hypertune.vercel.app%2F&demo-image=https%3A%2F%2Ffeature-flag-hypertune.vercel.app%2Fdemo.png&integration-ids=oac_naLXREDG2o9KihTGYBVz9fVl
demoUrl: https://feature-flag-hypertune.vercel.app
relatedTemplates:
  - maintenance-page
  - feature-flag-apple-store
---

# Feature flags, A/B testing and app configuration with Hypertune and Vercel Edge Config

[Hypertune](https://www.hypertune.com/) is a powerful feature flag, A/B testing and app configuration platform. Built for TypeScript, Next.js, Vercel and the modern stack with full type-safety and Git version control.

The Hypertune SDK works on both the server and the client, so you don't need to set up and use different SDKs in your Next.js app. It ships with the Hypertune CLI which auto-generates code from your project schema so you can access your flags, initialize context arguments and update flag logic with end-to-end type-safety.

This example uses Vercel Edge Config to initialize the Hypertune SDK with zero latency, so you can access your feature flags and run A/B tests with no performance impact to your app.

## Deploy with Vercel

Deploy this example with Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhypertunehq%2Fvercel-examples-fork%2Ftree%2Fmain%2Fedge-middleware%2Ffeature-flag-hypertune&env=NEXT_PUBLIC_HYPERTUNE_TOKEN,EDGE_CONFIG,EDGE_CONFIG_HYPERTUNE_ITEM_KEY&envDescription=Environment%20variables%20needed%20to%20use%20Hypertune%20with%20Vercel%20Edge%20Config&envLink=https%3A%2F%2Fdocs.hypertune.com%2Fgetting-started%2Fvercel-quickstart&project-name=feature-flag-hypertune&repository-name=feature-flag-hypertune&demo-title=Hypertune%20with%20Vercel%20Edge%20Config&demo-description=Use%20Hypertune%20with%20Vercel%20Edge%20Config&demo-url=https%3A%2F%2Ffeature-flag-hypertune.vercel.app%2F&demo-image=https%3A%2F%2Ffeature-flag-hypertune.vercel.app%2Fdemo.png&integration-ids=oac_naLXREDG2o9KihTGYBVz9fVl)

You'll be guided through installing the [Hypertune Vercel integration](https://vercel.com/integrations/hypertune) and setting up the required environment variables.

### Update your feature flag logic

Once you've deployed your project, open the [Hypertune console](https://app.hypertune.com/) to update your feature flag logic.

### Develop your project locally

1. Clone your project's repository and `cd` into it
2. Run `vercel link` to link to the Vercel project
3. Run `vercel env pull .env.development.local` to pull your environment variables
4. Copy the `NEXT_PUBLIC_HYPERTUNE_TOKEN` variable from `.env.development.local` to `.env`
5. Run `npm i`
6. Run `npm run dev`

This example assumes your Hypertune project has an `exampleFlag` feature flag defined on the `root` field in your project schema. If you created a new Hypertune project while installing the integration, it will have this feature flag by default.

But if you connected an existing Hypertune project without this example flag, follow the instructions below.

### Add new feature flags

To add new feature flags, define them in your project schema and configure their logic in the [Hypertune console](https://app.hypertune.com/).

Then add them to `hypertune.graphql` and run `npx hypertune` to generate type-safe methods for them which you can use in your app.

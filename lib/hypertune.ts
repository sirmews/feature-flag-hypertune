import { initializeHypertune } from '../generated/generated'
import { createClient } from '@vercel/edge-config'

const edgeConfigClient = process.env.EDGE_CONFIG
  ? createClient(process.env.EDGE_CONFIG)
  : undefined

const hypertune = initializeHypertune(
  {},
  {
    token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN,
    vercelEdgeConfigClient: edgeConfigClient,
    vercelEdgeConfigItemKey: process.env.EDGE_CONFIG_HYPERTUNE_ITEM_KEY,
    shouldInitializeFromServer: false,
  },
)

export default hypertune

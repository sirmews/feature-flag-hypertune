import { NextResponse } from 'next/server'
import hypertune from '../../../lib/hypertune'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  await hypertune.initFromVercelEdgeConfig()
  const rootNode = hypertune.root({
    context: {
      user: { id: 'test', name: 'Test', email: 'test@test.com' },
    },
  })
  const exampleFlag = rootNode.exampleFlag().get(/* fallback */ false)
  console.log('Server-side route handler feature flag:', exampleFlag)
  return NextResponse.json({ exampleFlag })
}

import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`)
    }
    const userData = await response.json()
    return NextResponse.json(userData)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
  }
} 
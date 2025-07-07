import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`)
    }
    const repos = await response.json()
    return NextResponse.json(repos)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch GitHub repositories' }, { status: 500 })
  }
} 
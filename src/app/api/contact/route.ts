import { NextRequest, NextResponse } from 'next/server'
import { insertContactSchema } from '@shared/schema'
import { supabase } from '@/lib/supabase'
import { z } from 'zod'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const contactData = insertContactSchema.parse(body)
    
    // Insert contact into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert({
        first_name: contactData.firstName,
        last_name: contactData.lastName,
        email: contactData.email,
        project_type: contactData.projectType,
        budget: contactData.budget,
        message: contactData.message,
        created_at: new Date().toISOString()
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
    }

    return NextResponse.json({ success: true, contact: data })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: error.errors }, { status: 400 })
    }
    console.error('Contact submission error:', error)
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
  }
} 
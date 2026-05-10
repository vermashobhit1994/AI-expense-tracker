// app/[[...slug]]/page.tsx
import { redirect } from 'next/navigation'

export default function CatchAllPage() {
  // If you want to physically change the URL to /home:
  redirect('/home')
  
  // OR, just render content here for every URL
  // return <div>This page handles everything!</div>
}

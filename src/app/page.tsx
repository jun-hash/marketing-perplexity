import { Sidebar } from '@/components/sidebar'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full h-screen grid lg:grid-cols-5">
      <Sidebar className="hidden lg:block border-r" />

      {/* Main */}
      <div className="col-span-3 lg:col-span-4 lg:border-1">
        <div className="flex flex-col items-center justify-center gap-10 h-full px-4 py-6 lg:px-8">
          <h1 className="text-3xl">Marketing Perplexity</h1>
          <Textarea placeholder='Search your marketing reference' />
        </div>
      </div>
    </div>
)
}

export default page
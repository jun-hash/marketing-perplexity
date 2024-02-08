import React from 'react'
import { Textarea } from '@/components/ui/textarea'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-full px-8 py-10 lg:px-8">
        <h1 className="text-3xl">Marketing Perplexity</h1>
        <Textarea placeholder='Search your marketing reference' />
    </div>
  )
}

export default MainPage
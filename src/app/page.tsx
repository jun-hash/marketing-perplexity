import MainPage from '@/components/MainPage'
import { Sidebar } from '@/components/sidebar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full h-screen grid lg:grid-cols-5">
      <Sidebar className="hidden lg:block border-r" />
      <div className="col-span-3 lg:col-span-4 lg:border-1">
        <MainPage />
      </div>
    </div>
)
}

export default page
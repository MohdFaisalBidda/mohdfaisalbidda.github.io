import { Loader2 } from 'lucide-react'
import React from 'react'

function Loader() {
  return (
    <Loader2 className="flex items-center justify-center animate-spin ease-in-out duration-200 h-screen"/>
  )
}

export default Loader
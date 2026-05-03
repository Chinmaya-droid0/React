import React from 'react'

function Card({username , num="Unavailable"}) {  // props
    
    
  return (
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.f75d494c.png" />
  </div>
  <div class="flex flex-col items-center md:items-start">
    <span class="text-2xl font-medium">{username}</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No.{num}</span>
      <span>·</span>
      <span>2026</span>
    </span>
  </div>
</div>
  )
}

export default Card
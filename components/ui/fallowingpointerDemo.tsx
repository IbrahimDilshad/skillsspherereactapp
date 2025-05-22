'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { FollowerPointerCard } from '@/components/ui/following-pointer'
import Image from 'next/image'

interface CourseContent {
  author: string
  authorAvatar: string
  image: string
  title: string
  description: string
  date: string
}

const blogContents: CourseContent[] = [
  {
    author: 'Ibrahim',
    authorAvatar: '/images/ibrahim.jpg',
    image: '/images/stamo logo.png',
    title: 'Mastering Web Development',
    description: 'Learn HTML, CSS, JavaScript, and modern frameworks.',
    date: 'May 12, 2025',
  },
  {
    author: 'Amir Abbas',
    authorAvatar: '/images/amir.jpg',
    image: '/images/stamo logo.png',
    title: 'Advanced Graphic Design',
    description: 'Design stunning visuals with Figma, Adobe, and Canva.',
    date: 'May 10, 2025',
  },
  {
    author: 'Saad Rafique',
    authorAvatar: '/images/saad.jpg',
    image: '/images/stamo logo.png',
    title: 'Start Your Own E-Commerce Store',
    description: 'Launch and scale your store with zero upfront cost.',
    date: 'May 8, 2025',
  },
]

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string
  avatar: string
}) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      alt={title}
      width={32}
      height={32}
      className="rounded-full"
    />
    <span className="text-sm font-semibold">{title}</span>
  </div>
)

export function SearchBarDemo() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContent = blogContents.filter((course) =>
    (course.title + course.description)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full px-4 py-10 bg-transparent">
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 rounded-full border border-neutral-700 bg-transparent text-neutral-200 placeholder-neutral-400 w-full max-w-md"
        />
      </div>

      {/* Filtered Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredContent.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <div className="bg-transparent border border-neutral-200 rounded-2xl px-8 py-10 shadow-md flex flex-col items-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-4 text-neutral-400">
                <path stroke="currentColor" strokeWidth="1.5" d="M12 17v.01M12 7v4m0 8a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
              </svg>
              <span className="text-xl font-semibold text-neutral-700 mb-2">No courses found</span>
              <span className="text-sm text-neutral-500">Try a different search term.</span>
            </div>
          </div>
        ) : (
          filteredContent.map((course, index) => (
            <div key={index} className="mx-auto w-80">
              <FollowerPointerCard
                title={
                  <TitleComponent
                    title={course.author}
                    avatar={course.authorAvatar}
                  />
                }
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-neutral-100">
                    <Image
                      width={1000}
                      height={1000}
                      src={course.image}
                      alt="thumbnail"
                      className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="my-2 text-lg font-bold text-neutral-900">
                      {course.title}
                    </h2>
                    <p className="mb-4 text-sm font-normal text-neutral-600">
                      {course.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        {course.date}
                      </span>
                      <div className="z-10 rounded-xl bg-neutral-900 px-6 py-2 text-xs font-bold text-white">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

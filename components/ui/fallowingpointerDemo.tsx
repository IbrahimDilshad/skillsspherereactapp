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
    <div className="w-full px-4 py-10 bg-neutral-900">
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-6">
        <Input
          type="text"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-full border border-neutral-700 bg-neutral-900 text-neutral-200 placeholder-neutral-400 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filtered Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredContent.map((course, index) => (
          <div key={index} className="mx-auto w-80">
            <FollowerPointerCard
              title={
                <TitleComponent
                  title={course.author}
                  avatar={course.authorAvatar}
                />
              }
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition duration-200 hover:shadow-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-neutral-800">
                  <Image
                    width={1000}
                    height={1000}
                    src={course.image}
                    alt="thumbnail"
                    className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                  />
                </div>
                <div className="p-4">
                  <h2 className="my-2 text-lg font-bold text-neutral-100">
                    {course.title}
                  </h2>
                  <p className="mb-4 text-sm font-normal text-neutral-400">
                    {course.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      {course.date}
                    </span>
                    <div className="z-10 rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        ))}
      </div>
    </div>
  )
}

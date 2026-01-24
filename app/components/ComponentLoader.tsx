"use client"

import React, { useEffect, useState } from "react"

export default function ComponentLoader({
  variant,
  children,
}: {
  variant: string
  children: React.ReactNode
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // small stagger to allow skeleton to show briefly on mount/route change
    const t = setTimeout(() => setShow(true), 220)
    return () => clearTimeout(t)
  }, [])

  // If still waiting, render skeleton for the variant
  if (!show) return <Skeleton variant={variant} />

  return <>{children}</>
}

function Skeleton({ variant }: { variant: string }) {
  // minimal, professional skeletons per component type
  switch (variant) {
    case "HeroSection":
      return (
        <section className="w-full py-24 text-center">
          <div className="mx-auto max-w-3xl animate-pulse">
            <div className="h-12 w-64 mx-auto rounded-md bg-white/6" />
            <div className="mt-6 h-4 w-96 mx-auto rounded bg-white/5" />
            <div className="mt-4 flex justify-center gap-4">
              <div className="h-10 w-32 rounded bg-white/4" />
              <div className="h-10 w-32 rounded bg-white/4" />
            </div>
          </div>
        </section>
      )

    case "FeaturesSection":
      return (
        <div className="grid grid-cols-2 gap-6 animate-pulse">
          <div className="h-64 rounded bg-white/4" />
          <div className="h-64 rounded bg-white/4" />
          <div className="h-64 rounded bg-white/4" />
          <div className="h-64 rounded bg-white/4" />
        </div>
      )

    case "Navbar":
      return (
        <div className="h-16 w-full flex items-center justify-between px-6">
          <div className="h-8 w-28 rounded bg-white/6 animate-pulse" />
          <div className="flex gap-3">
            <div className="h-8 w-16 rounded bg-white/4 animate-pulse" />
            <div className="h-8 w-16 rounded bg-white/4 animate-pulse" />
          </div>
        </div>
      )

    case "Footer":
      return (
        <footer className="w-full py-12">
          <div className="mx-auto max-w-4xl animate-pulse">
            <div className="h-4 w-48 rounded bg-white/6" />
            <div className="mt-3 h-3 w-72 rounded bg-white/5" />
          </div>
        </footer>
      )

    case "AboutSection":
      return (
        <div className="py-12 animate-pulse">
          <div className="mx-auto max-w-3xl">
            <div className="h-8 w-48 rounded bg-white/6" />
            <div className="mt-4 h-4 w-full rounded bg-white/5" />
            <div className="mt-2 h-4 w-5/6 rounded bg-white/5" />
          </div>
        </div>
      )

    case "FAQSection":
      return (
        <div className="space-y-4 animate-pulse">
          <div className="h-5 w-1/2 rounded bg-white/6" />
          <div className="h-5 w-1/2 rounded bg-white/6" />
          <div className="h-5 w-1/2 rounded bg-white/6" />
        </div>
      )

    case "GlobalUsersSection":
      return (
        <div className="flex gap-4 items-center animate-pulse">
          <div className="h-12 w-12 rounded-full bg-white/6" />
          <div className="h-12 w-12 rounded-full bg-white/6" />
          <div className="h-12 w-12 rounded-full bg-white/6" />
        </div>
      )

    case "MajorContributors":
      return (
        <div className="grid grid-cols-3 gap-4 animate-pulse">
          <div className="h-36 rounded bg-white/4" />
          <div className="h-36 rounded bg-white/4" />
          <div className="h-36 rounded bg-white/4" />
        </div>
      )

    case "DownloadReleaseSection":
      return (
        <div className="flex flex-col items-center gap-4 animate-pulse py-8">
          <div className="h-12 w-48 rounded bg-white/6" />
          <div className="h-10 w-40 rounded bg-white/5" />
        </div>
      )

    case "OrganizationSection":
      return (
        <div className="py-8 animate-pulse">
          <div className="h-6 w-48 rounded bg-white/6" />
          <div className="mt-3 h-4 w-80 rounded bg-white/5" />
        </div>
      )

    default:
      return <div className="h-24 w-full rounded bg-white/6 animate-pulse" />
  }
}

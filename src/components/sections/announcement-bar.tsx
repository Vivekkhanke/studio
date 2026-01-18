"use client"

import React from "react";

export default function AnnouncementBar() {
  const announcementText = (
    <span className="whitespace-nowrap px-4">
      <span role="img" aria-label="megaphone" className="mr-2">📢</span>Upcoming Batches Update → Enroll Now | Batch Starts from 1st February
    </span>
  );

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm font-medium overflow-hidden">
      <a href="#contact" onClick={handleScroll} className="hover:underline inline-block animate-marquee">
          {announcementText}
      </a>
    </div>
  );
}

"use client"

import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, MouseEvent } from "react";

const navItems = [
  {
    href: '#intro',
    label: 'About',
  },
  {
    href: '#projects',
    label: 'Projects',
  },
  {
    href: '#testimonials',
    label: 'Testimonials',
  },
  {
    href: '#faqs',
    label: 'FAQs',
  },
  {
    href: '#contact',
    label: 'Contact',
  }
]

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation()
  const inView = useInView(scope)

  useEffect(() => {
    if (inView) {
      entranceAnimation()
    }
  }, [inView])

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const url = new URL(e.currentTarget.href)
    const hash = url.hash

    const target = document.querySelector(hash)

    if (!target) return
    target.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="rounded-full bg-green-400 animate-ping absolute inset-0"></div>
              <div className="size-2.5 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <span className="uppercase">One spot available</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together.
              </h2>
              <a href="mailto:info@wilfredmanyara.com">
              <Button
                variant="secondary"
                className="mt-8"
                iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                }
              >
                info@wilfredmanyara.com
              </Button>
              </a>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; {new Date().getFullYear()} Wilfred Manyara &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

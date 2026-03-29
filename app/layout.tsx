import type { Metadata } from "next"
import StyledComponentsRegistry from '../lib/registry'

import { Cormorant_Garamond, EB_Garamond } from "next/font/google"

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Radiant",
  description: "Emergent narratives for everyone",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${garamond.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ignas Mikolaitis - Full Stack Developer & AI Engineer",
  description: "Ignas Mikolaitis is a full-stack developer and AI engineer specializing in React, Next.js, Python, and machine learning. Explore my portfolio showcasing innovative web applications, AI projects, and software solutions.",
  keywords: ["Ignas Mikolaitis", "Full Stack Developer", "AI Engineer", "React Developer", "Next.js", "Python", "Machine Learning", "Web Development", "Software Engineer", "Portfolio"],
  authors: [{ name: "Ignas Mikolaitis" }],
  creator: "Ignas Mikolaitis",
  publisher: "Ignas Mikolaitis",
  metadataBase: new URL('https://ignuxas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ignuxas.com',
    title: 'Ignas Mikolaitis - Full Stack Developer & AI Engineer',
    description: 'Full-stack developer and AI engineer specializing in React, Next.js, Python, and machine learning. Explore my portfolio showcasing innovative web applications and AI projects.',
    siteName: 'Ignas Mikolaitis Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ignas Mikolaitis Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignas Mikolaitis - Full Stack Developer & AI Engineer',
    description: 'Full-stack developer and AI engineer specializing in React, Next.js, Python, and machine learning.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="author" href="/humans.txt" />
        <meta name="theme-color" content="#06b6d4" />
        
        {/* Structured Data for AI Crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ignas Mikolaitis",
              "jobTitle": "Full Stack Developer & AI Engineer",
              "url": "https://ignuxas.com",
              "sameAs": [
                "https://github.com/ignuxas",
                "https://www.linkedin.com/in/ignas-mikolaitis/",
                "https://www.youtube.com/@ThunderclapLabs",
                "https://www.facebook.com/ignuxas/"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "Python",
                "JavaScript",
                "Machine Learning",
                "Web Development",
                "Node.js",
                "Vue.js",
                "PHP",
                "SQL",
                "MongoDB",
                "Tailwind CSS"
              ],
              "description": "Full-stack developer and AI engineer with expertise in modern web technologies and machine learning",
              "image": "https://ignuxas.com/og-image.png"
            })
          }}
        />
      </head>
      <body
        className={`${figtree.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

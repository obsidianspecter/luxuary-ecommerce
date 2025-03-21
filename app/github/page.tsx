"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, ArrowLeft, ExternalLink, Code, Star, GitFork } from "lucide-react"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock repository data
const repositories = [
  {
    name: "portfolio-website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS",
    stars: 24,
    forks: 8,
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    name: "ecommerce-platform",
    description: "A full-featured e-commerce platform with modern UI and seamless checkout experience",
    stars: 156,
    forks: 42,
    language: "JavaScript",
    languageColor: "#f7df1e",
  },
  {
    name: "react-component-library",
    description: "A collection of reusable React components with comprehensive documentation",
    stars: 87,
    forks: 23,
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    name: "ai-image-generator",
    description: "An AI-powered image generation tool using stable diffusion models",
    stars: 213,
    forks: 65,
    language: "Python",
    languageColor: "#3572A5",
  },
  {
    name: "blockchain-explorer",
    description: "A web application for exploring blockchain transactions and smart contracts",
    stars: 92,
    forks: 31,
    language: "Solidity",
    languageColor: "#AA6746",
  },
  {
    name: "game-development-toolkit",
    description: "A toolkit for game developers with utilities and helper functions",
    stars: 178,
    forks: 47,
    language: "C#",
    languageColor: "#178600",
  },
]

export default function GitHubPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row md:items-center gap-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-primary/10 mx-auto md:mx-0"
              >
                <Image src="/placeholder.svg?height=400&width=400" alt="GitHub Profile" fill className="object-cover" />
              </motion.div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-light mb-2 text-center md:text-left"
                >
                  Illusive Man
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-muted-foreground mb-4 text-center md:text-left"
                >
                  @obsidianspecter
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-muted-foreground mb-6 max-w-2xl text-center md:text-left"
                >
                  Full-stack developer passionate about creating elegant, user-centric digital experiences. Specializing
                  in React, Next.js, and modern web technologies.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                >
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild className="flex items-center gap-2">
                      <a href="https://github.com/obsidianspecter" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        View GitHub Profile
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <a
                        href="https://github.com/obsidianspecter?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code className="h-5 w-5" />
                        All Repositories
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={container} initial="hidden" animate="show" className="mt-16">
            <motion.h2 variants={item} className="text-2xl font-light mb-8 text-center">
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repositories.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  variants={item}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{repo.name}</span>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <a
                            href={`https://github.com/obsidianspecter/${repo.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">View repository</span>
                          </a>
                        </motion.div>
                      </CardTitle>
                      <CardDescription className="line-clamp-2 h-10">{repo.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center">
                        <span
                          className="inline-block h-3 w-3 rounded-full mr-2"
                          style={{ backgroundColor: repo.languageColor }}
                        ></span>
                        <span className="text-sm text-muted-foreground">{repo.language}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{repo.stars}</span>
                        </div>
                        <div className="flex items-center">
                          <GitFork className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{repo.forks}</span>
                        </div>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={`https://github.com/obsidianspecter/${repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">Interested in collaborating or have a project in mind?</p>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg">
                <a href="mailto:contact@example.com">Get in Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}


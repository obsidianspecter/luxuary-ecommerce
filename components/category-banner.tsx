import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CategoryBannerProps {
  title: string
  href: string
  imageSrc: string
}

export default function CategoryBanner({ title, href, imageSrc }: CategoryBannerProps) {
  return (
    <div className="relative group overflow-hidden">
      <div className="relative h-[400px] w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${title} category`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white">
          <h3 className="text-2xl font-light mb-4">{title}</h3>
          <Button
            asChild
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-black"
          >
            <Link href={href}>Explore</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


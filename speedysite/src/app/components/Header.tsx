import Link from 'next/link'
import { Button } from "@/components/ui/button"



const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          SpeedySite
        </Link>
        <Button variant="outline">
          Sign In
        </Button>
      </nav>
    </header>
  )
}

export default Header


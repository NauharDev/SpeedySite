"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"



const Header = () => {
    const handleSignIn = () => {
        const cognitoDomain = process.env.COGNITO_DOMAIN; // Replace with your domain
        const clientId = process.env.COGNITO_CLIENT_ID; // Replace with your app client ID
        const redirectUri = "https://speedy-site-web.vercel.app"; // Replace with your redirect URI
        const responseType = "code"; // Use 'code' for Authorization Code Grant or 'token' for Implicit Grant
        const scope = "email+openid+phone";
        const cognitoSignInUrl = `https://${cognitoDomain}/login?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${encodeURIComponent(
            redirectUri
          )}`;
          window.location.href =cognitoSignInUrl;
    }
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          SpeedySite
        </Link>
        <Button variant="outline" onClick={handleSignIn}>
          Sign In
        </Button>
      </nav>
    </header>
  )
}

export default Header


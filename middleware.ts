import { clerkMiddleware } from "@clerk/nextjs/server";

// Export the middleware
export default clerkMiddleware();

// Specify which routes are public and do not require authentication
export const config = {
  matcher: [
    // Public route patterns
    "/api/webhooks/clerk",
    // Add other public routes here if necessary

    // Pattern for protecting all other routes
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
    "/api/:path*",
    "/trpc/:path*",
  ],
};

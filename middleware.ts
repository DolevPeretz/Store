import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();
  if (!isPublicRoute(req) && !session.userId) {
    return new Response("Unauthorized", { status: 401 });
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

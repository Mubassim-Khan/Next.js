import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://sitename/com"]
    : ["http://localhost:3000"];

export function middleware(request: Request) {
  // const regex = new RegExp('/api/*')

  // if (regex.test(request.url)) {

  // }

  // if (request.url.includes('/api/')) {

  // }

  const origin = request.headers.get("origin");
  console.log(origin);

  // Thunder Client, Rest API & other tools will bypass this, but in order to block them too use (|| !origin) in if statement

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  console.log(request.method);
  console.log(request.url);

  //   const origin = request.headers.get("origin");
  //   console.log(origin);

  return NextResponse.next();
}

// We can alos do same thing by using Regex (Regular Expressions) and conditional statements.
export const config = {
  matcher: "/api/:path*",
};

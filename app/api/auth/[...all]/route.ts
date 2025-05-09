import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import type { NextRequest } from "next/server";

const handler = toNextJsHandler(auth);

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  console.log("CORS preflight from:", origin);

  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}

export async function GET(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const res = await handler.GET(req);

  res.headers.set("Access-Control-Allow-Origin", origin);
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const res = await handler.POST(req);

  res.headers.set("Access-Control-Allow-Origin", origin);
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}

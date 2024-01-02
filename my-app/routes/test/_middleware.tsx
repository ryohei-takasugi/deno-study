import { MiddlewareHandlerContext } from "$fresh/server.ts";

export function handler(_req: Request, ctx: MiddlewareHandlerContext) {
  console.log("request    : " + _req.url);
  const remoteHost = ctx.remoteAddr?.hostname;
  console.log("remoteHost : " + remoteHost);
  return ctx.next();
}

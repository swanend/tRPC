import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.name ?? "World"}!`;
    }),
});

export type AppRouter = typeof appRouter;

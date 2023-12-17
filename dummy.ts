const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;
const appRouter = router({
    greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query((opts) => {
      const { input } = opts;
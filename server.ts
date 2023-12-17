import { user } from './user';

const User1 = new user("Danish", 19, "Nasir", "nasir@hotmail.com", 2881)

console.log(User1);

import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from 'zod';
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

const appRouter = router({
  userList: publicProcedure.query(async () => {
    // Retrieve users from a datasource, this is an imaginary database
    const users:any[] = [];
    //    ^?
    return users;
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    //      ^?
    // Retrieve the user with the given ID
    const user = await db.user.findById(input);
    return user;
  }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      //      ^?
      // Create a new user in the database
      // const user = await db.user.create(input);
      //    ^?
    const user = newuser()
    User1.password = 2881
    
       return user;
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
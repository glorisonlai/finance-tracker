import { serve } from "https://deno.land/std@0.126.0/http/server.ts";

serve((_req) => new Response("Hello World!\n"), { port: 8000 });

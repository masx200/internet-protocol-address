import { publicIp, publicIpv4, publicIpv6 } from "npm:public-ip@6.0.1";
await Deno.serve(async (req: Request) =>
  new Response(
    JSON.stringify({
      "internal": Deno.networkInterfaces(),
      "public": {
       // ipv6: await publicIpv6(),

        ipv4: await publicIpv4(),
      },
    }),
  )
);

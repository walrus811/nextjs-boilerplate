import { sleep } from "@/utils/utils";

export async function GET() {
  await sleep(2000);
  return new Response(`${Date.now()}`);
}

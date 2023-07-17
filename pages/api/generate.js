// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* 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 */
import { OpenAIStream } from "../../utils/OpenAiStream";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const config = {
  runtime: "edge",
};

const handler = async(req) => {
  const { prompt } = await req.json()

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }


  const stream = await OpenAIStream(prompt);
  return new Response(
    stream, {
      headers: new Headers({
        'Cache-Control': 'no-cache',
      })
    }
  )
};

export default handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { send } from 'emailjs-com';

// const config = {
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     useCdn: process.env.NODE_ENV === "production",
//     token: process.env.SANITY_API_TOKEN,
// };

// const client = sanityClient(config)

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const data = JSON.parse(req.body)
    try {
        await send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            data,
            process.env.EMAILJS_PUBLIC_KEY!
        )
    } catch (error) {
        return res.status(500).json({  message: `Could not submit your comment.`, error})
    }
  console.log("Message submitted")
  res.status(200).json({ message: "Message submitted!" })
}

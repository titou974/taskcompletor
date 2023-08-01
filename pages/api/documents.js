import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { method } = req
  switch (method) {
    case 'POST':
      const content = req.body.content
      const post = await prisma.document.create({
        data: {
          content: content,
        },
      })
      res.status(201).json(post)
      break
    case 'GET':
      const lastpost = await prisma.document.findMany({
        orderBy: {
            id: 'desc',
        },
        take: 1,
      })
      res.status(200).json(lastpost)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

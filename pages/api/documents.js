import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { method } = req
  switch (method) {
    case 'POST':
      const type = req.body.type
      if (type === "Rapport") {
        const title = req.body.title
        const sectionsTitles = req.body.subtitles
        const sectionsTexts = req.body.sections
        const post = await prisma.document.create({
          data: {
            type: type,
            title: title,
            subtitles: sectionsTitles,
            sections: sectionsTexts
  
          },
        })
        console.log(post)
        res.status(201).json(post)
      }
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

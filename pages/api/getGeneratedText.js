import { parse } from 'cookie';

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.log(req.headers.cookie)
    const cookies = parse(req.headers.cookie || ''); // Parse the cookie string
    const finalText = cookies.finalText || ''; // Retrieve the generatedTitle value
    console.log(finalText);
    console.log("test");
    res.status(200).json({ finalText });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

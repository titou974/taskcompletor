import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { finalText } = req.body;

    // Save the generatedTitle in your preferred storage method (e.g., database, file, etc.)

    // You can also set a cookie or session to remember the generatedTitle
    // For example, using the 'cookie' package:
    // import { serialize } from 'cookie';
    res.setHeader('Set-Cookie', serialize('finalText', finalText, { path: '/', overwrite: true }));
    console.log(res.headers)
    res.status(200).json({ message: 'Generated title saved successfully!' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

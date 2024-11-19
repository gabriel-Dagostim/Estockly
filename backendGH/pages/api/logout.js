export default function handler(req, res) {
    if (req.method === 'POST') {
      res.setHeader('Set-Cookie', 'token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0');
      res.status(200).json({ message: 'Logout bem-sucedido!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  
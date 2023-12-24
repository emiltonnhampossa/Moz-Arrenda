// pages/api/auth/signup.js
import { signup } from '../../../controllers/auth.controller';

export default async function handler(req, res) {
  console.log('Handler foi chamado!'); // Adicione este log
  if (req.method === 'POST') {
    try {
      await signup(req, res);
    } catch (error) {
      console.error('Erro no signup:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

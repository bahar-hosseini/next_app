import cors from 'cors';
import nc from 'next-connect';

const handler = nc();

handler.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
handler.get(async (req, res) => {
  let users = [
    { id: 1, name: 'Bahar' },
    { id: 2, name: 'John' },
  ];

  res.end(JSON.stringify({ data: users, status: 'success' }));
});

export default handler;

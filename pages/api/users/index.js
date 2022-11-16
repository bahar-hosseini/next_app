import Cors from 'cors';

const cors = Cors({
  origin: 'http://localhost:3000',
});

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

const handler = async (req, res) => {
  await runMiddleware(req, res, cors);

  let users = [
    { id: 1, name: 'Bahar' },
    { id: 2, name: 'John' },
  ];

  res.end(JSON.stringify({ data: users, status: 'success' }));
};

export default handler;

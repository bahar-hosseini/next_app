import nc from 'next-connect';

const handler = nc();

handler.post((req, res) => {
  console.log(req.body);
  res.end(JSON.stringify({ data: 'post created', status: 'success' }));
});

// export default (req, res) => {
//   if (req.method === 'POST') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ data: 'post created', status: 'success' }));
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ status: 'error' }));
//   }
// };
export default handler;

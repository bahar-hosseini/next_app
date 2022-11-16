const handler = (req, res) => {
  let users = [
    { id: 1, name: 'Bahar' },
    { id: 2, name: 'John' },
  ];

  res.end(JSON.stringify({ data: users, status: 'success' }));
};

export default handler;

const orders = [];

exports.getOrders = (req, res) => {
  res.json(orders);
};

exports.createOrder = (req, res) => {
  const { title, amount } = req.body;
  const newOrder = { id: orders.length + 1, title, amount, status: 'pendiente' };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

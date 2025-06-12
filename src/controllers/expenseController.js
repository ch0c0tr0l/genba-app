const expenses = [];

exports.getExpenses = (req, res) => {
  res.json(expenses);
};

exports.createExpense = (req, res) => {
  const { description, amount } = req.body;
  const newExpense = { id: expenses.length + 1, description, amount };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
};

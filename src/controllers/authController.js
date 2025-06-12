const axios = require('axios');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await axios.post(`${SUPABASE_URL}/auth/v1/signup`, {
      email,
      password
    }, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.status(201).json(response.data);
  } catch (err) {
    res.status(400).json({ error: err.response?.data || err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await axios.post(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      email,
      password
    }, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(401).json({ error: err.response?.data || err.message });
  }
};

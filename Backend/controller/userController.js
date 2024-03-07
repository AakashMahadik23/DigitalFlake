// In your authController.js or userController.js
const jwt = require('jsonwebtoken');

// ...

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await UserModel.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// In your authRoutes.js or userRoutes.js
const { loginUser } = require('../controllers/authController');

router.post('/login', loginUser);
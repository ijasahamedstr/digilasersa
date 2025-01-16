import bcrypt from 'bcrypt'; // Make sure bcrypt is imported
import AccountRegisterAdmin from '../models/AccountRegisterAdmin.models.js';

export const AccountCreatAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  // Simple email validation (you can use a more complex regex or a validation library)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  // Check if user already exists
  const existingUser = await AccountRegisterAdmin.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists.' });
  }

  try {
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new AccountRegisterAdmin({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
};

const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
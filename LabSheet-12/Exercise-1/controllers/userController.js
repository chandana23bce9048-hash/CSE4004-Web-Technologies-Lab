// Sample in-memory data
let users = [
    { id: 1, name: 'siri' },
    { id: 2, name: 'John' }
];

// GET all users
const getUsers = (req, res) => {
    res.json(users);
};

// GET user by ID (route param)
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

// POST create user
const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

// PUT update user
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.name = req.body.name;
    res.json(user);
};

// DELETE user
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);

    res.json({ message: 'User deleted' });
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
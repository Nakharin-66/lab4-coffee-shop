let users = []
let nextId = 1 // เริ่ม id จาก 1

exports.getAllUsers = (req, res) => res.json(users)

exports.getUserById = (req, res) => {
    const user = users.find(u => u.id == req.params.userId)
    res.json(user || {})
}

exports.createUser = (req, res) => {
    const user = { id: nextId++, ...req.body } // id เพิ่มทีละ 1
    users.push(user)
    res.json(user)
}

exports.updateUser = (req, res) => {
    let user = users.find(u => u.id == req.params.userId)
    if (user) Object.assign(user, req.body)
    res.json(user || {})
}

exports.deleteUser = (req, res) => {
    users = users.filter(u => u.id != req.params.userId)
    res.json({ message: 'Deleted' })
}

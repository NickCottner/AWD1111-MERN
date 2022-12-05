import bcrypt from 'bcryptjs'

const users = 
[
    {
        name: "Admin User",
        email: "admin@test.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Jane Smith",
        email: "janesmith@test.com",
        password: bcrypt.hashSync('234567', 10),
    },
    {
        name: "John Smith",
        email: "johnsmith@test.com",
        password: bcrypt.hashSync('345678', 10),
    }
]

export default users
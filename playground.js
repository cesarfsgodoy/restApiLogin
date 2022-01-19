const jwt = require('jsonwebtoken')

const user = {
    id: "20",
    name: "Joao",
    username: "joao@gmail.com",
    password: "123456"
}
const secret = "asdpofihoqwjeqpowefj2"

function creatToken() {
    const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: 40 })

    console.log(token)
}

function testToken(token) {
    try {
        const validData = jwt.verify(token, secret)
        
        console.log(validData)
    } catch (error) {
        console.log('aqui')
        console.log(error.message)
    }
}

testToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTY0MjYxNzk2OCwiZXhwIjoxNjQyNjE4MDA4fQ.yAZoE_GRxYLkSJwMp3Wgava9A2Drk9eL-XtLBxZaYfs")


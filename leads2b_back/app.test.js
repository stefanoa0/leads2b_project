const test = require('tape');
const index = require('./index.js');
const supertest = require('supertest');

test('POST user', (t) => {
    supertest(index)
        .post('/signup',
            {
                body:
                {
                    name: 'stefano',
                    email: 'teste@testr.com',
                    password: '123456'
                }
            })
        .expect(201)
        .end((err, res) => {
            t.error(err, 'Sem erros')
            t.end()
        })
});

test('POST auth', (t) => {
    supertest(index)
        .post('/signin', { email: 'stefanouesc@gmail.com', password: '123456' })
        .expect(200)
        .then(response => {
            assert(response.body.token, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.FpjoWkImGzir7KGLNFLCauWJQLI3UIiOZHpJf7pbTFA')
        }).catch((err) => { console.log(err) })
});



import request from 'supertest'
import app from './server.ts'
import { describe, it } from 'node:test'

//testando

describe('Testando o Fluxo de Login com TS', () => {
    it('Deve logar com sucesso', async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: "vitor@estudante.com", password: "123456" });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});


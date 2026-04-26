import request from 'supertest';
import app from './server.ts'; 

describe('Testando o Fluxo de Login com TS', () => {
    it('Deve logar com sucesso', async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: "vitoor@hugo.com", password: "1234" });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
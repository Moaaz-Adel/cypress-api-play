/// <reference types="cypress" /> 

describe('Products API', () => {
    context('GET /produtos', () => {
        it('Should return a list with all Products', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos'
            })
            .should((response) => {
                cy.log(JSON.stringify(response.body));
                expect(response.status).to.eq(200);
                expect(response.body.quantidade).to.eq(2);
                expect(response.body.produtos.length).to.eq(2);
                expect(response.body.produtos[0].preco).eq(470);
                expect(response.body.produtos[1].nome).contains("Samsung");
                expect(response.body.produtos[1]).to.have.all.keys(
                    'nome', 'preco', 'descricao', 'quantidade', '_id'
                );
            });
        });
    });
});
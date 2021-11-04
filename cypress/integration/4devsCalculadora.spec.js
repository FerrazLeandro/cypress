describe("testar site GitHub", () => {

    it("acessar a página", () => {
    
        cy.visit("http://www.4devs.com.br/diferenca_de_dias_entre_datas");  
    
    });

    it ("verificar o título da página", () => {

        cy.title().should("include", "Contador de dias entre datas - 4Devs");
    });

    it ("selecionando a data inicial e final", () => {
    
        cy.get("#dateStart").type("1995-01-25");
        cy.get("#dateEnd").type("2021-11-03");
    });

    it ("validando resultado", () => {
    
        cy.get("#result").should("contain", "9779 dias");
    });
    
});
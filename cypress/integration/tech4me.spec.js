
describe("Testar site tech4me", () => {

beforeEach("acessar a página", () => {

    cy.visit("http://tech4me.great-site.net/");  

});

it ("verificar o título da página", () => {

    cy.title().should("include", "Tech4me");
});

it ("digitar o email", () => {

    cy.get("#email").type("leandro_ferraz@outlook.com");
});

it ("digitar a senha e confirmação", () => {

    cy.get("#senha").type("123456");
    cy.get("#confirmaSenha").type("123456");
});

it ("digita nome", () => {

    cy.get("#nome").type("Leandro");
});

it ("digita sobrenome", () => {

    cy.get("#sobrenome").type("Ferraz");
});

it ("digita telefone", () => {

    cy.get("#telefone").type("21 993017615");
});

it("selecionar 3 aulas por semana", () => {

    cy.get("#totalAulas").select("3");
});

it ("digita interesse", () => {

    cy.get("#textoGeral").type("Aprender backend com Java");
});

it ("digita interesse", () => {

    cy.get("#textoGeral").type("Aprender backend com Java");
});

it ("selecionando radio button", () => {

    cy.get("#masculino").check();
});

it("marcando e desmarcando chekbox", () => {

    cy.get("#indicacao").check();
    cy.get("#pesquisa").check();
    cy.get("#redesSociais").check();

    cy.get("#indicacao").uncheck();
    cy.get("#redesSociais").uncheck();

    cy.get("#aceito").check();
});

it("testando o header", () => {

    cy.get("header h2").should("contain", "Escola de Tecnologia");
});

it("testando o botão cancelar", () => {

    cy.get("#totalAulas").select("3");
    cy.get("#cancelar").click();
    cy.get("#totalAulas").should("contain", "3");
});

});
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pages/LoginPage";

let usuario;
before(() => {

    cy.fixture("usuario").then((dados)=>{

        usuario = dados;

    });

});
Given("que acesso a página de login", () => {
    LoginPage.acessarPaginaLogin();
});

When("informo um e-mail válido", () => {
    LoginPage.preencherEmail(usuario.email);
});

When("informo uma senha válida", () => {
    LoginPage.preencherSenha(usuario.senha);
});

When("clico no botão Login", () => {
    LoginPage.clicarLogin();
});

Then("o login deverá ser realizado com sucesso", (pagina) => {
    LoginPage.validarLoginComSucesso();
});
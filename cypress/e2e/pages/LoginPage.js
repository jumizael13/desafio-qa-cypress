class LoginPage {

    acessarPaginaLogin() {
        cy.visit("/login");
        cy.url().should("include","login");
    }

    preencherEmail(email) {
        cy.get("[data-qa='login-email']").should("be.visible").type(email);
    }

    preencherSenha(senha) {
        cy.get("[data-qa='login-password']").should("be.visible").type(senha);
    }

    clicarLogin() {
        cy.get("[data-qa='login-button']").should("be.visible").click();
    }

    validarLoginComSucesso(pagina) {
        cy.contains("Logged in as").should("be.visible");
    }
}

export default new LoginPage();
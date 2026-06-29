class ProductsPage {

    elementos = {
        menuProdutos: () => cy.get("a[href='/products']"),
        campoPesquisa: () => cy.get("#search_product"),
        botaoPesquisar: () => cy.get("#submit_search")
    }

    acessarPaginaInicial() {
        cy.visit("/");
        cy.url().should("eq","https://www.automationexercise.com/");
    }

    clicarMenuProdutos() {
        this.elementos.menuProdutos().should("be.visible").click();
        cy.url().should("include", "/products");
    }

    pesquisarProduto(produto) {
        this.elementos.campoPesquisa().should("be.visible").type(produto);
        this.elementos.botaoPesquisar().should("be.visible").click();
    }

    validarProdutoPesquisado(produto) {
        cy.get(".productinfo p").should("contain", produto);
    }
}

export default new ProductsPage();
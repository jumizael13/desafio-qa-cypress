class CartPage {

    elementos = {

        botaoAddToCart: () =>
            cy.contains("a.add-to-cart", "Add to cart"),

        botaoViewCart: () =>
            cy.get("#cartModal").contains("a", "View Cart"),

        produtoCarrinho: () =>
            cy.get(".cart_description a")

    }

    adicionarProdutoAoCarrinho() {
    this.elementos.botaoAddToCart().scrollIntoView().should("exist").click({ force: true });
    this.elementos.botaoViewCart().should("be.visible").click();
    cy.url().should("include", "/view_cart");
    }

    validarProdutoNoCarrinho(produto) {
        this.elementos.produtoCarrinho().should("contain", produto);
    }
}

export default new CartPage();
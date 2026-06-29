import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../e2e/pages/ProductsPage";
import CartPage from "../../e2e/pages/CartPage";

When("adiciono o produto ao carrinho", () => {
    CartPage.adicionarProdutoAoCarrinho();
});

Then("devo visualizar o produto {string} no carrinho", (produto) => {
    CartPage.validarProdutoNoCarrinho(produto);
});
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../e2e/pages/ProductsPage";

Given("que acesso a página inicial", () => {
    ProductsPage.acessarPaginaInicial();
});

When("clico no menu Products", () => {
    ProductsPage.clicarMenuProdutos();
});

When("pesquiso pelo produto {string}", (produto) => {
    ProductsPage.pesquisarProduto(produto);
});

Then("devo visualizar o produto {string}", (produto) => {
    ProductsPage.validarProdutoPesquisado(produto);
});
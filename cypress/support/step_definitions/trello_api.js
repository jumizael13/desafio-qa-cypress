import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que envio uma requisição GET para a API do Trello", () => {
  cy.request({
    method: "GET",
    url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a",
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("o status code da resposta deve ser 200", () => {
  expect(response.status).to.eq(200);
});

Then("devo exibir o campo name da estrutura list", () => {
  const nomeLista = response.body.data.list.name;

  cy.log(`Nome da lista: ${nomeLista}`);
  expect(nomeLista).to.exist;
  expect(nomeLista).to.be.a("string");
});
///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora todos os erros não capturados da aplicação
  return false;
});

describe('Cadastro de Usuário', () => {
  it('Deve preencher o formulário com sucesso', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type('Miya');
    cy.get('#lastName').type('ackerman');
    cy.get('#userEmail').type('miya@email.com');
    cy.get('[for="gender-radio-2"]').click(); // Female
    cy.get('#userNumber').type('12999999999');

    // Data de nascimento
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__day--015').click();

    // Matéria
    cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');

    // Hobbies
    cy.get('[for="hobbies-checkbox-3"]').click();

    // Upload de arquivo
    cy.get('#uploadPicture').attachFile('foto.jpg');

    // Endereço
    cy.get('#currentAddress').type('Rua Teste, 123 - SP');

    // Submit
    cy.get('#submit').click();

    // Validação
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
  });
});

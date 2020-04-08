Feature: Login

    Background:
        Given acesso a pagina de login

    Scenario: Login sucesso
        When realizo login com ariellemattos e 101010
        And clico no botão de login
        Then devo ver a mensagem de Bem vindo

    Scenario: Login incorreto 
        When realizo login com ariellemattos e 1111
        And clico no botão de login
        Then devo ver a mensagem de Usuario ou senha incorretos
       
    Scenario: Login usando command 
        When realizo login com ariellemattos e 101010
        And clico no botão de login
        Then devo ver a mensagem de Bem vindo
        
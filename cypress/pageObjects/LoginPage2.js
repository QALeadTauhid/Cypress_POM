class Login{
    
    txtUsername = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblmessage = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
        
    setUserName(username)
    {
        cy.get(this.txtUsername).type(username);
       
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
        
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
        
    }

    verifyLogin()
    {
        cy.get(this.lblmessage).should("have.text", "Dashboard");
        
    }

}

export default Login
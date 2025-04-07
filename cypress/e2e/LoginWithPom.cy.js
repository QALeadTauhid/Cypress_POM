import Login from "../pageObjects/LoginPage2"

describe("PageObjectModel", ()=>{
    it("LoginAction", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const loginPage = new Login()
        loginPage.setUserName("Admin")
        loginPage.setPassword("admin123")
        loginPage.clickSubmit()
        loginPage.verifyLogin()

    })

    it("LoginAction", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const loginPage = new Login()
        loginPage.setUserName("Admin")
        loginPage.setPassword("admin123")
        loginPage.clickSubmit()
        loginPage.verifyLogin()

    })


    it.only("LoginAction", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangeHRM").then((data)=>{
            const loginPage = new Login()
            loginPage.setUserName(data.username)
            loginPage.setPassword(data.password)
            loginPage.clickSubmit()
            loginPage.verifyLogin()

        })
        

    })
})
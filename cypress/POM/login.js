export const generateUser = () => {
 
}


class LoginPage{
  loginEmailField = ('#email')
  loginPasswordField = ('#password')
  loginButtonField = ('.ant-form > .justify-center')
  loginEmail = 'ayanloyesegun+5@gmail.com'
  loginPassword = 'Password@@1'

  dashboardTransactionStartField = ('.content > .flex > .ant-space > .ant-space-item > .ant-picker > :nth-child(1) > input')
  dashboardTransactionEndField = ('.content > .flex > .ant-space > .ant-space-item > .ant-picker > :nth-child(3) > input')
  dashboardTransactionStart = '2025-05-20'
  dashboardTransactionEnd = '2026-05-20'

  userManagementButton = (':nth-child(2) > .w-full > .font-medium')
  userManagementSearchField = ('.ant-input')
  userManagementSearchButton = ('.ant-input-group-addon > .ant-btn')
  userManagementSearch = 'ayanloyesegun+5@gmail.com'

  merchantManagementButton1 = (':nth-child(3) > .w-full > .font-medium')
  manageMerchant = ('.pl-10 > :nth-child(1)')

  transactionManagementButton = (':nth-child(6) > .w-full > .font-medium')
  merchantSearchField = ('.ant-input')
  merchantSearchButton = ('.ant-input-group-addon > .ant-btn')
  merchantSearchClear = ('.ant-input-suffix')
  merchantTransactionId1 = 'PXFL1779787938225521'
  merchantTransactionId2 = 'PXFL1779730271935450'

  collectionManagementButton =  (':nth-child(7) > .w-full > .font-medium')
  collectionSearchField = ('.ant-input')
  collectionIdSearchButton = ('.ant-input-group-addon > .ant-btn')
  collectionId1 = '8bb56bdd-9b3e-4c44-9335-01fc21bf4f5e'
  collectionId2 = 'ab7ce589-5f3c-4b97-92db-9db4b5329803'

  settlementManagementButton =  (':nth-child(8) > .w-full > .font-medium')
  allSettlementButton = ('.pl-10 > :nth-child(1)')
  configurationButton = ('.pl-10 > :nth-child(2)')
  settlementSearchField = ('.ant-input')
  settlementSearchButton = ('.ant-input-group-addon > .ant-btn')
  configurationSearchField = ('.ant-input')
  configurationSearchButton = ('.ant-input-group-addon > .ant-btn')
  settlementId1 = '79a3a374-f1ca-42ec-82c7-c0d3d88e5c70'
  settlementId2 = '84d76a88-fefb-4362-bfd6-d3983012564b'
  configurationId1 = 'ef539c55-23b8-43d6-9f6f-89d30598d9aa'
  configurationId2 = '233b1e8c-c2d0-4c2c-80a7-92391d958229'


setloginEmail(){
   cy.get(this.loginEmailField).should('be.visible').and('be.empty').type(this.loginEmail)
}
setloginPassword(){
   cy.get(this.loginPasswordField).should('be.visible').and('be.empty').type(this.loginPassword)
}
setloginButton(){
   cy.get(this.loginButtonField).should('be.visible').click()
}
setdashboardTransactionStart(){
  cy.get(this.dashboardTransactionStartField).clear().type(this.dashboardTransactionStart).should('be.visible')
}
setdashboardTransactionEnd(){
  cy.get(this.dashboardTransactionEndField).clear().type(this.dashboardTransactionEnd).should('be.visible')
}
setuserManagementButton(){
  cy.get(this.userManagementButton).should('be.visible').click()
}
setuserManagementSearchField(){
  cy.get(this.userManagementSearchField).type(this.userManagementSearch).should('be.visible')
}
setuserManagementSearchButton(){
  cy.get(this.userManagementSearchButton).should('be.visible').click()
}
setmerchantManagementButton1(){
  cy.get(this.merchantManagementButton1).should('be.visible').click()
}
setmanageMerchant(){
  cy.get(this.manageMerchant).click().should('be.visible')
}
settransactionManagementButton(){
  cy.get(this.transactionManagementButton).click().should('be.visible')
}
setmerchantSearchField(){
  cy.get(this.merchantSearchField).click().should('be.visible')
}
setmerchantTransactionId1(){
  cy.get(this.merchantSearchField).type(this.merchantTransactionId1).should('be.visible')
}
setmerchantSearchButton(){
  cy.get(this.merchantSearchButton).click().should('be.visible')
}
setmerchantSearchClear(){
  cy.get(this.merchantSearchClear).click().should('be.visible')
}
setmerchantTransactionId2(){
  cy.get(this.merchantSearchField).type(this.merchantTransactionId2).should('be.visible')
}
setmerchantSearchButton(){
  cy.get(this.merchantSearchButton).click().should('be.visible')
}
setcollectionManagementButton(){
  cy.get(this.collectionManagementButton).click().should('be.visible')
}
setcollectionSearchField(){
  cy.get(this.collectionSearchField).click().should('be.visible')
}
setcollectionId1(){
  cy.get(this.collectionSearchField).type(this.collectionId1).should('be.visible')
}
setcollectionIdSearchButton(){
  cy.get(this.collectionIdSearchButton).click().type(this.collectionId2).should('be.visible')
}
setcollectionSearchField(){
  cy.get(this.collectionSearchField).click().should('be.visible')
}
setcollectionId2(){
  cy.get(this.collectionSearchField).clear().type(this.collectionId2).should('be.visible')
}
setcollectionIdSearchButton(){
  cy.get(this.collectionIdSearchButton).click().should('be.visible')
}
setsettlementManagementButton(){
  cy.get(this.settlementManagementButton).click().should('be.visible')
}
setallsettlementButton(){
  cy.get(this.allSettlementButton).click().should('be.visible')
}
setsettlementField(){
  cy.get(this.settlementSearchField).click().should('be.visible')
}
setsettlementId1(){
  cy.get(this.collectionSearchField).type(this.settlementId1).should('be.visible')
}
setsettlementIdSearchButton(){
  cy.get(this.collectionIdSearchButton).click().should('be.visible')
}
setsettlementSearchField(){
  cy.get(this.collectionSearchField).click().should('be.visible')
}
setsettlementId2(){
  cy.get(this.collectionSearchField).clear().type(this.settlementId1).should('be.visible')
}
setsettlementIdSearchButton(){
  cy.get(this.collectionIdSearchButton).click().should('be.visible')
}
setsettlementManagementButton(){
  cy.get(this.settlementManagementButton).click().should('be.visible')
}
setconfigurationButton(){
  cy.get(this.configurationButton).click()
}
setconfigurationField(){
  cy.get(this.settlementSearchField).click().should('be.visible')
}
setconfigurationId1(){
  cy.get(this.configurationSearchField).type(this.configurationId1).should('be.visible')
}
setconfigurationSearchButton(){
  cy.get(this.collectionIdSearchButton).click().should('be.visible')
}
setconfigurationSearchField(){
  cy.get(this.collectionSearchField).as('btn').click()
}
setconfigurationId2(){
  cy.get(this.configurationSearchField).clear().type(this.configurationId2).should('be.visible')
}
setconfigurationSearchButton(){
  cy.get(this.configurationSearchButton).click().should('be.visible')
}
}
export default LoginPage

import LoginPage from '../POM/login'
const demo = new LoginPage

describe('LOGIN USER',()=>{
    beforeEach(()=>{
        cy.visit('https://admin.proxima.ng/')
  
    })
    it('LOGIN',()=>{
        demo.setloginEmail()
        demo.setloginPassword()
        demo.setloginButton()
    })
     it('DASHBOARD',()=>{
        demo.setloginEmail()
        demo.setloginPassword()
        demo.setloginButton()
        demo.setdashboardTransactionStart()
        demo.setdashboardTransactionEnd()
        
    })
    it('USER MANAGEMENT',()=>{
        demo.setloginEmail()
        demo.setloginPassword()
        demo.setloginButton()
        demo.setuserManagementButton()
        demo.setuserManagementSearchField()
        demo.setuserManagementSearchButton()
        
        
    })
    it('MERCHANT MANAGEMENT',()=>{
        demo.setloginEmail()
        demo.setloginPassword()
        demo.setloginButton()
        demo.setmerchantManagementButton1()
        demo.setmanageMerchant()


    })    
    it('TRANSACTION MANAGEMENT',()=>{
        demo.setloginEmail()
        demo.setloginPassword()
        demo.setloginButton()
        demo.settransactionManagementButton()
        demo.setmerchantSearchField()
        demo.setmerchantTransactionId1()
        demo.setmerchantTransactionId2()
        demo.setmerchantSearchButton()
        demo.setmerchantSearchClear()

    })    
    it('COLLECTION MANAGEMENT',()=>{
        demo.setloginEmail()
        demo.setloginPassword()
        demo.setloginButton()
        demo.setcollectionManagementButton()
        demo.setcollectionId1()
        demo.setcollectionIdSearchButton()
        demo.setcollectionId2()
        demo.setcollectionIdSearchButton()
    })    

    it('SETTLEMENT MANAGEMENT',()=>{
        demo.setloginEmail()
        demo.setloginPassword()
        demo.setloginButton()
        demo.setsettlementManagementButton()
        demo.setallsettlementButton()
        demo.setsettlementSearchField()
        demo.setsettlementId1()
        demo.setsettlementId2()
        demo.setsettlementManagementButton()
        demo.setconfigurationButton()
        demo.setconfigurationSearchField()
        demo.setconfigurationId1()
        demo.setconfigurationId2()
    })    
})
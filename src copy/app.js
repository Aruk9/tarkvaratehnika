export class App {

 
configureRouter(config, router) {
    this.router = router;
    config.title = 'SalesTrack';
    
    config.map([
        { route: ['', 'home'],       name: 'home',       moduleId: 'home/index',title: "Esileht",   nav: false },
        
        { route: 'register', name: 'register', moduleId: 'register/register', title: " Registreeri",   nav: false },

        { route: 'myaccount', name: 'myaccount', moduleId: 'myaccount/myaccount', title: "Minu konto",  nav: false },
        
        { route: 'myclients', name: 'myclients', moduleId: 'myclients/myclients',title: "Minu kliendid",   nav: false },
        
        { route: 'addproducts', name: 'addproducts', moduleId: 'addproducts/addproducts',  title: "Lisa tooteid", nav: false },
        
        { route: 'saleAction', name: 'saleAction', moduleId: 'saleAction/saleAction',  title: "Uus müük", nav: false },
        
        { route: 'login', name: 'login', moduleId: 'login/login',  title: "Logi sisse", nav: false },
        
        { route: 'mysales', name: 'mysales', moduleId: 'mysales/mysales',  title: "Minu müügid", nav: false },
        
        { route: 'changeproduct', name: 'changeproduct', moduleId: 'changeproduct/changeproduct',  title: "Muuda toodet", nav: false },
    ]);
  }
}

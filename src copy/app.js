export class App {

    
configureRouter(config, router) {
    this.router = router;
    config.title = 'SalesTrack';
    
    config.map([
        { route: ['', 'home'],       name: 'home',       moduleId: 'home/index',title: "Esileht",   nav: true },
        
        { route: 'register', name: 'register', moduleId: 'register/register', title: " Registreeri",   nav: true },

        { route: 'myaccount', name: 'myaccount', moduleId: 'myaccount/myaccount', title: "Minu konto",  nav: true },
        
        { route: 'myclients', name: 'myclients', moduleId: 'myclients/myclients',title: "Minu kliendid",   nav: true },
        
        { route: 'addproducts', name: 'addproducts', moduleId: 'addproducts/addproducts',  title: "Lisa tooteid", nav: true },
        
        { route: 'saleAction', name: 'saleAction', moduleId: 'saleAction/saleAction',  title: "Uus müük", nav: true },
        
        { route: 'login', name: 'login', moduleId: 'login/login',  title: "Logi sisse", nav: true },
        
        { route: 'mysales', name: 'mysales', moduleId: 'mysales/mysales',  title: "Minu müügid", nav: true },
        
        { route: 'changeproduct', name: 'changeproduct', moduleId: 'changeproduct/changeproduct',  title: "Muuda toodet", nav: true },
    ]);
  }
}

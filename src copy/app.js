export class App {

    
configureRouter(config, router) {
    this.router = router;
    config.title = 'SalesTrack';
    
    config.map([
        { route: ['', 'home'],       name: 'home',       moduleId: 'home/index',title: "Esileht",   nav: true },
        
        { route: 'register', name: 'register', moduleId: 'register/register', title: " Registreeri",   nav: true },

        { route: 'myaccount', name: 'myaccount', moduleId: 'myaccount/myaccount', title: "Minu konto",  nav: true },
        
        { route: 'myclients', name: 'myclients', moduleId: 'myclients/myclients',title: "Minu kliendid",   nav: true },
        
        { route: 'myproducts', name: 'myproducts', moduleId: 'myproducts/myproducts',  title: "Minu tooted", nav: true },

    ]);
  }
}

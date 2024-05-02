

module.exports = class PageControllers{
   static async home(req,res){
        res.render('pages/home')
   }

   static async adicionarObra(req, res){
      res.render('pages/adicionarObra') //1000
   }
   static async obra(req, res){
      res.render('pages/obras')    //2000
   }
   
   static async login(req, res){
      res.render('pages/login')   //3000
   }

   static async cadastrar(req, res){
      res.render('pages/cadastrar')  //4000
   }
}
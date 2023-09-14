const List = require('../models/list')

module.exports.home = (req,res) => {

    List.find({})
        .then(listArray=>{
            return res.render('home',{
                title : 'ToDO App',
                listArray
            })
        })
        .catch(err=>{
            if(err){
                console.log("Error in rendering home page")
            }
        })

}

module.exports.submit =  (req,res)=>{
        List.create(req.body)
        .then(list=>{
            // do the task you want after list is added 
        })
        .catch(err=>{
            // report error if creatinion fails 
        })

        List.find({})
        .then(listArray=>{
            return res.render('home',{
                title : 'ToDO App',
                listArray
            })
        })
        .catch(err=>{
            if(err){
                console.log("Error in rendering home page")
            }
        })
        return res.redirect('back')
}  

module.exports.delete = (req, res)=>{
    console.log(req.body.id);

        List.findByIdAndDelete(req.body.id)
        .then(data=>{
            console.log('*');
        })
        .catch(err=>{
            console.log('Unable to delete',err);
        })
    return res.redirect('back');
}
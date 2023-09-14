const List = require('../models/list')

module.exports.home = (req,res) => {

    List.find({})
        .then(listArray=>{
            console.log('888',listArray)
            return res.render('home',{
                title : 'To-DO App',
                listArray
            })
        })
        .catch(er=>{
        })

}

module.exports.submit =  (req,res)=>{
    console.log('LINK  : /submit',req.body)
    try {
        // destrucuring req.body 
        const {description , date , category } = req.body

        // adding to the database 
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
                title : 'To-DO App',
                listArray
            })
        })
        .catch(er=>{
        })
        return res.redirect('back')
    } catch (error) {
        console.log('Error Creating List',error)
    }
}
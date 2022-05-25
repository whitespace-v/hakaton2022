const {New} = require('../models/models')
const sequelize  = require('../db')

class NewsController {
    async create(req,res){
        try{
            let { title, text, date } = req.body
            const publish = await New.create( {title, text, date})
            return res.json(publish)
        } catch (e){
            console.log(e.message)
        }
    }

    async getAll(req, res){
        const news = await New.findAll({order: sequelize.literal('id DESC')})
        return res.json(news)
    } catch (e) {
        console.log(e)
    }
}

module.exports = new NewsController()

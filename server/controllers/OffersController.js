const {Offer} = require('../models/models')
const sequelize = require("../db");

class OffersController {
    async create(req,res){
        try{
            let { name, surname, patronymic, group, comment } = req.body
            const offer = await Offer.create( {name, surname, patronymic, group, comment})
            return res.json(offer)
        } catch (e){
            console.log(e.message)
        }
    }

    async getAll(req, res){
        try{
            let offers = await Offer.findAll({order: sequelize.literal('id DESC')})
            return res.json(offers)
        } catch (e) {
            console.log(e)
        }
    }
    async delete(req, res){
        try{
            let offer = await Offer.destroy({where: {id: req.params.id }})
            return res.json(offer)
        } catch (e) {
            console.log(e)
        }
    }
}


module.exports = new OffersController()

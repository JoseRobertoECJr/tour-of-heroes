const express = require('express');
const router = express.Router();

//models
var Hero = require('./../api-models/hero');

//GET api listing
router.get('/', (req, res) => {
  res.send('api works');
});

//routes

//'/hero routes'
router.route('/heroes')

    //Create a Hero (accessed at POST http://localhost:8080/api/heroes)
    .post(function(req, res){
        var hero = new Hero();

        hero.name = req.body.name;

        hero.save(function(err){
            if(err)
                res.send(err);

            res.json(hero);
        });
    })
    //Get all the Heroes (accessed at GET http://localhost:3000/api/heroes)
    .get(function(req, res){
        Hero.find(function(err, heroes){
            if(err)
                res.send(err);

            res.json(heroes);
        });
    });

    /*
        /heroes/:hero_id routes
    */

    router.route('/heroes/:hero_id')

        /*
            Get the hero with the id hero_id
            (accessed at GET http://localhost:8080/api/heroes/:hero_id)
        */
        .get(function(req, res){
            Hero.findById(req.params.hero_id, function(err, hero){
                if(err)
                    res.send(err);
                res.json(hero);
            });
        })

        /*
            Update the hero with the id hero_id
            (accessed at PUT http://localhost:8080/api/heroes/:hero_id)
        */
        .put(function(req, res){
            Hero.findById(req.params.hero_id, function(err, hero){
                if(err)
                    res.send(err);

                hero.name = req.body.name;

                hero.save(function(err){
                    if(err)
                        res.send(err);
                    res.json([{message: 'Hero updated!'}, hero]);
                });
            });
        })

        /*
            Delete the hero with the id hero_id
            (accessed at DELETE http://localhost:8080/api/heroes/:hero_id)
        */
        .delete(function(req, res){
            Hero.remove({
                _id: req.params.hero_id
            }, function(err, hero){
                if(err)
                    res.send(err);
                res.json({message: 'Successfully deleted!'});
            });
        });


module.exports = router;

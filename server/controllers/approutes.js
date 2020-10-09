
const Tree = require('../models/infoTree');

exports.createTree = (req, res, next) => {
	delete req.body._id;
	const tree =  new Tree({
		...req.body
	});
 thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.getAllTree = (req, res, next) => {
 Tree.find()
 .then(trees => res.status(200).json(trees))
 .catch(error => res.status(400).json({error})); 
 	name : req.body.name
 };
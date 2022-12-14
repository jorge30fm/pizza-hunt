const router = require("express").Router();
const {
	getAllPizza,
	getPizzaById,
	createPizza,
	updatePizza,
	deletePizza,
} = require("../../controllers/pizza-controller");
//Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

//Set up Get one, Put, and Delete at /api/pizzas/:id

router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;

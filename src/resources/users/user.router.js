const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User ({
      login: req.body.login,
      password: req.body.password,
      name: req.body.name
    })
  );
  res.json(User.toResponse(user));
});

/// //////////////////////////////////////////////////
router.route('/:id').put(async (req, res) => {
   const user = await usersService.ChangeUser(req.params.id, req.body);
  res.json(User.toResponse(user));
  });


router.route('/:id').delete(async (req, res) => {
 const message  = await usersService.deleteById(req.params.id);
  
   res.send(message);
 });


module.exports = router;

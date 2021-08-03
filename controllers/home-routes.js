const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    content: 'Hi, my name is Amna.',
    title: 'Name',
    created_at: new Date(),
    comments: [{}, {}],
    user: {
        username: 'amna'
    }
  });
});


module.exports = router;
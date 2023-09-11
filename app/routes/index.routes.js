const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'hola'
    })
});
// router.get('/:id', );
// router.post('/', );
// router.put('/:id', );
// router.delete('/:id', );

module.exports = router;
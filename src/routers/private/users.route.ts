import {Router} from 'express';


const router = Router();

router.get('/', (req, res) => {
    const { limit, offset, page, text_search } = req.query;
    res.json({data: req.query });
});


export default router;
// import from libraries
import express from 'express'; 


// import from files
import { testTransactions } from '../controllers/transactionsController.js';


// express router
const router = express.Router();


// routes
router.post('/test', testTransactions);


// export routes
export default router;  

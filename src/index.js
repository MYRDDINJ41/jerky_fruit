import app from './app.js';
import { storeDB } from './db/store.db.js';

storeDB();

app.listen(3000)
console.log('listening on port', 3000);
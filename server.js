import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();
const port = 4000;

// Start the server on the specified port and binding host address. 
app.listen(port, () => console.log(`Server running at http://localhost:${
    port}/`));


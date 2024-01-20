import app from "./app";
import { Config } from "./config";

const startServer = () => {
  const PORT = Config.PORT;

  try {
    app.listen(PORT, () => {
      console.log(`Server Started On Port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();

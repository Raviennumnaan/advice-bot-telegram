import app from "./app.js";
import bot from "./bot.js";
import "./botCommand.js";
import "./botChat.js";

process.on("uncaughtException", (err) => {
  console.log("UNHANDLED EXCEPTION: ❌ Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});

bot.launch(() => console.log("Bot is live"));

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION: ❌ Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

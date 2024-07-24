import { message } from "telegraf/filters";
import bot from "./bot.js";

bot.on(message("sticker"), (ctx) => ctx.reply("❌"));

bot.on(message("text"), (ctx) => {
  ctx.reply(ctx.update.message.text);
});

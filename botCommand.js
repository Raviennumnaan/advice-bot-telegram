import axios from "axios";
import bot from "./bot.js";
import { bold, mention } from "telegraf/format";

bot.command("start", (ctx) => {
  const userId = ctx.from.id;
  const username = ctx.from.first_name;
  const escapedUsername = username.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");

  ctx.replyWithMarkdownV2(
    `_Hello *[${escapedUsername}](tg://user?id=${userId})*\\! Welcome to *Advice bot*_`
  );
});

bot.command("advice", async (ctx) => {
  const { data } = await axios.get("https://api.adviceslip.com/advice");
  const advice = data.slip.advice.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");

  ctx.replyWithMarkdownV2(`*${advice}*`);
});

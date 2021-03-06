import axios from "axios";

const TOKEN = "1123134015:AAHiLJEGnon8q-TnMmjx2XIbolDsYiwFmlg";
const CHAT_ID = "-1001379416657";

const botInstance = axios.create({
  baseURL: `https://api.telegram.org/bot${TOKEN}/`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const sendOrderInfo = (order) => {
  const cartInfo = Object.values(order.cart).reduce(
    (acc, cartItem) => {
      const line = `${cartItem.brandName} ${cartItem.name} ${
        cartItem.price
      }uah x ${cartItem.count}шт = ${cartItem.price * +cartItem.count}\n`;

      acc.msg += line;
      acc.sum += cartItem.price * +cartItem.count;

      return acc;
    },
    {
      msg: "",
      sum: 0,
    }
  );

  const orderMessage = `
${order.fio}
${order.email}  
Город: ${order.country}, ${order.city}
Отделение почты: ${order.postOffice}
${cartInfo.msg}
Итого: ${cartInfo.sum}грн
`;

  console.log(orderMessage);

  return botInstance.get("sendMessage", {
    params: {
      chat_id: CHAT_ID,
      text: orderMessage,
    },
  });
};

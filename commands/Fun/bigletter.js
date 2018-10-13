const Command = require("../../base/Command.js");

class BigLetter extends Command {
    constructor(client) {
      super(client, {
        name: "bigletter",
        description: "Converts the specified text to regional indicators.",
        category: "Fun",
        usage: "bigletter <text>",
        aliases: ["regional", "regional-indicator"]
      });
    }

    async run(message, args, level, settings, texts) { // eslint-disable-line no-unused-vars
      const generate = () => {
        const text = args.join(" ").toLowerCase();
        if (!text) return message.channel.send("You must provide some text to convert to regional indicator emojis.");

        const pattern = /^[a-zA-Z0-9]+$/;
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const checkChars = pattern.test(text);

        if (!checkChars) return message.channel.send("Invalid character(s) provided.\nPlease ensure you have only provided alphanumeric characters.");

        let output = "";

        for (var i = 0; i < text.length; i++) {
          const char = text.charAt(i);
          if (char === " ") output += char;
          else if (text.includes(numbers) || numbers.includes(char)) output += numberToString(char);
          else output += `:regional_indicator_${char}: `;
        }

        return output;
      };

      const numberToString = (number) => {
        let value = "";

        switch (number) {
          case "0":
            value = ":zero :";
            break;

          case "1":
            value = ":one: ";
            break;

          case "2":
            value = ":two: ";
            break;

          case "3":
            value = ":three: ";
            break;

          case "4":
            value = ":four: ";
            break;

          case "5":
            value = ":five: ";
            break;

          case "6":
            value = ":six: ";
            break;

          case "7":
            value = ":seven: ";
            break;

          case "8":
            value = ":eight: ";
            break;

          case "9":
            value = ":nine: ";
            break;
        }

        return value;
      };

      message.channel.send(generate());
    }
}

module.exports = BigLetter;

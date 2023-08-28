import contactService from "./contacts.js";
import { Command } from "commander";
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contact = await contactService.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contactService.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contactService.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
/* invokeAction({action:"list"}); */
/* invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" }); */
/* invokeAction({action: "add", name: "Maksym", email:"maks@gmail.com",phone:"(063) 675-1323" }) */
/* invokeAction({ action: "remove", id: "yyiZPsUr3rM3RLd40h5oD" }); */
invokeAction(argv);

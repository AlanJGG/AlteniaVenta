import { Console } from "console";

const nodeConsole = new Console(process.stdout, process.stderr);
const myConsole = new nodeConsole.Console(process.stdout, process.stderr);

export { myConsole };

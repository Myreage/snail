import { Snail } from "./snailManipulation";

export const printSnail = (snail: Snail) => snail.map((line) => line.join("").replace("blank", "_")).join("\n");

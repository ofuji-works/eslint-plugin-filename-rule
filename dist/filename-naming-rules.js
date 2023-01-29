"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const rule = {
    create(context) {
        return {
            Program: (node) => {
                context.options.forEach((option) => {
                    const rule = option.patterns.join("|");
                    const regex = new RegExp(rule);
                    if (!regex.test(path_1.default.posix.basename(context.getFilename()))) {
                        console.log("regex", regex);
                        context.report({
                            node,
                            message: "bad pattern filename",
                        });
                    }
                });
            }
        };
    }
};
exports.default = rule;

"use strict";

import path from "path"
import {Rule} from "eslint"

type Option = {
    patterns: string[]
}

const rule: Rule.RuleModule = {
    create(context) {
        return {
            Program: (node) => {
                context.options.forEach((option: Option) => {
                    const rule = option.patterns.join("|")
                    const regex = new RegExp(rule);
                    if (!regex.test(path.posix.basename(context.getFilename()))) {
                        console.log("regex", regex);
                        context.report({
                            node,
                            message: "bad pattern filename",
                        })
                    }
                })
            }
        }
    }
}

export default rule

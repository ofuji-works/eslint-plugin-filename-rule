"use strict";

import { RuleTester } from "eslint"
import rule from "../lib/rules/filename-naming-rules"

const ruleTester = new RuleTester();
ruleTester.run(
  "filename-naming-rules with option: [{ patterns: ['__+([a-z])', 'test_+([a-z])'] }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/__login.jsx',
        options: [{ patterns: ['__+([a-z])', 'test_+([a-z])'] }],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ patterns: ['__+([a-z])', 'test_+([a-z])'] }],
        errors: [
          { message: 'bad pattern filename', },
        ],
      },
    ],
  }
);

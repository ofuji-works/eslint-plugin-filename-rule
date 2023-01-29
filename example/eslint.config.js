import filenameRule from "@ofuji-works/eslint-plugin-filename-rule"

export default {
    plugins: {
        filenameRule
    },
    rules: {
        "filenameRule/filename-naming-rules": [
            "error", { patterns: ["test_+([a-z])"] }
        ]
    }
}

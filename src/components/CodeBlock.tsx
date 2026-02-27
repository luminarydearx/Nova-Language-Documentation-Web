"use client";
import { useState } from "react";

interface Token {
  type: string;
  value: string;
}

const KEYWORDS = new Set([
  "func",
  "var",
  "const",
  "return",
  "if",
  "else",
  "while",
  "for",
  "in",
  "break",
  "continue",
  "import",
  "from",
  "class",
  "new",
  "this",
  "super",
  "static",
  "as",
  "match",
  "case",
  "default",
  "spawn",
  "await",
  "async",
]);
const BUILTINS = new Set([
  "print",
  "println",
  "input",
  "len",
  "type",
  "str",
  "int",
  "float",
  "bool",
  "range",
  "push",
  "pop",
  "join",
  "split",
  "trim",
  "upper",
  "lower",
  "contains",
  "exit",
]);
const TYPE_NAMES = new Set([
  "void",
  "null",
  "any",
  "string",
  "number",
  "byte",
  "char",
  "list",
  "map",
  "set",
]);
const BOOL_TOKENS = new Set(["true", "false", "null"]);

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < code.length) {
    // Comment
    if (code[i] === "/" && code[i + 1] === "/") {
      let j = i;
      while (j < code.length && code[j] !== "\n") j++;
      tokens.push({ type: "comment", value: code.slice(i, j) });
      i = j;
      continue;
    }
    // Block comment
    if (code[i] === "/" && code[i + 1] === "*") {
      let j = i + 2;
      while (j < code.length - 1 && !(code[j] === "*" && code[j + 1] === "/"))
        j++;
      tokens.push({ type: "comment", value: code.slice(i, j + 2) });
      i = j + 2;
      continue;
    }
    // String
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== q) {
        if (code[j] === "\\") j++;
        j++;
      }
      tokens.push({ type: "string", value: code.slice(i, j + 1) });
      i = j + 1;
      continue;
    }
    // Number
    if (/[0-9]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[0-9.]/.test(code[j])) j++;
      tokens.push({ type: "number", value: code.slice(i, j) });
      i = j;
      continue;
    }
    // Identifier / keyword
    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_]/.test(code[j])) j++;
      const word = code.slice(i, j);
      let type = "plain";
      if (KEYWORDS.has(word)) type = "keyword";
      else if (BUILTINS.has(word)) type = "builtin";
      else if (TYPE_NAMES.has(word)) type = "type";
      else if (BOOL_TOKENS.has(word)) type = "bool";
      else if (/^[A-Z]/.test(word)) type = "type";
      tokens.push({ type, value: word });
      i = j;
      continue;
    }
    // Operator
    if (/[+\-*/%=!<>&|^~?:.]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[+\-*/%=!<>&|^~?:.]/.test(code[j])) j++;
      tokens.push({ type: "operator", value: code.slice(i, j) });
      i = j;
      continue;
    }
    // Whitespace / other
    tokens.push({ type: "plain", value: code[i] });
    i++;
  }
  return tokens;
}

const tokenClass: Record<string, string> = {
  keyword: "token-keyword",
  builtin: "token-builtin",
  string: "token-string",
  number: "token-number",
  comment: "token-comment",
  operator: "token-operator",
  type: "token-type",
  bool: "token-bool",
  plain: "token-plain",
  function: "token-function",
};

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "nova",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");
  const tokens = tokenize(code.trim());

  // Re-split tokens by lines for line-number display
  const lineTokens: Token[][] = [[]];
  for (const tok of tokens) {
    if (tok.value.includes("\n")) {
      const parts = tok.value.split("\n");
      lineTokens[lineTokens.length - 1].push({
        type: tok.type,
        value: parts[0],
      });
      for (let p = 1; p < parts.length; p++) {
        lineTokens.push([{ type: tok.type, value: parts[p] }]);
      }
    } else {
      lineTokens[lineTokens.length - 1].push(tok);
    }
  }

  return (
    <div className="group relative my-5 rounded-xl overflow-hidden border border-nova-border bg-nova-card shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-nova-border bg-nova-deep">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          {filename && (
            <span className="font-mono text-xs text-nova-dim">{filename}</span>
          )}
          {!filename && (
            <span className="font-mono text-xs text-nova-dim">{language}</span>
          )}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-xs text-nova-dim hover:text-nova-cyan transition-colors px-2 py-1 rounded hover:bg-nova-border"
        >
          {copied ? (
            <>
              <CheckIcon />
              copied!
            </>
          ) : (
            <>
              <CopyIcon />
              copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <table className="w-full code-block font-mono text-sm">
          <tbody>
            {lineTokens.map((lineToks, idx) => (
              <tr key={idx} className="hover:bg-white/2 transition-colors">
                {showLineNumbers && (
                  <td
                    className="select-none text-right pr-4 pl-4 text-nova-border w-12 text-xs leading-7 align-top"
                    style={{ userSelect: "none" }}
                  >
                    {idx + 1}
                  </td>
                )}
                <td className="pr-6 pl-2 leading-7 whitespace-pre">
                  {lineToks.map((tok, ti) => (
                    <span
                      key={ti}
                      className={tokenClass[tok.type] || "token-plain"}
                    >
                      {tok.value}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

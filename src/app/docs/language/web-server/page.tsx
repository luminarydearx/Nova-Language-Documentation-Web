import CodeBlock from "@/components/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Web Server - Nova" };

export default function WebDocs() {
  return (
    <div className="doc-prose animate-fade-up">
      <h1>Web Server</h1>
      <p>
        Nova includes a built-in HTTP server, allowing you to create websites
        and APIs directly from Nova code. No external dependencies needed.
      </p>

      <h2>Basic Server</h2>
      <CodeBlock
        code={`var server = serve(3000)\n\nserver.route("/", func(req) {\n    return "<h1>Hello from Nova!</h1>"\n})\n\nserver.start()\n// Visit http://localhost:3000`}
        language="nova"
      />

      <h2>Multiple Routes</h2>
      <CodeBlock
        code={`server.route("/about", func(req) {\n    return "<h1>About Us</h1><p>Built with Nova</p>"\n})\n\nserver.route("/api/data", func(req) {\n    return JSON.stringify({"status": "ok", "version": VERSION})\n})`}
        language="nova"
      />

      <h2>Request Object</h2>
      <p>Every route handler receives a request object:</p>
      <ul>
        <li>
          <code>req.method</code> — HTTP method (GET, POST, etc.)
        </li>
        <li>
          <code>req.path</code> — URL path
        </li>
        <li>
          <code>req.query</code> — Query string
        </li>
      </ul>

      <h2>Styled Website</h2>
      <CodeBlock
        code={`server.route("/", func(req) {\n    return "<html><head><style>\n        body { font-family: sans-serif; background: #0a0a1a; color: white; }\n        h1 { color: #00dcff; text-align: center; padding: 40px; }\n    </style></head><body>\n        <h1>Nova Web App</h1>\n        <p>Server time: " + Date.format() + "</p>\n    </body></html>"\n})`}
        language="nova"
      />

      <h2>API Reference</h2>
      <ul>
        <li>
          <code>serve(port)</code> — Create HTTP server
        </li>
        <li>
          <code>server.route(path, handler)</code> — Add route
        </li>
        <li>
          <code>server.start()</code> — Start listening
        </li>
        <li>
          <code>server.stop()</code> — Stop server
        </li>
      </ul>
    </div>
  );
}

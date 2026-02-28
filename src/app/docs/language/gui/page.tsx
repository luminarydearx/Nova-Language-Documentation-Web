import CodeBlock from "@/components/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "GUI Development - Nova" };

export default function GuiDocs() {
  return (
    <div className="doc-prose animate-fade-up">
      <h1>GUI Development</h1>
      <p>
        Nova v0.5.7 introduces built-in support for creating desktop GUI
        applications using the native system windowing engine.
      </p>

      <h2>Basic Window</h2>
      <p>
        The <code>window(title, width, height)</code> function creates a new
        application container.
      </p>
      <CodeBlock
        code={`var app = window("Nova App", 400, 300);\napp.show();`}
        language="nova"
      />

      <h2>Components</h2>
      <ul>
        <li>
          <code>label(text)</code>: A non-editable text display.
        </li>
        <li>
          <code>button(text, callback)</code>: A clickable button that executes
          a function.
        </li>
        <li>
          <code>input(size)</code>: A single-line text input field.
        </li>
      </ul>

      <h2>Event Handling</h2>
      <p>
        Buttons can trigger Nova functions when clicked. You can also read or
        write properties like <code>text</code>.
      </p>
      <CodeBlock
        code={`var lbl = label("Ready");\nvar btn = button("Click Me", func(t) {\n    lbl.text = "Button was clicked!";\n});\n\napp.add(lbl);\napp.add(btn);\napp.show();`}
        language="nova"
      />

      <h2>Modern UI Example</h2>
      <p>Here is a complete interactive application:</p>
      <CodeBlock
        code={`var win = window("Cosmic Counter", 300, 200);\nvar count = 0;\nvar lbl = label("Value: 0");\n\nvar btn = button("Increment", func(t) {\n    count += 1;\n    lbl.text = "Value: " + str(count);\n});\n\nwin.add(lbl);\nwin.add(btn);\nwin.show();`}
        language="nova"
      />
    </div>
  );
}

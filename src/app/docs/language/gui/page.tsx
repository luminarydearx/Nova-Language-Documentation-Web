import CodeBlock from "@/components/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "GUI Development - Nova" };

export default function GuiDocs() {
  return (
    <div className="doc-prose animate-fade-up">
      <h1>GUI Development</h1>
      <p>
        Nova v0.5.7 has a full-featured GUI engine for building styled desktop
        applications. Windows stay open indefinitely — there is no time limit.
      </p>

      <h2>Creating a Window</h2>
      <CodeBlock
        code={`var win = window("My App", 500, 400)\nwin.setLayout("flow")  // "flow", "grid", "border", or "none"\nwin.setBackground(Color(40, 40, 60))\nwin.show()`}
        language="nova"
      />

      <h2>Components</h2>
      <ul>
        <li>
          <code>label(text)</code> — Static text display
        </li>
        <li>
          <code>button(text, callback)</code> — Clickable button
        </li>
        <li>
          <code>input(columns)</code> — Single-line text field
        </li>
        <li>
          <code>textarea(rows, cols)</code> — Multi-line text area
        </li>
        <li>
          <code>checkbox(text)</code> — Toggle checkbox
        </li>
        <li>
          <code>dropdown(item1, item2, ...)</code> — Dropdown selector
        </li>
        <li>
          <code>panel(x, y, w, h)</code> — Container panel
        </li>
      </ul>

      <h2>Styling Components</h2>
      <p>
        Use <code>style(component, props)</code> to apply custom colors, fonts,
        and positioning:
      </p>
      <CodeBlock
        code={`var lbl = label("Welcome!")\nstyle(lbl, {\n    "foreground": Color(0, 220, 255),\n    "font": Font("Segoe UI", 24, "bold"),\n    "background": Color(30, 30, 50),\n    "x": 50, "y": 20, "width": 300, "height": 40\n})`}
        language="nova"
      />

      <h3>Color & Font</h3>
      <CodeBlock
        code={`// RGB colors\nvar blue = Color(0, 100, 255)\nvar red = Color("#ff3333")\n\n// Fonts with style\nvar heading = Font("Arial", 20, "bold")\nvar body = Font("Consolas", 14)\nvar italic = Font("Georgia", 16, "italic")`}
        language="nova"
      />

      <h2>Event Handling</h2>
      <CodeBlock
        code={`var btn = button("Click Me", func(t) {\n    alert("Button clicked!")\n})\n\n// Or use onClick for any component\nonClick(lbl, func() {\n    print "Label was clicked"\n})`}
        language="nova"
      />

      <h2>Reading & Setting Text</h2>
      <CodeBlock
        code={`var field = input(20)\nvar display = label("")\n\nvar btn = button("Submit", func(t) {\n    var name = getText(field)\n    setText(display, "Hello, " + name + "!")\n})`}
        language="nova"
      />

      <h2>Dialogs</h2>
      <CodeBlock
        code={`alert("Operation complete!")\nvar ok = confirm("Are you sure?")\nvar name = prompt("Enter your name:")`}
        language="nova"
      />

      <h2>Complete Example</h2>
      <CodeBlock
        code={`var win = window("Nova Calculator", 420, 300)\nwin.setLayout("flow")\nwin.setBackground(Color(30, 30, 50))\n\nvar title = label("Calculator")\nstyle(title, {"foreground": Color(0,220,255), "font": Font("Arial",20,"bold")})\n\nvar display = input(20)\nstyle(display, {"font": Font("Consolas", 24), "foreground": Color(255,255,255)})\n\nvar result = label("Result: 0")\nstyle(result, {"foreground": Color(200,200,200), "font": Font("Arial",16)})\n\nvar btn = button("Calculate", func(t) {\n    setText(result, "Result: " + getText(display))\n})\nstyle(btn, {"background": Color(0,150,255), "foreground": Color(255,255,255)})\n\nwin.add(title)\nwin.add(display)\nwin.add(btn)\nwin.add(result)\nwin.show()`}
        language="nova"
      />
    </div>
  );
}

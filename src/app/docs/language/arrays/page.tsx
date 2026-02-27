import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Arrays' }

export default function ArraysPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-green/10 text-nova-green border border-nova-green/20">✅ v0.2.0 · NEW</span>
        </div>
        <p className="text-xs font-mono text-nova-dim mb-2">Language Reference</p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">Arrays</h1>
        <p className="text-nova-dim">Ordered, mutable collections in Nova.</p>
      </div>

      <h2>Creating Arrays</h2>
      <CodeBlock code={`// Empty array
var empty = []

// Array with values
var nums    = [1, 2, 3, 4, 5]
var names   = ["Nova", "Luminar", "Space"]
var mixed   = [1, "hello", true, null]

// Nested arrays
var matrix  = [[1, 2], [3, 4], [5, 6]]

print nums     // [1, 2, 3, 4, 5]
print names    // [Nova, Luminar, Space]`} filename="create.nv" />

      <h2>Accessing Elements</h2>
      <CodeBlock code={`var fruits = ["apple", "banana", "cherry", "date"]

// Index (0-based)
print fruits[0]     // apple
print fruits[1]     // banana
print fruits[3]     // date

// Negative index (from end)
print fruits[-1]    // date
print fruits[-2]    // cherry

// Get length
print fruits.len    // 4
print len(fruits)   // 4  (built-in)`} filename="access.nv" />

      <h2>Modifying Arrays</h2>
      <CodeBlock code={`var items = [10, 20, 30]

// Change element by index
items[0] = 99
print items         // [99, 20, 30]

// push — add to end
items.push(40)
print items         // [99, 20, 30, 40]

// pop — remove from end
var last = items.pop()
print last          // 40
print items         // [99, 20, 30]

// unshift — add to beginning
items.unshift(0)
print items         // [0, 99, 20, 30]

// shift — remove from beginning
var first = items.shift()
print first         // 0
print items         // [99, 20, 30]`} filename="modify.nv" />

      <h2>Array Methods</h2>

      <div className="not-prose overflow-x-auto mb-6">
        <table className="nova-table">
          <thead><tr><th>Method</th><th>Returns</th><th>Description</th></tr></thead>
          <tbody>
            {[
              ['arr.push(val)',       'null',    'Add value to end'],
              ['arr.pop()',           'value',   'Remove and return last element'],
              ['arr.shift()',         'value',   'Remove and return first element'],
              ['arr.unshift(val)',    'null',    'Add value to beginning'],
              ['arr.len / arr.length','int',    'Number of elements'],
              ['arr.contains(val)',   'bool',   'Check if value exists'],
              ['arr.indexOf(val)',    'int',    'Index of value (-1 if not found)'],
              ['arr.join(sep)',       'string', 'Join elements with separator'],
              ['arr.slice(from, to)', 'array',  'Extract sub-array'],
              ['arr.reverse()',       'null',   'Reverse in place'],
              ['arr.toString()',      'string', 'Convert to string'],
            ].map(([m, r, d]) => (
              <tr key={m}>
                <td className="font-mono text-nova-cyan text-sm">{m}</td>
                <td className="font-mono text-nova-purple text-sm">{r}</td>
                <td className="text-nova-dim text-sm">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Iterating Arrays</h2>
      <CodeBlock code={`var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]

// for..in loop
for planet in planets {
    print planet
}

// with index (use range + index)
for i in 0..planets.len {
    print i + ": " + planets[i]
}

// Using range() built-in
for i in range(planets.len) {
    print planets[i].upper()
}`} filename="iterate.nv" />

      <h2>Array Built-in Functions</h2>
      <CodeBlock code={`var numbers = [5, 3, 8, 1, 9, 2]

// len() - global function
print len(numbers)          // 6

// push() / pop() - global functions
push(numbers, 7)
print numbers               // [5, 3, 8, 1, 9, 2, 7]

var last = pop(numbers)
print last                  // 7

// range() - create number arrays
var tens = range(0, 100, 10)
print tens   // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]`} filename="builtins.nv" />

      <h2>Array Slicing</h2>
      <CodeBlock code={`var letters = ["a", "b", "c", "d", "e", "f"]

print letters.slice(2)      // [c, d, e, f]  (from index 2)
print letters.slice(1, 4)   // [b, c, d]     (from 1 to 4, exclusive)
print letters.slice(0, 3)   // [a, b, c]`} filename="slice.nv" />

      <h2>Joining & Splitting</h2>
      <CodeBlock code={`var words = ["Nova", "is", "awesome"]

// join array into string
print words.join(" ")       // Nova is awesome
print words.join(", ")      // Nova, is, awesome
print words.join("-")       // Nova-is-awesome

// split a string into array
var sentence = "Hello World Nova"
var parts = sentence.split(" ")
print parts                 // [Hello, World, Nova]
print parts.len             // 3`} filename="join-split.nv" />

      <h2>Nested Arrays (Matrix)</h2>
      <CodeBlock code={`var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Access: matrix[row][col]
print matrix[0][0]   // 1
print matrix[1][1]   // 5
print matrix[2][2]   // 9

// Iterate nested
for row in matrix {
    print row.join(" ")
}
// 1 2 3
// 4 5 6
// 7 8 9`} filename="matrix.nv" />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link href="/docs/language/control-flow" className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors">← Control Flow</Link>
        <Link href="/docs/language/objects" className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors">Objects →</Link>
      </div>
    </div>
  )
}

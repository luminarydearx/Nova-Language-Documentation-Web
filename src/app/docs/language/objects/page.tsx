import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Objects' }

export default function ObjectsPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-green/10 text-nova-green border border-nova-green/20">✅ v0.2.0 · NEW</span>
        </div>
        <p className="text-xs font-mono text-nova-dim mb-2">Language Reference</p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">Objects</h1>
        <p className="text-nova-dim">Key-value data structures with dot and bracket access.</p>
      </div>

      <h2>Creating Objects</h2>
      <CodeBlock code={`// Empty object
var empty = {}

// Object with fields
var user = {
    name: "Luminar",
    age: 1,
    active: true,
    score: 9999
}

// Keys can also be strings
var config = {
    "host": "localhost",
    "port": 8080,
    "debug": false
}

print user     // {name: Luminar, age: 1, active: true, score: 9999}`} filename="create.nv" />

      <h2>Accessing Properties</h2>
      <CodeBlock code={`var person = {
    name: "Nova",
    age:  2,
    lang: "Nova"
}

// Dot notation
print person.name     // Nova
print person.age      // 2

// Bracket notation (dynamic key)
print person["lang"]  // Nova

var key = "name"
print person[key]     // Nova  (dynamic lookup)`} filename="access.nv" />

      <h2>Modifying Objects</h2>
      <CodeBlock code={`var car = {
    brand:  "Nova Motors",
    speed:  0,
    fuel:   100
}

// Update with dot notation
car.speed = 60
print car.speed      // 60

// Update with bracket notation
car["fuel"] = 80
print car.fuel       // 80

// Add new property
car.turbo = true
print car.turbo      // true`} filename="modify.nv" />

      <h2>Object Methods</h2>

      <div className="not-prose overflow-x-auto mb-6">
        <table className="nova-table">
          <thead><tr><th>Method</th><th>Returns</th><th>Description</th></tr></thead>
          <tbody>
            {[
              ['obj.keys()',      'array', 'All property names as array'],
              ['obj.values()',    'array', 'All property values as array'],
              ['obj.has(key)',    'bool',  'Check if key exists'],
              ['obj.delete(key)','null',   'Remove a property'],
              ['obj.len',        'int',   'Number of properties'],
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

      <CodeBlock code={`var planet = {
    name:     "Nova Prime",
    moons:    3,
    habitable: true
}

// Get all keys
print planet.keys()        // [name, moons, habitable]

// Get all values
print planet.values()      // [Nova Prime, 3, true]

// Check for key
print planet.has("moons")  // true
print planet.has("rings")  // false

// Delete a key
planet.delete("habitable")
print planet.keys()        // [name, moons]

// Size
print planet.len           // 2`} filename="methods.nv" />

      <h2>Iterating Objects</h2>
      <CodeBlock code={`var scores = {
    Alice: 950,
    Bob:   820,
    Carol: 1100
}

// Iterate over keys
for key in scores.keys() {
    print key + " scored " + scores[key]
}
// Alice scored 950
// Bob scored 820
// Carol scored 1100

// Iterate over values
for val in scores.values() {
    print val
}

// Using keys() built-in
for k in keys(scores) {
    print k + " = " + scores[k]
}`} filename="iterate.nv" />

      <h2>Nested Objects</h2>
      <CodeBlock code={`var game = {
    title: "Nova Quest",
    player: {
        name:  "Hero",
        level: 10,
        stats: {
            hp:  100,
            mp:  50,
            atk: 25
        }
    },
    world: {
        name: "Nova Prime",
        zone: "Starport"
    }
}

// Deep access
print game.player.name           // Hero
print game.player.stats.hp       // 100
print game.world.zone            // Starport

// Update nested
game.player.level = 11
game.player.stats.hp = 120
print game.player.level          // 11`} filename="nested.nv" />

      <h2>Objects + Functions</h2>
      <CodeBlock code={`// Simulate methods with objects + functions
func createPlayer(name, hp) {
    var player = {
        name: name,
        hp:   hp,
        alive: true
    }
    return player
}

func takeDamage(player, amount) {
    player.hp = player.hp - amount
    if player.hp <= 0 {
        player.hp    = 0
        player.alive = false
        print player.name + " has been defeated!"
    } else {
        print player.name + " has " + player.hp + " HP left"
    }
}

var hero = createPlayer("Nova", 100)
takeDamage(hero, 30)     // Nova has 70 HP left
takeDamage(hero, 50)     // Nova has 20 HP left
takeDamage(hero, 25)     // Nova has been defeated!`} filename="objects-with-functions.nv" />

      <h2>Objects as Config/Data</h2>
      <CodeBlock code={`var config = {
    debug:   false,
    version: "0.2.0",
    host:    "localhost",
    port:    8080,
    limits: {
        maxRetries: 3,
        timeout:    5000
    }
}

// Use in logic
if config.debug {
    print "[DEBUG MODE ON]"
}

print "Server: " + config.host + ":" + config.port
print "Version: " + config.version
print "Max retries: " + config.limits.maxRetries`} filename="config.nv" />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link href="/docs/language/arrays" className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors">← Arrays</Link>
        <Link href="/docs/language/operators" className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors">Operators →</Link>
      </div>
    </div>
  )
}

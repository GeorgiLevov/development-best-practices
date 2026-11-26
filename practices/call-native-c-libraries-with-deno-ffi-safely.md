> Full index: [index-deno.md](index-deno.md)

# Pass null-terminated buffers safely across Deno FFI (`Deno.dlopen`)

**When to use**: When calling a compiled C shared library from Deno via Foreign Function Interface (`--allow-ffi`).

**Rule**: Load the shared library once with `Deno.dlopen(path, symbols)` declaring exact parameter and return types. When passing strings to C functions expecting `char*`, encode UTF-8 bytes with a trailing `\0` byte (`new TextEncoder().encode(str + '\0')`), pass `Deno.UnsafePointer.of(buffer)`, and decode mutated bytes back with `TextDecoder`. Keep the `Uint8Array` alive across the call so the pointer stays valid.

**Example**:
```ts
const lib = Deno.dlopen('./libexample.so', {
  toUpperCase: { parameters: ['pointer'], result: 'void' },
});

export function toUpperC(input: string): string {
  const buf = new TextEncoder().encode(input + '\0');
  lib.symbols.toUpperCase(Deno.UnsafePointer.of(buf));
  return new TextDecoder().decode(buf.subarray(0, -1));
}
```

**Avoid**: Passing JavaScript strings without null termination to C `char*` APIs, or enabling `--allow-ffi` broadly when pure JS/WASM suffices.

**Source**: [FFI — Fireship Deno](https://fireship.dev/c/deno/cli-ffi)

type AnyFunction = (...args: any[]) => any

function foo<F extends AnyFunction>(): F {
  return null as any
}

const bar = foo<{
  (x: string): void
  (x: number): void
}>()

bar('hello')
bar(1)
bar('hello', 'world') // ERROR

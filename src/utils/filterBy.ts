export function filterBy<T>(
  data: T[],
  key: keyof T,
  value: T[keyof T]
): T[] {
  return data.filter(d => d[key] === value)
}

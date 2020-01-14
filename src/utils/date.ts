function isValid(date: string): boolean {
  const d = new Date(date)
  return d instanceof Date && !isNaN(d.getTime())
}

export function isBefore(date: string): boolean {
  if (isValid(date)) {
    const now = new Date()
    const timestamp = new Date(date)
    // https://github.com/microsoft/TypeScript/issues/5710#issuecomment-157886246
    const diff = +now - +timestamp
    return diff < 0
  } else {
    throw new Error('Invalid date provided')
  }
}

export function isAfter(date: string): boolean {
  if (isValid(date)) {
    const now = new Date()
    const timestamp = new Date(date)
    // https://github.com/microsoft/TypeScript/issues/5710#issuecomment-157886246
    const diff = +now - +timestamp
    return diff >= 0
  } else {
    throw new Error('Invalid date provided')
  }
}

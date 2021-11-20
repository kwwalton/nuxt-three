export const friendlyPath = (url: string): string => {
  return url.toLowerCase().replace(/[\s]/g, '-').replace(/[\&]/g, 'and')
}

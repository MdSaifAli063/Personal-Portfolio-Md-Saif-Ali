export function cn(...inputs: (string | boolean | undefined | null | number)[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ');
}

export default cn;

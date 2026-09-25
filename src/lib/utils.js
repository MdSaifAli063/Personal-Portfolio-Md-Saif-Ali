export function cn(...inputs) {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ');
}

export default cn;

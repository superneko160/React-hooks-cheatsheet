export async function deliverMessage(message: string): string {
  await new Promise((res) => setTimeout(res, 1000))
  return message
}

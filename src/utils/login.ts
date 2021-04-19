export const login = async () => {
  return loginPromise
}

const loginPromise: Promise<User> = new Promise((resolve) =>
  setTimeout(() => resolve({ id: 4, username: "william", email: "william@william.com" }), 1000),
)

export type User = { id: number; username: string; email: string }

import { getSession } from "next-auth/react"

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2))
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}
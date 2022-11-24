import UserResults from "../users/UserResults"
import UserSearch from "../users/UserSearch"

export default function Home() {
  return (
    <div>
      <UserSearch></UserSearch>
      <UserResults></UserResults>
    </div>
  )
}

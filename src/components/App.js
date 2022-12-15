import { useEffect, useState } from "react";
import "../styles.css";
import { userDataMapper } from "../util/util";
import User from "./User.js";
import UserAction from "./UserAction";
import { sortOnAge,sortOnNames } from "../util/util";
import Navbar from "./Navbar";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading]=useState(true);
  
  const url = `https://random-data-api.com/api/v2/users?size=25`;



  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(data=>userDataMapper(data))
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error(err);
      })
      .finally(()=>{
        setLoading(false);
      })
  }, [url]);

  const handleSortAccordingToAge=()=>{
    setUsers(sortOnAge(users));
  }
  const handleSortAccordingToName=()=>{
    setUsers(sortOnNames(users));
  }
 
  // console.log('0th users=',users[0]);
  return (
    <>
    <Navbar/>
    <div className="App">
      <UserAction handleSortAccordingToAge={handleSortAccordingToAge} handleSortAccordingToName={handleSortAccordingToName}/>
      {(users?.length===0 && loading)?
      <h2>Loading...</h2>:
      users.map(user=>{
        return <User key={user.id} user={user} />
      })
      } 
    </div>
    </>
  );
}

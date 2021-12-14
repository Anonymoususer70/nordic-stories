import { BiMenuAltLeft } from "react-icons/bi";
import AllStories from "./AllStories";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import StorySpace from "./StorySpace";

// function updateStory(index) {
//   setShowStory(AllStories[index].description);
// }

function Sidebar() {
  return (
    <section>
    <Router>
      <div className="mt-10 ml-8">
        <BiMenuAltLeft className="text-2xl" />
        <h1
          className="
        text-3xl
        border-b border-solid border-black rounded-none
        inline-block"
        >
          Story Time
        </h1>
      </div>
      {AllStories.map((element, index) => {
        return (
          <section>
              <div className="">
                <Link to={"user" + "/" + element.title}>
                  <h2
                    key={element.title}
                    id="sidebarItem"
                    // onClick={() => updateStory(index)}
                    className="
                    sidebarItem
                    cursor-pointer
                    ml-10
                    text-xl
                    border-b border-solid border-black rounded-none inline-block
                    px-1"
                  >
                    {element.title}
                  </h2>
                </Link>
              </div>
          </section>
        );
      })}
      <Route path = "/user/:title"><StorySpace/></Route>
      </Router>
    </section>
  );
}

export default Sidebar
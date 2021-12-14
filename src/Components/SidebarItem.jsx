import AllStories from "./AllStories";
import React, { useState, useContext} from "react";

const StoryContext = React.createContext()
const UpdateStoryContext = React.createContext()

export function useStory(){
  return useContext(StoryContext)
}

export function useStoryUpdate(){
  return useContext(UpdateStoryContext)
}

function SidebarItem({children}) {
  const [ShowStory, setShowStory] = useState("");

  function updateStory(index) {
    setShowStory(AllStories[index].description);
  }
  return (
    <main>
      {AllStories.map((element, index) => {
        return (
          <section>
            <div className="">
              <h2
                key={element.title}
                id="sidebarItem"
                onClick={() => updateStory(index)}
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
            </div>
          </section>
        );
      })}
      <div>
        <p className="storyp"></p>
      </div>
      
      <StoryContext.Provider value = {ShowStory}>
        <UpdateStoryContext.Provider value = {updateStory}>
          {children}
        </UpdateStoryContext.Provider>
      </StoryContext.Provider>
    </main>
  );
}

export default SidebarItem;

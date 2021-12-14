import { withRouter } from 'react-router-dom'

function StorySpace(props) {
  console.log(props)
    return (
        <div>
          <p id="story"></p>
        </div>
    )
}

export default withRouter(StorySpace);
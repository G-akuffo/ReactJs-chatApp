
import { PrettyChatWindow } from 'react-chat-engine-pretty';
  

const ChatsPage = (props) => {
    
  return (
    <div style={{height: '100vh'}} >
        <PrettyChatWindow
      projectId="3457e2ca-76d8-4274-91b0-6c52fcede03c"
      username={props.user.username}
      secret= {props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
  )
}

export default ChatsPage
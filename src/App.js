import React from 'react'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = (props) => {
  console.log(props)
  return (
    <div className='ui container comments'>
      <ApprovalCard>
      <CommentDetail author="Akansha" timeAgo="Today at 6:00" img={faker.image.image()} />
      </ApprovalCard>
      
      <ApprovalCard>
      <CommentDetail author="Simran" timeAgo="Today at 8:00" img={faker.image.image()}/>
      </ApprovalCard>
      
      <ApprovalCard>
      <CommentDetail author="Shourya" timeAgo="Today at 12:00" img={faker.image.image()}/>
      </ApprovalCard>
    </div>
  )
}

export default App
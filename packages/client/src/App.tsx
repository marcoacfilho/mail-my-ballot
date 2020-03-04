import React from 'react'
import Container from 'muicss/lib/react/container'
import styled from 'styled-components'

import { client } from './lib/trpc'
import { InitialForm } from './comp/Form'
import { FL } from './comp/states/FL'

const AppContainer = styled(Container)`
  margin-top: 2em
`

function App() {
  const [sum, setSum] = React.useState(0)
  client.add(2, 3).then(result => {
    switch (result.type) {
      case 'data': {
        setSum(result.data)
        break
      }
      default: {
        console.log('error')
      }
    }
  })
  return (
    <AppContainer>
      <InitialForm/>
      <FL/>
      <div>
        Learn React {sum}
      </div>
      <div>
        Variable {process.env.REACT_APP_SERVER}
        Variable 2 {process.env.NODE_ENV}
      </div>
    </AppContainer>

  );
}

export default App;
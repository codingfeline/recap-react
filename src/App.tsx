import { useState } from 'react'
import Message from './Message'
import Button from './components/Button'
import ListGroup from './components/ListGroup/ListGroup'
import Alert from './components/Alert'
import Like from './components/Like'
import Form from './components/Form'

const App = () => {
  const [visible, setVisible] = useState(false)

  const items = [
    'Thomson Rd',
    'Mt Pleasant Rd',
    'Jalan Kayu',
    'Bukit Merah',
    'Potong Pasir',
  ]

  return (
    <div className="container">
      <Form />
      <Like onClick={() => console.log('clicked')} />
      <Button color="primary" onClick={() => setVisible(true)}>
        Hello button
      </Button>
      {visible && <Alert onClose={() => setVisible(false)}>Test</Alert>}
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item: string) => console.log(item)}
      />
    </div>
  )
}

export default App

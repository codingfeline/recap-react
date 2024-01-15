import { useState } from 'react'
import Message from './Message'
import Button from './components/Button'
import ListGroup from './components/ListGroup/ListGroup'
import Alert from './components/Alert'
import Like from './components/Like'
import Form from './components/Form'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'

const App = () => {
  const [visible, setVisible] = useState(false)
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 3, description: 'aaa', amount: 40, category: 'Entertainment' },
    { id: 4, description: 'aaa', amount: 10, category: 'Utilities' },
  ])
  const [selectedCategory, setSetselectedCategory] = useState('')
  const visibleExpenses = selectedCategory
    ? expenses.filter(e => e.category === selectedCategory)
    : expenses

  const items = [
    'Thomson Rd',
    'Mt Pleasant Rd',
    'Jalan Kayu',
    'Bukit Merah',
    'Potong Pasir',
  ]

  return (
    <div className="container">
      <div className="m-2">
        <ExpenseFilter onSelectCategory={category => setSetselectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
      />
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

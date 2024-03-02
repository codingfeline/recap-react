import { useEffect, useRef, useState } from 'react'
import Message from './Message'
import Button from './components/Button'
import ListGroup from './components/ListGroup/ListGroup'
import Alert from './components/Alert'
import Like from './components/Like'
import Form from './components/Form'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm'
import ProductList from './components/ProductList'
import userService, { User } from './services/user-service'
import useUsers from './hooks/useUsers'

const App = () => {
  const { users, error, loading, setUsers, setError } = useUsers()
  const [visible, setVisible] = useState(false)
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 3, description: 'aaa', amount: 40, category: 'Entertainment' },
    { id: 4, description: 'aaa', amount: 10, category: 'Utilities' },
  ])
  const [selectedCategory, setSetselectedCategory] = useState('')
  const [category, setCategory] = useState('')

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
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.focus()
  }, [])

  useEffect(() => {
    document.title = 'My React Recap'
  }, [])

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id))

    userService.delete(user.id).catch(err => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  const addUser = () => {
    const originalUsers = [...users]
    const newUser = { id: 0, name: 'Naz' }
    setUsers([newUser, ...users])
    // .then(res => setUsers([res.data, ...users]))
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch(err => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }

  const updateUser = (user: User) => {
    const originalUsers = [...users]
    const updatedUser = { ...user, name: user.name + '!' }
    setUsers(users.map(u => (u.id === user.id ? updatedUser : u)))

    userService.update(updatedUser).catch(err => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  return (
    <div className="container">
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      {users && (
        <ul className="list-group">
          {users.map(user => (
            <li key={user.id} className="list-group-item d-flex justify-content-between">
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <select name="" className="form-select" onChange={e => setCategory(e.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
      <input type="text" ref={ref} className="form-control" placeholder="ref and focus" />
      <ExpenseForm
        onSubmit={expense =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
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
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item: string) => console.log(item)}
      /> */}
    </div>
  )
}

export default App

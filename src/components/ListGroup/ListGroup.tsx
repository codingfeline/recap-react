import { useState } from 'react'
import styles from './ListGroup.module.css'

interface Props {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  // items = []

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>empty list</p>}
      <ul className="list-group">
        {/* <ul className={[styles.listGroup, styles.container].join(' ')}> */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index ? 'list-group-item active' : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup

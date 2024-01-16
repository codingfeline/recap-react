import React from 'react'
import categories from './categories'

const ExpenseForm = () => {
  return (
    <form className="mb-3">
      <div className="mb-2">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="text" id="amount" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option value=""></option>
          {categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default ExpenseForm

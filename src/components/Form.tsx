import { FieldValues, useForm } from 'react-hook-form'

interface FormData {
  name: string
  age: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-2">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register('name', { required: true, minLength: 3 })}
            type="text"
            id="name"
            className="form-control"
          />
          {errors.name?.type === 'required' && (
            <p className="text-danger">The name field is required</p>
          )}
          {errors.name?.type === 'minLength' && (
            <p className="text-danger">The name must be at least 3 characters</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input {...register('age')} type="text" id="age" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default Form

import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Like = ({ onClick }: { onClick: () => void }) => {
  const [like, setLike] = useState(false)
  const toggle = () => {
    setLike(!like)
    onClick()
  }

  const Compo = () =>
    like ? (
      <AiFillHeart color="red" onClick={toggle} />
    ) : (
      <AiOutlineHeart color="red" onClick={toggle} />
    )

  return (
    <>
      <Compo />
    </>
  )
}

export default Like

import React from 'react'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children:any;

}

const HTag = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  )
}

export default HTag
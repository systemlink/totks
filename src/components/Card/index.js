import React from 'react'

const Card = ({ title, children }) => (
  <section>
    <h3>{title}</h3>

    {children}
  </section>
)

export default Card

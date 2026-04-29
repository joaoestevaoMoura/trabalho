import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://imgs.search.brave.com/33Ml2QSwORUR9WVwcbiwQA9SoHqOpV3UUh39g9TVANs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4LzQxLzM5LzM5/LzM2MF9GXzE4NDEz/OTM5MTJfVzBpYjV3/ZkoyVk53czVjODB3/T3I2U1RZVHRRRUN3/VkcuanBn"
        alt="Imagem do card"
      />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, molestias!
      </p>
    </div>
  )
}

export default Card
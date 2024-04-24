import featuresItemsList from '../../assets/datas/featuresDatasList.json'


const BankingFeatures = () => {

  return (
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featuresItemsList.map((item) => (
            <div className="feature-item" key={`item${item.id}`}>
              <img className="feature-icon" src={item.image} alt={item.alt} />
              <h3 className="feature-item-title">{item.title}</h3>
              <p>{item.description}</p>
            </div>
        ))}
      </section>
  )
}

export default BankingFeatures

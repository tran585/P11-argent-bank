import featuresItemsList from '../../../assets/datas/featuresDatasList.json'
import Icon from '../../../components/Icons/icon'

const BankingFeatures = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresItemsList.map((item) => (
        <div className="feature-item" key={`item${item.id}`}>
          <Icon className="feature-icon" typeIcon={item.type} alt={item.alt} />
          <h3 className="feature-item-title">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  )
}

export default BankingFeatures

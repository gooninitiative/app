import InternalCard from "./card"
import CardHeader from "./header"
import CardBody from "./body"

type InternalCardType = typeof InternalCard
interface CardInterface extends InternalCardType {
  Body: typeof CardBody
  Header: typeof CardHeader
}
const Card = InternalCard as CardInterface

Card.Body = CardBody
Card.Header = CardHeader

export default Card

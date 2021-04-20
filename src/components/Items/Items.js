import { Fragment } from "react"
import ItemsAvailable from "./ItemsAvailable"
import ItemSummary from "./ItemSummary"

const Items = () => {
    return <Fragment>
                <ItemSummary />
                <ItemsAvailable />
            </Fragment>
}
export default Items;
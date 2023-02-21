import Square from "./Square"
import Circle from "./Circle"
import Parellalogram from "./Parellalogram"
import Rhombus from "./Rhombus"

function Calculation(){
    return(<div class="cals">
    <h2>Area of the Shapes</h2>
    <h3>Square:</h3>
    <Square/>
    <h3>Circle:</h3>
    <Circle/>
    <h3>Parellalogram:</h3>
    <Parellalogram/>
    <h3>Rhombus:</h3>
    <Rhombus/>
    </div>)
}

export default Calculation
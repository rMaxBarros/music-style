import Inputs from "../Inputs"
import './Form.css';

function Form () {
    return (
        <>
            <Inputs 
                type="email"
                placeholder="Digite o seu e-mail"
                whichInput="first"
            />
            <Inputs 
                type="text"
                placeholder="Digite sua cidade"
                whichInput="second"
            />
        </>
    )
}

export default Form 

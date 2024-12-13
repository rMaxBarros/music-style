import Inputs from "../Inputs"

function Form () {
    return (
        <>
            <Inputs 
                type="email"
                placeholder="Digite o seu e-mail"
            />
            <Inputs 
                type="text"
                placeholder="Digite sua cidade"
            />
        </>
    )
}

export default Form 

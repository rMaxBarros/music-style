import './Inputs.css';

function Inputs (props) {
    return (
        <>
            <input className={props.whichBorder} type={props.type} placeholder={props.placeholder}></input>
        </>
    )
}

export default Inputs

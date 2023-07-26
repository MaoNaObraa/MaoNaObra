import './Input.css'

const Input = ({id, label, type, nome, placeholder, value, onchange}) => {
    return ( 
        <div className='d-flex flex-column' id='input-group'>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} name={nome} value={value} onChange= {onchange} className='rounded input-component' placeholder={placeholder}/>
        </div>
    );
}
 
export default Input;
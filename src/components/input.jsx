export function Input({iconClass, type, id, placeholder, name, value, onChange}){
    return(
        <div className="input-group">
            <i className={iconClass} />
            <input 
                type={type} 
                id={id} 
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange} 
                required />
        </div>
    );
}
export function Input({iconClass, type, id, placeholder}){
    return(
        <div className="input-group">
            <i className={iconClass} />
            <input type={type} id={id} placeholder={placeholder} required />
        </div>
    );
}
export function Toast({message, type}){
     
    const icon = type === 'error' ? 
        "warning-circle" : "check-circle"

    return(
        <div className="toast-box" id="toast-box"> 
            <div className={`toast ${type}`}>
                <i className={`ph-fill ph-${icon}`}></i>
                <span>{message}</span>
            </div>
        </div>
    );
}


const Input =({data,type,placeholder,handleInputChange,name,id,label})=>{

   
    return (
        <>
        <div className="field-group">
        <label className="label">{label}</label>
         <input 
            className="input" 
            type = {type}
            name={name}
            id={id} 
            placeholder={placeholder} 
            value={data} 
            onChange={handleInputChange}
        />
        </div>
        </>
    )


}

export default Input;
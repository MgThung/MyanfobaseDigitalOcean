import { useState } from "react"
import "./login.css"


const SinginInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, onChange, id, ...inputProps } = props;
    
    const handleFocus = (e) => {
        setFocused(true);
 }
    return (
       <div>
              

                <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
            </div>
  )
    
}

export default SinginInput;
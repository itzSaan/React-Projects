function MyApp() {
    const [password, setPassword] = React.useState({
        charLength: 10,
        uppercase: true,
        lowercase: true,
        number: true,
        symbol: false,
        pwd: ""
    })

    const [msg, setMsg] = React.useState({
        message: "",
        visible: false
    })

 
function hideAlert(){
           setMsg({
            message: "",
            visible: false            
        })
    }
        
    
function handleChange(event) {
    const {name, type, checked, value} = event.target
    setPassword(prevValue => ({
            ...prevValue,
            [name]: type === 'checkbox' ? checked : value
        }))
    }  

    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYXZ"
    let lowercase = "abcdefghijklmnopqrstuvwyxz"
    let number = "0123456789"
    let symbols = "!@#$%&*()?"

    function generatePassword(length) {
        password.pwd = ""   
        let result = ""
        for( let i = 0; i < length; i++) {                
            if (password.uppercase && password.lowercase && password.number && password.symbol) {
                let allMix = uppercase.concat(lowercase).concat(number).concat(symbols)
                let generatedPassword = result += allMix.charAt(Math.floor(Math.random() * 72))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                    }))
                }
            else if (password.uppercase && password.lowercase && password.number) {
                let mix = uppercase.concat(lowercase).concat(number)
                let generatedPassword = result += mix.charAt(Math.floor(Math.random() * 62))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                }))
            }
            else if (password.uppercase && password.number && password.symbol) {
                let mix = uppercase.concat(number).concat(symbols)
                let generatedPassword = result += mix.charAt(Math.floor(Math.random() * 46))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                }))                
            }
          else if (password.lowercase && password.number && password.symbol) {
                let mix = lowercase.concat(number).concat(symbols)
                let generatedPassword = result += mix.charAt(Math.floor(Math.random() * 46))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                }))                
            }
            else if (password.uppercase && password.lowercase) {
                let mixChar = uppercase.concat(lowercase)
                let generatedPassword = result += mixChar.charAt(Math.floor(Math.random() * 52))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                }))               
            }
            else if (password.uppercase && password.number) {
                let mixChar = uppercase.concat(number)
                let generatedPassword = result += mixChar.charAt(Math.floor(Math.random() * 36))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                }))                
            }
            else if (password.uppercase && password.symbol) {
                let mixChar = uppercase.concat(symbols)
                let generatedPassword = result += mixChar.charAt(Math.floor(Math.random() * 36))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                }))                
            }
            else if (password.lowercase && password.number) {
                let mixChar = lowercase.concat(number)
                let generatedPassword = result += mixChar.charAt(Math.floor(Math.random() * 36))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                }))                
            }
            else if (password.lowercase && password.symbol) {
                let mixChar = lowercase.concat(symbols)
                let generatedPassword = result += mixChar.charAt(Math.floor(Math.random() * 36))
                setPassword(prev => ({
                    ...prev,
                    pwd: generatedPassword
                }))                
            }
            else {
                // alert("Can't Generate password without complexity.")
                setMsg(prev => ({
                    ...prev,
                    message: "Can't Generate password without complexity.",
                    visible: true
                }))
            }                
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        generatePassword(password.charLength)        
    }    

    function copyPassword() { 
        if (password.pwd === "") {
            setMsg(prev => ({
                ...prev,
                message: "Please generate a password first.",
                visible: true
            }))
        }      
        navigator.clipboard.writeText(password.pwd)
        setMsg(prev => ({
            ...prev,
            message: "Password copied to clipboard.",
            visible: true
        }))
        console.log("Clicked Copy btn")
    }
    return (
        <div className="wrap">
            <div className={`alert-msg ${msg.visible ? 'show' : ''}`}>
                {msg.message}
                <span onClick={hideAlert} className="close">&#10799;</span>
            </div>
            <h3 className="title text-fade text-center">Password Generator</h3>
                <div className="password-wrap">
                    <input type="text"
                            placeholder="Pfgz%75d3#"
                            defaultValue={password.pwd}/>
                    <button onClick={copyPassword}
                            className="copy-btn">
                    <i className="fa-regular fa-lg fa-copy copy-icon"></i>
                    </button>
                </div>
            <form>
                <div className="generator-wrap">
                <div className="slider-wrap">
                    <div className="flex justify-between align-center">
                    <span>Charecter Length</span>
                    <span className="charecter-length">
                        {password.charLength}
                    </span>
                    </div>
                <input type="range"
                        min="6"
                        max="14"
                        onChange={handleChange}
                        name="charLength"
                        defaultValue="10"
                        className="slider"/>    
                </div> 
                <div className="checkbox-wrap">
                    <label htmlFor="uppercase">
                        <input type="checkbox"
                                id="uppercase"
                                onChange={handleChange}
                                name="uppercase"
                                checked={password.uppercase} />
                        Include Uppercase Letters
                    </label>  
                    <label htmlFor="lowercase">
                        <input type="checkbox"
                                id="lowercase"
                                onChange={handleChange}
                                name="lowercase"
                                checked={password.lowercase}/>
                        Include Lowercase Letters
                    </label> 
                    <label htmlFor="number">
                        <input name="number"
                                id="number"
                                onChange={handleChange}
                                type="checkbox"
                                checked={password.number}/>
                        Include Numbers
                    </label> 
                    <label htmlFor="symbol">
                        <input type="checkbox"
                                id="symbol"
                                onChange={handleChange}
                                name="symbol"
                                checked={password.symbol}/>
                        Include Symbols
                    </label>   
                </div> 
                <div className="flex justify-between align-center strength">
                    <span className="text-uppercase text-fade text-bold">Strength</span>
                    <span className="text-bold text-uppercase password-strength">Medium</span>
                </div>
                <button onClick={handleSubmit}
                        className="btn">
                            Generate   &#129122;
                </button>
                </div>
            </form>
        </div>
    )
  }

  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<MyApp />);

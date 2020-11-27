// npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
// also added jest section in package.json
// npm i enzyme-to-json

// npm test -- --coverage --watchAll=false

import './styles.scss'
const Input = ({placeholder, ...rest}) => <input className="input-field" placeholder={placeholder} {...rest}/>

Input.defaultProps = {
    placeholder: 'Input search query',
};

export default Input;


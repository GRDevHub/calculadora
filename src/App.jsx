import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';


function App() {
  const themes = ['theme1', 'theme2', 'theme3'];
  const [theme, setTheme] = useState(0)
  // const miUseRef = useRef(null);

  const handleClick = () => {
    if(theme < 2){
      setTheme(theme => theme + 1 )
    }else{
      setTheme(0)
    }
  }

  

  return (
    <>
      <div className={`${themes[theme]} container`}>

        <div className='container__calc'>
          <div className='themes'>
              <Button clase='theme' value='Tema'  func={handleClick} />
          </div>

          <Screen />

          <div className='keyboards'>
              <Button clase='btn-plus' value='+'  />
              <Button clase='btn-less' value='-' />
              <Button clase='btn-multiply' value='x'/>
              <Button clase='btn-divide' value='/'/>
              <Button clase='btn-7' value='7'/>
              <Button clase='btn-8' value='8'/>
              <Button clase='btn-9' value='9'/>
              <Button clase='btn-4' value='4'/>
              <Button clase='btn-5' value='5'/>
              <Button clase='btn-6' value='6'/>
              <Button clase='btn-1' value='1'/>
              <Button clase='btn-2' value='2'/>
              <Button clase='btn-3' value='3'/>
              <Button clase='btn-0' value='0'/>
              <Button clase='btn-point' value='.'/>
              <Button clase='btn-ac' value='AC'/>
              <Button clase='btn-erase' value='B'/>
              <Button clase='btn-equal' value='='/>
              <Button clase='btn-ans' value='Ans'/>
          </div>
        </div>


      </div>
    </>
  )
}

export default App;

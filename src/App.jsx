import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import Input from './components/Input';
import { evaluate } from 'mathjs';



function App() {
  const themes = ['theme1', 'theme2', 'theme3'];
  const [theme, setTheme] = useState(0);
  let [input, setInput] = useState('');

  // Manejar Temas
  const handleClick = (val) => {
      setTheme(val);
  }

  // Concatenar caracteres en el input
  const addInput = val => {
    if(input || (val !== '*' && val !== '/' && val !== '+')){
      setInput(input + val);
    }
  };

  // Borrar datos del input
  const deleteChar = (val) => {
    let char = input.toString().split('');
    if(char.length >= 1){
      char.pop();
      setInput( input = char.join(''));
    }

    if(val === 'AC'){
      setInput('');
    }
  }

  // Manejar operaciones con el package Mathjs
  const result = () => {
    if(input){
      setInput(evaluate(input));
    }
  };

  return (
    <>
      <div className={`${themes[theme]} container`}>

        <div className='container__calc'>
          <div className='themes'>
              <p>Temas:</p>
              <Input type='radio' name='theme' clase='theme' func={ handleClick } >0</Input>
              <Input type='radio' name='theme' clase='theme' func={ handleClick } >1</Input>
              <Input type='radio' name='theme' clase='theme' func={ handleClick } >2</Input>
          </div>

          <Screen input={ input }/>

          <div className='keyboards'>
              <Button type='button' func={ addInput } clase='btn-plus'>+</Button>
              <Button type='button' func={ addInput } clase='btn-less'>-</Button>
              <Button type='button' func={ addInput } clase='btn-multiply'>*</Button>
              <Button type='button' func={ addInput } clase='btn-divide'>/</Button>
              <Button type='button' func={ addInput } clase='btn-7'>7</Button>
              <Button type='button' func={ addInput } clase='btn-8'>8</Button>
              <Button type='button' func={ addInput } clase='btn-9'>9</Button>
              <Button type='button' func={ addInput } clase='btn-4'>4</Button>
              <Button type='button' func={ addInput } clase='btn-5'>5</Button>
              <Button type='button' func={ addInput } clase='btn-6'>6</Button>
              <Button type='button' func={ addInput } clase='btn-1'>1</Button>
              <Button type='button' func={ addInput } clase='btn-2'>2</Button>
              <Button type='button' func={ addInput } clase='btn-3'>3</Button>
              <Button type='button' func={ addInput } clase='btn-0'>0</Button>
              <Button type='button' func={ addInput } clase='btn-point'>.</Button>
              <Button type='button' func={ deleteChar } clase='btn-ac'>AC</Button>
              <Button type='button' func={ deleteChar } clase='btn-erase'>C</Button>
              <Button type='button' func={ result } clase='btn-equal'>=</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

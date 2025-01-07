import 'react'
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';



const Login = () => {
    const [value, setValue] = useState('');
  return (
    <>
        <TextInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />


<PasswordInput
 label="Input label"
 description="Input description"
 placeholder="Input placeholder"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
    
    </>
  )
}

export default Login



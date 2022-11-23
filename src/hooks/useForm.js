import { useState } from 'react'

export function useForm (state) {

    const [values, setValues] = useState(state)

    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({...values, [name]: value})
    }

    return ({
        values,
        handleChange,
    })

}

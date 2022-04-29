import './MyForm.module.css'
import React from 'react'

const MyForms = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Idade: </label>
                    <input type="text" name='name' placeholder='Digíte a sua idade' />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms
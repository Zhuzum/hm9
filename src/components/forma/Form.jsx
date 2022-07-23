import { useState } from 'react'
import './Form.css'

let counter = 1

function Form({ addItemsValue }) {
	const [inputValue, setInputValue] = useState('')

	const submitHandler = (event) => {
		event.preventDefault()
		const itemsData = {
			id: counter++,
			title: inputValue,
			date: new Date().toLocaleDateString(),
		}
		addItemsValue(itemsData)
		setInputValue('')
	}
	
	return (
		<form onSubmit={submitHandler} className='forma'>
			<input
				type='text'
				onChange={(event) => setInputValue(event.target.value)}
				value={inputValue}
			/>
			<button className='button' type='submit'>
				Add
			</button>
		</form>
	)
}
export default Form

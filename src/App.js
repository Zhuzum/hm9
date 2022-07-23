import { useState } from 'react'
import './App.css'
import Form from './components/forma/Form'
import List from './components/items-value/List'

function App() {
	const [itemList, setItemList] = useState([])

	function addItemsValue(itemsData) {
		setItemList([itemsData, ...itemList])
	}
	return (
		<div className='App'>
			<Form addItemsValue={addItemsValue} />
			<List taskList={itemList} />
		</div>
	)
}

export default App

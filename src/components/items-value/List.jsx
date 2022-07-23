import './List.css'

function List({ taskList = [] }) {
	return (
		<div className='list'>
			{taskList.map(({ title, date }, index) => {
				return (
					<div key={index}>
						<p>{date}</p>
						<p>{title}</p>
					</div>
				)
			})}
		</div>
	)
}

export default List

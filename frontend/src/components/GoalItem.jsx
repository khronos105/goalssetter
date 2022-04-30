import {useDispatch} from 'react-redux'
import {deleteGoal} from '../features/goals/goalsSlice'

function GoalItem({goal}) {
    const dispatch = useDispatch()
  return (
    <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleString('es-ES')}
        </div>
        <h2>{goal.text}</h2>
        <div onClick={ () => dispatch(deleteGoal(goal._id))} className="close">x</div>
    </div>
  )
}

export default GoalItem
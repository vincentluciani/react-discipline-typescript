import styles from './HabitBox.module.css'
import BoxWrapper from '../wrappers/Box/BoxWrapper'

const HabitBox = props => {
    return (
        <BoxWrapper boxTitle={props.boxTitle} className={styles['habit-box']}>Text inside the box</BoxWrapper>
    )
}

export default HabitBox
import styles from './TextLabel.module.css'

interface Props{
    title: String
}

const TextLabel = ({title}:Props) => {
    return(
        <div className={styles['form-element-label']}>{title}</div>
    )

}

export default TextLabel
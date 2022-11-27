import styles from './FormElementWrapper.module.css'

type FormProps = {
    className: Text,
    children: JSX.Element,
}

const FormElementWrapper : React.FC<FormProps> = ({className,children}) => {

    const wrapperClassName =  `${styles['form-element-wrapper']} ${className}`
   
    return (
        <div className={wrapperClassName}>
                {children}
        </div>
    )
}

export default FormElementWrapper
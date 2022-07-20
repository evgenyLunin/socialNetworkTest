import s from './../Messages.module.css'

const Dialog = (props) => {
    return <div className={s.dialog}> {props.dialog} </div>
}

export default Dialog;
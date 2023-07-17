import classes from './Skill.module.css'

const Skill = (props) => {
    return <div className={classes['skill-range']}>
        <label>{props.children}</label>
    </div>
}

export default Skill
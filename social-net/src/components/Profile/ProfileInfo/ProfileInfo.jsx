import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.item}>
        <div className={s.image}>
            <img src='https://image.shutterstock.com/image-vector/topics-colorful-letters-banner-260nw-1209323515.jpg' alt=''></img>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;
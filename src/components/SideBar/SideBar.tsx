import React, {FC} from 'react';
import style from './SideBar.module.css'
import logo from '../../img/CompanyLogo.svg'
import element3 from '../../img/element-3.svg'
import tickCircle from '../../img/tick-circle.svg'
import setting2 from '../../img/setting-2.svg'
import logout from '../../img/logout.svg'

const SideBar: FC = () => {
    return (
        <div className={style.sideBar__container}>
            <div className={style.content}>
                <div className={style.logo__container}>
                    <div className={style.logo__image__container}>
                        <img className={style.logo__image} src={logo} alt=""/>
                    </div>
                    Mopono studio
                </div>
                <div className={style.navigation__container}>
                    <ul className={style.ul}>
                        {/*Потом переделать в NavLink*/}
                        <li className={style.li}>
                            <div><img className={style.nav__icons} src={element3} alt=""/>Projects</div>
                            <span className={style.nav__span}>25</span></li>
                        <li className={style.li}>
                            <div><img className={style.nav__icons} src={tickCircle} alt=""/>Tasks</div>
                            <span className={style.nav__span}>5</span></li>
                        <li className={style.li}>
                            <div><img className={style.nav__icons} src={setting2} alt=""/>Setting</div>
                        </li>
                    </ul>
                </div>
                <hr className={style.hr}/>
                <div className={style.projects__container}>
                    Projects:
                    <div>
                        {/*Список ProjectItems*/}
                    </div>
                </div>
                <div className={style.new__project__button__container}>
                    <button className={style.add__new__project__button}>Create new project</button>
                </div>
                <div className={style.logout__container}><img className={style.logOut__icon} src={logout} alt=""/>Logout</div>
            </div>
        </div>
    );
};

export default SideBar;

import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return <div>
        <img
            className='logo'
            src='https://yt3.ggpht.com/a/AATXAJzB6J59WmH7IOi9jhVMv63uDhQOII5Vqq634DlgJA=s900-c-k-c0xffffffff-no-rj-mo'
            alt='logo' />
       
                <ul className='nav-ul nav-right'>
                    <li><Link to='/register'> Register </Link></li>
                    <li><Link to='/login' > Login </Link></li>
                    <li><Link to='/logout'> Logout </Link></li>
                </ul>
    </div>
}

export default Nav;
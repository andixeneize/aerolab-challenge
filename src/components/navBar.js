import React from 'react';
import { useSelector } from "react-redux";

export const NavBar = ({name, coins}) => {
    const user = useSelector((state) => state.user);

    return ( 
        <nav className="p-3">
            <div className="row align-items-center">
                <div className="col-1">
                    <img src='/icons/aerolab-logo.svg' alt="coin_icon" height="36px" width="39px" />
                </div>
                <div className="col text-end">
                    <h4 className="m-0 align-middle userNav">
                        {user.name} 
                        <span className="badge userCoins ms-3 align-middle">{user.points} 
                            <img src='/icons/coin.svg' className="ms-1" alt="coin_icon" height="26px" width="26px" />
                        </span>
                    </h4>
                </div>
            </div>
        </nav>
    );
};


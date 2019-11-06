import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

/*
	3 ways to using hash & scroll to elem:
	+ Applied: https://github.com/ReactTraining/react-router/issues/394#issuecomment-220221604
	+ https://reacttraining.com/react-router/web/guides/scroll-restoration
	+ https://reacttraining.com/react-router/web/api/HashRouter
*/

const configSideBar = (travelConcerns = []) => {
  let sideBar = [];
  
  if(travelConcerns[2]['BLOGS_VLOGS']) sideBar.push({ hash: 'vlogs', icon: ['fab','youtube']}, {hash: 'blogs', icon: ['fab','google']});
  if(travelConcerns[3]['SOCIAL_MEDIA']) sideBar.push({ hash: 'social', icon: ['fab','instagram']});
  if(travelConcerns[0]['HOTELS']) sideBar.push({ hash: 'hotels', icon: ['fas','hotel']});
  if(travelConcerns[1]['FLIGHTS']) sideBar.push({ hash: 'flights', icon: ['fas','plane']});

  return sideBar;
}

const Sidebar = (props) => {
    const [ sideBar, setSideBar ] = useState([]);

    useEffect(() => {
        setSideBar(configSideBar(props.travelConcerns));
    },[props.travelConcerns]);

    return (
        <>
        <div className="sidebar p-3 flex-center-center">
            {sideBar && sideBar.map( item => (
                <div key={`#${item.hash}`} className="sidebar__item item mb-2">
                    <HashLink smooth className="item-link icon-info" to={`${props.location}#${item.hash}`}>
                        <FontAwesomeIcon icon={item.icon} 
                                pull="left" size="2x"
                                className="m-0"/>
                    </HashLink>
                </div>
            ))}

            <Link className="pt-3 sidebar__link-back-home icon-info" to="/">
                <FontAwesomeIcon icon='arrow-circle-left' 
                    pull="left" size="2x" className="m-0"/>
            </Link>
        </div>
        </>
    )
}

export default Sidebar;
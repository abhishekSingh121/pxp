import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faHome,faTachometerAlt,faChartLine } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';

class SideBar extends Component{
    render(){
        return(
            <div className='nav'>
            {/* <input type='checkbox' id='menu'></input> */}
            <label id='nav-icon' for='menu'>&#9776;</label>
      
            <div className='multi-level'>
              <div className='item'>
                {/* <input type='checkbox' id='A'></input> */}
                
                <label for='A'><span>
                <FontAwesomeIcon icon={faPaperPlane} />
                  </span> Business Solutions</label>
      
                <ul>
                  <li>
                   <div className='sub-item'>
                    {/* <input type='checkbox' id='A-A'></input> */}
                    <label for='A-A'><span>
                <FontAwesomeIcon icon={faPaperPlane} />
                  </span> User Intel</label>
      
                      <ul>
                      
                        <li>  <a href='#'> <span>
                <FontAwesomeIcon icon={faHome} />
                  </span>Customer Intelligence</a></li>
                        <li> <a href='#'> <span>
                <FontAwesomeIcon icon={faTachometerAlt} />
                  </span>Agent Intelligence</a> </li>
                        <li> <a href='#'> <span>
                <FontAwesomeIcon icon={faChartLine} />
                  </span>Operational Intelligence</a> </li>
                      </ul>
      
                   </div>
                  </li> 
                </ul>
              </div>
            </div>
      
          </div>
        )
    }
}

export default SideBar
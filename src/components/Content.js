import React from 'react';
import {Jumbotron,Container} from 'reactstrap';
import Pnx from '../images/pxp.png';
import './Content.css';

const titles ={
    industries:"industries",
    validation:"validation",
    engineering:"engineering",
    projectmanagement:"projectmanagement",
    manufacturingIT:"manufacturingIT",
    technicalservices:"technicalservices",
    processautomation:"processautomation"

}
class Content extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            title:'',
            content:'',
            showJumbotron:false
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }
    getContent(title){
        switch(title){
            case titles.industries:
                return {
                    title:titles.industries,
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            case titles.validation:
                return {
                    title:titles.validation,
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            case titles.engineering:
                return {
                    title:titles.engineering,
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }    
            case titles.projectmanagement:
                return {
                    title:titles.projectmanagement,
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                } 
            case titles.manufacturingIT:
                return {
                    title:titles.manufacturingIT,
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }      
            case titles.technicalservices:
                return {
                    title:titles.technicalservices,
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }   
            case titles.processautomation:
                return {
                    title:titles.processautomation,
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }  
             default:
                 break;      
        }
    }
    toggleShowJumbotron(){
        this.setState((prevState)=>{
           return {
            showJumbotron : !prevState.showJumbotron
           }
        })
    }
    handleOnClick(event){
        const text = this.getContent(event.target.title);
        console.log(text)
        this.setState(()=>{
            return {
                title:text.title,
                content:text.content,
                showJumbotron:true
            }
        })
    }


    render(){
        return(
                <>
               <img className='pnx-img' src={Pnx} alt='pnx' useMap="#image-map"/>
                <map name="image-map">
                    <area target="_self" onClick={this.handleOnClick} alt="industries" title="industries" href="#" coords="65,97,23" shape="circle"/>
                    <area target="_self" onClick={this.handleOnClick} alt={titles.validation} title={titles.validation}  href="#" coords="86,172,21" shape="circle"/>
                    <area target="_self" onClick={this.handleOnClick} alt={titles.engineering} title={titles.engineering} href="#" coords="141,226,22" shape="circle"/>
                    <area target="_self" onClick={this.handleOnClick} alt={titles.projectmanagement} title={titles.projectmanagement} href="#" coords="217,249,21" shape="circle"/>
                    <area target="_self" onClick={this.handleOnClick} alt={titles.manufacturingIT} title={titles.manufacturingIT} href="#" coords="290,224,27" shape="circle"/>
                    <area target="_self" onClick={this.handleOnClick} alt={titles.technicalservices} title={titles.technicalservices} href="#" coords="347,173,22" shape="circle"/>
                    <area target="_self" onClick={this.handleOnClick} alt={titles.processautomation} title={titles.processautomation} href="#" coords="368,97,25" shape="circle"/>
                </map>
               {this.state.showJumbotron &&  <Jumbotron className='p-2' fluid>
                    <Container fluid>
                     <h1 className="display-6 text-center">{this.state.title}</h1>
                     <p className="lead">{this.state.content}</p>
                    </Container>
                 </Jumbotron>
                }
                </>
        )
    }
}

export default Content;
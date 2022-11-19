import React from 'react';
import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDOM from 'react-dom';

const Backdrop=props=>{
    return <div className={classes.backdrop}/>
}
const ModalOverLay=(props)=>{
return (
<div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
</div>
)
}

const portalElement=document.getElementById('overLays');

const Modal=(props)=>{
return <Fragment>
   {ReactDOM.createPortal(<Backdrop/>,portalElement)} 
   {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
</Fragment>

};
export default Modal;


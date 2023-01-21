import React, { PureComponent , useState } from 'react'
import './Card.css'
import { Alert, Button } from 'react-bootstrap';

// class AlertComponent extends PureComponent {
//     state = {}

//     constructor(props) {
//         super(props);
//         console.log('[Alert.js] run constructor')
//     }
    
//     static getDerivedStateFromProps(props , state) {
//         console.log('[Alert.js] run getDerivedStateFromProps')
//         return null;
//     }

//     componentDidMount() {
//         console.log('[Alert.js] run componentDidMount')
//     }

//     getSnapshotBeforeUpdate(props , state) {
//         console.log(props , state);
//         console.log('[Alert.js] run getSnapshotBeforeUpdate')
//         return null;
//     }
  
//     componentDidUpdate(props , state , snapshot) {
//         console.log('[Alert.js] run componentDidUpdate')
//     }
  

//     render() {
//         console.log('[Alert.js] run render')

//         let { show , setShow } = this.props;
   
//         return (
//             <>
//                 <Alert show={show} variant="success">
//                     <Alert.Heading>How's it going?!</Alert.Heading>
//                     <p>
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//                         lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//                         fermentum.
//                     </p>
//                     <hr />
//                     <div className="d-flex justify-content-end">
//                         <Button onClick={() => setShow(false)} variant="outline-success">
//                             Close me ya'll!
//                         </Button>
//                     </div>
//                 </Alert>
        
//                 {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//             </>
//         )
//     }

// }


function AlertComponent(props) {
    // let { show , setShow } = props; 

    const [show , setShow] = useState(true)

    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me ya'll!
                    </Button>
                </div>
            </Alert>
    
            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    )
}

export default AlertComponent;
import { useState } from 'react';
import { Spinner, Button, InputGroup, FormControl } from 'react-bootstrap';

import firebase from '../firebase';

export default function AddWeight({ userId }) {
    
    const [weight, setWeight] = useState(0);
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = () => {
        
        setLoading(true);
        
        const data = {
            weight: weight,
            timestamp: new Date().getTime()
        }
        
        firebase.firestore().collection('users').doc(`${userId}`).get()
        .then(doc => {
            if (doc.exists) {
                firebase.firestore().collection('users').doc(`${userId}`).update({
                    userData: firebase.firestore.FieldValue.arrayUnion(data)
                })
                .then(() => {
                    console.log('Item Added');
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                })
            }

            else {
                firebase.firestore().collection('users').doc(`${userId}`).set({
                    userData: firebase.firestore.FieldValue.arrayUnion(data)
                })
                .then(() => {
                    console.log('Item Added');
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                })
            }
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }
    
    return (
        <div className='container'>
            <h3>Add Weight (kg)</h3>
            
            <InputGroup>
                <FormControl
                    aria-describedby='basic-addon1'
                    value={weight}
                    type="number"
                    min="10"
                    onChange={(e) => setWeight(e.target.value)}
                />
            </InputGroup>
            <Button disabled={loading} onClick={handleSubmit} className='mt-3'>{loading ? <Spinner animation="border" size="sm" /> : "Submit"}</Button>
        </div>
    );
}
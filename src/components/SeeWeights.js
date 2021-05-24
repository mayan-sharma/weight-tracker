import { useEffect, useState } from "react";

import firebase from '../firebase';
import { formatTime } from '../utils';

export default function SeeWeights({ userId }) {

    const [weights, setWeights] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('users').doc(`${userId}`)
        .onSnapshot((doc) => {
            const sortedWeights = doc.data()?.userData;
            setWeights(sortedWeights?.sort(function(a, b) {
                if (a.timestamp < b.timestamp) return 1;
                if (a.timestamp > b.timestamp) return -1;
                return 0;
            }));
        })
        
    }, []);

    return (
        <div className="container">
            { weights?.length ? 
                weights.map((weight) => (
                    <div key={weight.timestamp}>
                        <p>Weight: {weight.weight} kg</p>
                        <p>Time: {formatTime(weight.timestamp)}</p>
                    </div>
                ))
                : <p>You haven't added anything yet!</p>
            }
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

const TextCarousel = ({ data, data1 }) => {
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(0);
    const [isDelay, setIsDelay] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIndex(data[index]);
            setIsDelay(true)
        }, 4500);
    }, [index]);
    useEffect(() => {
        const interval1 = setInterval(() => {
            setIndex1((index1 + 1 ) % data1.length);
        }, 1000);
        return () => clearInterval(interval1);

    }, [index1])


    return (
        <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: "white", }}>{data[index]}</Text>
            {isDelay && <View style={{position:"absolute",marginTop:"1%",alignSelf:"center"}} > 
                <Text style={{ fontSize: 20, fontWeight: 500, color: "white", }}>{data1[index1]}</Text>
                </View>}

        </View>
    );
};


const Drafts = () => {
    const data = ['Calling'];
    const data1 = ['Ringing', 'Ringing.', 'Ringing..', 'Ringing...']
    return (
        <View>
            <TextCarousel data={data} data1={data1} />

        </View>
    );
};

export default Drafts;

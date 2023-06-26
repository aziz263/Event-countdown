import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';

const App = () => {
    const [countdown, setCountdown] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    useEffect(() => {
        const targetDate = new Date(year, month - 1, day);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setCountdown('Event has ended!');
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [year, month, day]);

    const handleYearChange = (text) => {
        setYear(text);
    };

    const handleMonthChange = (text) => {
        setMonth(text);
    };

    const handleDayChange = (text) => {
        setDay(text);
    };

    return (
        <ScrollView>
            <View>
                <Text style={{ margin: 20 }}>Type your event</Text>
                <TextInput placeholder="Type here" style={styles.input} />
            </View>
            <View>
                <Text style={{ margin: 20 }}>Date of the event</Text>
                <Text style={{ margin: 20 }}>Year:</Text>
                <TextInput
                    placeholder="Type here"
                    style={styles.input}
                    value={year}
                    onChangeText={handleYearChange}
                />
                <Text style={{ margin: 20 }}>Month:</Text>
                <TextInput
                    placeholder="Type here"
                    style={styles.input}
                    value={month}
                    onChangeText={handleMonthChange}
                />
                <Text style={{ margin: 20 }}>Day:</Text>
                <TextInput
                    placeholder="Type here"
                    style={styles.input}
                    value={day}
                    onChangeText={handleDayChange}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.countdownText}>{countdown}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countdownText: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#f0f',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default App;

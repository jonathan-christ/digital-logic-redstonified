import React from 'react';
import { View, Text } from '../Themed';
import { StyleSheet, Text as RawText } from 'react-native';

interface TruthTableData {
    Inputs: { [key: string]: number[] };
    Outputs: { [key: string]: number[] };
}

const TruthTable = ({ data }: any) => {
    const { Inputs, Outputs } = data;
    const inputs = Object.keys(Inputs);
    const outputs = Object.keys(Outputs);

    const numRows = Inputs[inputs[0]].length;

    const renderHeaderCell = (text: string, idx?: number) => (
        <View key={idx} style={styles.headerCell}>
            <Text style={[styles.headerText, ]}>{text}</Text>
        </View>
    );

    const renderBodyCell = (value: string, idx?: number) => (
        <View key={idx + value} style={styles.bodyCell}>
            <Text style={styles.bodyText}><Text>{value !== undefined ? value : '-'}</Text></Text>
        </View>
    );

    return (
        <View style={styles.tableContainer}>
            <View style={[styles.tableHeader, { gap: 10 }]}>
                {renderHeaderCell('Inputs')}
                {renderHeaderCell('Outputs')}
            </View>
            <View style={[styles.tableHeader, { gap: 10 }]}>
                <View style={styles.headerSide}>
                    {inputs.map((input, index) => renderHeaderCell(input, index))}
                </View>
                <View style={styles.headerSide}>
                    {outputs.map((output, index) => renderHeaderCell(output, index))}
                </View>
            </View>
            <View style={styles.tableBody}>
                {Array.from({ length: numRows }).map((_, rowIndex) => (
                    <View key={rowIndex} style={[styles.row, { gap: 10 }]}>
                        <View style={styles.bodySide}>
                            {renderBodyCell(data.Inputs[inputs[0]][rowIndex])}
                            {inputs.slice(1).map((input, idx) => renderBodyCell(data.Inputs[input][rowIndex], idx))}
                        </View>
                        <View style={styles.bodySide}>
                            {renderBodyCell(data.Outputs[outputs[0]] ? data.Outputs[outputs[0]][rowIndex] : '-')}
                            {outputs.slice(1).map((output, idx) => renderBodyCell(data.Outputs[output] ? data.Outputs[output][rowIndex] : '-', idx))}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tableContainer: {
    },
    tableHeader: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        flexDirection: 'row',

    },
    tableBody: {
    },
    row: {
        flexDirection: 'row',
        height: 'auto',
    },
    headerCell: {
        paddingVertical: 15,
        flex: 1,
        alignItems: 'center',
        borderColor: '#ddd',
    },
    bodyCell: {
        paddingVertical: 15,
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        fontFamily: 'Minecraft-Bold'
    },
    bodyText: {
        fontSize: 16,
    },
    txtUnderline: {
        paddingBottom: 2,
        borderBottomWidth: 1.5,
        borderBottomColor: 'white'
    },
    bodySide: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    headerSide: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    }

});

export default TruthTable
import * as React from 'react';
import { View, Text, StyleSheet, Slider, Dimensions, AppRegistry } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';


export default class App extends React.Component {
    state = {
        peso: 0,
        altura: 0,
        imc: 0,
        legenda: 'Indeterminado',
        cor: '#bdc3c7',
    };

    calcularIMC = () => {
        const resultado =
            this.state.peso / Math.pow(this.state.altura, 2);

        this.setState({
            imc: resultado.toFixed(1)
        });

        if (resultado < 18.5) {
            this.setState({
                legenda: 'Magreza',
                cor: '#e74c3c'
            });
        } else if (resultado >= 18.5 && resultado < 25) {
            this.setState({
                legenda: 'Normal',
                cor: '#2ecc71'
            });
        } else if (resultado >= 25 && resultado < 30) {
            this.setState({
                legenda: 'Sobrepeso',
                cor: '#f1c40f'
            });
        } else if (resultado >= 30 && resultado < 40) {
            this.setState({
                legenda: 'Obesidade',
                cor: '#e67e22'
            });
        } else if (resultado >= 40) {
            this.setState({
                legenda: 'Obesidade Grave',
                cor: '#e74c3c'
            });
        }
    }

    render() {

        return (
            <View style={styles.app}>

                <Text style={styles.legenda}>Seu IMC</Text>

                <View style={[styles.painel, { borderColor: this.state.cor }]}>
                    <Text style={[styles.resultado, { color: this.state.cor }]}>{this.state.imc}</Text>
                    <Text style={[styles.diagnostico, { color: this.state.cor }]}>{this.state.legenda}</Text>
                </View>

                <View>
                    <TextInput
                        disabled={1}
                        style={styles.peso}
                        onChangeText={valor => {
                            this.setState({ peso: valor });
                        }}>

                        {this.state.peso.toFixed(0)} Kg

          </TextInput>
                    <Slider
                        thumbTintColor="#8e44ad"
                        value={this.state.value}
                        maximumValue={250}
                        minimumValue={0}
                        step={1}
                        onValueChange={valor => this.setState({ peso: valor })}
                    />

                    <TextInput
                        disabled={1}
                        style={styles.altura}
                        onChangeText={valor => {
                            this.setState({ altura: valor });
                        }}>

                        {this.state.altura.toFixed(2)} m

          </TextInput>


                    <Slider

                        thumbTintColor="#8e44ad"
                        value={this.state.value}
                        maximumValue={2.8}
                        minimumValue={0.5}
                        step={0.01}
                        onValueChange={valor => this.setState({ altura: valor })}
                    />

                    <Button mode="contained" onPress={this.calcularIMC} style={styles.botao}>Calcular</Button>
                    <Text style={styles.footer}>by Cseh</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    app: {
        padding: 20,
        marginTop: 30
    },
    legenda: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    painel: {
        marginTop: 50,
        borderWidth: 10,
        borderRadius: 250,
        marginVertical: 10,
        padding: 30,
        width: 250,
        height: 250,
        alignSelf: 'center' // Text align para views
    },
    resultado: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 70,

        alignContent: 'center'
    },
    diagnostico: {
        textAlign: 'center',
        fontSize: 18,
        alignContent: 'center'
    },
    peso: {
        marginVertical: 10,
        marginTop: 50,
        fontSize: 30,
        borderRadius: 25,
        backgroundColor: '#bdc3c7'
    },
    altura: {
        marginVertical: 10,
        textAlign: "center",
        fontSize: 30,
        borderRadius: 25,
        backgroundColor: '#bdc3c7'
    },
    botao: {
        marginTop: 50,
        padding: 8,
    },
    footer: {
        textAlign: 'center',
        marginTop: 20
    },
});
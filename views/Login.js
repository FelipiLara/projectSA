import React, {useState, useEffect} from "react";
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from "react-native";
import { Cadastro } from "./Cadastro";
import { css } from "../assets/Css";


export default function Login ({navigation})
{

return(

    <KeyboardAvoidingView style={[css.container, css.darkbg]}>
        <View>
            <TextInput style={[css.loginForm]} placeholder='Usuário:'/>
            <TextInput  style={[css.loginForm]} placeholder='Senha:' secureTextEntry={true} />
  
        </View>

        <View >
            <TouchableOpacity style={[css.buttonEntrar]}  onPress={() => navigation.navigate('Home')}>
                <Text >Entrar</Text>
            </TouchableOpacity>

        
            <TouchableOpacity style={[css.buttonCriarConta]} onPress={() => navigation.navigate('Cadastro')}>
                <Text>Criar conta</Text>
            </TouchableOpacity>
        </View>

       
    </KeyboardAvoidingView>
    )
}
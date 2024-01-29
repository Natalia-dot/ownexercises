import styled, { useTheme } from "styled-components";


//aqui hacemos los tipos de los props que le van a entrar al Button. Lo que hacemos con el extends es darle todos los metodos posibles de Button
//intrinsecos del Button de react (como el onClick o lo que sea). Y  luego especificamos los props que pueden servirnos para ahora mismo los estilos
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'secondary';
    text?: string;
}
//does 
export const StyledButton = styled.button<{ variant?: string; text?: string}>` // <----- esto se puede cambiar por ButtonProps!! Es lo mismo
    background-color: ${(props) => props.variant === "primary" ? 'blue' : 'red'}; 
    //aqui estamos cogiendo los props y usando el .variant, que es lo que nos concierne para este en concreto, igual
    //que en el siguiente es text
    color: ${(props) => props.text ? props.text : 'black'};

`


//aqui vamos a meterle al boton los button props que hemos gestionado al principio del archivo. Esa es la unica vez que vamos a tener que declarar
//necesariamente los tipos que van a entrar a Button. Luego podemos redeclararlos en el StyledButton tambien o directamente indicarle a 
// StyledButton que ButtonProps son los tipos que va a coger, asi no tenemos que estar actualizandolo constantemente, sino solo en un lugar
export const Button = (props: ButtonProps ) => {

    return (
        <StyledButton {...props}/>
    )

}
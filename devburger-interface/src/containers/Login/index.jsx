import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import {api} from '../../services/api'
import {toast} from 'react-toastify';




import Logo from '../../assets/6cd42dd844bc6ec85cad1a49c5f3a9cf.png'
import {  Container, Link, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";



import { Button } from '../../components/Button';
import { Navigate } from 'react-router-dom';



export function Login() {

  const navigate = useNavigate();

    const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
    })
    .required();



    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });


      const onSubmit = async (data) => {
        const response =  await toast.promise(
             api.post('/session', {
          email:data.email,
          password:data.password,
        }),
        {

          pending: 'Verificando seus dados',
          success:  {
            render(){
              setTimeout(() => {
                navigate('/')
              }, 2000);
              return  'Seja Bem-vindo 👌';
            },
          },
         
          error: 'Email ou Senha Incorretos 🤯'
        },

        );
        
        
      
console.log(response)
      }

    return(
        <Container>
   <LeftContainer>
    <img src={Logo} alt='logo-devburger' />
   </LeftContainer>
   <RightContainer>
    <Title>
        Olá, seja bem vindo ao <span>Dev Burguer!</span> <br/>Acesse com seu <span> Login e senha</span>
    </Title>
    <Form onSubmit={handleSubmit(onSubmit)}>
    <InputContainer>
        <label>Email</label>
        <input type='email'{...register("email")} />
        <p>{errors?.email?.message}</p>
        </InputContainer>  
        
        <InputContainer>
        <label>Senha</label>
        <input type='password'{...register("password")} />
        <p>{errors?.password?.message}</p>
        </InputContainer>
<Button type="submit" >Entrar</Button>
    </Form>
    <p>Não possui conta? <Link to= "/cadastro">Clique aqui.</Link></p>
   </RightContainer>
        </Container>
    );
}
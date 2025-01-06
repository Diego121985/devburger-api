import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify';




import Logo from '../../assets/6cd42dd844bc6ec85cad1a49c5f3a9cf.png'
import { Container, Link, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";



import { Button } from '../../components/Button';



export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('*Nome é obrigatório',),
      email: yup.string().email('Digite um  e-mail válido').required('*E-mail é obrigatório'),
      password: yup.string().min(6, '*Senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
      confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('*Corfirme a sua senha'),

    })
    .required();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);


  const onSubmit = async (data) => {
    try {
      const { status } = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        },2000);


        toast.success('Conta criada com sucesso!');
      } else if (status === 409) {
        toast.error('Email já cadastrado! Faça o login para continuar');
      } else {
        throw new Error();
      }

    } catch (error) {
      toast.error(' Falha no Sistema! Tente novamente')
    }

  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt='logo-devburger' />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar Conta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>


          <InputContainer>
            <label>Nome</label>
            <input type='text'{...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>



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


          <InputContainer>
            <label>Confimar Senha</label>
            <input type='password'{...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>


          <Button type="submit" >Criar Conta</Button>
        </Form>
        <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p>
      </RightContainer>
    </Container>
  );
}
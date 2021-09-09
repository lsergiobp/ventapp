import styled from 'styled-components/native';

const MainContainer = styled.View`
  padding-top: 23px;
`;

const Input = styled.TextInput`
  margin: 15px;
  height: 40px;
  border-width: 1px;
  padding: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #ff6666;
  padding: 10px;
  margin: 15px;
  height: 40px;
`;

const SubmitButtonText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
`;

const Output = styled.Text`
  text-align: center;
  font-size: 30px;
`;

const Title = styled.Text`
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

const ResultText = styled.Text`
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 30px;
  color: blue;
`;

const Label = styled.Text`
  margin-left: 15px;
`;

export {
  MainContainer,
  Input,
  ResultText,
  Title,
  Label,
  Output,
  SubmitButton,
  SubmitButtonText,
};

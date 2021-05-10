import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { useData } from './DataContext';
import { FormContainer } from './formComponents/FormContainer';
import { InputWrapper } from './formComponents/InputWrapper';
import Swal from 'sweetalert2';
import { Preloader } from '../../animationElements/Preloader';

const ResultButton = styled.button`
  color: rgb(255, 255, 255);
  border: 5px solid rgb(68, 189, 125);
  background-color: rgb(68, 189, 125);
  border-radius: 50px;
  display: inline-block;
  font-family: 'Roboto',Arial,sans-serif;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-weight: 700;
  transition: all .5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 15px 5px;
  }
`;

const OnStartButton = styled.button`
  font-size: 14px;
`;

const FilesTitle = styled.p`
  font-size: 20px;
  text-align: center;

  @media (max-width: 460px) {
    font-size: 16px;
  }
`;

const useStyles = makeStyles({
  root: {
    marginBottom: "20px"
  },
  table: {
    marginBottom: "30px"
  }
});

export const Result = ({ setStateStep, toggleModal }) => {
  const styles = useStyles();
  const { data } = useData();
  const [ statePreloader, setStatePreloader ] = useState(false);
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files" 
                                                && entry[0] !== "userAgreement"
                                                && entry[0] !== "hasPhone"
                                                && entry[1] !== "");
  const {files} = data;

  const onSubmit = async () => {
    setStatePreloader(true);

    const formData = new FormData();

    entries.forEach(entry => {
        formData.append(entry[0], entry[1]);
    });

    if (data.files){
      data.files.forEach(file => {
        formData.append("files[]", file, file.name);
      });
    }
   
    const res = await fetch("send.php", {
      method: "POST",
      body: formData,
    });

    if(res.status === 200){
      Swal.fire("Ваше сообщение отправлено", "Специалист ответит вам в ближайшее время", "success");
    } else {
      Swal.fire("Произошла ошибка!", "Ваше сообщение не может быть отправлено", "error");
    }

    setStatePreloader(false);
    toggleModal();
  };

  const startEdit = () => {
    setStateStep(1);
  };

  return (
    <FormContainer>
      <InputWrapper>
        <Typography component="h5" variant="subtitle1" align="center">
          Проверьте контактные данные{files && files.length > 0 && " и файлы"}
        </Typography> 
        <TableContainer className={styles.root} component={Paper}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  Поле формы
                </TableCell>
                <TableCell align="right">
                  Содержание
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) => (entry[0] !== "message" &&
                <TableRow key={entry[0]}>
                  <TableCell>{(entry[0] === "firstName" && "Имя") ||
                              (entry[0] === "lastName" && "Фамилия") ||
                              (entry[0] === "phoneNumber" && "Телефон") ||
                              (entry[0] === "email" && "Е-mail") ||
                              entry[0]}
                  </TableCell>
                  <TableCell align="right">{entry[1].toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {files && files.length > 0 && (
          <>
            <FilesTitle>
              Файлы
            </FilesTitle>
            <List>
              {files.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </InputWrapper>
      <ResultButton 
        onClick={onSubmit}
      >Отправить</ResultButton>
      <OnStartButton
        onClick={startEdit}
      >Вернуться к началу</OnStartButton>
      {statePreloader && <Preloader />}
    </FormContainer>
  );
};
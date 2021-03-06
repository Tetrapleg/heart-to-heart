import styled from 'styled-components';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper } from '@material-ui/core';
import { CloudUpload, InsertDriveFile } from '@material-ui/icons';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';

const DescrTitle = styled.p`
  font-size: 20px;

  @media (max-width: 460px) {
    font-size: 14px;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: "20px"
  },
  icon: {
    marginTop: "16px",
    color: "#888",
    fontSize: "42px"
  }
}));

export const FileInput = ({ control, name }) => {
  const styles = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field }) => (
        <>
          <Dropzone onDrop={field.onChange} >
            {({ getRootProps, getInputProps }) => (
              <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={field.name} onBlur={field.onBlur}/>
                <DescrTitle>Перетащите сюда файлы, или выберите из списка.</DescrTitle>
              </Paper>
            )}
          </Dropzone>
          <List>
            {field.value.map((f, index) => (
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
    />
  );
};
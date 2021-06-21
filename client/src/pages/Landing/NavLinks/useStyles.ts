import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    border: 'none',
    paddingTop: '1.5em',
  },
  accAside: {
    fontSize: 14,
    color: '#f04040',
    fontWeight: 400,
    textAlign: 'center',
    textDecoration: 'underline',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
  link: { textDecoration: 'none' },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff00',
    color: '#f04040',
    border: '1px solid #f04040',
    boxShadow: 'none',
    marginRight: 35,
  },
  accBtn2: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#f04040',
    color: '#fff',
    boxShadow: 'none',
    marginRight: 35,
  },
}));

export default useStyles;

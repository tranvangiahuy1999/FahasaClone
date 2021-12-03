import React from 'react';
import { convertURL } from '../../../../utils/format-string.util';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  nested_inside: {
    paddingLeft: theme.spacing(4),
  }
}));

function ListItemLink(props) {
  const { to, open, parentOnClick, ...other } = props;

  return (
    <li>
      <ListItem button {...other}>
        <a className={other.className}title={props.primary} data-toggle="tooltip" href={to}>
          {props.primary}
        </a>
        {open != null ? open ? <ExpandLess className="ml-auto" onClick={parentOnClick} /> : <ExpandMore className="ml-auto" onClick={parentOnClick} /> : null}
      </ListItem>
    </li>
  );
}
function ListItemLevel3(props) {
  const classes = useStyles();
  const { listdata,currentId,className, ...other } = props;

  return (
    <List {...other}>
      {listdata.map((level3) => (
        <ListItemLink className={classes.nested_inside + (level3._id === currentId ? " active" : "")} primary={level3.name} key={level3._id} to={"/danh-sach/" + convertURL(level3.name) + "." + level3._id}  />
      ))}
    </List>
  )
}
function ListItemLevel2(props) {
  const classes = useStyles();
  const { listdata,currentId,parentidlevel1,parentidlevel2, ...other } = props;

  return (
    <List {...other}>
      {listdata.map((level2) =>
        (level2.subCate.length > 0) ?
          <ItemLevel2 parentidlevel1={parentidlevel1}  parentidlevel2={parentidlevel2} currentId={currentId} key={level2._id} level2={level2} className={classes.nested} />
          : <ListItemLink className={level2._id === currentId ? "active" : ""} primary={level2.name} key={level2._id} to={"/danh-sach/" + convertURL(level2.name) + "." + level2._id} className={classes.nested} />
      )}
    </List>
  )
}
function ItemLevel2(props) {
  const [open, setOpen] = React.useState(false);
  const { level2,className,currentId,parentidlevel2, ...other } = props;

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <React.Fragment >
      <ListItemLink className={className + (level2._id === currentId ? " active" : "")} primary={level2.name} to={"/danh-sach/" + convertURL(level2.name) + "." + level2._id} open={level2._id === parentidlevel2 ? !open : open} parentOnClick={handleClick} {...other} />
      <Collapse component="li" in={level2._id === parentidlevel2 ? !open : open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLevel3 currentId={currentId} listdata={level2.subCate} />
        </List>
      </Collapse>
    </React.Fragment>
  )
}
function ItemLevel1(props) {
  const [open, setOpen] = React.useState(false);
  const { level1,currentId,parentidlevel1,parentidlevel2, ...other } = props;

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <React.Fragment >
      <ListItemLink className={level1._id === currentId ? "active" : ""} primary={level1.name} to={"/danh-sach/" + convertURL(level1.name) + "." + level1._id} open={level1._id === parentidlevel1 ? !open : open} parentOnClick={handleClick}  {...other} />
      <Collapse component="li" in={level1._id === parentidlevel1 ? !open : open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLevel2 parentidlevel2={parentidlevel2} currentId={currentId} listdata={level1.subCate} />
        </List>
      </Collapse>
    </React.Fragment>
  )
}
ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default function CategorySideBar(props) {
  const classes = useStyles();
  const { listdata,currentId,parentidlevel1,parentidlevel2, ...other } = props;

  return (    
      <div className={classes.root}>
        <nav className={classes.lists} aria-label="mailbox folders">
          {props.listdata.length > 0 ?
            <List>
              {(props.listdata).map((level1, index) => (
                  (level1.subCate && level1.subCate.length > 0) ?
                    <ItemLevel1 key={level1._id} parentidlevel1={parentidlevel1}  parentidlevel2={parentidlevel2} currentId={currentId} level1={level1} /> :
                    <ListItemLink key={level1._id} primary={level1.name} className={level1._id === currentId ? "active" : ""}  to={"/danh-sach/" + convertURL(level1.name) + "." + level1._id} />
            ))}
            </List> : <></>}
        </nav>
      </div>
  );
}

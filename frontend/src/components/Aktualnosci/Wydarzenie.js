import Moment from 'moment';


function Wydarzenie(props) {


  //cleaning up data formating
  const formatDate = Moment(props.date).format('DD.MM.YYYY') 

  //exchanging string from datababse text editor into html
  const content = {__html: props.content}


  return (
    <div className="note">
      {props.username}
      {props.title}
      <img src={props.title_image} />
      <div dangerouslySetInnerHTML={content} />
      {formatDate}
    </div>
  );
}

export default Wydarzenie;

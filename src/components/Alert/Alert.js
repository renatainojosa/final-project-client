import './Alert.css';

const Alert = ({ message }) => {
  return (
    <div className="alert alert-danger alert-style" role="alert">
      {message}
    </div>
  );
};

export default Alert;

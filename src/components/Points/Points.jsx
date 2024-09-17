import PropTypes from 'prop-types';

function Points({ value }) {
  const getBorderColor = (points) => {
    if (points <= 20) return 'border-gray-400';
    if (points <= 50) return 'border-blue-500';
    if (points <= 75) return 'border-yellow-500';
    return 'border-green-500';
  };

  return (
    <span className={`${getBorderColor(value)} border-l-4 pl-2 py-1 text-sm font-medium`}>
      {value} points
    </span>
  );
}

Points.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Points;
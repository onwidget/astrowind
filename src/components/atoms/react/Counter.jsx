import CountUp from 'react-countup';

const numberWithSpaces = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default ({ limit }) => {
  return <CountUp end={limit} formattingFn={numberWithSpaces} />;
}
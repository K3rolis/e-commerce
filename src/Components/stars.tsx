import { AiFillStar } from 'react-icons/ai';
interface Props {
  rating: number;
}

export const Stars = (props: Props) => {
  const checkStars = (rating: number) => {
    let newArr = [];
    for (let i = 0; i < 5; i++) {
      newArr.push(<AiFillStar key={i} color={rating > i + 0.5 ? 'orange' : 'black'} />);
    }
    return newArr;
  };

  return <div style={{ display: 'flex', justifyContent: 'flex-start' }}>{checkStars(props.rating)}</div>;
};

import { Card, ListGroup } from "react-bootstrap";

const CategoryCard = ({ category }) => {
  let headerText, items;
  switch (category) {
    case "games":
      headerText = "Games";
      items = [
        // limit is 7
        "Game 1"
      ];
      break;
    case "movies":
      headerText = "Movies";
      items = [
        // limit is 7
        "Movie 1"
      ];
      break;
    case "tv":
      headerText = "TV Shows";
      items = [
        // limit is 7
        "TV Show 1"
      ];
      break;
    case "books":
      headerText = "Books";
      items = [
        // limit is 7
        "Book 1"
      ];
      break;
    default:
      headerText = "Music";
      items = [
        // limit is 7
        "Music 1"
      ];
  }

  return (
    <Card>
      <Card.Header>{headerText}</Card.Header>
      <ListGroup variant="flush">
        {items.map((item) => (
          <ListGroup.Item key={item}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default CategoryCard;

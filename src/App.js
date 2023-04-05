import './App.css';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://www.instacart.com/assets/homepage/app_download_banner2_800-f2d083c6672f81a0e221721b335c8012191af80535bd1310b090fce1baad619f.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default App;

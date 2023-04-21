import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Smallbanner = () => {
  return (
    <Carousel fade className="container" style={{ paddingBottom: "20px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.virginmegastore.qa/medias/Full-Width-Large-Smartwatches-Desktop.webp?context=bWFzdGVyfHJvb3R8MjAyNTYwfGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbXxoY2EvaDAxLzEwMzA2NTAzNDc1MjMwL0Z1bGwtV2lkdGgtTGFyZ2UtU21hcnR3YXRjaGVzLURlc2t0b3Aud2VicHxkMDZjNGY4NGQ5ZTlmNzlmOWE1NjYwOTMxNzg0ZGQ1ODk4MTFkNjA5NzY3MWMyZTJiZWE5MzgyYjQxMjg4MzQ1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.virginmegastore.qa/medias/Full-Width-Large-Eid-Deals-on-Tech-Desktop.webp?context=bWFzdGVyfHJvb3R8NTUyMzh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg3Yy9oNWQvMTAzMDY1MDQwMzIyODYvRnVsbC1XaWR0aC1MYXJnZS1FaWQtRGVhbHMtb24tVGVjaC1EZXNrdG9wLndlYnB8ZjRlNGM0YTQ4ZTkzYWUwNzdlNWM0NzFjODAzMDkyMzU1MzA3ODBjNjRjYThhZjFlMGRlZmMyMjAzOTMwYjMzNQ"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Smallbanner;

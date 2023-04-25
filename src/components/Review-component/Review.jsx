import React,{useState} from "react";
import "./Review.css";
import Stars from "../Resuablecomponents/Stars";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ProductReviewForm from "./ProductReviewForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  p: 4,
};
const Review = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  function toggleDescription() {
    setShowFullDescription(!showFullDescription);
  }
  return (
    <div className="review">
      <div className="review__title">
        <div className="row">
          <div className="col-md-6">
            <div className="review_content">
              <p className="review_count">4.5</p>
              <div className="review_star">
                <Stars stars={4.5} />
              </div>
              <p className="review_based">Based on 216 ratings</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="review_btn">
              <Button onClick={handleOpen}>Add a Review</Button>
            </div>
          </div>
        </div>

        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <ProductReviewForm />
          </Box>
        </Modal>
      </div>
      <div
        className={`review__description__container ${
          showFullDescription ? "show_review" : ""
        }`}
      >
        <p className="fw-bold">User Review's</p>
        <div className="reviews__rating">
          <Stars stars={5} />
          <p className="customer__name">by Subhashish</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            dicta illo, impedit perferendis error quam id sit rem sed
            exercitationem, omnis quasi doloremque reiciendis sapiente minima
            repellendus voluptatibus cum, repellat excepturi! Minus, voluptatum?
            Consectetur esse assumenda reprehenderit non. Debitis itaque
            reiciendis iure at cupiditate et quibusdam eligendi mollitia
            corporis illum!
          </p>
        </div>
        <div className="reviews__rating">
          <Stars stars={3} />
          <p className="customer__name">by Mutant</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            dicta illo, impedit perferendis error quam id sit rem sed
            exercitationem, omnis quasi doloremque reiciendis sapiente minima
            repellendus voluptatibus cum, repellat excepturi! Minus, voluptatum?
            Consectetur esse assumenda reprehenderit non. Debitis itaque
            reiciendis iure at cupiditate et quibusdam eligendi mollitia
            corporis illum!
          </p>
        </div>
        <div className="reviews__rating">
          <Stars stars={4.5} />
          <p className="customer__name">by Prashish</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            dicta illo, impedit perferendis error quam id sit rem sed
            exercitationem, omnis quasi doloremque reiciendis sapiente minima
            repellendus voluptatibus cum, repellat excepturi! Minus, voluptatum?
            Consectetur esse assumenda reprehenderit non. Debitis itaque
            reiciendis iure at cupiditate et quibusdam eligendi mollitia
            corporis illum!
          </p>
        </div>
      </div>
      {!showFullDescription && (
        <div className="view_description">
          <button onClick={toggleDescription}>VIEW FULL REVIEW</button>
        </div>
      )}
      {showFullDescription && (
        <div className="view_description">
          <button onClick={toggleDescription}>VIEW LESS REVIEW</button>
        </div>
      )}
    </div>
  );
};

export default Review;

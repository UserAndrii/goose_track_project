import { useTranslation } from 'react-i18next'; // Trans ?
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { showErrorToast, showSuccessToast } from '../../utils/showToast';

import {
  reviewsApi,
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useEditReviewMutation,
  useGetUserReviewQuery,
} from '../../redux/reviews/reviewsApi';
import {
  Btn,
  BtnWrapper,
  Form,
  IconContainer,
  RatingWrapper,
  StyledEditIcon,
  StyledEditIconDel,
  TextArea,
  TextAreaLabel,
} from './FeedbackForm.styled';

const FeedbackForm = ({ onClose }) => {
  const { t } = useTranslation();

  const { data: userReviewData } = useGetUserReviewQuery();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const dispatch = useDispatch();

  const [createReview] = useCreateReviewMutation();
  const [editReview] = useEditReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  useEffect(() => {
    if (userReviewData) {
      setRating(userReviewData.data.rating);
      setReview(userReviewData.data.review);
    } else {
      setRating(0);
      setReview('');
    }
  }, [userReviewData]);

  const handleEditReview = () => {
    setIsEditMode(true);
    setIsDeleteMode(false);
  };

  const handleDeleteReview = () => {
    setIsDeleteMode(true);
    setIsEditMode(false);
  };

  const handleChangeReview = e => {
    const text = e.target.value;
    if (text.length <= 180) {
      setReview(text);
    } else {
      showErrorToast(t('feedback.err1'));
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (isEditMode) {
      try {
        await editReview({ review, rating }).unwrap();
        showSuccessToast(t('feedback.succ1'));
        setIsEditMode(false);
        onClose();
      } catch (error) {
        showErrorToast(t('feedback.err2'));
      }
    } else {
      try {
        await createReview({ review, rating }).unwrap();
        showSuccessToast(t('feedback.succ2'));
        onClose();
      } catch (error) {
        showErrorToast(t('feedback.err2'));
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteReview();
      showSuccessToast(t('feedback.succ3'));
      setIsDeleteMode(false);
      dispatch(reviewsApi.util.resetApiState());
      onClose();
    } catch (error) {
      showErrorToast(t('feedback.err3'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <RatingWrapper>
        <p>{t('feedback.rating')}</p>
        <Rating
          name="rating"
          id="rating"
          onClick={value => setRating(value)}
          fillColor="gold"
          readonly={!isEditMode && userReviewData}
          emptyColor="lightgrey"
          pointerEvents="none"
          size={32}
          initialValue={rating}
          onChange={value => setRating(value)}
          style={{ marginLeft: '-4px', marginTop: '2px' }}
        />
      </RatingWrapper>
      <TextAreaLabel htmlFor="review">
        {t('feedback.review')}
        {userReviewData && (
          <IconContainer>
            <StyledEditIcon onClick={handleEditReview} />
            <StyledEditIconDel onClick={handleDeleteReview} />
          </IconContainer>
        )}
      </TextAreaLabel>
      <TextArea
        name="review"
        id="review"
        value={review}
        placeholder="Enter Text"
        onChange={handleChangeReview}
        disabled={!isEditMode && userReviewData}
      />
      {isDeleteMode && (
        <BtnWrapper>
          <Btn type="button" onClick={handleDelete}>
            Delete
          </Btn>
          <Btn type="button" onClick={onClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      )}
      {isEditMode && (
        <BtnWrapper>
          <Btn type="submit" onClick={handleSubmit}>
            Edit
          </Btn>
          <Btn type="button" onClick={onClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      )}
      {!userReviewData && (
        <BtnWrapper>
          <Btn type="submit">Save</Btn>
          <Btn type="button" onClick={onClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      )}
    </Form>
  );
};

export default FeedbackForm;

import { useState, FormEvent, ChangeEvent } from '../../../common/common';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { NewOrder } from '../../../../types/quests';
import { addOrderAction } from '../../../../store/api-action';
import { useAppDispatch } from '../../../../hooks';
import * as S from './booking-modal.styled';

type Props = {
  onBookingCloseClick: () => void;
}
function BookingModal({onBookingCloseClick}:Props): JSX.Element {
  const [bookingName, setBookingName] = useState('');
  const [bookingPeopleCount, setBookingPeopleCount] = useState(0);
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingLegal, setBookingLegal] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (orderData: NewOrder) => {
    dispatch(addOrderAction(orderData));
  };

  const phoneToggleHandler = (evt:ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const phone = evt.target.value;

    if ( phone !== null && phone.length===10) {
      evt.target.setCustomValidity('');
    } else {
      evt.target.setCustomValidity('Номер телефона должен состоять из 10 цифр');
    }
    evt.target.reportValidity();
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (bookingPeopleCount>0 && !isNaN(Number(bookingPhone))){
      onSubmit({
        name: bookingName,
        peopleCount: bookingPeopleCount,
        phone: bookingPhone,
        isLegal: bookingLegal,
      });
      onBookingCloseClick();
    }
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onBookingCloseClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              onChange={(event) => setBookingName(event.target.value)}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              onChange={(event) => setBookingPhone(event.target.value)}
              onInput={phoneToggleHandler}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              min="1"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              onChange={(event) => setBookingPeopleCount(Number(event.target.value))}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              onChange={({target}: ChangeEvent<HTMLInputElement>) => { setBookingLegal(target.checked);}}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
}

export default BookingModal;

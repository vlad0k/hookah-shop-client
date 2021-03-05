import React, { useMemo, useCallback, useContext } from "react";
import style from "./index.module.css";
import { Formik, Form as FormikForm } from "formik";
import TextInput from "components/ui/TextInput";
import Select from "components/ui/Select";
import Button from "components/ui/Button";
import { CartContext } from "context/CartContext";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

const Form = () => {
  const { getCart } = useContext(CartContext);

  const submitForm = useCallback((values) => {
    console.log(values);
  }, []);

  const orderFormInitialValues = useMemo(
    () => ({
      cart: JSON.stringify(getCart()),
      fio: "",
      email: "",
      country: "Украина",
      city: "Сумы",
      postOffice: "",
    }),
    [getCart]
  );

  return (
    <Formik initialValues={orderFormInitialValues} onSubmit={submitForm}>
      <FormikForm>
        <div className={cn("form")}>
          <TextInput className={cn("form-item")} name="fio" placeholder="ФИО" />
          <TextInput
            className={cn("form-item")}
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <label className={cn("form-item")}>
            Страна
            <Select as="select" name="country">
              <option value="Украина" default>
                Украина
              </option>
            </Select>
          </label>

          <label className={cn("form-item")}>
            Город
            <Select as="select" name="city">
              <option value="Сумы" default>
                Сумы
              </option>
            </Select>
          </label>

          <label className={cn("form-item")}>
            Номер или адресс отделения "Нова Пошта"
            <TextInput type="text" name="postOffice" />
          </label>

          <Button className={cn("form-item")} formType="submit">
            Заказать
          </Button>
        </div>
      </FormikForm>
    </Formik>
  );
};

export default Form;

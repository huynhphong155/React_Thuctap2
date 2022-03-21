import { FastField, Field, Form, FormikProps, withFormik } from "formik";
import "./index.scss";
import DatePickerField from "../../../Components/DatePickerField";

export interface FromFilterProps {}

interface cardCreditValue {
  From: any;
  To: any;
  picked: string;
  checked: any;
}

interface MyFormProps {
  setIsShowPopup?: any;
  setDataFilter?: any;
  dataFilter?: any;
}

export function FromFilter({
  isSubmitting,
}: FromFilterProps & FormikProps<cardCreditValue>) {
  return (
    <Form className="FromFilter">
      <h3>Lọc vé</h3>
      <div className="FromFilter-wrapper">
        <div className="FromFilter-date mb-24">
          <FastField
            name="From"
            label="Từ ngày"
            component={DatePickerField}
            placeholder="Từ ngày..."
            isBorderRadius={false}
          />
          <FastField
            name="To"
            label="Đến ngày"
            component={DatePickerField}
            placeholder="Từ ngày..."
            dateFromat="dd/MM/yyyy"
            isBorderRadius={false}
          />
        </div>
        <div className="FromFilter-radio mb-24">
          <p>Tình trạng sử dụng</p>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="All" />
              <span>Tất cả</span>
            </label>
            <label>
              <Field type="radio" name="picked" value="Used" />
              <span>Đã sử dụng</span>
            </label>
            <label>
              <Field type="radio" name="picked" value="NotUsed" />
              <span>Hết Hạn</span>
            </label>
          </div>
        </div>
        <div className="FromFilter-checked mb-24">
          <p>Cổng Check - in</p>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="checked" value="All" />
              <span>Tất cả</span>
            </label>
            <label>
              <Field type="radio" name="checked" value="1" />
              <span>Cổng 1</span>
            </label>
            <label>
              <Field type="radio" name="checked" value="2" />
              <span>Cổng 2</span>
            </label>
            <label>
              <Field type="radio" name="checked" value="3" />
              <span>Cổng 3</span>
            </label>
          </div>
        </div>
      </div>

      <div className="Submit">
        <button disabled={isSubmitting} type="submit">
          Lọc
        </button>
      </div>
    </Form>
  );
}

export const FormCardWrapper = withFormik<MyFormProps, cardCreditValue>({
  mapPropsToValues: ({ dataFilter }) => {
    return dataFilter;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    const { setIsShowPopup, setDataFilter } = props;
    setTimeout(() => {
      setIsShowPopup(false);
      setSubmitting(false);
      setDataFilter(values);
    }, 1000);
  },
})(FromFilter);

export default FormCardWrapper;

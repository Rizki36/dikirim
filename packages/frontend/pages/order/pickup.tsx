import UserLayout from "@/components/layouts/ResellerLayout";
import { UserRole } from "constans/Auth";
import { AuthInterface } from "types";
import { useField, Form, FormikProps, Formik } from "formik";
import Truck from "@/components/icons/Truck";
import OrderLayout from "@/components/pages/order/Layout";
import DayPicker from "react-day-picker";
import { useEffect } from "react";
import { updateStep } from "@/configs/redux/orderSlice";
import { useAppDispatch } from "@/configs/redux/hooks";
import Link from "next/link";

enum VehiclesType {
  motorcycle = "1",
  car = "2",
  truck = "3",
}

enum VendorType {
  jne = "1",
  jnt = "2",
  sap = "3",
}

interface Values {
  vehicle: VehiclesType;
  vendor: VendorType;
  selectedDay?: Date;
}

const Pickup = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateStep({ step: "pickup" }));
  }, [dispatch]);

  return (
    <OrderLayout>
      <Formik
        initialValues={{
          vehicle: VehiclesType.truck,
          vendor: VendorType.jne,
          selectedDay: new Date(),
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values }: FormikProps<Values>) => (
          <Form>
            {console.log(values)}
            <div className="rounded-3xl border border-gray-200 h-[500px] w-full mb-10 px-14 py-12">
              <div className="flex">
                <div className="w-6/12">
                  <div className="mb-10">
                    <div className="flex items-center">
                      <div>
                        <h6 className="font-bold text-gray-900 leading-none">
                          Rizki Fitra Rahman
                        </h6>
                        <small className="text-gray-900 text-sm">
                          089529407796
                        </small>
                      </div>
                      <span className="-mt-4 ml-3 px-2 py-1 text-xs bg-primary opacity-70 text-white rounded-md">
                        Utama
                      </span>
                    </div>

                    <div className="text-gray-400 text-sm mb-5">
                      <span className="block">RT 21 RW 005 Pandanwangi</span>
                      <span className="block">
                        Kec. Diwek, Kab. Jombang, Prov. Jawa Timur
                      </span>
                    </div>

                    <button className="px-2 py-2 rounded-md bg-gray-200 text-sm text-gray-500">
                      Ganti Alamat
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <div
                      role={"group"}
                      className="flex gap-1 flex-col w-[200px]"
                    >
                      <h5 className="font-medium mb-2">Kendaraan Jemput</h5>
                      <InputRadioButton
                        name="vehicle"
                        value={VehiclesType.truck}
                      >
                        <Truck
                          is_active={values.vehicle === VehiclesType.truck}
                          className="mr-3"
                        />
                        Truk
                      </InputRadioButton>
                      <InputRadioButton name="vehicle" value={VehiclesType.car}>
                        <Truck
                          is_active={values.vehicle === VehiclesType.car}
                          className="mr-3"
                        />
                        Mobil
                      </InputRadioButton>
                      <InputRadioButton
                        name="vehicle"
                        value={VehiclesType.motorcycle}
                      >
                        <Truck
                          is_active={values.vehicle === VehiclesType.motorcycle}
                          className="mr-3"
                        />
                        Sepeda Motor
                      </InputRadioButton>
                    </div>
                    <div
                      role={"group"}
                      className="flex gap-1 flex-col w-[200px]"
                    >
                      <h5 className="font-medium mb-2">Vendor</h5>
                      <InputRadioButton name="vendor" value={VendorType.jne}>
                        JNE
                      </InputRadioButton>
                      <InputRadioButton name="vendor" value={VendorType.jnt}>
                        JNT
                      </InputRadioButton>
                      <InputRadioButton name="vendor" value={VendorType.sap}>
                        SAP
                      </InputRadioButton>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 flex justify-center">
                  <MyDatePicker name="selectedDay" />
                </div>
              </div>

              <div className="flex justify-center">
                <Link href={"/order/packet"}>
                  <a className="py-2 px-4 bg-primary text-white rounded-md mt-10">
                    Next
                  </a>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </OrderLayout>
  );
};

const MyDatePicker = (props) => {
  const [field, meta, helpers] = useField(props);
  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DayPicker
      onDayClick={(day) => {
        setValue(day);
      }}
      selectedDays={value}
    />
  );
};

const InputRadioButton = ({ clasName, children, ...props }: any) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <div>
      <input
        id={field.name + "-" + props.value}
        type="radio"
        className="peer sr-only"
        {...field}
        {...props}
      />
      <label
        htmlFor={field.name + "-" + props.value}
        className={`peer-checked:bg-primary border border-primary w-full px-4 py-2 rounded-lg flex items-center ${clasName} ${
          field.checked ? "text-white" : ""
        }`}
      >
        {children}
      </label>
    </div>
  );
};

Pickup.auth = {
  role: UserRole.reseller,
} as AuthInterface;

export default Pickup;

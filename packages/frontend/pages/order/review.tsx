import OrderLayout from "@/components/pages/order/Layout";
import { useAppDispatch } from "@/configs/redux/hooks";
import { updateStep } from "@/configs/redux/orderSlice";
import { AuthInterface } from "types";
import { UserRole } from "constans/Auth";
import { useEffect } from "react";
import Link from "next/link";

const Review = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateStep({ step: "review" }));
  }, [dispatch]);

  return (
    <OrderLayout>
      <div className="flex gap-x-3">
        <Link href={"/order/pickup"}>
          <a>Pickup</a>
        </Link>
        <Link href={"/order/packet"}>
          <a>Packet</a>
        </Link>
        <Link href={"/order/review"}>
          <a>Review</a>
        </Link>
      </div>
    </OrderLayout>
  );
};

Review.auth = {
  role: UserRole.reseller,
} as AuthInterface;

export default Review;

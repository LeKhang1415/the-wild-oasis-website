"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
    const [optimisticBooking, optimisticDelete] = useOptimistic(
        bookings,
        (currentBookings, bookingId) => {
            return currentBookings.filter(
                (booking) => booking.id !== bookingId
            );
        }
    );
    async function handelDelete(bookingId) {
        optimisticDelete(bookingId);
        await deleteReservation(bookingId);
    }
    return (
        <ul className="space-y-6">
            {optimisticBooking.map((booking) => (
                <ReservationCard
                    onDelete={handelDelete}
                    booking={booking}
                    key={booking.id}
                />
            ))}
        </ul>
    );
}

export default ReservationList;

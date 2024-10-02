import Link from "next/link";

export default function Navigation() {
    return (
        <ul>
            <li>
                <Link href="/cabins">Export luxury cabins.</Link>
            </li>
            <li>
                <Link href="/account">Your account.</Link>
            </li>
            <li>
                <Link href="/about">About us.</Link>
            </li>
        </ul>
    );
}

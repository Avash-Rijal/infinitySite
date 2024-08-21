import "./globals.css";
import Link from "next/link";

export default function NavBar() {
    const navOptions= [{id:1 , name:"Home"}, {id:2 , name:"About Us"}, {id:3 , name:"Area Of Practice"}, {id:4 , name:"Insights"}, {id:5 , name:"Attorneys"}, {id:6 , name:"Careers"}];
    let navlinks = navOptions.map(page => page.name);

    return (
        <div className="navLinksContainer">
            {navOptions.map(pageLink => (
                <Link key={pageLink.id} href={""} className="navLink">{pageLink.name}</Link>
            ))}
        </div>
    );
}

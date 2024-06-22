import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-4">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            onChange={handleMessage}
            placeholder="Enter your message here..."
            name="message"
            id="message"
            rows="2"
            value={message}
            className="w-full border border-slate-300 rounded-lg bg-slate-100 p-3"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?Subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opcacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}

Contact.propTypes = {
    listing: PropTypes.object.isRequired
  };

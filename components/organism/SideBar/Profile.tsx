import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwt_decode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      {user.avatar && (
        <Image
          src={user.avatar}
          width={90}
          height={90}
          className="img-fluid mb-20 img-profile"
          alt="profile"
          priority
        />
      )}

      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}

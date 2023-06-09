import Input from "@/components/atoms/Input";
import SideBar from "@/components/organism/SideBar";
import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { updateProfile } from "@/services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Head from "next/head";

export default function EditProfile() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });
  const [imagePreview, setImagePreview] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwt_decode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      setUser({
        ...userFromPayload,
        avatar: `${IMG}/${userFromPayload.avatar}`,
      });
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.name);
    data.append("phoneNumber", user.phoneNumber);
    const response = await updateProfile(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Succes update Profile, please Login again");
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <section className="edit-profile overflow-auto">
        <SideBar activeMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {imagePreview ? (
                        <Image
                          src={imagePreview}
                          width={90}
                          height={90}
                          alt="icon upload"
                          className="img-edit-profile"
                          priority
                        />
                      ) : (
                        user.avatar && (
                          <Image
                            src={user.avatar}
                            width={90}
                            height={90}
                            alt="icon upload"
                            className="img-edit-profile"
                            priority
                          />
                        )
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event: any) => {
                        const img = event.target.files[0];
                        setImagePreview(URL.createObjectURL(img));
                        return setUser({ ...user, avatar: img });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Full Name"
                    value={user.name}
                    onChange={(event) =>
                      setUser({ ...user, name: event.target.value })
                    }
                  />
                </div>
                <div className="pt-30">
                  <Input label="Email Address" disabled value={user.email} />
                </div>
                <div className="pt-30">
                  <Input
                    label="Phone"
                    value={user.phoneNumber}
                    onChange={(event) =>
                      setUser({ ...user, phoneNumber: event.target.value })
                    }
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

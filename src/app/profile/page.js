"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { isAuthenticated, isLoading } = useKindeAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }
  return (
    <>
      <div className="w-10/12 mx-auto h-[500px]">
        <h1 className="text-blue-400 text-3xl font-bold text-center py-10">
          Welcome to your profile!
        </h1>
      </div>
    </>
  );
}
